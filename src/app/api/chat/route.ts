import { getOpenAI, embedText } from '@/lib/openai'
import { getPinecone, PINECONE_INDEX, PINECONE_NAMESPACE } from '@/lib/pinecone'

export const runtime = 'nodejs'

const NICHE_IDENTITY: Record<string, { company: string; type: string; contact: string }> = {
  ecommerce: {
    company: 'NovaNest',
    type: 'e-commerce store',
    contact: 'support@novanest.shop or call 1-800-668-2678',
  },
  real_estate: {
    company: 'Meridian Property Group',
    type: 'real estate agency',
    contact: 'hello@meridianproperty.co.uk or call 020 7890 1234',
  },
  hr: {
    company: 'Pinnacle Technologies HR',
    type: 'HR department',
    contact: 'hr@pinnacle.tech (ext. 4400) or your HR Business Partner',
  },
  healthcare: {
    company: 'Greenfield Medical Practice',
    type: 'medical practice',
    contact: 'call 01234 567890 or visit greenfieldmedical.nhs.uk',
  },
  legal: {
    company: 'Sterling & Hart Solicitors',
    type: 'law firm',
    contact: 'hello@sterlinghart.co.uk or call 020 3456 7890',
  },
}

export async function POST(req: Request) {
  const { messages, niche } = await req.json()

  const lastUserMessage = messages.filter((m: { role: string }) => m.role === 'user').pop()
  if (!lastUserMessage) {
    return new Response('No user message', { status: 400 })
  }

  // Embed only the latest user question for vector search
  const queryEmbedding = await embedText(lastUserMessage.content)

  const pinecone = getPinecone()
  const index = pinecone.index(PINECONE_INDEX)
  const queryFilter = niche && niche !== 'all' ? { niche: { $eq: niche } } : undefined

  const searchResults = await index.namespace(PINECONE_NAMESPACE).query({
    vector: queryEmbedding,
    topK: 5,
    includeMetadata: true,
    filter: queryFilter,
  })

  const topScore = searchResults.matches[0]?.score ?? 0
  const lowConfidence = topScore < 0.55

  const context = searchResults.matches
    .filter(m => (m.score ?? 0) > 0.3)
    .map(m => m.metadata?.content as string)
    .join('\n\n---\n\n')

  const identity = NICHE_IDENTITY[niche] ?? {
    company: 'our company',
    type: 'business',
    contact: 'our support team',
  }

  const escalationInstruction = lowConfidence
    ? `\nIMPORTANT: The knowledge base does not contain a confident answer to this question. After giving your best answer from the available context, always offer to connect the customer with a human: "For the most accurate answer, I'd recommend contacting ${identity.contact} directly."`
    : ''

  const systemPrompt = `You are a helpful AI support assistant for ${identity.company}, ${identity.type}.
Your role is to answer customer questions accurately using ONLY the information in the context below.
If the context does not contain the answer, say: "I don't have that information right now — please contact ${identity.contact}."
Be concise, friendly, and professional. Never make up information. Use bullet points for multi-step answers.${escalationInstruction}

CONTEXT:
${context || 'No relevant information found.'}`

  const openai = getOpenAI()

  // Pass full conversation history for memory (capped at last 10 messages)
  const recentMessages = messages.slice(-10)

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
    temperature: 0.3,
    messages: [
      { role: 'system', content: systemPrompt },
      ...recentMessages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    ],
  })

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of response) {
        const text = chunk.choices[0]?.delta?.content ?? ''
        if (text) {
          controller.enqueue(encoder.encode(`0:${JSON.stringify(text)}\n`))
        }
      }
      controller.enqueue(encoder.encode('0:\n'))
      controller.close()
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Vercel-AI-Data-Stream': 'v1',
    },
  })
}

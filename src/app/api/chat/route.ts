import { OpenAIStream, StreamingTextResponse } from 'ai'
import { getOpenAI, embedText } from '@/lib/openai'
import { getPinecone, PINECONE_INDEX, PINECONE_NAMESPACE } from '@/lib/pinecone'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const { messages, niche } = await req.json()

  const lastUserMessage = messages.filter((m: { role: string }) => m.role === 'user').pop()
  if (!lastUserMessage) {
    return new Response('No user message', { status: 400 })
  }

  const queryEmbedding = await embedText(lastUserMessage.content)

  const pinecone = getPinecone()
  const index = pinecone.index(PINECONE_INDEX)
  const queryFilter = niche && niche !== 'all' ? { niche: { $eq: niche } } : undefined

  const searchResults = await index.namespace(PINECONE_NAMESPACE).query({
    vector: queryEmbedding,
    topK: 4,
    includeMetadata: true,
    filter: queryFilter,
  })

  const context = searchResults.matches
    .filter(m => (m.score ?? 0) > 0.3)
    .map(m => m.metadata?.content as string)
    .join('\n\n---\n\n')

  const nicheLabels: Record<string, string> = {
    ecommerce: 'an e-commerce store',
    real_estate: 'a real estate agency',
    hr: 'a company HR department',
    healthcare: 'a medical clinic',
    legal: 'a law firm',
    all: 'a business',
  }

  const systemPrompt = `You are a helpful AI support assistant for ${nicheLabels[niche] ?? 'a business'}.
Answer the customer's question using ONLY the information provided in the context below.
If the answer is not in the context, say "I don't have that information right now - please contact our support team directly."
Be concise, friendly, and professional. Do not make up information.

CONTEXT:
${context || 'No relevant information found for this query.'}`

  const openai = getOpenAI()
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
    temperature: 0.3,
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages.map((m: { role: string; content: string }) => ({ role: m.role, content: m.content })),
    ],
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}

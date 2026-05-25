import { NextResponse } from 'next/server'
import { embedText } from '@/lib/openai'
import { getPinecone, PINECONE_INDEX, PINECONE_NAMESPACE } from '@/lib/pinecone'
import { knowledgeBase } from '../../../../data/knowledge-base'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(req: Request) {
  const { secret } = await req.json().catch(() => ({}))
  if (secret !== process.env.INGEST_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const pinecone = getPinecone()
  const index = pinecone.index(PINECONE_INDEX)

  const vectors: Array<{
    id: string
    values: number[]
    metadata: { niche: string; category: string; content: string }
  }> = []

  for (const entry of knowledgeBase) {
    const embedding = await embedText(entry.content)
    vectors.push({
      id: entry.id,
      values: embedding,
      metadata: { niche: entry.niche, category: entry.category, content: entry.content },
    })
  }

  const batchSize = 10
  for (let i = 0; i < vectors.length; i += batchSize) {
    await index.namespace(PINECONE_NAMESPACE).upsert(vectors.slice(i, i + batchSize))
  }

  const uniqueNiches = Array.from(new Set(knowledgeBase.map(e => e.niche)))

  return NextResponse.json({
    success: true,
    message: `Ingested ${vectors.length} knowledge base entries into Pinecone`,
    niches: uniqueNiches,
  })
}

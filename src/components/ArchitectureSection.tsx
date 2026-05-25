'use client'

const steps = [
  {
    number: '01',
    label: 'User Question',
    detail: 'Customer types a question in the chat interface',
    icon: '💬',
    color: 'border-blue-500/40 bg-blue-500/5',
    badge: 'Next.js 14',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    number: '02',
    label: 'Embed Query',
    detail: 'Question is converted to a 512-dimension vector',
    icon: '🔢',
    color: 'border-violet-500/40 bg-violet-500/5',
    badge: 'OpenAI Embeddings',
    badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  },
  {
    number: '03',
    label: 'Vector Search',
    detail: 'Top 5 semantically similar KB entries retrieved from 80 indexed chunks',
    icon: '🔍',
    color: 'border-emerald-500/40 bg-emerald-500/5',
    badge: 'Pinecone',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    number: '04',
    label: 'Build Prompt',
    detail: 'Retrieved context + conversation history injected into system prompt',
    icon: '📝',
    color: 'border-amber-500/40 bg-amber-500/5',
    badge: 'RAG Pipeline',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  {
    number: '05',
    label: 'Generate Answer',
    detail: 'GPT-4o-mini streams a response using only the retrieved context',
    icon: '🤖',
    color: 'border-rose-500/40 bg-rose-500/5',
    badge: 'GPT-4o-mini',
    badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  },
  {
    number: '06',
    label: 'Stream to User',
    detail: 'Tokens streamed in real time — no waiting for full response',
    icon: '⚡',
    color: 'border-cyan-500/40 bg-cyan-500/5',
    badge: 'Vercel AI SDK',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
]

const techStack = [
  {
    name: 'Next.js 14',
    role: 'Frontend + API Routes',
    detail: 'App Router, server-side API keeps keys secure',
    icon: '▲',
    color: 'text-white',
  },
  {
    name: 'OpenAI',
    role: 'LLM + Embeddings',
    detail: 'GPT-4o-mini for chat · text-embedding-3-small for vectors',
    icon: '◆',
    color: 'text-emerald-400',
  },
  {
    name: 'Pinecone',
    role: 'Vector Database',
    detail: '80 knowledge base chunks indexed · cosine similarity search',
    icon: '◉',
    color: 'text-blue-400',
  },
  {
    name: 'Vercel AI SDK',
    role: 'Streaming',
    detail: 'Real-time token streaming to the browser',
    icon: '⚡',
    color: 'text-yellow-400',
  },
  {
    name: 'TypeScript',
    role: 'Language',
    detail: 'Type-safe throughout — API routes, components, data layer',
    icon: '{}',
    color: 'text-blue-300',
  },
  {
    name: 'Vercel',
    role: 'Hosting + CI/CD',
    detail: 'Auto-deploys from GitHub on every push',
    icon: '▲',
    color: 'text-slate-300',
  },
]

const features = [
  { label: '80 KB entries', sub: 'across 5 industries', icon: '📚' },
  { label: 'Session memory', sub: 'last 10 messages retained', icon: '🧠' },
  { label: 'Confidence scoring', sub: 'auto-escalates when uncertain', icon: '📊' },
  { label: 'Real-time streaming', sub: 'token-by-token response', icon: '⚡' },
  { label: '5 business niches', sub: 'e-commerce, legal, HR, health, property', icon: '🏢' },
  { label: 'Zero hallucination', sub: 'answers only from ingested data', icon: '✅' },
]

export default function ArchitectureSection() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 pb-16">

      {/* Divider */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex-1 h-px bg-[#1a2438]" />
        <span className="text-slate-500 text-xs font-medium tracking-widest uppercase">How it works</span>
        <div className="flex-1 h-px bg-[#1a2438]" />
      </div>

      {/* Headline */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold text-white mb-2">RAG Architecture</h2>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          Every answer is retrieved from a real knowledge base — not generated from GPT&apos;s training data.
          This eliminates hallucination and keeps responses accurate to your business.
        </p>
      </div>

      {/* Flow steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
        {steps.map((step) => (
          <div key={step.number} className={`rounded-xl border p-4 ${step.color}`}>
            <div className="flex items-start gap-3">
              <div className="text-2xl flex-shrink-0">{step.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-slate-600 text-xs font-mono">{step.number}</span>
                  <span className="text-white text-sm font-medium">{step.label}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-2">{step.detail}</p>
                <span className={`inline-block text-xs px-2 py-0.5 rounded-full border ${step.badgeColor}`}>
                  {step.badge}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Production features */}
      <div className="mb-12">
        <h3 className="text-slate-400 text-xs font-medium tracking-widest uppercase mb-4 text-center">Production features</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {features.map(f => (
            <div key={f.label} className="rounded-xl border border-[#1a2438] bg-[#08090f] p-4 text-center">
              <div className="text-xl mb-2">{f.icon}</div>
              <div className="text-white text-sm font-medium mb-0.5">{f.label}</div>
              <div className="text-slate-500 text-xs">{f.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <div className="mb-12">
        <h3 className="text-slate-400 text-xs font-medium tracking-widest uppercase mb-4 text-center">Tech stack</h3>
        <div className="rounded-2xl border border-[#1a2438] bg-[#08090f] divide-y divide-[#1a2438]">
          {techStack.map(t => (
            <div key={t.name} className="flex items-center gap-4 px-5 py-3.5">
              <span className={`text-sm font-bold w-6 text-center flex-shrink-0 ${t.color}`}>{t.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-white text-sm font-medium">{t.name}</span>
                  <span className="text-slate-500 text-xs">{t.role}</span>
                </div>
                <p className="text-slate-500 text-xs mt-0.5">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 text-center">
        <p className="text-white text-sm font-medium mb-1">Want this for your business?</p>
        <p className="text-slate-400 text-xs mb-4">
          You provide the FAQs and policies. I ingest them, configure the bot, and deploy it. Setup: 3–5 days.
        </p>
        <a
          href="https://zainsverse.de"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-xl transition-colors"
        >
          zainsverse.de — Get in touch
        </a>
      </div>

    </section>
  )
}

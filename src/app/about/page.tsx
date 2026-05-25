import ArchitectureSection from '@/components/ArchitectureSection'
import Link from 'next/link'

export const metadata = {
  title: 'How It Works — AI Support Chatbot | zainsverse.de',
  description: 'RAG architecture breakdown: Next.js, OpenAI, Pinecone, Vercel. Production AI customer support agent built by zainsverse.de',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: '#05070f' }}>

      {/* Background dots */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(99,120,180,0.07) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      {/* Top glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.10) 0%, transparent 60%)' }} />

      <div className="relative z-10 w-full pt-8">

        {/* Nav */}
        <div className="max-w-3xl mx-auto px-4 mb-10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to demo
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              Production RAG System
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="max-w-3xl mx-auto px-4 text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-3">AI Support Chatbot</h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-6">
            A production-grade RAG chatbot that answers questions from a real knowledge base —
            not generic GPT responses. Zero hallucination. Session memory. Auto-escalation.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-xl transition-colors"
            >
              Try the live demo
            </Link>
            <a
              href="https://github.com/Hafiz-Muhammad-Zain/ai-support-chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#1a2438] bg-[#08090f] hover:border-blue-500/40 text-slate-300 text-sm font-medium rounded-xl transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Architecture section */}
        <ArchitectureSection />

      </div>
    </main>
  )
}

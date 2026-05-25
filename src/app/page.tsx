'use client'

import { useChat } from 'ai/react'
import { useState, useRef, useEffect } from 'react'
import ChatMessage from '@/components/ChatMessage'
import NicheSelector from '@/components/NicheSelector'
import ArchitectureSection from '@/components/ArchitectureSection'

export default function Home() {
  const [niche, setNiche] = useState('ecommerce')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages, setInput } = useChat({
    api: '/api/chat',
    body: { niche },
  })

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleNicheChange = (newNiche: string) => {
    setNiche(newNiche)
    setMessages([])
  }

  const handlePromptClick = (prompt: string) => {
    setInput(prompt)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    handleSubmit(e)
  }

  const nicheGreetings: Record<string, { title: string; subtitle: string }> = {
    ecommerce: {
      title: 'ShopBot — AI Customer Support',
      subtitle: 'Ask about orders, returns, shipping, or products.',
    },
    real_estate: {
      title: 'PropertyBot — AI Support Agent',
      subtitle: 'Ask about viewings, buying, renting, or valuations.',
    },
    hr: {
      title: 'HR Assistant — AI Support Agent',
      subtitle: 'Ask about leave, payroll, benefits, or onboarding.',
    },
    healthcare: {
      title: 'ClinicBot — AI Support Agent',
      subtitle: 'Ask about appointments, prescriptions, or services.',
    },
    legal: {
      title: 'LegalBot — AI Support Agent',
      subtitle: 'Ask about consultations, fees, or practice areas.',
    },
  }

  const { title, subtitle } = nicheGreetings[niche] ?? nicheGreetings.ecommerce

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

      <div className="relative z-10 flex flex-col min-h-screen max-w-3xl mx-auto w-full px-4 py-6">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            Live Demo — Production RAG System
          </div>
          <h1 className="text-2xl font-semibold text-white mb-1">{title}</h1>
          <p className="text-slate-400 text-sm">{subtitle}</p>
        </div>

        {/* Niche selector */}
        <div className="mb-4">
          <NicheSelector
            selectedNiche={niche}
            onSelect={handleNicheChange}
            onPromptClick={handlePromptClick}
          />
        </div>

        {/* Chat window */}
        <div className="flex-1 flex flex-col rounded-2xl border border-[#1a2438] bg-[#08090f] overflow-hidden"
          style={{ minHeight: '420px' }}>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {messages.length === 0 && (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 rounded-2xl bg-[#0b0f1a] border border-[#1a2438] flex items-center justify-center text-2xl mb-4">
                  🤖
                </div>
                <p className="text-slate-300 font-medium mb-1">Ask anything</p>
                <p className="text-slate-500 text-sm max-w-xs">
                  This agent answers questions from a real knowledge base — not generic GPT responses.
                </p>
              </div>
            )}

            {messages.map((m, i) => (
              <ChatMessage
                key={m.id}
                role={m.role as 'user' | 'assistant'}
                content={m.content}
                isStreaming={isLoading && i === messages.length - 1 && m.role === 'assistant'}
              />
            ))}

            {isLoading && messages[messages.length - 1]?.role === 'user' && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0f1623] border border-[#1a2438] flex items-center justify-center text-xs text-blue-400 font-semibold flex-shrink-0">
                  AI
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-[#0b0f1a] border border-[#1a2438]">
                  <div className="flex gap-1 items-center h-4">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input bar */}
          <div className="border-t border-[#1a2438] p-3">
            <form onSubmit={onSubmit} className="flex gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your question..."
                disabled={isLoading}
                className="flex-1 bg-[#0b0f1a] border border-[#1a2438] rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-blue-500/60 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl text-sm font-medium transition-colors flex items-center gap-1.5"
              >
                <span>Send</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-slate-600 text-xs">
            Built by{' '}
            <a href="https://zainsverse.de" target="_blank" rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors">
              zainsverse.de
            </a>
            {' '}· Next.js · OpenAI · Pinecone · Vercel ·{' '}
            <a href="https://github.com/Hafiz-Muhammad-Zain/ai-support-chatbot" target="_blank" rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors">
              View on GitHub
            </a>
            {' '}·{' '}
            <a href="/about" className="text-blue-500 hover:text-blue-400 transition-colors">
              How it works
            </a>
          </p>
        </div>
      </div>

      {/* Architecture section — scrollable below the chat */}
      <ArchitectureSection />

    </main>
  )
}

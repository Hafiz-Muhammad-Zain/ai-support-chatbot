import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Support Agent - Live Demo | zainsverse',
  description: 'Production-ready AI customer support chatbot. Answers questions from your business knowledge base instantly. Built by Zain - AI Automation Engineer.',
  openGraph: {
    title: 'AI Support Agent - Live Demo',
    description: 'Ask it anything about returns, shipping, appointments, or policies. See RAG-powered AI in action.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

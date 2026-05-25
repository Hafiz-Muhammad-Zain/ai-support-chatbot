import clsx from 'clsx'

interface Props {
  role: 'user' | 'assistant'
  content: string
  isStreaming?: boolean
}

export default function ChatMessage({ role, content, isStreaming }: Props) {
  const isUser = role === 'user'
  return (
    <div className={clsx('flex gap-3 message-enter', isUser ? 'flex-row-reverse' : 'flex-row')}>
      <div className={clsx(
        'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold',
        isUser ? 'bg-blue-600 text-white' : 'bg-[#0f1623] border border-[#1a2438] text-blue-400'
      )}>
        {isUser ? 'U' : 'AI'}
      </div>
      <div className={clsx(
        'max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed',
        isUser ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-[#0b0f1a] border border-[#1a2438] text-slate-200 rounded-tl-sm'
      )}>
        {content}
        {isStreaming && <span className="typing-cursor" />}
      </div>
    </div>
  )
}

'use client'

const niches = [
  { id: 'ecommerce', label: 'E-commerce Store', icon: 'Shop',
    prompts: ['What is your return policy?', 'How do I track my order?', 'Do you offer free shipping?'] },
  { id: 'real_estate', label: 'Real Estate Agency', icon: 'Home',
    prompts: ['How do I book a viewing?', 'What are your agent fees?', 'How long does buying take?'] },
  { id: 'hr', label: 'HR Department', icon: 'HR',
    prompts: ['How many days leave do I get?', 'When is salary paid?', 'What are the employee benefits?'] },
  { id: 'healthcare', label: 'Medical Clinic', icon: 'Med',
    prompts: ['How do I book an appointment?', 'How do I order a repeat prescription?', 'What services do you offer?'] },
  { id: 'legal', label: 'Law Firm', icon: 'Law',
    prompts: ['Do you offer a free consultation?', 'What are your fees?', 'What areas of law do you cover?'] },
]

interface Props {
  selectedNiche: string
  onSelect: (niche: string) => void
  onPromptClick: (prompt: string) => void
}

export default function NicheSelector({ selectedNiche, onSelect, onPromptClick }: Props) {
  const selected = niches.find(n => n.id === selectedNiche)
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-4">
        {niches.map(n => (
          <button key={n.id} onClick={() => onSelect(n.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 border ${
              selectedNiche === n.id
                ? 'bg-blue-600 border-blue-500 text-white'
                : 'bg-[#0b0f1a] border-[#1a2438] text-slate-400 hover:border-blue-500/50 hover:text-slate-200'
            }`}>
            <span className="text-xs font-bold opacity-60">{n.icon}</span>
            <span>{n.label}</span>
          </button>
        ))}
      </div>
      {selected && (
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-slate-500 self-center mr-1">Try asking:</span>
          {selected.prompts.map(p => (
            <button key={p} onClick={() => onPromptClick(p)}
              className="text-xs px-3 py-1.5 rounded-full border border-[#1a2438] bg-[#0b0f1a] text-slate-400 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-150">
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

'use client'

interface Niche {
  id: string
  label: string
  icon: string
  description: string
  prompts: string[]
}

const niches: Niche[] = [
  {
    id: 'ecommerce',
    label: 'E-commerce',
    icon: '🛍️',
    description: 'NovaNest — orders, returns, shipping, payments',
    prompts: [
      'My package says delivered but I never got it',
      'How do I return an item I bought?',
      'Can I change my order after placing it?',
      'Do you offer buy now pay later?',
      'How do I track my order?',
      'Is there free shipping?',
    ],
  },
  {
    id: 'real_estate',
    label: 'Real Estate',
    icon: '🏠',
    description: 'Meridian Property — buying, selling, renting',
    prompts: [
      'How do I book a property viewing?',
      'What are your fees for selling my home?',
      'How long does buying a house take?',
      'What deposit do I need to rent?',
      'Can I get a free valuation?',
      'Do you help with mortgages?',
    ],
  },
  {
    id: 'hr',
    label: 'HR',
    icon: '👥',
    description: 'Pinnacle Technologies — leave, payroll, benefits',
    prompts: [
      'How many days annual leave do I get?',
      'When is salary paid each month?',
      'How do I request flexible working?',
      'What happens if I go off sick?',
      'How do I submit expenses?',
      'What is the maternity leave policy?',
    ],
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    icon: '🏥',
    description: 'Greenfield Medical — appointments, prescriptions',
    prompts: [
      'How do I book an appointment?',
      'How do I order a repeat prescription?',
      'How long will my test results take?',
      'What do I do in an emergency?',
      'Are flu jabs available?',
      'How do I register as a patient?',
    ],
  },
  {
    id: 'legal',
    label: 'Law Firm',
    icon: '⚖️',
    description: 'Sterling & Hart — employment, property, family',
    prompts: [
      'Do you offer a free consultation?',
      'How much does conveyancing cost?',
      'I was unfairly dismissed — can you help?',
      'What is the time limit to claim unfair dismissal?',
      'How do I start divorce proceedings?',
      'Do you do no win no fee?',
    ],
  },
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
      {/* Niche tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {niches.map(n => (
          <button
            key={n.id}
            onClick={() => onSelect(n.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 border ${
              selectedNiche === n.id
                ? 'bg-blue-600 border-blue-500 text-white'
                : 'bg-[#0b0f1a] border-[#1a2438] text-slate-400 hover:border-blue-500/50 hover:text-slate-200'
            }`}
          >
            <span>{n.icon}</span>
            <span>{n.label}</span>
          </button>
        ))}
      </div>

      {/* Niche description */}
      {selected && (
        <p className="text-xs text-slate-500 mb-3">{selected.description}</p>
      )}

      {/* Suggested questions */}
      {selected && (
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-slate-500 self-center mr-1">Try asking:</span>
          {selected.prompts.map(p => (
            <button
              key={p}
              onClick={() => onPromptClick(p)}
              className="text-xs px-3 py-1.5 rounded-full border border-[#1a2438] bg-[#0b0f1a] text-slate-400 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-150"
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

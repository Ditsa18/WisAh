'use client'

import { cn } from '@/lib/utils'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen?: boolean
  onToggle?: () => void
}

export default function AccordionItem({
  question,
  answer,
  isOpen: controlledIsOpen,
  onToggle,
}: AccordionItemProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
  const handleToggle = onToggle || (() => setInternalIsOpen(!internalIsOpen))

  return (
    <div className="overflow-hidden rounded-2xl bg-tan/60 transition-all duration-300">
      <button
        onClick={handleToggle}
        className="flex w-full items-center justify-between p-6 text-left transition-all hover:bg-tan/80"
      >
        <span className="font-medium text-espresso">{question}</span>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-espresso" />
          ) : (
            <Plus className="h-5 w-5 text-espresso" />
          )}
        </div>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 pb-6 pt-0 text-espresso/80">
          {answer}
        </div>
      </div>
    </div>
  )
}

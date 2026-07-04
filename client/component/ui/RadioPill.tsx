'use client'

import { cn } from '@/lib/utils'

interface RadioPillProps {
  name: string
  value: string
  label: string
  checked: boolean
  onChange: (value: string) => void
}

export default function RadioPill({
  name,
  value,
  label,
  checked,
  onChange,
}: RadioPillProps) {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span
        className={cn(
          'inline-block rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
          checked
            ? 'bg-espresso text-white'
            : 'bg-tan/60 text-espresso hover:bg-tan/80'
        )}
      >
        {label}
      </span>
    </label>
  )
}

import { cn } from '@/lib/utils'

interface TagPillProps {
  children: React.ReactNode
  className?: string
}

export default function TagPill({ children, className }: TagPillProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full bg-tan/60 px-4 py-1 text-sm font-medium text-espresso',
        className
      )}
    >
      {children}
    </span>
  )
}

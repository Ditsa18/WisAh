import { cn } from '@/lib/utils'

interface DotGridOverlayProps {
  className?: string
}

export default function DotGridOverlay({ className }: DotGridOverlayProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 opacity-20',
        'bg-[radial-gradient(circle,_var(--color-espresso)_1px,_transparent_1px)]',
        'bg-[size:24px_24px]',
        className
      )}
    />
  )
}

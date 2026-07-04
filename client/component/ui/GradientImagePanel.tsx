import { cn } from '@/lib/utils'
import DotGridOverlay from './DotGridOverlay'
import Image from 'next/image'

interface GradientImagePanelProps {
  className?: string
  children?: React.ReactNode
  showDotGrid?: boolean
  backgroundImage?: string
}

export default function GradientImagePanel({
  className,
  children,
  showDotGrid = false,
  backgroundImage,
}: GradientImagePanelProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl',
        backgroundImage ? '' : 'bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600',
        className
      )}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
      )}
      {showDotGrid && <DotGridOverlay />}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

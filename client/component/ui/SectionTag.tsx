interface SectionTagProps {
  children: React.ReactNode
}

export default function SectionTag({ children }: SectionTagProps) {
  return (
    <span className="inline-block bg-tan/60 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-espresso mb-4">
      {children}
    </span>
  )
}

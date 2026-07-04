import { useState } from 'react'

export function useActiveTab(initialIndex: number = 0) {
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  return {
    activeIndex,
    setActiveIndex,
  }
}

import { useEffect, useState } from 'react'

const useScrollSpy = (sectionIds = []) => {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const handleScroll = () => {
      let currentId = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        // If the section top is above 40% of the viewport, it's the active one
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          currentId = id
        }
      }

      setActiveId(currentId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds.join('|')])

  return activeId
}

export default useScrollSpy

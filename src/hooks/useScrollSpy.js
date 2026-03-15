import { useEffect, useState } from 'react'

const useScrollSpy = (sectionIds = []) => {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        let currentId = sectionIds[0]
        const threshold = window.innerHeight * 0.4

        for (const id of sectionIds) {
          const el = document.getElementById(id)
          if (!el) continue
          if (el.getBoundingClientRect().top <= threshold) {
            currentId = id
          }
        }

        setActiveId(currentId)
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds.join('|')])

  return activeId
}

export default useScrollSpy

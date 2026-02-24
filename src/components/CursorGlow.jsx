import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const TRAIL_COUNT = 6

const CursorGlow = () => {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const trail = Array.from({ length: TRAIL_COUNT }).map((_, index) => ({
    x: useSpring(mouseX, {
      stiffness: 200 - index * 15,
      damping: 25 + index * 2,
      mass: 0.2 + index * 0.03,
    }),
    y: useSpring(mouseY, {
      stiffness: 200 - index * 15,
      damping: 25 + index * 2,
      mass: 0.2 + index * 0.03,
    }),
    size: 8 - index,
    opacity: 0.6 - index * 0.08,
  }))

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX - 4)
      mouseY.set(event.clientY - 4)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-10">
      {trail.map((dot, index) => (
        <motion.span
          key={`trail-dot-${index}`}
          className="absolute rounded-full bg-accent-500 shadow-[0_0_12px_rgba(59,130,246,0.4)]"
          style={{
            x: dot.x,
            y: dot.y,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default CursorGlow

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import SectionWrapper from '../components/SectionWrapper'

const About = ({ profile }) => {
  const gallery = profile.aboutGallery
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef(null)
  const imageRef = useRef(null)

  const startAutoPlay = useCallback(() => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % gallery.length)
    }, 3500)
  }, [gallery.length])

  useEffect(() => {
    startAutoPlay()
    return () => clearInterval(intervalRef.current)
  }, [startAutoPlay])

  const go = (direction) => {
    setActiveIndex((prev) => (prev + direction + gallery.length) % gallery.length)
    startAutoPlay()
  }

  const handleImageClick = (event) => {
    const rect = imageRef.current?.getBoundingClientRect()
    if (!rect) return go(1)
    go(event.clientX < rect.left + rect.width / 2 ? -1 : 1)
  }

  const current = gallery[activeIndex]

  return (
    <SectionWrapper id="about">
      <Container>
        <SectionHeader title="About me" />
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-panel p-8 text-base leading-relaxed text-ink-700 dark:text-mist-200">
            <div className="space-y-4">
              {profile.about.split('\n\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <button
              type="button"
              ref={imageRef}
              onClick={handleImageClick}
              className="glass-panel relative w-full overflow-hidden text-left transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
              aria-label="Switch about photo"
            >
              <div className="relative aspect-[4/5] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current?.alt}
                    className="absolute left-4 top-4 z-10 glass-pill px-3 py-1 text-xs font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 100%)' }}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    {current?.alt?.replace('Jose Eduardo', '').replace(/\s+/g, ' ').trim() || 'About me'}
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current?.src}
                    src={current?.src}
                    alt={current?.alt}
                    className="absolute inset-0 h-full w-full rounded-glass object-cover"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>
            </button>
            <div className="mt-3 flex items-center justify-center gap-2">
              {gallery.map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  onClick={() => { setActiveIndex(index); startAutoPlay() }}
                  className={`h-1.5 w-6 rounded-full transition ${
                    index === activeIndex
                      ? 'bg-accent-500/80 shadow-[0_0_8px_rgba(96,165,250,0.4)]'
                      : 'bg-white/40 dark:bg-white/10'
                  }`}
                  aria-label={`Show ${image.alt}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}

export default About

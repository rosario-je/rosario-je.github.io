import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar = ({ sections, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const sectionHref = (id) => (isHome ? `#${id}` : `/#${id}`)

  useEffect(() => {
    if (!isOpen) {
      return
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="fixed right-6 top-6 z-50">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6 }}
        className="nav-glass flex items-center gap-3 rounded-full px-3 py-2"
      >
        <nav className="hidden items-center gap-4 lg:flex">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              className="relative"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {activeSection === section.id ? (
                <motion.span
                  layoutId="nav-pill"
                  className="liquid-pill absolute inset-[-6px] rounded-full"
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                />
              ) : null}
              <a
                href={sectionHref(section.id)}
                className={`relative rounded-full px-3 py-1 text-sm font-medium transition ${
                  activeSection === section.id
                    ? 'text-accent-600 dark:text-accent-400'
                    : 'text-ink-700 hover:text-ink-900 dark:text-mist-200 dark:hover:text-white'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.label}
              </a>
            </motion.div>
          ))}
          <motion.a
            href="/resume.pdf"
            className="glass-btn-primary px-3 py-1.5 text-xs font-semibold transition hover:-translate-y-0.5"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Resume
          </motion.a>
        </nav>
        <ThemeToggle />
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="glass-pill inline-flex h-9 w-9 items-center justify-center text-ink-800 transition hover:scale-105 dark:text-mist-100"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 -z-10 bg-black/20 backdrop-blur-md lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="nav-glass mt-4 w-[min(100%,18rem)] rounded-3xl p-5 lg:hidden"
            >
              <nav className="flex flex-col gap-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={sectionHref(section.id)}
                    onClick={() => setIsOpen(false)}
                    className="glass-pill px-4 py-2 text-sm font-semibold text-ink-800 transition hover:scale-[1.02] dark:text-mist-100"
                  >
                    {section.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  className="glass-btn-primary mt-1 px-4 py-2 text-center text-sm font-semibold"
                >
                  Resume
                </a>
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

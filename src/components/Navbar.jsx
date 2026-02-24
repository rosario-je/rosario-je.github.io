import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar = ({ sections, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)

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
        className="nav-glass flex items-center gap-3 rounded-full px-3 py-2 shadow-soft"
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
                href={`#${section.id}`}
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
            className="rounded-full border border-accent-500 px-3 py-1.5 text-xs font-semibold text-accent-600 transition hover:-translate-y-0.5 hover:bg-accent-500 hover:text-white hover:shadow-glow dark:text-accent-500"
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-mist-200/70 bg-white text-ink-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:border-ink-800 dark:bg-ink-900 dark:text-mist-100"
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
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mt-4 w-[min(100%,18rem)] rounded-3xl border border-mist-200/70 bg-white p-5 shadow-soft dark:border-ink-800 dark:bg-ink-900 lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold text-ink-800 dark:text-mist-100"
                >
                  {section.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                className="rounded-full border border-accent-500 px-4 py-2 text-center text-sm font-semibold text-accent-600 transition hover:bg-accent-500 hover:text-white"
              >
                Resume
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

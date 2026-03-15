import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Copy } from 'lucide-react'
import Container from '../components/Container'
import SectionWrapper from '../components/SectionWrapper'
import Toast from '../components/Toast'

const ACTION_BUTTONS = [
  { label: 'Email', icon: Mail, key: 'email' },
  { label: 'GitHub', icon: Github, key: 'github' },
  { label: 'LinkedIn', icon: Linkedin, key: 'linkedin' },
]

const Contact = ({ profile }) => {
  const [toast, setToast] = useState(null)

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(null), 2000)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      showToast('Email copied to clipboard.')
    } catch {
      showToast('Unable to copy. Use the email button instead.')
    }
  }

  const hrefs = {
    email: `mailto:${profile.email}`,
    github: profile.links.github,
    linkedin: profile.links.linkedin,
  }

  return (
    <SectionWrapper id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center py-16 text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl">
            Get in <span className="text-accent-500">touch</span>.
          </h2>
          <p className="mt-4 text-base text-ink-600 dark:text-mist-300">
            If you're interested in chatting about tech or collaborating on
            something, let's connect.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-accent-700"
            >
              <Copy size={16} />
              Copy email
            </button>
            {ACTION_BUTTONS.map((btn) => {
              const href = hrefs[btn.key]
              const isExternal = href.startsWith('http')
              return (
                <a
                  key={btn.key}
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-mist-200/70 bg-white px-6 py-3 text-sm font-semibold text-ink-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-ink-800 dark:bg-ink-900 dark:text-mist-100"
                >
                  <btn.icon size={16} />
                  {btn.label}
                </a>
              )
            })}
          </div>
        </motion.div>
      </Container>
      <Toast show={!!toast} message={toast || ''} />
    </SectionWrapper>
  )
}

export default Contact

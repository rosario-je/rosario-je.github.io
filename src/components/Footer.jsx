import { Github, Linkedin, Mail } from 'lucide-react'
import Container from './Container'
import { profile } from '../data/profile'

const socialLinks = [
  { label: 'GitHub', icon: Github, href: profile.links.github },
  { label: 'LinkedIn', icon: Linkedin, href: profile.links.linkedin },
  { label: 'Email', icon: Mail, href: `mailto:${profile.email}` },
]

const Footer = ({ name }) => (
  <footer className="border-t border-mist-200/70 py-8 dark:border-ink-800">
    <Container className="flex flex-col items-center justify-between gap-4 text-center text-sm text-ink-600 dark:text-mist-300 sm:flex-row sm:text-left">
      <span>
        &copy; {new Date().getFullYear()} {name}
      </span>
      <div className="flex items-center gap-3">
        {socialLinks.map((link) => {
          const isExternal = link.href.startsWith('http')
          return (
            <a
              key={link.label}
              href={link.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink-500 transition hover:-translate-y-0.5 hover:text-accent-500 dark:text-mist-300 dark:hover:text-accent-400"
              aria-label={link.label}
            >
              <link.icon size={16} />
            </a>
          )
        })}
      </div>
    </Container>
  </footer>
)

export default Footer

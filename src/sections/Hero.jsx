import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Container from '../components/Container'

const spring = { type: 'spring', stiffness: 120, damping: 18 }

const Hero = ({ profile }) => (
  <section
    id="hero"
    className="section-spacing relative flex min-h-[calc(100vh-6rem)] items-center pt-0 h-screen"
  >
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={spring}
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
        >
          Hi! I'm <span className="text-accent-500">{profile.name}</span>.
          <br />
          I am a <span className="text-accent-500">Full Stack Developer</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="mt-4 max-w-xl text-base text-ink-600 dark:text-mist-300 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.25 }}
          className="glass-pill mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm text-ink-600 dark:text-mist-300"
        >
          <MapPin size={14} className="text-accent-500" />
          {profile.location}
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="glass-btn-primary px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="glass-btn-secondary px-6 py-3 text-sm font-semibold text-ink-800 transition hover:-translate-y-0.5 dark:text-mist-100"
          >
            Let's connect
          </a>
        </motion.div>
      </motion.div>
    </Container>
  </section>
)

export default Hero

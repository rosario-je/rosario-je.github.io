import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { profile } from './data/profile'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import useScrollSpy from './hooks/useScrollSpy'
import CursorGlow from './components/CursorGlow'

const App = () => {
  const sectionIds = profile.sections.map((section) => section.id)
  const activeSection = useScrollSpy(sectionIds)

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-mist-50 to-mist-100 dark:from-ink-950 dark:via-ink-950 dark:to-ink-900">
      <CursorGlow />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 site-grid opacity-70" />
        <div className="absolute -left-20 top-[-10rem] h-72 w-72 rounded-full bg-accent-500/20 blur-3xl dark:bg-accent-500/10" />
        <div className="absolute right-[-4rem] top-24 h-64 w-64 rounded-full bg-ink-900/10 blur-3xl dark:bg-white/5" />
      </div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-900"
      >
        Skip to content
      </a>
      <Navbar
        sections={profile.sections}
        activeSection={activeSection}
      />
      <main id="main-content" className="relative">
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects projects={profile.projects} />
        <Skills skills={profile.skills} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} location={profile.location} />
    </div>
  )
}

export default App

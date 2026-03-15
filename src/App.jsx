import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { profile } from './data/profile'
import useScrollSpy from './hooks/useScrollSpy'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProjectShowcase from './pages/ProjectShowcase'

const App = () => {
  const sectionIds = profile.sections.map((section) => section.id)
  const activeSection = useScrollSpy(sectionIds)

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30 dark:from-ink-950 dark:via-ink-950 dark:to-[#0d1a2d]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 site-grid opacity-40" />
        <div className="absolute -left-20 top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-blue-400/25 to-cyan-300/15 blur-[100px]" />
        <div className="absolute right-[-4rem] top-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/15 to-violet-300/10 blur-[80px]" />
        <div className="absolute bottom-[20%] right-[-5rem] h-[20rem] w-[20rem] rounded-full bg-gradient-to-br from-purple-400/15 to-pink-300/10 blur-[80px]" />
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectShowcase />} />
        </Routes>
      </main>
      <Footer name={profile.name} />
      <ScrollToTop />
    </div>
  )
}

export default App

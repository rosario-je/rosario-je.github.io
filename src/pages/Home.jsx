import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Contact from '../sections/Contact'
import { profile } from '../data/profile'

const Home = () => (
  <>
    <Hero profile={profile} />
    <About profile={profile} />
    <Projects projects={profile.projects} />
    <Skills skills={profile.skills} />
    <Contact profile={profile} />
  </>
)

export default Home

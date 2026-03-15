import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import SectionWrapper from '../components/SectionWrapper'

const Projects = ({ projects }) => (
  <SectionWrapper id="projects">
    <Container>
      <SectionHeader title="Projects" />
      <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 md:grid-cols-2 md:gap-10 lg:gap-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </div>
    </Container>
  </SectionWrapper>
)

export default Projects

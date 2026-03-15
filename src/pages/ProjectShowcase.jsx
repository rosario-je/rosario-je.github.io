import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import { profile } from '../data/profile'
import Container from '../components/Container'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring', stiffness: 100, damping: 20, delay },
})

const ProjectShowcase = () => {
  const { slug } = useParams()
  const project = profile.projects.find((p) => p.slug === slug)
  const otherProjects = profile.projects.filter((p) => p.slug !== slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6">
        <h1 className="text-2xl font-semibold text-ink-900 dark:text-white">
          Project not found
        </h1>
        <Link to="/" className="text-accent-500 hover:underline">
          Back to home
        </Link>
      </div>
    )
  }

  const heroImage = project.images?.[0]
  const galleryImages = project.images?.slice(1) ?? []

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen pb-20"
    >
      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="relative flex min-h-[70vh] items-end overflow-hidden">
        {heroImage && (
          <>
            <img
              src={heroImage}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover opacity-80 dark:opacity-60"
              style={{
                maskImage: `linear-gradient(to bottom,
                  black 0%, rgba(0,0,0,0.738) 19%, rgba(0,0,0,0.541) 34%,
                  rgba(0,0,0,0.382) 47%, rgba(0,0,0,0.278) 56.5%,
                  rgba(0,0,0,0.194) 65%, rgba(0,0,0,0.126) 73%,
                  rgba(0,0,0,0.075) 80.2%, rgba(0,0,0,0.042) 86.1%,
                  rgba(0,0,0,0.021) 91%, rgba(0,0,0,0.008) 95.2%,
                  rgba(0,0,0,0.002) 98.2%, transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to bottom,
                  black 0%, rgba(0,0,0,0.738) 19%, rgba(0,0,0,0.541) 34%,
                  rgba(0,0,0,0.382) 47%, rgba(0,0,0,0.278) 56.5%,
                  rgba(0,0,0,0.194) 65%, rgba(0,0,0,0.126) 73%,
                  rgba(0,0,0,0.075) 80.2%, rgba(0,0,0,0.042) 86.1%,
                  rgba(0,0,0,0.021) 91%, rgba(0,0,0,0.008) 95.2%,
                  rgba(0,0,0,0.002) 98.2%, transparent 100%)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/5 to-black/10 dark:from-ink-950 dark:via-ink-950/60 dark:to-transparent" />
          </>
        )}
        <Container className="relative z-10 pb-16 pt-32">
          <Link
            to="/#projects"
            className="glass-pill mb-8 inline-flex items-center gap-2 px-4 py-2 text-sm text-ink-600 transition hover:-translate-y-0.5 hover:text-ink-900 dark:text-white/80 dark:hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to projects
          </Link>
          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {project.title}
          </motion.h1>
        </Container>
      </div>

      {/* ── Overview ──────────────────────────────────────── */}
      <Container>
          <motion.section {...fadeUp(0.25)} className="mt-16">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-500">
              Overview
            </h2>
            <p className="text-lg leading-relaxed text-ink-700 dark:text-mist-200 sm:text-xl">
              {project.description}
            </p>
            {project.caseStudy && (
              <p className="mt-6 text-base leading-relaxed text-ink-600 dark:text-mist-300">
                {project.caseStudy}
              </p>
            )}
          </motion.section>

          {/* ── Links ───────────────────────────────────────── */}
          {project.links && (
            <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-ink-800 transition hover:-translate-y-0.5 dark:text-mist-100"
                >
                  <Github size={16} />
                  Source code
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
                >
                  <ExternalLink size={16} />
                  Live demo
                </a>
              )}
            </motion.div>
          )}

          {/* ── Tech Stack ─────────────────────────────────── */}
          {project.stack?.length > 0 && (
            <motion.section {...fadeUp(0.35)} className="mt-16">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-500">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="glass-pill px-4 py-2 text-sm font-medium text-ink-700 dark:text-mist-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.section>
          )}

          {/* ── Key Features ───────────────────────────────── */}
          {project.featureList?.length > 0 && (
            <motion.section {...fadeUp(0.4)} className="mt-16">
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent-500">
                Key Features
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.featureList.map((item, i) => (
                  <div
                    key={item}
                    className="glass-panel flex gap-4 p-5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-xs font-bold text-accent-500">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-ink-700 dark:text-mist-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

        {/* ── Image Gallery ────────────────────────────────── */}
        {galleryImages.length > 0 && (
          <motion.section {...fadeUp(0.45)} className="mt-20">
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent-500">
                Screenshots
              </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20, delay: i * 0.1 }}
                  className="glass-panel overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 2}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ── More Projects ────────────────────────────────── */}
        {otherProjects.length > 0 && (
          <motion.section {...fadeUp(0.5)} className="mt-24">
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-accent-500">
                More Projects
              </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="group glass-panel overflow-hidden transition hover:-translate-y-1"
                >
                  {p.images?.[0] && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={p.images[0]}
                        alt={p.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-semibold text-ink-900 dark:text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-500 dark:text-mist-300">
                      {p.role}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </Container>
    </motion.article>
  )
}

export default ProjectShowcase

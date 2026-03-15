import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
      delay: 0.1 * i,
    },
  }),
}

const ProjectCard = ({ project, index = 0 }) => {
  const cardRef = useRef(null)
  const heroImage = project.images?.[0]

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [20, 0, 0, -20])

  return (
    <motion.article
      ref={cardRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      custom={index}
      className="group"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="block"
      >
        <motion.div
          className="glass-panel relative flex min-h-[60vh] items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.015, y: -4 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {heroImage && (
            <>
              <img
                src={heroImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                aria-hidden
              />
            </>
          )}
          <motion.h3
            style={{ y: titleY }}
            className="relative z-10 px-6 text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl metallic-text"
          >
            {project.title}
          </motion.h3>
        </motion.div>
      </Link>
    </motion.article>
  )
}

export default ProjectCard

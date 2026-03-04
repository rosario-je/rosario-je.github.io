import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SWIPE_THRESHOLD = 80

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1 * i,
    },
  }),
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const ProjectCard = ({ project, imagePosition = 'left' }) => {
  const images = project.images || []
  const [index, setIndex] = useState(0)

  const paginate = (direction) => {
    if (!images.length) return
    setIndex((prev) => (prev + direction + images.length) % images.length)
  }

  const handleDragEnd = (_, info) => {
    if (info.offset.x > SWIPE_THRESHOLD) paginate(-1)
    else if (info.offset.x < -SWIPE_THRESHOLD) paginate(1)
  }

  const content = (
    <motion.div
      className="flex flex-col gap-6 lg:gap-8 lg:w-1/2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div>
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-semibold tracking-tight text-ink-900 dark:text-white sm:text-3xl"
        >
          {project.title}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="mt-4 text-[15px] leading-relaxed text-ink-600 dark:text-mist-300"
        >
          {project.description}
        </motion.p>
        {project.extraDescription ? (
          <motion.p
            variants={itemVariants}
            className="mt-2 text-sm text-ink-500 dark:text-mist-400"
          >
            {project.extraDescription}
          </motion.p>
        ) : null}
      </div>

      {project.highlights?.length > 0 ? (
        <motion.ul
          variants={containerVariants}
          className="space-y-2.5 text-sm text-ink-600 dark:text-mist-300"
        >
          {project.highlights.map((highlight) => (
            <motion.li
              key={highlight}
              variants={itemVariants}
              className="flex gap-3"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </motion.ul>
      ) : null}

      {project.featureList?.length ? (
        <motion.div
          variants={containerVariants}
          className="space-y-5 border-t border-mist-200/80 pt-6 dark:border-ink-800/80"
        >
          <div>
            <motion.h4
              variants={itemVariants}
              className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-ink-400 dark:text-mist-500"
            >
              Key features
            </motion.h4>
            <ul className="space-y-1.5 text-sm text-ink-600 dark:text-mist-300">
              {project.featureList.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="flex gap-2"
                >
                  <span className="text-accent-500">·</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ) : null}
    </motion.div>
  )

  const media = (
    <div className="relative w-full lg:w-1/2">
      <div className="overflow-hidden rounded-2xl bg-mist-100 dark:bg-ink-950">
        <div className="aspect-[4/3] w-full">
          <AnimatePresence mode="wait" initial={false}>
            {images.length ? (
              <motion.img
                key={images[index]}
                src={images[index]}
                alt={`${project.title} screenshot ${index + 1}`}
                className="h-full w-full object-cover"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            ) : null}
          </AnimatePresence>
        </div>
        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => paginate(-1)}
              className="absolute left-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-lg backdrop-blur-sm transition hover:bg-white dark:bg-ink-900/90 dark:text-white"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={16} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-lg backdrop-blur-sm transition hover:bg-white dark:bg-ink-900/90 dark:text-white"
              aria-label="Next screenshot"
            >
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>
            <div className="absolute left-1/2 top-3 flex -translate-x-1/2 gap-1.5">
              {images.map((_, dotIndex) => (
                <button
                  key={`${project.title}-dot-${dotIndex}`}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  className={`h-1.5 w-1.5 rounded-full transition ${
                    dotIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to screenshot ${dotIndex + 1}`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-lg bg-ink-900/5 px-3 py-1.5 text-xs font-medium text-ink-700 dark:bg-white/5 dark:text-mist-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <div
        className="relative overflow-hidden rounded-[28px] border border-mist-200/60 bg-white/80 p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04),0_8px_48px_-8px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 dark:border-ink-800/60 dark:bg-ink-900/60 dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2),0_8px_48px_-8px_rgba(0,0,0,0.3)] lg:p-12 lg:hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.08),0_24px_64px_-16px_rgba(0,0,0,0.08)] dark:lg:hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.3),0_24px_64px_-16px_rgba(0,0,0,0.4)]"
      >
        <div
          className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${
            imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {imagePosition === 'right' ? (
            <>
              {content}
              {media}
            </>
          ) : (
            <>
              {media}
              {content}
            </>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard

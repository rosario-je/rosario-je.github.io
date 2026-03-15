import { motion } from 'framer-motion'

const SectionWrapper = ({ id, className = '', children }) => (
  <section id={id} className={`section-spacing min-h-screen flex items-center ${className}`}>
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, mass: 0.8 }}
    >
      {children}
    </motion.div>
  </section>
)

export default SectionWrapper

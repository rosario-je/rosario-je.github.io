import { AnimatePresence, motion } from 'framer-motion'

const Toast = ({ show, message }) => (
  <AnimatePresence>
    {show ? (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        role="status"
        aria-live="polite"
        className="glass-pill fixed bottom-6 right-6 z-50 px-5 py-2.5 text-sm font-medium text-ink-900 dark:text-white"
      >
        {message}
      </motion.div>
    ) : null}
  </AnimatePresence>
)

export default Toast

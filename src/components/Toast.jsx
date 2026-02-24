import { AnimatePresence, motion } from 'framer-motion'

const Toast = ({ show, message }) => (
  <AnimatePresence>
    {show ? (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        role="status"
        aria-live="polite"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-ink-900 px-4 py-2 text-sm text-white shadow-soft"
      >
        {message}
      </motion.div>
    ) : null}
  </AnimatePresence>
)

export default Toast

import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: -70, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -50 },
}

const transition = { type: 'linear' }

const PageAnimation: React.FC = ({ children }) => {
  return (
    <motion.main initial="hidden" animate="enter" exit="exit" variants={variants} transition={transition}>
      {children}
    </motion.main>
  )
}

export default PageAnimation

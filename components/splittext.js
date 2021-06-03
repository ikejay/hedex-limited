import React from 'react'
import { motion } from 'framer-motion'

export function SplitText({ children, ...rest }) {
  let letter = children.split('')
  return letter.map((char, i) => {
    return (
      <div
        key={children + i}
        style={{ display: 'inline-block', overflow: 'hidden' }}
      >
        <motion.div
          {...rest}
          style={{ display: 'inline-block', willChange: 'transform' }}
          custom={i}
        >
          {char}
        </motion.div>
      </div>
    )
  })
}


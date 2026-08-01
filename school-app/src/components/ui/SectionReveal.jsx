import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const editorialEase = [0.25, 0.1, 0.25, 1]

export default function SectionReveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  const childrenArray = React.Children.toArray(children)

  return (
    <div ref={ref}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.8,
            ease: editorialEase,
            delay: delay + index * 0.15,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

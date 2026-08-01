import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ActivityCard({ activity }) {
  return (
    <Link to="/aktivitas" className="block group">
      <motion.article
        className="content-card !p-0 overflow-hidden rounded-[4px]"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Image area */}
        <div className="ratio-landscape relative bg-[var(--bg-secondary)] overflow-hidden img-zoom-container">
          {/* Category badge */}
          <span className="text-label absolute top-3 left-3 z-10 text-[var(--gold-primary)] bg-[var(--badge-bg)] px-3 py-1 rounded-[2px] backdrop-blur-sm">
            {activity.category}
          </span>

          {/* Activity image */}
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover img-editorial"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[var(--image-overlay)] group-hover:opacity-0 transition-opacity duration-500" />
        </div>

        {/* Text area */}
        <div className="p-5">
          <h3 className="heading-md text-[var(--text-primary)] group-hover:text-[var(--gold-primary)] transition-colors duration-300">
            {activity.title}
          </h3>
        </div>
      </motion.article>
    </Link>
  )
}

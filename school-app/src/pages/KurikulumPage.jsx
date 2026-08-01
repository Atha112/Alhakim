import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Lightbulb, Leaf, Dumbbell } from 'lucide-react'
import { kurikulumContent } from '../data/content'
import PageHeader from '../components/ui/PageHeader'
import SectionReveal from '../components/ui/SectionReveal'
import GoldDivider from '../components/ui/GoldDivider'

const { title, subtitle, tabs } = kurikulumContent

const tabIcons = {
  keimanan: BookOpen,
  keilmuan: Lightbulb,
  kepekaan: Leaf,
  kekuatan: Dumbbell,
}

export default function KurikulumPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  const activeTabData = tabs.find((t) => t.id === activeTab)

  return (
    <>
      {/* Header */}
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage="/images/kurikulum-header.jpg"
      />

      {/* Tabbed content */}
      <section className="section-gap">
        <div className="container-site">
          {/* Tab navigation */}
          <div className="overflow-x-auto pb-2 mb-14 scroll-x-custom">
            <div className="flex gap-1 min-w-max md:min-w-0 md:justify-center">
              {tabs.map((tab, i) => {
                const Icon = tabIcons[tab.id]
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`
                      relative flex items-center gap-2 text-label px-4 py-3 whitespace-nowrap transition-colors duration-300
                      ${
                        activeTab === tab.id
                          ? 'text-[var(--gold-primary)]'
                          : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                      }
                    `}
                  >
                    <Icon size={14} strokeWidth={1.5} />
                    {tab.label}
                    {/* Gold underline for active tab */}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="goldUnderline"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--gold-primary)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {activeTabData && (
                <SectionReveal>
                  {/* Description */}
                  <p className="text-[var(--text-secondary)] text-center max-w-[680px] mx-auto mb-8 leading-relaxed text-lg">
                    {activeTabData.description}
                  </p>

                  {/* Decorative gold line — grows from center */}
                  <div className="flex justify-center mb-12">
                    <motion.div
                      className="w-24 h-[2px] bg-[var(--gold-primary)] origin-center"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  </div>

                  {/* Pillar cards with stagger animation */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {activeTabData.pillars.map((pillar, index) => (
                      <motion.div
                        key={`${activeTab}-${index}`}
                        className="content-card group relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.15 + index * 0.12,
                          duration: 0.5,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      >
                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--gold-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <h3 className="heading-md text-[var(--text-primary)] mb-4 group-hover:text-[var(--gold-primary)] transition-colors duration-300">
                          {pillar.title}
                        </h3>
                        <GoldDivider className="mb-4 !ml-0" />
                        <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                          {pillar.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </SectionReveal>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}

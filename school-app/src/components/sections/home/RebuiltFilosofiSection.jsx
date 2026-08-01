import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Compass, Flame, Heart, Users, Award, BookOpen, ArrowRight, ShieldCheck, Sparkles, Trees, GraduationCap } from 'lucide-react'
import { visiMisiContent, kurikulumContent } from '../../../data/content'
import SectionReveal from '../../ui/SectionReveal'
import GoldDivider from '../../ui/GoldDivider'

export default function RebuiltFilosofiSection() {
  const { visi, misi, motto, pendidikanKarakter, budaya, targetSD } = visiMisiContent

  return (
    <section className="section-gap bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-[5%] left-[-5%] w-96 h-96 rounded-full border border-[var(--border-gold)] opacity-[0.04] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[30rem] h-[30rem] rounded-full border border-[var(--border-gold)] opacity-[0.04] pointer-events-none" />

      <div className="container-site relative z-10">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION */}
        {/* ========================================================================= */}
        <SectionReveal>
          <div className="text-center max-w-[840px] mx-auto mb-16">
            <p className="text-label text-[var(--gold-primary)] mb-4 flex items-center justify-center gap-3">
              <span className="inline-block w-8 h-px bg-[var(--gold-primary)]" />
              Filosofi & Sistem Pendidikan
              <span className="inline-block w-8 h-px bg-[var(--gold-primary)]" />
            </p>
            <h2 className="heading-lg text-[var(--text-primary)] mb-6 leading-tight">
              Pendidikan Fitrah & Penempaan Aqil Baligh
            </h2>
            <GoldDivider />
          </div>
        </SectionReveal>

        {/* ========================================================================= */}
        {/* 1. VISI & MOTTO (Symmetrical 2-Column Showcase) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Visi Card */}
          <SectionReveal delay={0.1}>
            <div className="content-card relative h-full border border-[var(--border-gold)] p-8 md:p-10 bg-[var(--bg-primary)] rounded-[4px] flex flex-col justify-between group hover:border-[var(--gold-primary)] transition-all duration-300 shadow-lg">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold-ghost)] border border-[var(--border-gold)] flex items-center justify-center text-[var(--gold-primary)] group-hover:scale-105 transition-transform">
                    <Compass size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-label text-[var(--gold-primary)] block">Pondasi Visi</span>
                    <span className="text-xs text-[var(--text-muted)] font-[Jost]">Bumi Penempaan Santri</span>
                  </div>
                </div>

                <h3 className="heading-md text-[var(--text-primary)] mb-4 leading-snug group-hover:text-[var(--gold-primary)] transition-colors">
                  {visi.title}
                </h3>
                <GoldDivider className="mb-5 !ml-0" />
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base font-light">
                  {visi.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Prinsip Keummatan</span>
                <Sparkles size={14} className="text-[var(--gold-primary)] opacity-60" />
              </div>
            </div>
          </SectionReveal>

          {/* Motto Card */}
          <SectionReveal delay={0.2}>
            <div className="content-card relative h-full border border-[var(--border-gold)] p-8 md:p-10 bg-[var(--bg-primary)] rounded-[4px] flex flex-col justify-between group hover:border-[var(--gold-primary)] transition-all duration-300 shadow-lg">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold-ghost)] border border-[var(--border-gold)] flex items-center justify-center text-[var(--gold-primary)] group-hover:scale-105 transition-transform">
                    <Flame size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-label text-[var(--gold-primary)] block">Motto Inspirasi</span>
                    <span className="text-xs text-[var(--text-muted)] font-[Jost]">Pedoman Karunia</span>
                  </div>
                </div>

                <h3 className="heading-md text-[var(--text-primary)] mb-4 leading-snug group-hover:text-[var(--gold-primary)] transition-colors">
                  {motto.title}
                </h3>
                <GoldDivider className="mb-5 !ml-0" />
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base font-light">
                  {motto.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider">Ayat Kauni & Qur'ani</span>
                <Trees size={14} className="text-[var(--gold-primary)] opacity-60" />
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* ========================================================================= */}
        {/* 2. PENDIDIKAN KARAKTER NABAWIYAH & AQIL BALIGH (Balanced 2-Column Split) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Karakter Nabawiyah */}
          <SectionReveal delay={0.1}>
            <div className="p-8 md:p-10 bg-[var(--bg-primary)] border border-[var(--border-gold)] rounded-[4px] relative overflow-hidden group hover:border-[var(--gold-primary)] transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--gold-ghost)] rounded-bl-full pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity" />
              
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-[var(--gold-ghost)] text-[var(--gold-primary)] border border-[var(--border-gold)]">
                  <Heart size={20} strokeWidth={1.5} />
                </div>
                <h3 className="heading-sm text-[var(--text-primary)]">
                  {pendidikanKarakter.nabawiyah.title}
                </h3>
              </div>
              
              <GoldDivider className="mb-5 !ml-0" />
              
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base font-light">
                {pendidikanKarakter.nabawiyah.description}
              </p>
            </div>
          </SectionReveal>

          {/* Karakter Aqil Baligh */}
          <SectionReveal delay={0.2}>
            <div className="p-8 md:p-10 bg-[var(--bg-primary)] border border-[var(--border-gold)] rounded-[4px] relative overflow-hidden group hover:border-[var(--gold-primary)] transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--gold-ghost)] rounded-bl-full pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity" />
              
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-[var(--gold-ghost)] text-[var(--gold-primary)] border border-[var(--border-gold)]">
                  <Users size={20} strokeWidth={1.5} />
                </div>
                <h3 className="heading-sm text-[var(--text-primary)]">
                  {pendidikanKarakter.aqilBaligh.title}
                </h3>
              </div>
              
              <GoldDivider className="mb-5 !ml-0" />
              
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base font-light">
                {pendidikanKarakter.aqilBaligh.description}
              </p>
            </div>
          </SectionReveal>
        </div>

        {/* ========================================================================= */}
        {/* 3. MISI SEKOLAH ALAM AL-HAKIM (Symmetrical 4-Card Grid) */}
        {/* ========================================================================= */}
        <SectionReveal>
          <div className="mb-16 bg-[var(--bg-primary)] p-8 md:p-12 border border-[var(--border-gold)] rounded-[4px]">
            <div className="text-center mb-8">
              <span className="text-label text-[var(--gold-primary)] block mb-2">Amanah Pendidikan</span>
              <h3 className="heading-md text-[var(--text-primary)]">
                4 Misi Utama Sekolah Alam Al-Hakim
              </h3>
              <GoldDivider className="mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {misi.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="flex flex-col justify-between p-6 rounded bg-[var(--bg-secondary)] border border-[var(--border-gold)]/40 hover:border-[var(--gold-primary)] transition-all duration-300"
                >
                  <span className="font-[Cormorant_Garamond] text-4xl font-bold text-[var(--gold-primary)] mb-4 opacity-90">
                    0{idx + 1}
                  </span>
                  <p className="text-sm text-[var(--text-primary)] leading-relaxed font-medium">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* ========================================================================= */}
        {/* 4. BUDAYA SEKOLAH & TARGET KOMPETENSI SD (Symmetrical 3-Column Grid) */}
        {/* ========================================================================= */}
        <SectionReveal>
          <div className="text-center mb-10">
            <span className="text-label text-[var(--gold-primary)] block mb-2">Penanaman Nilai & Target</span>
            <h3 className="heading-md text-[var(--text-primary)]">
              Budaya Sekolah & Target Kompetensi
            </h3>
            <GoldDivider className="mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Target Kompetensi SD */}
            <div className="p-8 bg-[var(--bg-primary)] border border-[var(--gold-primary)] rounded-[4px] flex flex-col justify-between group hover:shadow-lg transition-all">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award size={20} className="text-[var(--gold-primary)]" />
                  <span className="text-label text-[var(--gold-primary)]">Target Kompetensi SD</span>
                </div>
                <h4 className="heading-sm text-[var(--text-primary)] mb-3">{targetSD.title}</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                  {targetSD.description}
                </p>
              </div>
              <Link
                to="/program/sd"
                className="mt-6 pt-4 border-t border-[var(--border-subtle)] font-[Jost] text-[var(--gold-primary)] text-xs tracking-[1px] inline-flex items-center gap-2 hover:text-[var(--gold-pale)] transition-colors"
              >
                Lihat Detail Program SD <ArrowRight size={13} />
              </Link>
            </div>

            {/* Budaya 1: Insight Learning */}
            {budaya[0] && (
              <div className="p-8 bg-[var(--bg-primary)] border border-[var(--border-gold)] rounded-[4px] flex flex-col justify-between group hover:border-[var(--gold-primary)] transition-all">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen size={20} className="text-[var(--gold-primary)]" />
                    <span className="text-label text-[var(--gold-primary)]">Budaya Pembelajaran</span>
                  </div>
                  <h4 className="heading-sm text-[var(--text-primary)] mb-3">{budaya[0].title}</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                    {budaya[0].description}
                  </p>
                </div>
                <Link
                  to="/kurikulum"
                  className="mt-6 pt-4 border-t border-[var(--border-subtle)] font-[Jost] text-[var(--gold-primary)] text-xs tracking-[1px] inline-flex items-center gap-2 hover:text-[var(--gold-pale)] transition-colors"
                >
                  Eksplorasi Kurikulum <ArrowRight size={13} />
                </Link>
              </div>
            )}

            {/* Budaya 2: Brothering */}
            {budaya[1] && (
              <div className="p-8 bg-[var(--bg-primary)] border border-[var(--border-gold)] rounded-[4px] flex flex-col justify-between group hover:border-[var(--gold-primary)] transition-all">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck size={20} className="text-[var(--gold-primary)]" />
                    <span className="text-label text-[var(--gold-primary)]">Budaya Sosial Santri</span>
                  </div>
                  <h4 className="heading-sm text-[var(--text-primary)] mb-3">{budaya[1].title}</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                    {budaya[1].description}
                  </p>
                </div>
                <Link
                  to="/kurikulum"
                  className="mt-6 pt-4 border-t border-[var(--border-subtle)] font-[Jost] text-[var(--gold-primary)] text-xs tracking-[1px] inline-flex items-center gap-2 hover:text-[var(--gold-pale)] transition-colors"
                >
                  Eksplorasi Kurikulum <ArrowRight size={13} />
                </Link>
              </div>
            )}
          </div>
        </SectionReveal>

        {/* ========================================================================= */}
        {/* 5. OVERVIEW 4 DOMAIN PEMBELAJARAN (Interactive Curriculum Preview) */}
        {/* ========================================================================= */}
        <SectionReveal>
          <div className="mt-16 pt-12 border-t border-[var(--border-gold)]">
            <div className="text-center max-w-[700px] mx-auto mb-10">
              <span className="text-label text-[var(--gold-primary)] block mb-2">Struktur Pendidikan</span>
              <h3 className="heading-md text-[var(--text-primary)] mb-3">
                4 Domain Pembelajaran Utama
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-light">
                Kurikulum terpadu yang memadukan keimanan alami, kedewasaan aqil baligh, sains akademik, dan kebermanfaatan hidup.
              </p>
              <GoldDivider className="mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {kurikulumContent.tabs.map((tab, idx) => (
                <div
                  key={tab.id}
                  className="p-6 bg-[var(--bg-primary)] border border-[var(--border-gold)] rounded-[4px] hover:border-[var(--gold-primary)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-[Cormorant_Garamond] text-2xl font-semibold text-[var(--gold-primary)] block mb-2">
                      0{idx + 1}
                    </span>
                    <h4 className="heading-sm text-[var(--text-primary)] mb-2">{tab.label}</h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light line-clamp-3">
                      {tab.description}
                    </p>
                  </div>
                  <Link
                    to="/kurikulum"
                    className="mt-4 inline-flex items-center gap-1.5 font-[Jost] text-[11px] uppercase tracking-wider text-[var(--gold-primary)] hover:text-[var(--gold-pale)] transition-colors"
                  >
                    Selengkapnya <ArrowRight size={11} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  )
}

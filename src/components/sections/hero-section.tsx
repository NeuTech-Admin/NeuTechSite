import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { WaveDivider } from '@/components/ui/wave-divider'
import { InitiativeCard } from '@/components/ui/initiative-card'
import { NeuTechOrbit } from '@/components/sections/neutech-orbit'
import { HERO_CONTENT, INITIATIVES, ABOUT_SECTION } from '@/config/home-content'
import { COLORS, FONTS, ANIMATION_DURATIONS } from '@/config/theme'

// ─── Bubbles ─────────────────────────────────────────────────────────────────
// The WaveDivider (100 px tall) is moved INSIDE the hero div so bubbles can
// start at negative bottom values — inside the wave — and float up through it.
// Hero div uses position:relative without overflow:hidden so nothing is clipped.

interface BubbleDef {
  left: string
  size: number
  duration: number
  delay: number
}

const BUBBLES: BubbleDef[] = [
  { left: '1%', size: 10, duration: 10, delay: 0 },
  { left: '5%', size: 22, duration: 14, delay: 4 },
  { left: '9%', size: 8, duration: 9, delay: 8 },
  { left: '14%', size: 16, duration: 12, delay: 2 },
  { left: '18%', size: 6, duration: 11, delay: 6 },
  { left: '22%', size: 28, duration: 16, delay: 1 },
  { left: '27%', size: 12, duration: 10, delay: 9 },
  { left: '32%', size: 9, duration: 13, delay: 5 },
  { left: '37%', size: 20, duration: 11, delay: 3 },
  { left: '42%', size: 7, duration: 9, delay: 11 },
  { left: '47%', size: 18, duration: 14, delay: 7 },
  { left: '52%', size: 11, duration: 10, delay: 0 },
  { left: '57%', size: 25, duration: 15, delay: 4 },
  { left: '62%', size: 8, duration: 9, delay: 10 },
  { left: '67%', size: 14, duration: 12, delay: 2 },
  { left: '72%', size: 6, duration: 11, delay: 8 },
  { left: '77%', size: 22, duration: 13, delay: 5 },
  { left: '82%', size: 10, duration: 10, delay: 3 },
  { left: '87%', size: 18, duration: 14, delay: 7 },
  { left: '92%', size: 8, duration: 9, delay: 1 },
]

function FloatingBubbles() {
  return (
    <>
      {BUBBLES.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            // Start from ~70px below the hero div's bottom edge — inside the wave.
            // Because the hero has no overflow:hidden, this renders inside the wave SVG area.
            bottom: '-70px',
            left: b.left,
            width: b.size,
            height: b.size,
            backgroundColor: COLORS.primaryBlue,
          }}
          animate={{
            // Travel far enough to cross the hero; fade out before reaching content
            y: [0, -420],
            opacity: [0, 0.28, 0.24, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            repeatDelay: b.duration * 0.2,
            ease: 'linear',
            times: [0, 0.05, 0.65, 1],
          }}
        />
      ))}
    </>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <div className="flex flex-col w-full h-fit">

      {/* ── Main Hero + Wave (combined so bubbles can span both) ── */}
      {/* No overflow-hidden: allows bubbles to start from inside the wave below */}
      <div className="relative">
        <FloatingBubbles />

        {/* Content — z-10 so it sits above bubbles */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 flex items-center min-h-[40rem] max-lg:flex-col max-lg:py-16 max-lg:gap-10">

          {/* Text — left column */}
          <div className="flex flex-col flex-1 pr-12 max-lg:pr-0 max-lg:items-center max-lg:text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-md uppercase tracking-[0.2em] mb-2 font-semibold pl-0.5"
              style={{ color: COLORS.primaryBlue, fontFamily: FONTS.ui, fontWeight: 700 }}
            >
              NeuTech Foundation
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="text-[2.9rem] leading-[1.18] mb-9 max-lg:text-[2rem]"
              style={{ fontFamily: FONTS.heading, color: '#0c1f2e', fontWeight: 800 }}
            >
              {HERO_CONTENT.tagline}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to={HERO_CONTENT.ctaLink}>
                <button
                  className="inline-flex items-center gap-2 text-white text-sm px-7 py-3 rounded-full transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
                  style={{ backgroundColor: COLORS.primaryBlue, fontFamily: FONTS.ui, fontWeight: 700 }}
                >
                  {HERO_CONTENT.ctaText}
                  <ArrowRight size={16} />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* SVG orbit — right column, hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-[540px] h-[480px] shrink-0 max-lg:hidden"
          >
            <NeuTechOrbit className="w-full h-full" />
          </motion.div>
        </div>

        {/* Wave is INSIDE the hero div so bubbles can originate from within it */}
        <div className="relative z-10">
          <WaveDivider variant="top" />
        </div>
      </div>

      {/* ── Initiatives Section — taller for more breathing room ── */}
      <div
        className="flex flex-col items-center justify-center"
        style={{ backgroundColor: COLORS.primaryBlue }}
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: ANIMATION_DURATIONS.medium }}
          className="text-white mt-16 mb-4"
          style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: '2.8rem' }}
        >
          Our Initiatives
        </motion.span>

        <div
          className="w-full flex flex-row items-center justify-evenly py-12 mb-16 max-lg:flex-col max-lg:gap-8 max-lg:py-12"
          style={{ backgroundColor: COLORS.primaryBlue }}
        >
          {INITIATIVES.map((initiative, index) => (
            <div key={initiative.href} className="contents">
              <InitiativeCard
                title={initiative.title}
                href={initiative.href}
                delay={0.1 + index * 0.1}
              />
              {index < INITIATIVES.length - 1 && (
                <div className="w-px bg-white h-48 max-lg:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDivider variant="bottom" height={154} />

      {/* ── Learn About Us ── */}
      <div className="flex flex-row justify-center mt-32 mb-24 max-lg:w-full max-lg:my-20 max-lg:text-center max-lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: ANIMATION_DURATIONS.medium }}
          className="flex flex-col items-center max-w-[38vw] -mt-8 max-lg:max-w-full max-lg:mt-0"
        >
          <div className="flex flex-col">
            <span
              className="mb-4 max-lg:text-[2.5rem]"
              style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: '3.5rem', color: COLORS.primaryBlue }}
            >
              {ABOUT_SECTION.title}
            </span>
            <p
              className="mb-12"
              style={{ fontFamily: FONTS.heading, fontWeight: 700, fontSize: '1.7rem', color: COLORS.primaryBlue }}
            >
              {ABOUT_SECTION.description}
            </p>
          </div>
          <Link to={ABOUT_SECTION.ctaLink}>
            <button
              className="inline-flex items-center gap-2 text-white text-sm px-7 py-3 rounded-full transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
              style={{ backgroundColor: COLORS.primaryBlue, fontFamily: FONTS.ui, fontWeight: 700 }}
            >
              {ABOUT_SECTION.ctaText}
              <ArrowRight size={16} />
            </button>
          </Link>
        </motion.div>

        <motion.img
          src={ABOUT_SECTION.image}
          alt={ABOUT_SECTION.imageAlt}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="w-fit h-[25rem] -mt-20 ml-24 max-lg:hidden"
        />
      </div>

      {/* ── Contact Section ── */}
      <div className="max-w-7xl mx-auto px-8 py-24 max-lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: ANIMATION_DURATIONS.medium }}
          className="flex flex-row gap-20 max-lg:flex-col max-lg:gap-12"
        >
          {/* Left — description */}
          <div className="flex flex-col justify-center max-w-sm max-lg:max-w-full">
            <span
              className="mb-3 text-xs uppercase tracking-[0.2em]"
              style={{ color: COLORS.primaryBlue, fontFamily: FONTS.ui, fontWeight: 700 }}
            >
              Reach Out
            </span>
            <span
              className="mb-5 leading-tight"
              style={{ fontFamily: FONTS.heading, fontWeight: 900, fontSize: '2.6rem', color: '#0c1f2e' }}
            >
              Get in Touch
            </span>
            <p
              className="mb-6 leading-relaxed"
              style={{ fontFamily: FONTS.ui, fontSize: '1rem', color: '#4B5563' }}
            >
              Have a question, want to get involved, or just want to say hello? We'd love to hear from you — our team will get back to you shortly.
            </p>
            <a
              href="mailto:info@ntfoundation.ca"
              className="text-sm font-semibold hover:opacity-75 transition-opacity w-fit"
              style={{ color: COLORS.primaryBlue, fontFamily: FONTS.ui }}
            >
              info@ntfoundation.ca
            </a>
          </div>

          {/* Right — form */}
          <form
            className="flex-1 flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-row gap-4 max-sm:flex-col">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#2585BB] transition-colors"
                style={{ fontFamily: FONTS.ui, color: '#0c1f2e' }}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#2585BB] transition-colors"
                style={{ fontFamily: FONTS.ui, color: '#0c1f2e' }}
              />
            </div>
            <textarea
              placeholder="Your message..."
              rows={5}
              className="px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#2585BB] transition-colors resize-none"
              style={{ fontFamily: FONTS.ui, color: '#0c1f2e' }}
            />
            <div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 text-white text-sm px-7 py-3 rounded-full transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
                style={{ backgroundColor: COLORS.primaryBlue, fontFamily: FONTS.ui, fontWeight: 800 }}
              >
                Send Message
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>

    </div>
  )
}

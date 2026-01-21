import { motion } from 'framer-motion'
import { PageLayout } from '@/components/layout/page-layout'
import { THREE_ARMS_TITLE, PRINCIPLES } from '@/config/three-arms-content'
import { COLORS, FONTS, ANIMATION_DURATIONS } from '@/config/theme'

export function ThreeArms() {
  return (
    <PageLayout>
      <div className="flex flex-col w-full min-h-screen bg-white py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_DURATIONS.medium }}
          className="text-center mb-20 px-8"
        >
          <h1
            className={`text-[4rem] text-[${COLORS.primaryBlue}] mb-6 max-lg:text-[3rem]`}
            style={{ fontFamily: FONTS.nunitoBlack }}
          >
            {THREE_ARMS_TITLE}
          </h1>
          <div className="w-32 h-1 bg-[#2585BB] mx-auto" />
        </motion.div>

        {/* Principles */}
        <div className="max-w-7xl mx-auto w-full px-8 space-y-32">
          {PRINCIPLES.map((principle) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: ANIMATION_DURATIONS.medium,
                delay: 0.2,
              }}
              className={`flex items-center gap-12 max-lg:flex-col ${
                principle.imagePosition === 'right' ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: principle.imagePosition === 'left' ? -50 : 50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: ANIMATION_DURATIONS.medium,
                  delay: 0.3,
                }}
                className="flex-shrink-0"
              >
                <img
                  src={principle.image}
                  alt={principle.imageAlt}
                  className="w-[300px] h-auto object-contain max-lg:w-[200px]"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: principle.imagePosition === 'left' ? 50 : -50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: ANIMATION_DURATIONS.medium,
                  delay: 0.4,
                }}
                className="flex-1"
              >
                <h2
                  className={`text-[2.5rem] text-[${COLORS.primaryBlue}] mb-6 max-lg:text-[2rem] max-lg:text-center`}
                  style={{ fontFamily: FONTS.nunitoBlack }}
                >
                  {principle.title}
                </h2>
                <p
                  className={`text-[1.3rem] text-[${COLORS.primaryBlue}] leading-relaxed max-lg:text-center`}
                  style={{ fontFamily: FONTS.nunitoExtraBold }}
                >
                  {principle.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

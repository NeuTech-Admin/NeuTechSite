import { motion } from 'framer-motion'
import { PageLayout } from '@/components/layout/page-layout'
import { FOUNDERS } from '@/config/meet-us-content'
import { COLORS, FONTS, ANIMATION_DURATIONS } from '@/config/theme'

export function MeetUs() {
  return (
    <PageLayout>
      <div className="flex flex-col w-full min-h-screen bg-white py-20 px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_DURATIONS.medium }}
          className="text-center mb-20"
        >
          <h1
            className={`text-[4rem] text-[${COLORS.primaryBlue}] mb-4 max-lg:text-[3rem]`}
            style={{ fontFamily: FONTS.nunitoBlack }}
          >
            Meet The Team
          </h1>
          <p
            className={`text-[1.5rem] text-[${COLORS.primaryBlue}] max-w-3xl mx-auto`}
            style={{ fontFamily: FONTS.nunitoExtraBold }}
          >
            Meet the passionate individuals behind the NeuTech Foundation
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          {FOUNDERS.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: ANIMATION_DURATIONS.medium,
                delay: index * 0.2,
              }}
              className="flex flex-col items-center text-center"
            >
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: ANIMATION_DURATIONS.medium,
                  delay: index * 0.2 + 0.2,
                }}
                className="mb-8"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-64 h-64 rounded-full object-cover"
                />
              </motion.div>

              {/* Name and Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: ANIMATION_DURATIONS.medium,
                  delay: index * 0.2 + 0.3,
                }}
                className="mb-6"
              >
                <h2
                  className={`text-[2.5rem] text-[${COLORS.primaryBlue}] mb-2`}
                  style={{ fontFamily: FONTS.nunitoBlack }}
                >
                  {founder.name}
                </h2>
                <p
                  className={`text-[1.3rem] text-[${COLORS.lightBlue}]`}
                  style={{ fontFamily: FONTS.nunitoExtraBold }}
                >
                  {founder.role}
                </p>
              </motion.div>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: ANIMATION_DURATIONS.medium,
                  delay: index * 0.2 + 0.4,
                }}
                className={`text-[1.15rem] text-[${COLORS.primaryBlue}] leading-relaxed text-justify max-w-2xl`}
                style={{ fontFamily: FONTS.nunitoExtraBold }}
              >
                {founder.bio}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

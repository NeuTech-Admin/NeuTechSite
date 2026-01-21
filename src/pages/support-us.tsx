import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { PageLayout } from '@/components/layout/page-layout'
import { AngledDivider } from '@/components/ui/angled-divider'
import { SUPPORT_CONTENT, SPONSORS } from '@/config/support-content'
import { COLORS, FONTS, ANIMATION_DURATIONS } from '@/config/theme'

export function SupportUs() {
  return (
    <PageLayout>
      <div className="flex flex-col w-full h-fit">
        {/* Hero Section */}
        <div className="bg-white flex items-center justify-center min-h-[35rem] w-full py-16 px-8 max-lg:flex-col max-lg:text-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.medium, ease: 'easeOut' }}
            className="flex flex-col max-w-[45vw] max-lg:max-w-full"
          >
            <span
              className={`text-[3.25rem] text-[${COLORS.primaryBlue}] mb-8 max-lg:text-[2.5rem]`}
              style={{ fontFamily: FONTS.nunitoBlack }}
            >
              {SUPPORT_CONTENT.title}
            </span>
            <p
              className={`text-[1.5rem] text-[${COLORS.primaryBlue}] mb-8 leading-relaxed`}
              style={{ fontFamily: FONTS.nunitoExtraBold }}
            >
              {SUPPORT_CONTENT.description}
            </p>
            <p
              className={`text-[1.3rem] text-[${COLORS.primaryBlue}] mb-4`}
              style={{ fontFamily: FONTS.nunitoExtraBold }}
            >
              {SUPPORT_CONTENT.contactPrompt}
            </p>
            <a
              href={`mailto:${SUPPORT_CONTENT.email}`}
              className={`inline-flex items-center gap-3 text-[1.5rem] text-[${COLORS.lightBlue}] hover:text-[${COLORS.primaryBlue}] transition-colors duration-200 font-bold max-lg:justify-center`}
              style={{ fontFamily: FONTS.nunitoBlack }}
            >
              <Mail size={32} />
              {SUPPORT_CONTENT.email}
            </a>
          </motion.div>

          <motion.img
            src={SUPPORT_CONTENT.image}
            alt={SUPPORT_CONTENT.imageAlt}
            initial={{ opacity: 0, x: '50%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.long, ease: 'easeOut' }}
            className="w-fit h-[30rem] object-contain max-lg:hidden"
          />
        </div>

        {/* Top Angled Divider */}
        <AngledDivider variant="top" />

        {/* Sponsors Section */}
        <div className={`bg-[${COLORS.primaryBlue}] py-20 flex flex-col items-center`}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: ANIMATION_DURATIONS.medium }}
            className="text-[3rem] text-white mb-16 max-lg:text-[2.5rem] text-center px-8"
            style={{ fontFamily: FONTS.nunitoBlack }}
          >
            Our Sponsors
          </motion.h2>

          <div className="flex flex-row flex-wrap justify-center items-center gap-16 px-8 max-w-6xl max-lg:gap-12">
            {SPONSORS.map((sponsor, index) => (
              <motion.img
                key={sponsor.name}
                src={sponsor.logo}
                alt={sponsor.alt}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: ANIMATION_DURATIONS.medium,
                  delay: index * 0.2,
                }}
                className="max-w-[250px] max-h-[120px] w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* Bottom Angled Divider */}
        <AngledDivider variant="bottom" />
      </div>
    </PageLayout>
  )
}

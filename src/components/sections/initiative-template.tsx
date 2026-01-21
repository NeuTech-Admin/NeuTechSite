import { motion } from 'framer-motion'
import { PageLayout } from '@/components/layout/page-layout'
import { COLORS, FONTS, ANIMATION_DURATIONS } from '@/config/theme'

interface InitiativeTemplateProps {
  title: string
  missionStatement: string
  image: string
  imageAlt: string
}

export function InitiativeTemplate({
  title,
  missionStatement,
  image,
  imageAlt,
}: InitiativeTemplateProps) {
  return (
    <PageLayout>
      <div className="min-h-[80vh] flex items-center justify-center py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-row items-center justify-center gap-16 max-lg:flex-col">
          
          {/* Mission Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.long, ease: "easeOut" }}
            className="flex-1 max-w-2xl"
          >
            <h1 
              className="text-[4rem] max-md:text-[3rem] mb-8"
              style={{ 
                fontFamily: FONTS.nunitoBlack,
                color: COLORS.primaryBlue
              }}
            >
              {title}
            </h1>
            <p 
              className="text-[1.3rem] max-md:text-[1.1rem] leading-relaxed whitespace-pre-line"
              style={{ 
                fontFamily: FONTS.nunitoExtraBold,
                color: COLORS.primaryBlue
              }}
            >
              {missionStatement}
            </p>
          </motion.div>

          {/* Image */}
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.long, ease: "easeOut", delay: 0.2 }}
            src={image}
            alt={imageAlt}
            className="flex-1 max-w-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </PageLayout>
  )
}

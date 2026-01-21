import { motion } from 'framer-motion'
import { PageLayout } from '@/components/layout/page-layout'
import { AngledDivider } from '@/components/ui/angled-divider'
import { NavigationCard } from '@/components/ui/navigation-card'
import { MOTTO_WORDS, ABOUT_LOGO, NAVIGATION_CARDS } from '@/config/about-content'
import { COLORS, FONTS, ANIMATION_DURATIONS } from '@/config/theme'

export function AboutUs() {
  return (
    <PageLayout>
      {/* Hero Section with Logo and Motto */}
      <div className="flex flex-col items-center justify-center pt-24 bg-white">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: ANIMATION_DURATIONS.long, ease: "easeOut" }}
          src={ABOUT_LOGO.src}
          alt={ABOUT_LOGO.alt}
          className="w-auto h-64 mb-4 object-contain"
        />
        
        <div className="flex flex-row items-center gap-8 max-md:flex-col max-md:gap-4">
          {MOTTO_WORDS.map((word, index) => (
            <motion.p
              key={word}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: ANIMATION_DURATIONS.medium, 
                delay: 0.1 + index * 0.4,
                ease: "easeOut"
              }}
              className="text-[4rem] max-md:text-[3rem] font-bold"
              style={{ 
                fontFamily: FONTS.nunitoBlack,
                color: COLORS.primaryBlue
              }}
            >
              {word}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Top Angled Divider */}
      <AngledDivider variant="top" />

      {/* Navigation Cards Section */}
      <div 
        className="py-20"
        style={{ backgroundColor: COLORS.primaryBlue }}
      >
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {NAVIGATION_CARDS.map((card, index) => (
              <NavigationCard
                key={card.href}
                icon={card.icon}
                title={card.title}
                description={card.description}
                ctaText={card.ctaText}
                href={card.href}
                delay={0.1 + index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Angled Divider */}
      <AngledDivider variant="bottom" />
    </PageLayout>
  )
}

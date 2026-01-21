import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { WaveDivider } from '@/components/ui/wave-divider'
import { InitiativeCard } from '@/components/ui/initiative-card'
import { HERO_CONTENT, INITIATIVES, ABOUT_SECTION } from '@/config/home-content'
import { COLORS, FONTS, STYLES, ANIMATION_DURATIONS } from '@/config/theme'

export function HeroSection() {
  return (
    <div className="flex flex-col w-full h-fit">
      {/* Main Hero Content */}
      <div className="bg-white flex items-center justify-center h-[35rem] w-full lg:h-[35rem] max-lg:h-fit max-lg:flex-col max-lg:py-16 max-lg:px-10">
        
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: ANIMATION_DURATIONS.long, ease: "easeOut" }}
          className="flex flex-col items-center max-w-[38vw] -mt-8 max-lg:max-w-full max-lg:mt-0 max-lg:text-center"
        >
          <p 
            className="text-[3.25rem] mb-12 mt-12 max-lg:text-[2rem] max-lg:w-full"
            style={{ 
              fontFamily: FONTS.nunitoBlack,
              color: COLORS.primaryBlue
            }}
          >
            {HERO_CONTENT.tagline}
          </p>
          <Link to={HERO_CONTENT.ctaLink}>
            <Button 
              size="lg"
              className="text-white px-8 py-6 text-lg font-bold transition-all duration-300"
              style={{
                backgroundColor: COLORS.primaryBlue,
                borderRadius: STYLES.borderRadius
              }}
            >
              {HERO_CONTENT.ctaText}
            </Button>
          </Link>
        </motion.div>

        {/* Hero Image - Hidden on mobile */}
        <motion.img
          src={HERO_CONTENT.heroImage}
          alt={HERO_CONTENT.heroImageAlt}
          initial={{ opacity: 0, x: '50%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-fit h-[30rem] max-lg:hidden"
        />
      </div>

      {/* Wave Divider */}
      <WaveDivider variant="top" />

      {/* Initiatives Section */}
      <div 
        className="flex flex-col items-center justify-center pb-4"
        style={{ backgroundColor: COLORS.primaryBlue }}
      >
        <motion.span 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: ANIMATION_DURATIONS.medium }}
          className="text-white text-[4rem] mt-12 md:text-[2.5rem]"
          style={{ fontFamily: FONTS.nunitoExtraBold }}
        >
          Our Initiatives
        </motion.span>
        
        <div 
          className="w-full flex flex-row items-center justify-evenly mb-12 max-lg:flex-col max-lg:h-fit max-lg:py-12"
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

      {/* Learn About Us Section */}
      <div className="flex flex-row justify-center mt-32 mb-24 max-lg:w-full max-lg:my-20 max-lg:text-center max-lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: ANIMATION_DURATIONS.medium }}
          className="flex flex-col items-center max-w-[38vw] -mt-8 max-lg:max-w-full max-lg:mt-0"
        >
          <div className="flex flex-col">
            <span 
              className="text-[3.5rem] mb-4 max-lg:text-[2.5rem]"
              style={{ 
                fontFamily: FONTS.nunitoExtraBold,
                color: COLORS.primaryBlue
              }}
            >
              {ABOUT_SECTION.title}
            </span>
            <p 
              className="text-[1.7rem] mb-12"
              style={{ 
                fontFamily: FONTS.nunitoBlack,
                color: COLORS.primaryBlue
              }}
            >
              {ABOUT_SECTION.description}
            </p>
          </div>
          <Link to={ABOUT_SECTION.ctaLink}>
            <Button 
              size="lg"
              className="text-white px-8 py-6 text-lg font-bold transition-all duration-300"
              style={{
                backgroundColor: COLORS.primaryBlue,
                borderRadius: STYLES.borderRadius
              }}
            >
              {ABOUT_SECTION.ctaText}
            </Button>
          </Link>
        </motion.div>

        <motion.img
          src={ABOUT_SECTION.image}
          alt={ABOUT_SECTION.imageAlt}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-fit h-[25rem] -mt-20 ml-24 max-lg:hidden"
        />
      </div>
    </div>
  )
}

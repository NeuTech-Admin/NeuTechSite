import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COLORS, FONTS, STYLES, ANIMATION_DURATIONS } from '@/config/theme'

interface NavigationCardProps {
  icon: LucideIcon
  title: string
  description: string
  ctaText: string
  href: string
  delay?: number
}

export function NavigationCard({
  icon: Icon,
  title,
  description,
  ctaText,
  href,
  delay = 0,
}: NavigationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: ANIMATION_DURATIONS.medium, delay }}
      className="flex flex-col items-center text-center p-8 bg-white rounded-lg max-w-sm"
      style={{ boxShadow: STYLES.boxShadow.card }}
    >
      <Icon 
        className="mb-4" 
        size={64}
        style={{ color: COLORS.primaryBlue }}
      />
      <h3 
        className="text-[2rem] mb-4"
        style={{ 
          fontFamily: FONTS.nunitoExtraBold,
          color: COLORS.primaryBlue
        }}
      >
        {title}
      </h3>
      <p 
        className="text-[1.1rem] mb-6 text-gray-700"
        style={{ fontFamily: FONTS.ubuntuBold }}
      >
        {description}
      </p>
      <Link to={href}>
        <Button 
          size="lg"
          className="text-white px-8 py-4 text-base font-bold"
          style={{
            backgroundColor: COLORS.primaryBlue,
            borderRadius: STYLES.borderRadius
          }}
        >
          {ctaText}
        </Button>
      </Link>
    </motion.div>
  )
}

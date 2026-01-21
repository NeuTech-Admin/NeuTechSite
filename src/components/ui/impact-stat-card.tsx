import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { type LucideIcon } from 'lucide-react'
import { COLORS, FONTS, STYLES, ANIMATION_DURATIONS } from '@/config/theme'

interface ImpactStatCardProps {
  icon: LucideIcon
  label: string
  count: number
  suffix?: string
  unit: string
  delay?: number
}

export function ImpactStatCard({ 
  icon: Icon, 
  label, 
  count, 
  suffix = '+', 
  unit,
  delay = 0 
}: ImpactStatCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: ANIMATION_DURATIONS.medium, delay }}
      className="h-fit w-[25rem] min-h-[17rem] bg-white flex flex-col p-4 mx-8 my-0 mb-8 text-center justify-around"
      style={{ 
        boxShadow: STYLES.boxShadow.card,
        borderRadius: STYLES.borderRadius
      }}
    >
      <Icon 
        className="mx-auto" 
        size={64}
        style={{ color: COLORS.primaryBlue }}
      />
      <p 
        className="text-[3rem]"
        style={{ 
          fontFamily: FONTS.nunitoExtraBold,
          color: COLORS.primaryBlue
        }}
      >
        {label}
      </p>
      <p 
        className="leading-[3.25rem] text-[2rem]"
        style={{ 
          fontFamily: FONTS.nunitoExtraBold,
          color: COLORS.primaryBlue
        }}
      >
        <span className="text-[3rem] mb-4 block">
          <CountUp 
            end={count} 
            suffix={suffix}
            duration={ANIMATION_DURATIONS.countUp}
            enableScrollSpy
            scrollSpyOnce
          />
        </span>
        {unit}
      </p>
    </motion.div>
  )
}

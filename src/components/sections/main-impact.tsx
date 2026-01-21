import { motion } from 'framer-motion'
import { AngledDivider } from '@/components/ui/angled-divider'
import { ImpactStatCard } from '@/components/ui/impact-stat-card'
import { IMPACT_STATS } from '@/config/home-content'
import { COLORS, FONTS, ANIMATION_DURATIONS } from '@/config/theme'

export function MainImpact() {
  return (
    <div className="w-full -mt-40 mb-40">
      
      {/* Top Angled Divider */}
      <AngledDivider variant="top" />

      {/* Impact Stats Content */}
      <div 
        className="py-12"
        style={{ backgroundColor: COLORS.primaryBlue }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: ANIMATION_DURATIONS.medium }}
          className="text-white text-center text-[4rem] mb-8"
          style={{ fontFamily: FONTS.nunitoBlack }}
        >
          Our Impact
        </motion.div>

        <div className="flex flex-row justify-center gap-0 px-8 max-md:flex-col max-md:gap-12 max-md:items-center">
          {IMPACT_STATS.map((stat, index) => (
            <ImpactStatCard
              key={stat.unit}
              icon={stat.icon}
              label={stat.label}
              count={stat.count}
              suffix={stat.suffix}
              unit={stat.unit}
              delay={0.2 + index * 0.2}
            />
          ))}
        </div>
      </div>

      {/* Bottom Angled Divider */}
      <AngledDivider variant="bottom" />
      
    </div>
  )
}

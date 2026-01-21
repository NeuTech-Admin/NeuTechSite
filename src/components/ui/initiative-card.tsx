import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { FONTS, STYLES, ANIMATION_DURATIONS } from '@/config/theme'

interface InitiativeCardProps {
  title: string
  href: string
  delay?: number
}

export function InitiativeCard({ title, href, delay = 0 }: InitiativeCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: ANIMATION_DURATIONS.medium, delay }}
      className="bg-[#2585BB] flex flex-row items-center justify-center p-8 text-center text-white flex-1 h-72 transition-all duration-750 max-lg:w-full"
    >
      <div className="flex flex-col items-center">
        <span 
          className="text-[2.5rem] my-8"
          style={{ fontFamily: FONTS.nunitoExtraBold }}
        >
          {title}
        </span>
        <Link to={href}>
          <Button 
            size="lg"
            className="bg-white text-[#2585BB] hover:bg-gray-100 px-8 py-6 text-lg font-bold"
            style={{ borderRadius: STYLES.borderRadius }}
          >
            Find Out More
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

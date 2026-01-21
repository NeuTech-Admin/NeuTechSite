import { Landmark, Users, Heart, type LucideIcon } from 'lucide-react'

// Motto words
export const MOTTO_WORDS = ['Reduce', 'Renew', 'Reinforce'] as const

// Logo
export const ABOUT_LOGO = {
  src: '/SiteLogoTextless.png',
  alt: 'NeuTech Foundation Logo',
} as const

// Navigation cards
export interface NavigationCard {
  icon: LucideIcon
  title: string
  description: string
  ctaText: string
  href: string
}

export const NAVIGATION_CARDS: NavigationCard[] = [
  {
    icon: Landmark,
    title: 'Our Principles',
    description: "Learn more about the NT Foundation's three pillars.",
    ctaText: 'The Three Arms',
    href: '/three-arms',
  },
  {
    icon: Users,
    title: 'Who we are',
    description: 'Meet the people behind the NT Foundation.',
    ctaText: 'Meet Us',
    href: '/meet-us',
  },
  {
    icon: Heart,
    title: 'Support Our Cause',
    description: 'Discover ways to support our cause.',
    ctaText: 'Support Us',
    href: '/support-us',
  },
]

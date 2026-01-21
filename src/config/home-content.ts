import { Users, Recycle, type LucideIcon } from 'lucide-react'

// Hero section content
export const HERO_CONTENT = {
  tagline: 'Making Technology Innovation more Accessible and Sustainable',
  ctaText: 'Support Us',
  ctaLink: '/support-us',
  heroImage: '/Recogair.png',
  heroImageAlt: 'Recogair',
} as const

// Initiatives section
export interface Initiative {
  title: string
  href: string
}

export const INITIATIVES: Initiative[] = [
  { title: 'YouSEN', href: '/yousen' },
  { title: 'E-Waste Management', href: '/ewaste' },
  { title: 'OAISus', href: '/oaisus' },
]

// Learn More About Us section
export const ABOUT_SECTION = {
  title: 'Learn More About Us',
  description: 'Learn about why we do what we do. Understand the true purpose of the NTFoundation through our three core principles',
  ctaText: 'Learn More',
  ctaLink: '/about-us',
  image: '/SiteLogoTextless.png',
  imageAlt: 'Site Logo',
} as const

// Impact stats
export interface ImpactStat {
  icon: LucideIcon
  label: string
  count: number
  suffix: string
  unit: string
}

export const IMPACT_STATS: ImpactStat[] = [
  {
    icon: Users,
    label: 'Educated Over',
    count: 150,
    suffix: '+',
    unit: 'Youth',
  },
  {
    icon: Recycle,
    label: 'Recycled',
    count: 850,
    suffix: '+',
    unit: 'kgs of E-Waste',
  },
]

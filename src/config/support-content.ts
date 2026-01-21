// Support Us page content
export const SUPPORT_CONTENT = {
  title: 'Support Us',
  description:
    'Your support directly funds initiatives that impact our local communities. Support us to reduce electronics waste in the environment and improve access to technology.',
  contactPrompt: 'To discuss sponsorships or partnerships, contact us at:',
  email: 'info@ntfoundation.ca',
  image: '/support-us.png',
  imageAlt: 'Support Us',
} as const

// Sponsor logos
export interface Sponsor {
  name: string
  logo: string
  alt: string
}

export const SPONSORS: Sponsor[] = [
  {
    name: 'Rising Youth',
    logo: '/rising-youth.png',
    alt: 'Rising Youth',
  },
  {
    name: 'Government of Canada',
    logo: '/gov-canada.png',
    alt: 'Government of Canada',
  },
  {
    name: 'Canada Corps',
    logo: '/canada-corps.png',
    alt: 'Canada Corps',
  },
]

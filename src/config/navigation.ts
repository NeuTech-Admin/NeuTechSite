export interface NavItem {
  label: string
  href: string
}

export interface DropdownNavItem {
  label: string
  items: DropdownItem[]
}

export interface DropdownItem {
  title: string
  href: string
  description: string
}

// Main navigation items
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
]

// Dropdown navigation
export const DROPDOWN_NAV: DropdownNavItem = {
  label: 'Initiatives',
  items: [
    {
      title: 'OAISus',
      href: '/oaisus',
      description: 'Optimizing AI for Sustainability',
    },
    {
      title: 'YouSEN',
      href: '/yousen',
      description: 'Youth in Sustainable Engineering',
    },
    {
      title: 'E-Waste Management',
      href: '/ewaste',
      description: 'Technology reuse and redistribution',
    },
  ],
}

// Secondary navigation items (after dropdown)
export const SECONDARY_NAV_ITEMS: NavItem[] = [
  { label: 'Support Us', href: '/support-us' },
  { label: 'Gallery', href: '/gallery' },
]

// All mobile navigation items (flat list)
export const MOBILE_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'OAISus', href: '/oaisus' },
  { label: 'YouSEN', href: '/yousen' },
  { label: 'E-Waste Management', href: '/ewaste' },
  { label: 'Join Us', href: '/join-us' },
  { label: 'Meet Us', href: '/meet-us' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Support Us', href: '/support-us' },
]

// Helper to check if current path is an initiative
export const INITIATIVE_PATHS = DROPDOWN_NAV.items.map(item => item.href)

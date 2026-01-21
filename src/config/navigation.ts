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
      title: 'YouSEN',
      href: '/yousen',
      description: 'Youth in Sustainable Engineering',
    },
    {
      title: 'E-Waste Management',
      href: '/ewaste',
      description: 'Technology reuse and redistribution',
    },
    {
      title: 'OAISus',
      href: '/oaisus',
      description: 'Optimizing AI for Sustainability',
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
  { label: 'YouSEN', href: '/yousen' },
  { label: 'E-Waste Management', href: '/ewaste' },
  { label: 'OAISus', href: '/oaisus' },
  { label: 'Support Us', href: '/support-us' },
  { label: 'Gallery', href: '/gallery' },
]

// Helper to check if current path is an initiative
export const INITIATIVE_PATHS = DROPDOWN_NAV.items.map(item => item.href)

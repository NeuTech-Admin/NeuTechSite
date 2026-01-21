// Color palette
export const COLORS = {
  primaryBlue: '#2585BB',
  lightBlue: '#2FB7F1',
  hoverBlue: '#1e6fa0',
  lightHoverBlue: '#93d7ff',
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    600: '#4B5563',
    858585: '#858585', // Custom gray for shadows
  },
} as const

// Typography
export const FONTS = {
  nunitoBlack: 'Nunito-Black',
  nunitoExtraBold: 'Nunito-ExtraBold',
  ubuntuBold: 'Ubuntu-Bold',
} as const

// Common styles
export const STYLES = {
  borderRadius: '0.625rem',
  boxShadow: {
    subtle: '0px 2px 8px rgba(133, 133, 133, 0.15)',
    card: '0px 0px 8px rgb(88, 88, 88)',
  },
} as const

// Animation durations
export const ANIMATION_DURATIONS = {
  short: 0.2,
  medium: 0.6,
  long: 1.25,
  countUp: 4.5,
} as const

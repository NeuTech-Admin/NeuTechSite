import { COLORS } from '@/config/theme'

interface AngledDividerProps {
  variant?: 'top' | 'bottom'
  color?: string
}

export function AngledDivider({ 
  variant = 'top',
  color = COLORS.primaryBlue
}: AngledDividerProps) {
  const isTop = variant === 'top'
  
  return (
    <div 
      className={`w-full overflow-hidden leading-none ${isTop ? 'mt-32' : 'mb-20'}`}
      style={isTop ? { transform: 'rotate(180deg)' } : undefined}
    >
      <svg 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        className="relative block w-[calc(100%+1.3px)] h-[108px]"
      >
        <path 
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          fill={color}
        />
      </svg>
    </div>
  )
}

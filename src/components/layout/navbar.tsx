import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DROPDOWN_NAV, MOBILE_NAV_ITEMS, INITIATIVE_PATHS } from '@/config/navigation'
import { COLORS, FONTS } from '@/config/theme'

const HOME_LINK = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
]

const PILL_NAV_LINKS = [
  { label: 'Join Us', href: '/join-us' },
  { label: 'Meet Us', href: '/meet-us' },
  { label: 'Gallery', href: '/gallery' },
]


export function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path
  const isInitiativePath = () => INITIATIVE_PATHS.includes(location.pathname)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95">
      <div className="flex items-center justify-between h-16 px-8 max-w-7xl mx-auto">

        {/* Logo */}
        <Link to="/" className="outline-none shrink-0">
          <img src="/SiteLogo.png" alt="NeuTech Foundation" className="w-[145px] outline-none max-md:hidden" />
          <img src="/SiteLogoTextless.png" alt="NeuTech Foundation" className="w-11 outline-none md:hidden" />
        </Link>

        {/* Center pill nav — desktop only */}
        <div className="hidden lg:flex items-center bg-gray-50 border border-gray-100 rounded-full px-2 py-1 gap-0.5">

          {/* Static links — expand horizontally on hover */}
          {HOME_LINK.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                isActive(item.href)
                  ? 'text-[#2585BB] font-semibold bg-white shadow-sm px-5'
                  : 'text-gray-500 hover:text-gray-800 hover:px-6'
              )}
              style={{ fontFamily: FONTS.ubuntuBold }}
            >
              {item.label}
            </Link>
          ))}

          {/* Initiatives dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={cn(
                'flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
                isInitiativePath()
                  ? 'text-[#2585BB] font-semibold bg-white shadow-sm px-5'
                  : 'text-gray-500 hover:text-gray-800 hover:px-6'
              )}
              style={{ fontFamily: FONTS.ubuntuBold }}
            >
              Initiatives
              <ChevronDown
                size={13}
                className={cn('transition-transform duration-200 mt-px', dropdownOpen && 'rotate-180')}
              />
            </button>

            {/* pt-2 bridges the hover gap so the mouse doesn't leave the zone */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.16, ease: 'easeOut' }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-60 z-50"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2">
                    {DROPDOWN_NAV.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div
                          className="text-sm font-semibold text-gray-800 group-hover:text-[#2585BB] transition-colors"
                          style={{ fontFamily: FONTS.ubuntuBold }}
                        >
                          {item.title}
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {PILL_NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
                isActive(item.href)
                  ? 'text-[#2585BB] font-semibold bg-white shadow-sm px-5'
                  : 'text-gray-500 hover:text-gray-800 hover:px-6'
              )}
              style={{ fontFamily: FONTS.ubuntuBold }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Support Us CTA — desktop only */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/support-us"
            className="inline-flex items-center text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
            style={{ backgroundColor: COLORS.primaryBlue, fontFamily: FONTS.ubuntuBold }}
          >
            Support Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="lg:hidden flex items-center text-gray-700 outline-none cursor-pointer">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </SheetTrigger>
          <SheetContent
            side="top"
            className="w-full bg-white pt-20 border-none"
            style={{ boxShadow: '0px 4px 24px rgba(0,0,0,0.07)' }}
          >
            <div className="flex flex-col items-center text-center gap-1 pb-6">
              {MOBILE_NAV_ITEMS.filter((item) => item.href !== '/support-us').map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'w-full py-3.5 text-gray-700 text-lg font-semibold transition-all rounded-xl',
                    isActive(item.href) && 'text-[#2585BB] bg-blue-50'
                  )}
                  style={{ fontFamily: FONTS.ubuntuBold }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/support-us"
                onClick={() => setIsOpen(false)}
                className="mt-5 inline-flex text-white text-base font-semibold px-8 py-3 rounded-full cursor-pointer"
                style={{ backgroundColor: COLORS.primaryBlue, fontFamily: FONTS.ubuntuBold }}
              >
                Support Us
              </Link>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </nav>
  )
}

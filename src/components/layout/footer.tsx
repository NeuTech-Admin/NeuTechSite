import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook } from 'lucide-react'
import { COLORS, FONTS } from '@/config/theme'

const FOOTER_DARK = COLORS.primaryBlue

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'OAISus', href: '/oaisus' },
  { label: 'YouSEN', href: '/yousen' },
  { label: 'E-Waste Management', href: '/ewaste' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Support Us', href: '/support-us' },
]

export function Footer() {
  return (
    <div>
      {/* Wave: white → footer dark */}
      <div className="w-full overflow-hidden leading-none" style={{ transform: 'rotate(180deg)' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill={FOOTER_DARK}
          />
        </svg>
      </div>

      <footer style={{ backgroundColor: FOOTER_DARK }}>
        <div className="max-w-7xl mx-auto px-8 pt-2 pb-10">

          {/* Three-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-10 border-b border-white/10">

            {/* Brand */}
            <div className="flex flex-col gap-4">
              <img
                src="/SiteLogo.png"
                alt="NeuTech Foundation"
                className="w-36 brightness-0 invert opacity-90"
              />
              <p
                className="text-white/80 text-sm leading-relaxed"
                style={{ fontFamily: FONTS.ui }}
              >
                Making technology innovation more accessible and sustainable for communities across Canada.
              </p>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-3">
              <span
                className="text-white text-sm uppercase tracking-widest mb-1"
                style={{ fontFamily: FONTS.ui, fontWeight: 700 }}
              >
                Quick Links
              </span>
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white/80 text-sm hover:text-white transition-colors duration-200 w-fit"
                  style={{ fontFamily: FONTS.ui }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact + socials */}
            <div className="flex flex-col gap-4">
              <span
                className="text-white text-sm uppercase tracking-widest"
                style={{ fontFamily: FONTS.ui, fontWeight: 700 }}
              >
                Connect
              </span>
              <a
                href="mailto:info@ntfoundation.ca"
                className="text-white/80 text-sm hover:text-white transition-colors duration-200 w-fit"
                style={{ fontFamily: FONTS.ui }}
              >
                info@ntfoundation.ca
              </a>
              <p
                className="text-white/70 text-xs leading-relaxed"
                style={{ fontFamily: FONTS.ui }}
              >
                Follow us to stay up to date with our initiatives and events.
              </p>
              <div className="flex gap-3 mt-1">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="cursor-pointer text-white/75 hover:text-white transition-colors duration-200">
                  <Instagram size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="cursor-pointer text-white/75 hover:text-white transition-colors duration-200">
                  <Twitter size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="cursor-pointer text-white/75 hover:text-white transition-colors duration-200">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <p
            className="text-center text-white/60 text-xs mt-8"
            style={{ fontFamily: FONTS.ui }}
          >
            © {new Date().getFullYear()} NeuTech Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

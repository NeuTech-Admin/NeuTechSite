import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  NAV_ITEMS,
  DROPDOWN_NAV,
  SECONDARY_NAV_ITEMS,
  MOBILE_NAV_ITEMS,
  INITIATIVE_PATHS,
} from '@/config/navigation'

export function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path
  const isInitiativePath = () => INITIATIVE_PATHS.includes(location.pathname)

  return (
    <nav 
      className="sticky top-0 z-50 w-full bg-white"
      style={{ boxShadow: '0px 2px 8px rgba(133, 133, 133, 0.15)' }}
    >
      <div className="flex items-center justify-between h-20 px-8">
        
        {/* Logo */}
        <Link to="/" className="outline-none">
          <img 
            src="/SiteLogo.png" 
            alt="NeuTech Foundation"
            className="w-[170px] outline-none max-md:hidden"
          />
          <img 
            src="/SiteLogoTextless.png" 
            alt="NeuTech Foundation"
            className="w-16 outline-none md:hidden"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList className="gap-1">
            
            {/* Main nav items */}
            {NAV_ITEMS.map((item) => (
              <NavItem 
                key={item.href} 
                href={item.href} 
                isActive={isActive(item.href)}
              >
                {item.label}
              </NavItem>
            ))}

            {/* Dropdown nav */}
            <DropdownNav 
              label={DROPDOWN_NAV.label} 
              isActive={isInitiativePath()}
            >
              {DROPDOWN_NAV.items.map((item) => (
                <DropdownItem 
                  key={item.href}
                  href={item.href} 
                  title={item.title}
                  description={item.description}
                />
              ))}
            </DropdownNav>

            {/* Secondary nav items */}
            {SECONDARY_NAV_ITEMS.map((item) => (
              <NavItem 
                key={item.href} 
                href={item.href} 
                isActive={isActive(item.href)}
              >
                {item.label}
              </NavItem>
            ))}

          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="lg:hidden flex items-center mr-4 text-[#2585BB]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
            <span className="ml-2 text-[1.3rem] font-bold hidden sm:inline" style={{ fontFamily: 'Ubuntu-Bold' }}>
              Menu
            </span>
          </SheetTrigger>
          <SheetContent 
            side="top" 
            className="w-full bg-[#47a0d3] pt-20 border-none"
            style={{ boxShadow: '0px 0px 10px #858585' }}
          >
            <div className="flex flex-col items-center text-center">
              {MOBILE_NAV_ITEMS.map((item) => (
                <MobileNavItem 
                  key={item.href}
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  isActive={isActive(item.href)}
                >
                  {item.label}
                </MobileNavItem>
              ))}
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </nav>
  )
}

// Regular Nav Item Component
function NavItem({ 
  href, 
  isActive, 
  children 
}: { 
  href: string
  isActive: boolean
  children: React.ReactNode 
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link 
          to={href}
          className={cn(
            "inline-flex items-center justify-center rounded-md outline-none",
            "h-10 text-[1.1rem] px-4 cursor-pointer",
            "transition-colors duration-200",
            "hover:bg-gray-50 hover:text-cyan-600",
            isActive 
              ? "text-[#2585BB] font-extrabold" 
              : "text-[#2FB7F1] font-bold"
          )}
          style={{ fontFamily: 'Ubuntu-Bold' }}
        >
          {children}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

// Dropdown Nav Component
function DropdownNav({ 
  label, 
  isActive, 
  children 
}: { 
  label: string
  isActive: boolean
  children: React.ReactNode 
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        className={cn(
          "h-10 text-[1.1rem] px-4 cursor-pointer bg-transparent",
          "transition-colors duration-200",
          "hover:bg-gray-50 hover:text-cyan-600",
          isActive 
            ? "text-[#2585BB] font-extrabold" 
            : "text-[#2FB7F1] font-bold"
        )}
        style={{ fontFamily: 'Ubuntu-Bold' }}
      >
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="!bg-white !opacity-100 shadow-md rounded-md border-none p-0">
        <ul className="grid w-[240px] gap-0 p-2 bg-white">
          {children}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

// Dropdown Item Component
function DropdownItem({
  href,
  title,
  description,
}: { 
  href: string
  title: string
  description: string
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link 
          to={href}
          className={cn(
            "block select-none space-y-0.5 rounded-md p-2.5 leading-none no-underline outline-none",
            "transition-all duration-200 hover:bg-gray-50 cursor-pointer group"
          )}
        >
          <div 
            className="text-sm font-bold leading-tight text-[#2585BB] group-hover:text-[#2585BB]"
            style={{ fontFamily: 'Ubuntu-Bold' }}
          >
            {title}
          </div>
          <p className="line-clamp-2 text-[0.7rem] leading-tight text-gray-600 group-hover:text-gray-600 mt-0.5">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

// Mobile Nav Item Component
function MobileNavItem({ 
  href, 
  onClick, 
  isActive = false, 
  children 
}: { 
  href: string
  onClick: () => void
  isActive?: boolean
  children: React.ReactNode 
}) {
  return (
    <Link 
      to={href} 
      onClick={onClick}
      className={cn(
        "w-full py-10 text-white text-[1.75rem] font-bold transition-all",
        isActive && "bg-[#93d7ff] text-[#2585BB]"
      )}
      style={{ fontFamily: 'Ubuntu-Bold' }}
    >
      {children}
    </Link>
  )
}

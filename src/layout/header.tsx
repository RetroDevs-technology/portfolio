import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Our Team', href: '/team' },
]

export default function Header() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <header className='bg-[#E7E3FF] border-b border-purple-100'>
      <div className='container mx-auto px-4 py-8'>
        <nav className='relative flex items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-2 z-10'>
            <img
              src='/assets/retrodevslogo.png'
              alt='RetroDevs Logo'
              className='w-8 h-8'
            />
            <h3 className='text-xl font-bold text-black'>RetroDevs</h3>
          </Link>

          {/* Centered Navigation */}
          <ul className='hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2'>
            {navigationItems.map((item) => {
              const isActive = currentPath === item.href
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={cn(
                      'font-sans text-lg leading-none transition-colors',
                      isActive
                        ? 'text-gray-800 font-bold'
                        : 'text-gray-600 font-medium hover:text-[#4A3880]'
                    )}>
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA Button */}
          <div className='z-10'>
            <Link to='/contact'>
              <Button className='font-heading py-[14px] px-6 font-bold bg-[#4A3880] text-[#F9F8FF] hover:bg-[#3A2B66] transition-colors rounded-[4px] gap-2'>
                Start a project
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

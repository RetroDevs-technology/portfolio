import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-white border-t border-gray-200 py-6 md:py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8'>
          {/* Logo and Company Name */}
          <Link to='/' className='flex items-center space-x-2'>
            <img
              src='/assets/retrodevslogo.png'
              alt='RetroDevs Logo'
              className='w-8 h-8'
            />
            <span className='text-lg md:text-xl font-bold text-gray-800 font-sans'>RetroDevs</span>
          </Link>

          {/* Copyright */}
          <div className='text-sm md:text-base text-gray-500 font-sans'>
            © 2020 RetroDevs. All rights reserved.
          </div>

          {/* Social Media Icons */}
          <div className='flex items-center gap-3'>
            <a
              href='https://github.com/RetroDevs-technology'
              className='w-8 h-8 rounded-full bg-[#493C81] flex items-center justify-center text-white hover:bg-[#3A2B66] transition-colors'>
              <Github className='w-4 h-4' />
            </a>
            <a
              href='https://x.com/RetroDevsTech'
              className='w-8 h-8 rounded-full bg-[#493C81] flex items-center justify-center text-white hover:bg-[#3A2B66] transition-colors'>
              <Twitter className='w-4 h-4' />
            </a>
            {/* <a
              href='https://www.instagram.com/retrodevs'
              className='w-8 h-8 rounded-full bg-[#493C81] flex items-center justify-center text-white hover:bg-[#3A2B66] transition-colors'>
              <Instagram className='w-4 h-4' />
            </a> */}
            <a
              href='https://www.linkedin.com/in/retro-devs-storage-5b28123a3/'
              className='w-8 h-8 rounded-full bg-[#493C81] flex items-center justify-center text-white hover:bg-[#3A2B66] transition-colors'>
              <Linkedin className='w-4 h-4' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

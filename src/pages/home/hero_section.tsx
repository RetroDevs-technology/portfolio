import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className='bg-[#E7E3FF] py-16 md:py-24 lg:py-0 lg:pt-24 ' id='hero'>
      <div className='container mx-auto px-4 md:px-[100px]'>
        {/* Hero Content */}
        <div className='flex flex-col items-center text-center space-y-8 mb-16 md:mb-24'>
          {/* Main Heading */}
          <h1 className='text-3xl md:text-5xl lg:text-[64px] font-heading font-bold text-black max-w-5xl leading-[120%] tracking-[-0.04em] text-center'>
            Where World-Class Design Meets Elite Development
          </h1>

          {/* Sub-text */}
          <p className='text-lg md:text-xl lg:text-2xl font-sans font-normal text-black max-w-3xl leading-[140%] tracking-[-0.02em] text-center'>
            Retro Devs design, develop, and manage exceptional websites using a perfect blend of
            timeless creativity and cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
            <Link to='/contact'>
              <Button className='w-[155px] h-[51px] py-[14px] px-6 font-medium bg-[#493C81] text-[#F9F8FF] hover:bg-[#3A2B66] transition-colors rounded-[4px] gap-2'>
                Start a project
              </Button>
            </Link>
            <Link to='/projects'>
              <Button
                variant='outline'
                className='w-[155px] h-[51px] py-[14px] px-6 font-medium border-2 border-[#493C81] text-[#493C81] bg-white hover:bg-[#F2F0FF] transition-colors rounded-[4px] gap-2'>
                View our work
              </Button>
            </Link>
          </div>
        </div>

        {/* Website Preview Images */}
        <div className='relative flex items-center justify-center md:h-[380px] mb-8 md:mb-0'>
          {/* Left Preview - Bralewood */}
          <div className='hidden md:block absolute bg-white shadow-lg w-[560px] h-[300px] overflow-hidden -left-20 top-[80px] z-0 '>
            <img
              src='/assets/hero/bralewood.png'
              alt='Bralewood website preview'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Middle Preview - Formatic */}
          <div className='bg-white shadow-lg w-full max-w-[560px] h-[300px] md:h-[380px] overflow-hidden relative z-10'>
            <img
              src='/assets/hero/formatic.png'
              alt='Formatic Trucking website preview'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Right Preview - MoveMyPets */}
          <div className='hidden md:block absolute bg-white shadow-lg w-[560px] h-[300px] overflow-hidden -right-20 top-[80px] z-0 '>
            <img
              src='/assets/hero/movemypets.png'
              alt='MoveMyPets website preview'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const features = [
  'Enterprise Grade Delivery',
  'Modern, scalable design & development',
  'Long-term partnership & support',
]

import { FadeInOnScroll } from '@/components/fade-in'

export default function SignatureSection() {
  return (
    <section className='bg-white py-12 md:py-16 lg:py-24'>
      <div className='container mx-auto px-4 md:px-8 lg:px-0'>
        <FadeInOnScroll>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mx-4'>
            {/* Left Column - Heading */}
            <div className='w-full lg:w-1/2'>
              <h2 className='text-4xl md:text-5xl lg:text-[56px] font-heading font-bold text-black leading-[120%] tracking-[-4%]'>
                The Retro Devs Signature
              </h2>
            </div>

            {/* Right Column - Content */}
            <div className='w-full lg:w-1/2 space-y-6'>
              <p className='text-base md:text-lg text-[#3D3D3D] leading-[150%]'>
                Retro Devs is a collective of elite designers, developers, and product thinkers
                dedicated to crafting premium digital experiences. We merge creativity, technology,
                and strategy to help brands grow with confidence.
              </p>

              {/* Feature List */}
              <div className='space-y-4 pt-4'>
                {features.map((feature) => (
                  <div key={feature} className='flex items-center gap-4'>
                    <div className='w-8 h-8 flex items-center justify-center flex-shrink-0'>
                      <img
                        src='/assets/about/check.png'
                        alt='Check icon'
                        className='w-8 h-8'
                      />
                    </div>
                    <p className='text-base md:text-lg font-semibold text-[#3D3D3D] leading-[150%]'>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}

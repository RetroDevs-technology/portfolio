interface Service {
  title: string
  description: string
  icon: string
  gradient: string
  borderColor: string
  iconBorderColor: string
}

const services: Service[] = [
  {
    title: 'Product Design',
    description:
      'Designing captivating digital products with user-focused interfaces that blend aesthetics with functionality.',
    icon: '/assets/wwd/circles.png',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #E8FFE5 100%)',
    borderColor: '#CBFFC6',
    iconBorderColor: '#E8FFE5',
  },
  {
    title: 'Web Development',
    description:
      'Building robust, scalable websites that ensure seamless user experiences and drive conversions.',
    icon: '/assets/wwd/code.png',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #FFFAEC 100%)',
    borderColor: '#FFF3D3',
    iconBorderColor: '#FFFAEC',
  },
  {
    title: 'App Development',
    description:
      "Creating intuitive, high-performance apps that bring your vision to users' fingertips.",
    icon: '/assets/wwd/boxes.png',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #F1F2FC 100%)',
    borderColor: '#E5E7FA',
    iconBorderColor: '#F1F2FC',
  },
  {
    title: 'AI Development',
    description:
      'Leveraging artificial intelligence to build smart solutions that enhance user experience.',
    icon: '/assets/wwd/mind.png',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #FAF5FF 100%)',
    borderColor: '#F3E7FF',
    iconBorderColor: '#FAF5FF',
  },
  {
    title: 'Content Development',
    description:
      'Crafting compelling content that tells your story, engages your audience, and strengthens your brand identity.',
    icon: '/assets/wwd/message.png',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #F9F6ED 100%)',
    borderColor: '#F0E8D1',
    iconBorderColor: '#F9F6ED',
  },
  {
    title: 'Automation Systems',
    description:
      'High-end automation engineered to streamline workflows and drive productivity.',
    icon: '/assets/wwd/thought.png',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #FEF1FB 100%)',
    borderColor: '#FEE5F8',
    iconBorderColor: '#FEF1FB',
  },
]

import { FadeInOnScroll, FadeInStagger } from '@/components/fade-in'

export default function WhatWeDoSection() {
  return (
    <section className='bg-white py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <FadeInOnScroll>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-3xl md:text-5xl font-heading font-bold text-black mb-4'>
              What We Do Best
            </h2>
            <p className='text-lg md:text-xl text-gray-600 font-sans'>
              Comprehensive digital solution tailored to our business needs.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Two-column layout: Poster + Service Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
          {/* Left: Poster Image */}
          <FadeInOnScroll>
            <img
              src='/assets/wwd/what-we-do.png'
              alt='Your Vision. Our Code. Limitless Possibilities.'
              className='w-full h-auto rounded-lg'
            />
          </FadeInOnScroll>

          {/* Right: Service Cards */}
          <FadeInStagger staggerDelay={0.15} className='flex flex-col gap-4'>
            {services.map((service) => (
              <div
                key={service.title}
                className='border p-5 hover:shadow-md transition-shadow'
                style={{ background: service.gradient, borderColor: service.borderColor }}>
                {/* Icon */}
                <div
                  className='w-10 h-10 rounded-full border flex items-center justify-center mb-3'
                  style={{ borderColor: service.iconBorderColor, backgroundColor: service.iconBorderColor }}>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className='w-4 h-4'
                  />
                </div>

                {/* Title */}
                <h3 className='text-lg font-bold text-black mb-2'>{service.title}</h3>

                {/* Description */}
                <p className='text-gray-600 text-sm leading-relaxed'>{service.description}</p>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  )
}

interface Step {
  id: string
  icon: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    id: 'discover',
    icon: '/assets/about/discover.png',
    title: 'Discover',
    description:
      'We begin by understanding your brand, goals, and users, uncovering insights that shape a strategic foundation.',
  },
  {
    id: 'design',
    icon: '/assets/about/design.png',
    title: 'Design',
    description:
      'We transform ideas into elegant, intuitive, and user-focused interfaces built for clarity, beauty, and performance.',
  },
  {
    id: 'develop',
    icon: '/assets/about/develop.png',
    title: 'Develop',
    description:
      'Our developers bring the design to life with clean, scalable code and seamless functionality across all devices.',
  },
  {
    id: 'launch',
    icon: '/assets/about/launch.png',
    title: 'Launch',
    description:
      'We deploy with precision, ensuring everything performs flawlessly ready to deliver real impact from day one.',
  },
]

export default function BlueprintSection() {
  return (
    <section className='bg-white py-12 md:py-16 lg:py-24'>
      <div className='container mx-auto px-4 md:px-8 lg:px-[100px]'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 items-start'>
          {/* Left Column - Heading */}
          <div className='w-full lg:w-1/2'>
            <h2 className='text-4xl md:text-5xl lg:text-[56px] font-heading font-bold text-black leading-[120%] tracking-[-4%]'>
              Our Blueprint for Excellence
            </h2>
          </div>

          {/* Right Column - Steps */}
          <div className='w-full lg:w-1/2 space-y-8'>
            {steps.map((step) => (
              <div key={step.id} className='flex gap-4 items-start'>
                {/* Icon */}
                <div className='flex-shrink-0 w-12 h-12 flex items-center justify-center'>
                  <img
                    src={step.icon}
                    alt={step.title}
                    className='w-12 h-12'
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className='text-xl lg:text-2xl font-bold text-black mb-2'>
                    {step.title}
                  </h3>
                  <p className='text-sm md:text-base text-[#3D3D3D] leading-[150%]'>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

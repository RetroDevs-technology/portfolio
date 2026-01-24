export default function ValuesSection() {
  return (
    <section className='bg-[#E7E3FF] py-12 md:py-16 lg:py-24'>
      <div className='container mx-auto px-4 md:px-8 lg:px-[100px]'>
        {/* Section Title */}
        <h2 className='text-4xl md:text-5xl lg:text-[56px] font-heading font-bold text-black leading-[120%] tracking-[-4%] text-center mb-12 md:mb-16'>
          Our Values
        </h2>

        {/* Values Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {values.map((value) => (
            <div
              key={value.id}
              className='bg-white p-6 lg:pl-6 lg:pr-[41px] lg:pt-6 lg:pb-[27px] rounded-[4px] hover:shadow-lg transition-shadow'>
              <div className='flex items-center gap-4'>
                {/* Icon */}
                <div className='mb-4'>
                  <img
                    src={value.icon}
                    alt={value.title}
                    className='w-10 h-10'
                  />
                </div>

                {/* Title */}
                <h3 className='text-xl lg:text-2xl font-bold text-black mb-3'>
                  {value.title}
                </h3>
              </div>

              {/* Description */}
              <p className='text-sm md:text-base text-[#3D3D3D] leading-[150%] max-w-[319px]'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


interface Value {
  id: string
  icon: string
  title: string
  description: string
}

const values: Value[] = [
  {
    id: 'precision',
    icon: '/assets/about/precision.png',
    title: 'Precision',
    description:
      'We craft every detail with intention,design, code, and strategy refined to deliver clarity, performance, and lasting impact',
  },
  {
    id: 'innovation',
    icon: '/assets/about/innovation.png',
    title: 'Innovation',
    description:
      'We embrace modern technologies and forward-thinking ideas to build solutions that stay ahead of trends and elevate brands.',
  },
  {
    id: 'partnership',
    icon: '/assets/about/partnership.png',
    title: 'Partnership',
    description:
      'We work closely with our clients, aligning with their vision and goals to create digital experiences that drive real growth.',
  },
]
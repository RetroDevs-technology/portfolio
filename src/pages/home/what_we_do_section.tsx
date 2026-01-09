interface Service {
  title: string
  description: string
  icon: string
  gradient: string
  iconColor: string
  borderColor: string
  iconBorderColor: string
}

const services: Service[] = [
  {
    title: 'Product Design',
    description:
      'Designing captivating digital products with user-focused interfaces that blend aesthetics with functionality.',
    icon: '•••',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #E8FFE5 100%)',
    iconColor: 'text-green-600',
    borderColor: '#CBFFC6',
    iconBorderColor: '#E8FFE5',
  },
  {
    title: 'Web Development',
    description:
      'Building robust, scalable websites that ensure seamless user experiences and drive conversions.',
    icon: '</>',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #FFFAEC 100%)',
    iconColor: 'text-orange-600',
    borderColor: '#FFF3D3',
    iconBorderColor: '#FFFAEC',
  },
  {
    title: 'App Development',
    description:
      "Creating intuitive, high-performance apps that bring your vision to users' fingertips.",
    icon: '⊞+',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #F1F2FC 100%)',
    iconColor: 'text-blue-600',
    borderColor: '#E5E7FA',
    iconBorderColor: '#F1F2FC',
  },
  {
    title: 'AI Development',
    description:
      'Leveraging artificial intelligence to build smart solutions that enhance user experience.',
    icon: '{}',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #FAF5FF 100%)',
    iconColor: 'text-purple-600',
    borderColor: '#F3E7FF',
    iconBorderColor: '#FAF5FF',
  },
  {
    title: 'Content Development',
    description:
      'Crafting compelling content that tells your story, engages your audience, and strengthens your brand identity.',
    icon: '💬',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #F9F6ED 100%)',
    iconColor: 'text-amber-600',
    borderColor: '#F0E8D1',
    iconBorderColor: '#F9F6ED',
  },
  {
    title: 'Automation Systems',
    description:
      'High-end automation engineered to streamline workflows and drive productivity.',
    icon: '⚙★',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #FEF1FB 100%)',
    iconColor: 'text-pink-600',
    borderColor: '#FEE5F8',
    iconBorderColor: '#FEF1FB',
  },
]

export default function WhatWeDoSection() {
  return (
    <section className='bg-white py-16 md:py-24'>
      <div className='container mx-auto px-4 md:px-[100px]'>
        {/* Header */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-5xl font-heading font-bold text-black mb-4'>
            What We Do Best
          </h2>
          <p className='text-lg md:text-xl text-gray-600 font-sans'>
            Comprehensive digital solution tailored to our business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service) => (
            <div
              key={service.title}
              className='border p-6 hover:shadow-md transition-shadow'
              style={{ background: service.gradient, borderColor: service.borderColor }}>
              {/* Icon */}
              <div
                className='w-12 h-12 rounded-full border flex items-center justify-center mb-4'
                style={{ borderColor: service.iconBorderColor, backgroundColor: service.iconBorderColor }}>
                <div className={`${service.iconColor} text-xl font-bold`} style={{ fontSize: '20px' }}>
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className='text-xl font-bold text-black mb-3'>{service.title}</h3>

              {/* Description */}
              <p className='text-gray-600 text-sm leading-relaxed'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

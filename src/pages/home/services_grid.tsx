import BorderFrame from '@/components/border-frame'

interface Service {
  title: string
  description: string
  iconPosition: 'left' | 'right'
  video: string
}

const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'Building robust, scalable websites that ensure seamless user experiences and drive conversions.',
    iconPosition: 'left',
    video: '/assets/service1.mov',
  },
  {
    title: 'App Development',
    description:
      "Creating intuitive, high-performance apps that bring your vision to users' fingertips.",
    iconPosition: 'right',
    video: '/assets/service2.mov',
  },
  {
    title: 'Content Development',
    description:
      'Crafting compelling content that tells your story, engages your audience, and strengthens your brand identity.',
    iconPosition: 'left',
    video: '/assets/service3.mov',
  },
  {
    title: 'Product Design',
    description:
      'Designing captivating digital products with user-focused interfaces that blend aesthetics with functionality.',
    iconPosition: 'right',
    video: '/assets/service4.mov',
  },
  {
    title: 'AI Development',
    description:
      'Leveraging artificial intelligence to build smart solutions that enhance user experience and operational efficiency.',
    iconPosition: 'left',
    video: '/assets/service5.mov',
  },
  {
    title: 'Automation Systems',
    description:
      'Designing and implementing automated processes to streamline your business operations and boost productivity.',
    iconPosition: 'right',
    video: '/assets/service6.mov',
  },
]

export default function ServicesGrid() {
  return (
    <section className='bg-[#F2F0FF] pb-24'>
      <div className='container mx-auto md:px-[100px]'>
        <div className='flex flex-col gap-6'>
          {Array.from({ length: services.length / 2 }, (_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={i} className='flex flex-col md:flex-row gap-6'>
              {services.slice(i * 2, i * 2 + 2).map((service, index) => (
                <BorderFrame key={service.title}>
                  <div
                    key={service.title}
                    className={`p-2 bg-gradient-to-br 
                        ${i % 2 === 0
                        ? index === 0
                          ? 'md:w-[632px]'
                          : 'md:w-[424px]'
                        : index === 0
                          ? 'md:w-[424px]'
                          : 'md:w-[632px]'
                      }
                        h-[376px]
                      `}>
                    <div
                      className={`flex gap-6 items-center justify-between h-full ${(i % 2 === 0 && index === 0) || (i % 2 === 1 && index === 1)
                        ? 'flex-col'
                        : 'flex-col-reverse'
                        }`}>
                      {/* Purple box */}
                      <div className=' w-full h-[224px] shrink-0 bg-[#A08BEC] '>
                        <video src={service.video} autoPlay loop muted playsInline />
                      </div>

                      {/* Content */}
                      <div className='flex flex-col '>
                        <h3 className='text-base md:text-xl font-bold mb-3 text-black'>
                          {service.title}
                        </h3>
                        <p className='text-black text-base md:text-lg !leading-tight'>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </BorderFrame>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

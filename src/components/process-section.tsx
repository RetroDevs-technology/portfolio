import Heading from '@/layout/heading'
import BorderFrame from './border-frame'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

interface ProcessStep {
  image: string
  title: string
}

const processSteps: ProcessStep[] = [
  { image: '/assets/explore.svg', title: 'Explore & Ideate' },
  { image: '/assets/craft.svg', title: 'Craft & Design' },
  { image: '/assets/build.svg', title: 'Build & Refine' },
  { image: '/assets/launch.svg', title: 'Launch & Elevate' },
]

export default function ProcessSection() {
  return (
    <section className='bg-black text-white py-12 md:py-24 w-full' id='who-we-are'>
      <div className='container mx-auto md:px-[100px]'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-[56px] items-start pb-6 md:pb-12   '>
          {/* Left Column */}
          <div className='max-w-[512px] w-full'>
            <Heading className='!text-white !tracking-normal'>
              Creating digital masterpieces with passion and precision
            </Heading>
          </div>

          {/* Right Column */}
          <div className='max-w-[512px] w-full'>
            <p className='text-lg md:text-2xl text-[#F9F8FF]'>
              At RetroDevs, we merge classic development principles with innovative thinking. Our
              process is rooted in collaboration, creativity, and a commitment to delivering
              exceptional digital experiences. From concept to launch, every step is designed to
              transform your vision into reality.
            </p>
          </div>
        </div>
        {/* Process Steps Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pb-10  sm:pb-20 md:pb-40'>
          {processSteps.map((step) => (
            <BorderFrame color='white' key={step.title}>
              <div className='w-[238px] h-[238px] flex flex-col items-center justify-center'>
                <div className='h-[160px] w-[144px]  mb-4'>
                  <img src={step.image} alt={step.title} className='w-full h-full object-contain' />
                </div>
                <p className='text-xl font-bold text-[#E7E3FF]'>{step.title}</p>
              </div>
            </BorderFrame>
          ))}
        </div>

        {/* Bottom Text and CTA */}
        <div className='max-w-[800px] mx-auto  md:mt-16 space-y-8'>
          <p className='text-lg md:text-2xl text-[#F9F8FF]'>
            Our story is simple: we are a team of passionate creators driven to build remarkable
            digital solutions. We blend artistry with technology, crafting seamless, user-focused
            experiences. Ready to take your digital presence to the next level? Let's connect and
            start the conversation.
          </p>

          <BorderFrame color='white' className='w-fit'>
            <Link to='/contact'>
              <Button className='w-[170px] h-[54px] text-2xl font-heading font-bold bg-[#E7E3FF] text-[#4A3880] hover:bg-[#D3CFF0] transition-colors'>
                Let's talk
              </Button>
            </Link>
          </BorderFrame>
        </div>
      </div>
    </section>
  )
}

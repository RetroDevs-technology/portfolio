import Heading from '@/layout/heading'
import BorderFrame from '@/components/border-frame'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

interface Project {
  title: string
  description: string
  image: string
  bgColor: string
}

const projects: Project[] = [
  {
    title: 'Drinks Of All Kinds - DOAK',
    description: 'Discover a world of liquid treasures with DOAK.',
    image: '/images/doak-preview.png',
    bgColor: 'bg-[#FFCDCA]',
  },
  {
    title: 'Lexxy FX',
    description: 'Gateway to hassle-free currency exchange.',
    image: '/images/lexxy-preview.png',
    bgColor: 'bg-[#FFE288]',
  },
]

export default function ProjectsShowcase() {
  return (
    <section className='bg-[#F2F0FF] py-12 md:py-24' id='our-work'>
      <div className='container mx-auto md:px-[100px]'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-[56px] items-end pb-6 md:pb-12   '>
          {/* Left Column */}
          <div className='max-w-[512px] w-full'>
            <Heading className='!text-black !tracking-normal'>
              We craft memorable digital experiences.
            </Heading>
          </div>

          {/* Right Column */}
          <div className='max-w-[512px] w-full'>
            <p className='text-lg md:text-2xl text-black mb-4'>
              We give form to process, turning ideas into engaging, interactive digital journeys.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className='space-y-8'>
          {projects.map((project) => (
            <BorderFrame color='black' key={project.title}>
              <div className={`relative overflow-hidden ${project.bgColor} p-4 md:p-8`}>
                <div className='max-w-5xl mx-auto'>
                  <div className='flex flex-col absolute bottom-10 left-8'>
                    <h3 className='text-xl md:text-3xl font-bold bg-[#4A3880] mb-3 py-3 px-4 text-[#F9F8FF]  w-fit'>
                      {project.title}
                    </h3>
                    <p className='text-[#F9F8FF] bg-[#4A3880] px-4 py-3 text-lg md:text-xl w-fit font-medium'>
                      {project.description}
                    </p>
                  </div>

                  <div className='h-[412px] overflow-hidden '>
                    <img src={project.image} alt={project.title} className='w-full h-auto' />
                  </div>
                </div>
              </div>
            </BorderFrame>
          ))}
        </div>

        {/* View More Button */}
        <BorderFrame color='black' className='mt-[72px] w-fit'>
          <Link to='#' className='w-fit'>
            <Button className='font-heading w-[300px] h-[54px] text-2xl font-bold bg-[#4A3880] text-[#F9F8FF] hover:bg-[#3A2B66] transition-colors'>
              View more project
            </Button>
          </Link>
        </BorderFrame>
      </div>
    </section>
  )
}

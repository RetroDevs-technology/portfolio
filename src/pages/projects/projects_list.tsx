import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FadeInOnScroll } from '@/components/fade-in'


export default function ProjectsList() {
  return (
    <section className='bg-white px-4 lg:px-0 py-12 md:py-16 lg:py-24'>
      <div className='container px-0'>
        <div className='space-y-12 md:space-y-16 lg:space-y-20'>
          {projects.map((project, index) => (
            <FadeInOnScroll key={project.id} delay={index * 0.1}>
              <div
                key={project.id}
                className='flex flex-col lg:flex-row gap-[60px] lg:gap-12 items-start justify-start'>
                {/* Project Image */}
                <div className='w-full lg:w-1/2 flex-shrink-0'>
                  <div className='w-full h-[300px] md:h-[400px] lg:h-[454px]overflow-hidden'>
                    <img
                      src={project.imagePlaceholder}
                      alt={project.title}
                      className='w-full h-full object-contain'
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className='w-full lg:w-1/2 flex flex-col justify-start'>
                  <h2 className='text-3xl md:text-4xl font-heading font-bold text-[#1E1E1E] leading-[120%] tracking-[-2%] mb-4'>
                    {project.title}
                  </h2>

                  <p className='text-base md:text-lg text-[#4F4F4F] leading-[150%] mb-4'>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className='flex gap-3 mb-8'>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className='px-4 py-2 text-xs text-[#1E1E1E] font-medium font-recia rounded-full bg-[#E1E1E1]'>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <div>
                    <Link to={project.link} target='_blank' rel='noopener noreferrer'>
                      <Button className='py-[20px] px-6 font-medium bg-[#493C81] text-[#F9F8FF] hover:bg-[#3A2B66] transition-colors rounded-[4px] gap-2 text-base font-recia'>
                        View project
                        <ArrowRight className='w-5 h-5' />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}


interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  imagePlaceholder: string
  link: string
}

const projects: Project[] = [
  {
    id: 'formatic',
    title: 'Formatic Trucking INC',
    description:
      "A sophisticated, conversion-focused e-commerce platform crafted to elevate the brand's digital presence and deliver a seamless shopping experience. This project features refined product presentation, smooth navigation, and a frictionless checkout flow designed to boost customer confidence and drive sales.",
    tags: ['Design', 'Web development'],
    imagePlaceholder: '/assets/projects/formatic.png',
    link: 'https://formatictrucking.com/',
  },
  {
    id: 'moveyourpet',
    title: 'Move Your Pet',
    description:
      "A sophisticated, conversion-focused e-commerce platform crafted to elevate the brand's digital presence and deliver a seamless shopping experience. This project features refined product presentation, smooth navigation, and a frictionless checkout flow designed to boost customer confidence and drive sales.",
    tags: ['Design', 'Web development'],
    imagePlaceholder: '/assets/projects/move-my-pets.png',
    link: 'https://www.movemypetng.com/',
  },
  {
    id: 'nigeriatennis',
    title: 'Nigeria Tennis Federation',
    description:
      "A sophisticated, conversion-focused e-commerce platform crafted to elevate the brand's digital presence and deliver a seamless shopping experience. This project features refined product presentation, smooth navigation, and a frictionless checkout flow designed to boost customer confidence and drive sales.",
    tags: ['Design', 'Web development'],
    imagePlaceholder: '/assets/projects/ntf.png',
    link: 'https://nigeriatennisfederation.org/',
  },
  {
    id: 'bralewood',
    title: 'BraleWood',
    description:
      "A sophisticated, conversion-focused e-commerce platform crafted to elevate the brand's digital presence and deliver a seamless shopping experience. This project features refined product presentation, smooth navigation, and a frictionless checkout flow designed to boost customer confidence and drive sales.",
    tags: ['Design', 'Web development'],
    imagePlaceholder: '/assets/projects/bralewood.png',
    link: 'https://bralewood.com/',
  },
  {
    id: 'expresselevator',
    title: 'Express Elevator',
    description:
      "A sophisticated, conversion-focused e-commerce platform crafted to elevate the brand's digital presence and deliver a seamless shopping experience. This project features refined product presentation, smooth navigation, and a frictionless checkout flow designed to boost customer confidence and drive sales.",
    tags: ['Design', 'Web development'],
    imagePlaceholder: '/assets/projects/express-elevator.png',
    link: 'https://express-elevator.vercel.app/',
  },
  {
    id: 'lexxyfx',
    title: 'Lexxy FX',
    description:
      "A sophisticated, conversion-focused e-commerce platform crafted to elevate the brand's digital presence and deliver a seamless shopping experience. This project features refined product presentation, smooth navigation, and a frictionless checkout flow designed to boost customer confidence and drive sales.",
    tags: ['Design', 'Web development'],
    imagePlaceholder: '/assets/projects/leexxy-fx.png',
    link: 'https://lexxyfx.com',
  },
]

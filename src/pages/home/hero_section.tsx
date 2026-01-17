import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import {
  InfiniteCarousel,
  InfiniteCarouselContent,
  InfiniteCarouselItem,
  type CarouselApi,
} from '@/components/ui/infinite_carousel'

const images = [
  {
    middle: '/assets/hero/bralewood-middle.png',
    side: '/assets/hero/bralewood-side.png',
    alt: 'Bralewood website preview',
  },
  {
    middle: '/assets/hero/formatic-middle.png',
    side: '/assets/hero/formatic-side.png',
    alt: 'Formatic Trucking website preview',
  },
  {
    middle: '/assets/hero/movemypets-middle.png',
    side: '/assets/hero/movemypets-side.png',
    alt: 'MoveMyPets website preview',
  },
]

export default function HeroSection() {
  const [middleApi, setMiddleApi] = useState<CarouselApi>()
  const [leftApi, setLeftApi] = useState<CarouselApi>()
  const [rightApi, setRightApi] = useState<CarouselApi>()

  // Synchronize all carousels
  const onSelect = useCallback((api: CarouselApi | undefined) => {
    if (!api) return

    const scrollToIndex = api.selectedScrollSnap()

    // Sync left (previous image)
    if (leftApi) {
      const leftIndex = (scrollToIndex - 1 + images.length) % images.length
      if (leftApi.selectedScrollSnap() !== leftIndex) {
        leftApi.scrollTo(leftIndex)
      }
    }

    // Sync right (next image)
    if (rightApi) {
      const rightIndex = (scrollToIndex + 1) % images.length
      if (rightApi.selectedScrollSnap() !== rightIndex) {
        rightApi.scrollTo(rightIndex)
      }
    }
  }, [leftApi, rightApi])

  useEffect(() => {
    if (!middleApi) return

    middleApi.on('select', () => onSelect(middleApi))

    return () => {
      middleApi.off('select', () => onSelect(middleApi))
    }
  }, [middleApi, onSelect])


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

        {/* Website Preview Images Carousel */}
        <div className='relative flex items-center justify-center md:h-[380px] mb-8 md:mb-0 overflow-visible'>
          {/* Left Preview - Shows previous image */}
          <InfiniteCarousel
            setApi={setLeftApi}
            autoplay={false}
            className='hidden md:block absolute -left-20 top-[80px] z-0'
            opts={{
              loop: true,
              duration: 25,
            }}>
            <div className='bg-[#493C81] shadow-lg w-[560px] h-[300px] overflow-hidden rounded-[2px]'>
              <InfiniteCarouselContent className='-ml-0 h-full'>
                {images.map((image, index) => (
                  <InfiniteCarouselItem key={`${image.side}-left-${index}`} className='pl-0 basis-[560px] w-[560px] h-[300px] flex-shrink-0 relative'>
                    <img
                      src={image.side}
                      alt={image.alt}
                      className='absolute inset-0 w-full h-full object-cover'
                    />
                  </InfiniteCarouselItem>
                ))}
              </InfiniteCarouselContent>
            </div>
          </InfiniteCarousel>

          {/* Middle Preview - Main Carousel - Shows current image */}
          <div className='relative z-10 w-full max-w-[560px]'>
            <InfiniteCarousel
              setApi={setMiddleApi}
              autoplay={true}
              autoplayDelay={4000}
              className='w-full'
              opts={{
                loop: true,
                duration: 25,
              }}>
              <div className='bg-[#493C81] shadow-lg w-full h-[300px] md:h-[380px] overflow-hidden rounded-[2px]'>
                <InfiniteCarouselContent className='-ml-0 h-full w-full'>
                  {images.map((image, index) => (
                    <InfiniteCarouselItem key={`${image.middle}-${index}`} className='pl-0 basis-full min-w-full w-full h-[300px] md:h-[380px] flex-shrink-0 relative'>
                      <img
                        src={image.middle}
                        alt={image.alt}
                        className='absolute inset-0 w-full h-full object-cover'
                      />
                    </InfiniteCarouselItem>
                  ))}
                </InfiniteCarouselContent>
              </div>
            </InfiniteCarousel>
          </div>

          {/* Right Preview - Shows next image */}
          <InfiniteCarousel
            setApi={setRightApi}
            autoplay={false}
            className='hidden md:block absolute -right-20 top-[80px] z-0'
            opts={{
              loop: true,
              duration: 25,
            }}>
            <div className='bg-[#493C81] shadow-lg w-[560px] h-[300px] overflow-hidden rounded-[2px]'>
              <InfiniteCarouselContent className='-ml-0 h-full'>
                {images.map((image, index) => (
                  <InfiniteCarouselItem key={`${image.side}-right-${index}`} className='pl-0 basis-[560px] w-[560px] h-[300px] flex-shrink-0 relative'>
                    <img
                      src={image.side}
                      alt={image.alt}
                      className='absolute inset-0 w-full h-full object-cover'
                    />
                  </InfiniteCarouselItem>
                ))}
              </InfiniteCarouselContent>
            </div>
          </InfiniteCarousel>
        </div>
      </div>
    </section>
  )
}

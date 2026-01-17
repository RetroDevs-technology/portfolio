export default function TestimonialSection() {
  return (
    <section className='bg-[#E7E3FF] py-16 md:py-[104px]'>
      <div className='container mx-auto px-4'>
        <div className='max-w-[1112px] mx-auto'>
          {/* Quote */}
          <div className='flex items-start gap-4 mb-8 md:mb-12'>
            {/* Front Quote */}
            <div className='flex-shrink-0'>
              <img
                src='/assets/testimonial/front-quote.png'
                alt='Opening quote'
                className='w-auto h-auto'
              />
            </div>

            {/* Quote Text */}
            <div className='text-lg leading-[120%] tracking-[-2%] font-heading font-bold text-center md:text-xl lg:text-[32px] text-gray-700 max-w-[1018px] flex-1'>
              From the first meeting to the final launch, Retro Devs delivered with precision and
              professionalism. Our new website feels modern, fast, and perfectly aligned with our
              vision.
            </div>

            {/* Back Quote */}
            <div className='flex-shrink-0 self-end'>
              <img
                src='/assets/testimonial/back-quote.png'
                alt='Closing quote'
                className='w-auto h-auto'
              />
            </div>
          </div>

          {/* Attribution */}
          <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
            {/* Profile Picture */}
            <div className='w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden bg-gray-200 flex-shrink-0'>
              <div className='w-full h-full bg-gradient-to-br from-amber-700 to-amber-800' />
            </div>

            {/* Name and Title */}
            <div className='text-center md:text-left'>
              <div className='font-heading font-bold text-gray-800 text-xl md:text-2xl'>
                Adetunji Bellan
              </div>
              <div className='font-sans text-gray-600 text-sm md:text-[18px]'>Ceo, Traveller</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

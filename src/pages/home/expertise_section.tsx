import Heading from '@/layout/heading'

export default function ExpertiseSection() {
  return (
    <section className='bg-[#F2F0FF] py-24 pb-12' id='what-we-do'>
      <div className='container mx-auto md:px-[100px]'>
        <Heading className='!text-black !tracking-normal'>
          Innovative digital solutions tailored to amplify your brand and connect with your
          audience.
        </Heading>

        <p className='mt-6 text-lg md:text-2xl text-black'>
          Our expertise spans across design, development, content, and beyond — all tailored to
          captivate your audience and set you apart. We don't just build digital solutions; we
          create meaningful experiences that connect, inspire, and leave a lasting impression
        </p>
      </div>
    </section>
  )
}

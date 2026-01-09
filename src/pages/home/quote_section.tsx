export default function QuoteSection() {
  return (
    <section className='bg-black text-[#F9F8FF] py-24 md:py-32 w-full'>
      <div className='container mx-auto md:px-[100px]'>
        <blockquote className='space-y-6'>
          <p className='text-3xl md:text-[64px] font-bold !leading-normal'>
            Design is not just what it looks like and feels like. Design is how it works.
          </p>
          <footer className='text-4xl font-normal text-[#F9F8FF'>— Steve Jobs</footer>
        </blockquote>
      </div>
    </section>
  )
}

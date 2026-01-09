import BorderFrame from '@/components/border-frame'

export default function BannerSection() {
  return (
    <section className='bg-[#F2F0FF] py-6 md:py-12' id='banner'>
      <div className='container mx-auto md:px-[100px]'>
        <BorderFrame>
          <div className='w-full aspect-[2/1] bg-[#4A3880] '>
            {/* This is a placeholder for any content you might want to add later */}
          </div>
        </BorderFrame>
      </div>
    </section>
  )
}

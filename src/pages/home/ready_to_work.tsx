import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import BorderFrame from '@/components/border-frame'

export default function ReadyToWork() {
  return (
    <section className='bg-[#F2F0FF] py-16 md:py-24' id='contact'>
      <div className='container mx-auto md:px-[100px]'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <h2 className='text-4xl md:text-8xl font-bold text-black max-w-[680px] !leading-normal'>
            Ready to work with us?
          </h2>

          <BorderFrame color='black' className='w-fit'>
            <Link to='#'>
              <Button className='w-[170px] h-[54px] text-2xl font-heading font-bold bg-[#493C81] text-[#F9F8FF] hover:bg-[#3A2B66] transition-colors'>
                Let's talk
              </Button>
            </Link>
          </BorderFrame>
        </div>
      </div>
    </section>
  )
}

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone } from 'lucide-react'
import { useState } from 'react'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className='bg-white py-12 md:py-16 lg:py-24'>
      <div className='container mx-auto px-4 md:px-8 lg:px-0'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
          {/* Left Column - Contact Info */}
          <div className='w-full lg:w-1/2'>
            <h2 className='text-4xl md:text-5xl lg:text-[56px] font-heading font-bold text-black leading-[120%] tracking-[-4%] mb-12'>
              Start Your Project
            </h2>

            {/* Email */}
            <div className='mb-8 flex items-start gap-4'>
              <div className='w-12 h-12 rounded-lg bg-[#493C81] flex items-center justify-center flex-shrink-0'>
                <Mail className='w-6 h-6 text-white' />
              </div>
              <div>
                <p className='text-base text-gray-600 mb-1'>Email us</p>
                <a
                  href='mailto:hello@retrodevs.com'
                  className='text-xl lg:text-2xl font-bold text-black hover:text-[#493C81] transition-colors'>
                  hello@retrodevs.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 rounded-lg bg-[#493C81] flex items-center justify-center flex-shrink-0'>
                <Phone className='w-6 h-6 text-white' />
              </div>
              <div>
                <p className='text-base text-gray-600 mb-1'>Call us</p>
                <a
                  href='tel:+2340000000000'
                  className='text-xl lg:text-2xl font-bold text-black hover:text-[#493C81] transition-colors'>
                  +234 (000) 000 000
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className='w-full lg:w-1/2'>
            <div className='bg-[#E7E3FF] p-8 lg:p-12 rounded-[8px]'>
              <h3 className='text-2xl lg:text-3xl font-heading font-bold text-black mb-6 leading-[120%]'>
                We're Ready To Collaborate And Bring Your Project To Life.
              </h3>

              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Company Name */}
                <div className='space-y-2'>
                  <Label htmlFor='companyName' className='text-base font-medium text-black'>
                    Company name
                  </Label>
                  <Input
                    type='text'
                    id='companyName'
                    name='companyName'
                    value={formData.companyName}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-200 bg-white text-black focus-visible:ring-[#493C81]'
                    required
                  />
                </div>

                {/* Email Address */}
                <div className='space-y-2'>
                  <Label htmlFor='email' className='text-base font-medium text-black'>
                    Email address
                  </Label>
                  <Input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-200 bg-white text-black focus-visible:ring-[#493C81]'
                    required
                  />
                </div>

                {/* Message */}
                <div className='space-y-2'>
                  <Label htmlFor='message' className='text-base font-medium text-black'>
                    Message
                  </Label>
                  <Textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-200 bg-white text-black focus-visible:ring-[#493C81] resize-none'
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type='submit'
                  className='w-full md:w-auto py-[20px] px-8 font-medium bg-[#493C81] text-[#F9F8FF] hover:bg-[#3A2B66] transition-colors rounded-[4px] text-base font-recia'>
                  Start a project
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

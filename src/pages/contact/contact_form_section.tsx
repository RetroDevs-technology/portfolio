import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Mail, Phone } from 'lucide-react'
import { FadeInOnScroll } from '@/components/fade-in'
import { useMutation } from '@tanstack/react-query'
import directusService, { type CreateContactPayload } from '@/services/directus_service'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  contactFormSchema,
  type ContactFormValues,
} from '@/pages/contact/contact_form_section.model'

const defaultValues: ContactFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
}

export default function ContactFormSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  })

  const { mutate: createContact, isPending } = useMutation({
    mutationFn: (data: CreateContactPayload) => directusService.createContact(data),
    onSuccess: () => {
      toast.success('Message sent successfully')
      form.reset(defaultValues)
    },
    onError: () => {
      toast.error('Failed to create contact')
    },
  })

  function onSubmit(values: ContactFormValues) {
    createContact(values)
  }

  return (
    <section className='bg-white py-12 md:py-16 lg:py-24'>
      <div className='container mx-auto px-4 md:px-8 lg:px-0'>
        <FadeInOnScroll>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 mx-4'>
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
                    href='tel:+23408052026709'
                    className='text-xl lg:text-2xl font-bold text-black hover:text-[#493C81] transition-colors'>
                    +234 (080) 520 26709
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

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'>
                    <FormField
                      control={form.control}
                      name='first_name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-base font-medium text-black'>
                            First name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className='w-full px-4 py-3 border border-gray-200 bg-white text-black focus-visible:ring-[#493C81]'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='last_name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-base font-medium text-black'>
                            Last name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className='w-full px-4 py-3 border border-gray-200 bg-white text-black focus-visible:ring-[#493C81]'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-base font-medium text-black'>
                            Email address
                          </FormLabel>
                          <FormControl>
                            <Input
                              type='email'
                              {...field}
                              className='w-full px-4 py-3 border border-gray-200 bg-white text-black focus-visible:ring-[#493C81]'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='phone'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-base font-medium text-black'>
                            Phone
                          </FormLabel>
                          <FormControl>
                            <Input
                              type='tel'
                              {...field}
                              className='w-full px-4 py-3 border border-gray-200 bg-white text-black focus-visible:ring-[#493C81]'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='company'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-base font-medium text-black'>
                            Company name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className='w-full px-4 py-3 border border-gray-200 bg-white text-black focus-visible:ring-[#493C81]'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='subject'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-base font-medium text-black'>
                            Subject
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className='w-full px-4 py-3 border border-gray-200 bg-white text-black focus-visible:ring-[#493C81]'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='message'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-base font-medium text-black'>
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={6}
                              className='w-full px-4 py-3 border border-gray-200 bg-white text-black focus-visible:ring-[#493C81] resize-none'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type='submit'
                      disabled={form.formState.isSubmitting || isPending}
                      className='w-full md:w-auto py-[20px] px-8 font-medium bg-[#493C81] text-[#F9F8FF] hover:bg-[#3A2B66] transition-colors rounded-[4px] text-base font-recia'>
                      Start a project
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}

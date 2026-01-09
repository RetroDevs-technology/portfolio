import Layout from '@/layout/layout'

export default function About() {
  return (
    <Layout>
      <section className='bg-[#F2F0FF] min-h-screen py-24'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-bold text-black mb-8'>About Us</h1>
          <p className='text-lg text-gray-700'>Learn more about RetroDevs and our mission.</p>
        </div>
      </section>
    </Layout>
  )
}

import Layout from '@/layout/layout'
import ContactHero from './hero'
import ContactFormSection from './contact_form_section'
import CTOSection from '../home/cto_section'

export default function Contact() {
  return (
    <Layout>
      <ContactHero />
      <ContactFormSection />
      <CTOSection />
    </Layout>
  )
}

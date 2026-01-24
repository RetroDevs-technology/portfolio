import Layout from '@/layout/layout'
import AboutHero from './hero'
import SignatureSection from './signature_section'
import ValuesSection from './values_section'
import BlueprintSection from './blueprint_section'
import KPISection from '../home/kpi_section'
import CTOSection from '../home/cto_section'

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <SignatureSection />
      <ValuesSection />
      <BlueprintSection />
      <KPISection />
      <CTOSection />
    </Layout>
  )
}

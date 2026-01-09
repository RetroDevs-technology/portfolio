import Layout from '@/layout/layout'
import HeroSection from './hero_section'
import BannerSection from './banner_section'
import ExpertiseSection from './expertise_section'
import ServicesGrid from './services_grid'
import ProcessSection from './process_section'
import QuoteSection from './quote_section'
import ProjectsShowcase from './projects_showcase'
import ReadyToWork from './ready_to_work'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <BannerSection />
      <ProcessSection />
      <ExpertiseSection />
      <ServicesGrid />
      <QuoteSection />
      <ProjectsShowcase />
      <ReadyToWork />
    </Layout>
  )
}

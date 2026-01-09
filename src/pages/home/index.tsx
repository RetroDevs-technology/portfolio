import Layout from '@/layout/layout'
import HeroSection from './hero_section'
import BannerSection from './banner_section'
import ExpertiseSection from './expertise_section'
import WhatWeDoSection from './what_we_do_section'
import ProcessSection from './process_section'
import QuoteSection from './quote_section'
import ProjectsShowcase from './projects_showcase'
import ReadyToWork from './ready_to_work'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <BannerSection />
      <ProcessSection />
      <ExpertiseSection />
      <QuoteSection />
      <ProjectsShowcase />
      <ReadyToWork />
    </Layout>
  )
}

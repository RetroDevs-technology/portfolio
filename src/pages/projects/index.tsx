import Layout from '@/layout/layout'
import ProjectsHero from './hero'
import ProjectsStrip from './projects_strip'
import ProjectsList from './projects_list'
import CTOSection from '../home/cto_section'

export default function Projects() {
  return (
    <Layout>
      <ProjectsHero />
      <ProjectsStrip />
      <ProjectsList />
      <CTOSection />
    </Layout>
  )
}

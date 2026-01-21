import { PageLayout } from '@/components/layout/page-layout'
import { HeroSection } from '@/components/sections/hero-section'
import { MainImpact } from '@/components/sections/main-impact'

export function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <MainImpact />
    </PageLayout>
  )
}

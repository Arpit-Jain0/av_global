import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { CompanyOverview } from "@/components/company-overview"
import { VisionMission } from "@/components/vision-mission"
import { GlobalPresence } from "@/components/global-presence"
import { Leadership } from "@/components/leadership"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <CompanyOverview />
      <VisionMission />
      <GlobalPresence />
      <Leadership />
      <Footer />
    </main>
  )
}

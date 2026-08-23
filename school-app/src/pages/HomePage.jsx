import HeroSection from '../components/sections/home/HeroSection'
import EditorialIntroSection from '../components/sections/home/EditorialIntroSection'
import VisiBannerSection from '../components/sections/home/VisiBannerSection'
import MisiSection from '../components/sections/home/MisiSection'
import MottoBannerSection from '../components/sections/home/MottoBannerSection'
import RebuiltFilosofiSection from '../components/sections/home/RebuiltFilosofiSection'
import DomainPembelajaranSection from '../components/sections/home/DomainPembelajaranSection'
import ProgramPreview from '../components/sections/home/ProgramPreview'
import ActivityPreview from '../components/sections/home/ActivityPreview'
import CTASection from '../components/sections/home/CTASection'

function GoldSeparator() {
  return (
    <div className="flex justify-center py-0">
      <div className="w-[60px] h-px bg-[var(--gold-primary)] opacity-20" />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EditorialIntroSection />
      <VisiBannerSection />
      <MisiSection />
      <MottoBannerSection />
      <RebuiltFilosofiSection />
      <DomainPembelajaranSection />
      <ProgramPreview />
      <GoldSeparator />
      <ActivityPreview />
      <CTASection />
    </>
  )
}

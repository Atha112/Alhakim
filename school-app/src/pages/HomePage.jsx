import HeroSection from '../components/sections/home/HeroSection'
import RebuiltFilosofiSection from '../components/sections/home/RebuiltFilosofiSection'
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
      <RebuiltFilosofiSection />
      <GoldSeparator />
      <ProgramPreview />
      <GoldSeparator />
      <ActivityPreview />
      <CTASection />
    </>
  )
}

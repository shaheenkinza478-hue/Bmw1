 import HeroSection from '@/components/home/HeroSection'
import FeaturedModels from '@/components/home/FeaturedModels'
import ElectricSection from '@/components/home/ElectricSection'
import CarShowcase from '@/components/home/CarShowcase'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedModels />
      <ElectricSection />
      <CarShowcase />
    </>
  )
}
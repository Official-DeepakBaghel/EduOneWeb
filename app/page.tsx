import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import FeaturedSection from "@/components/FeaturedSection";
import NewDrops from "@/components/NewDrops";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505] text-white overflow-x-hidden">
      <Hero />
      <div className="relative z-20 -mt-20 md:-mt-32">
        <Carousel />
      </div>
      <FeaturedSection />
      <NewDrops />
    </main>
  );
}

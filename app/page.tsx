import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import SpecialtiesSection from "@/components/home/SpecialtiesSection";
import BlogCarousel from "@/components/BlogCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Navbar />
      <HeroSection />
      <SpecialtiesSection />
      <BlogCarousel />
    </main>
  );
}

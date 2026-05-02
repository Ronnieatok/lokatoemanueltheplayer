import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ActionSection from "@/components/ActionSection";
import HighlightReelSection from "@/components/HighlightReelSection";
import GallerySection from "@/components/GallerySection";
import CareerTimeline from "@/components/CareerTimeline";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="stats"><StatsSection /></div>
      <div id="about"><AboutSection /></div>
      <div id="action"><ActionSection /></div>
      <div id="reel"><HighlightReelSection /></div>
      <div id="gallery"><GallerySection /></div>
      <div id="journey"><CareerTimeline /></div>
      <div id="contact"><ContactSection /></div>
      <FooterSection />
    </main>
  );
};

export default Index;

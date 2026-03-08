import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ActionSection from "@/components/ActionSection";
import CareerTimeline from "@/components/CareerTimeline";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ActionSection />
      <CareerTimeline />
      <FooterSection />
    </main>
  );
};

export default Index;

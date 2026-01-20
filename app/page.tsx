import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { SuccessStories } from "@/components/sections/success-stories";
import { JourneySection } from "@/components/sections/journey-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import { CTASection } from "@/components/sections/cta-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { AwardsSection } from "@/components/sections/awards-section";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { BlogSection } from "@/components/sections/blog-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SuccessStories />
      <JourneySection />
      <ProcessSection />
      <TechnologiesSection />
      <CTASection />
      <TestimonialsSection />
      <IndustriesSection />
      <AwardsSection />
      <HighlightsSection />
      <BlogSection />
      <Footer />
    </main>
  );
}

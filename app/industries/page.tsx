import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { IndustriesHero } from "@/components/industries/industries-hero";
import { TrustedIndustries } from "@/components/industries/trusted-industries";
import { IndustryMap } from "@/components/industries/industry-map";
import { WhyChooseFrionexar } from "@/components/industries/why-choose-frionexar";
import { IndustriesTestimonials } from "@/components/industries/industries-testimonials";
import { ContactForm } from "@/components/industries/contact-form";
import { IndustriesCTA } from "@/components/industries/industries-cta";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <IndustriesHero />
      <TrustedIndustries />
      <IndustryMap />
      <WhyChooseFrionexar />
      <IndustriesTestimonials />
      <ContactForm />
      <IndustriesCTA />
      <Footer />
    </main>
  );
}

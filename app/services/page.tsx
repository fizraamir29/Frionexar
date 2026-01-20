import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesWeProvide } from "@/components/services/services-we-provide";
import { ProjectMap } from "@/components/services/project-map";
import { Guarantees } from "@/components/services/guarantees";
import { ServicesTestimonials } from "@/components/services/services-testimonials";
import { ServicesCTA } from "@/components/services/services-cta";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesHero />
      <ServicesWeProvide />
      <ProjectMap />
      <Guarantees />
      <ServicesTestimonials />
      <ServicesCTA />
      <Footer />
    </main>
  );
}

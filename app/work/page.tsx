import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WorkHero } from "@/components/work/work-hero";
import { CaseStudiesGrid } from "@/components/work/case-studies-grid";
import { WorkProjectMap } from "@/components/work/work-project-map";
import { WorkCta } from "@/components/work/work-cta";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <WorkHero />
        <CaseStudiesGrid />
        <WorkProjectMap />
        <WorkCta />
      </main>
      <Footer />
    </div>
  );
}

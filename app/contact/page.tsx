import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"
import { OfficeLocations } from "@/components/office-locations"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { TextUsSidebar } from "@/components/text-us-sidebar"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TextUsSidebar />
      <main>
        <ContactForm />
        <OfficeLocations />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

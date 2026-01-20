import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact/contact-form"
import { OfficeLocations } from "@/components/contact/office-locations"
import { CTASection } from "@/components/contact/cta-section"
import { Footer } from "@/components/footer"
import { TextUsSidebar } from "@/components/contact/text-us-sidebar"

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

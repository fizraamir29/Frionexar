import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-600 mb-4">Pull the Trigger!</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-black mb-8 leading-tight">
          Let's bring your<br />vision to life
        </h2>
        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 text-sm font-medium">
          Get Started
        </Button>
      </div>
    </section>
  )
}

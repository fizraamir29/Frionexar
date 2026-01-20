"use client"

import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Text */}
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
              Got an idea for your project?
            </h1>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              We'd love to learn more about you and what we can design and build together.
            </p>

            <div className="flex flex-col gap-4 mt-12">
              <a href="mailto:info@Frionexar.co" className="flex items-center gap-3 text-gray-700 hover:text-black">
                <Mail className="w-5 h-5" />
                <span>info@Frionexar.co</span>
              </a>
              <a href="tel:866-978-2220" className="flex items-center gap-3 text-gray-700 hover:text-black">
                <Phone className="w-5 h-5" />
                <span>866-978-2220</span>
              </a>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full">
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm text-gray-700 mb-2 block">
                  Name*
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full border-gray-200 bg-gray-50 rounded-md h-12 focus:border-black focus:ring-0"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-sm text-gray-700 mb-2 block">
                    Email*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full border-gray-200 bg-gray-50 rounded-md h-12 focus:border-black focus:ring-0"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm text-gray-700 mb-2 block">
                    Phone*
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="w-full border-gray-200 bg-gray-50 rounded-md h-12 focus:border-black focus:ring-0"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm text-gray-700 mb-2 block">
                  Message*
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  className="w-full border-gray-200 bg-gray-50 rounded-md resize-none focus:border-black focus:ring-0"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 rounded-full h-12 text-sm font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

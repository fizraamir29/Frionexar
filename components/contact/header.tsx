"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactDrawer } from "@/components/contact/contact-drawer"

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-black">
              Frionexar<span className="text-green-500">.</span>
            </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black">
                Services
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black">
                Industries
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black">
                Solutions
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black">
                Work
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black">
                Company
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-black">
                Contact
              </Link>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <a href="tel:866-978-2220" className="hidden md:flex items-center gap-2 text-sm text-gray-700">
                <Phone className="w-4 h-4" />
                866-978-2220
              </a>
              <Button 
                onClick={() => setIsDrawerOpen(true)}
                className="bg-black text-white hover:bg-gray-800 rounded-full px-5 py-2 text-sm"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </header>
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  )
}

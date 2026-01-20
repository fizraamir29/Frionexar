"use client"

import React from "react"

import { useState } from "react"
import { X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setIsSubmitted(false)
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
          onClick={handleClose}
        />
      )}
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#1a1a1a] z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
          aria-label="Close drawer"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        {/* Content */}
        <div className="p-8 pt-16 pb-12">
          {isSubmitted ? (
            /* Thank You Message */
            <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
              <div className="w-20 h-20 rounded-full bg-[#2dd86b] flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Thank You!
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
                Your message has been received. We will contact you within <span className="text-[#2dd86b] font-semibold">24 hours</span>.
              </p>
              <Button 
                onClick={handleClose}
                className="mt-8 bg-[#2dd86b] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#25c55e] transition-colors"
              >
                Close
              </Button>
            </div>
          ) : (
            /* Contact Form */
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Got a <span className="text-[#2dd86b] underline underline-offset-4 decoration-2">project?</span>
              </h2>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                Share the details of your project - like scope, timeframes, or business challenges. Our team will thoroughly review the materials and respond to you promptly.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] text-white placeholder-gray-500 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#2dd86b]"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] text-white placeholder-gray-500 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#2dd86b]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 bg-[#2a2a2a] text-white placeholder-gray-500 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#2dd86b]"
                  />
                </div>
                
                <textarea
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] text-white placeholder-gray-500 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#2dd86b] resize-none"
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-[#2dd86b] text-black font-semibold py-3 rounded-full hover:bg-[#25c55e] transition-colors"
                >
                  Send Message
                </Button>
              </form>

              <p className="text-gray-500 text-xs mt-6 leading-relaxed">
                {"We'll keep your information in our CRM to respond to your request and send you more details about our services. For more info, check our privacy policy."}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  )
}

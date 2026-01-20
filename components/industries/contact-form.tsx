"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Got an idea for
              <br />
              your project?
            </h2>
            <p className="text-foreground/70">
              We&apos;d love to learn more about you
              and what we can design and build
              together.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name*</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[text-accent]/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email*</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[text-accent]/50"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone*</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[text-accent]/50"
                  placeholder="Your phone"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message*</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[text-accent]/50 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <Button
                type="submit"
                className="rounded-full bg-[text-accent] text-white hover:bg-[text-accent]/90 px-8 gap-2"
              >
                Send Message
                <ArrowRight size={16} />
              </Button>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <a
                  href="mailto:info@Frionexar.co"
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
                >
                  <Mail size={16} />
                  info@Frionexar.co
                </a>
                <a
                  href="tel:866-978-2220"
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
                >
                  <Phone size={16} />
                  866-978-2220
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

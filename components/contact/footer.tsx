import Link from "next/link"
import { Linkedin, Facebook, Dribbble, Youtube } from "lucide-react"

const footerLinks = {
  company: {
    title: "Company",
    links: ["About Us", "Testimonials", "Process", "Contact"],
  },
  resources: {
    title: "Resources",
    links: ["Blog", "Events", "Press Release", "Work"],
  },
  services: {
    title: "Services",
    links: ["Mobile App", "Game Development", "Blockchain Development", "AI Development"],
  },
  insights: {
    title: "Insights",
    links: ["University", "Careers", "Manifesto", "Culture Book"],
  },
}

const locations = [
  {
    city: "West Palm Beach",
    address: "560 Village Blvd., Suite 120 #3,",
    address2: "West Palm Beach, FL-33409,",
    country: "United States",
  },
  {
    city: "Manchester",
    address: "73 Meadway, Bramhall",
    address2: "Stockport, Manchester - SK7 1LX,",
    country: "United Kingdom",
  },
  {
    city: "Dubai",
    address: "Building 11, Level 7, Bay Square,",
    address2: "Business Bay, Dubai - 23304,",
    country: "United Arab Emirates",
  },
  {
    city: "Karachi",
    address: "54C, Kashmir Road, Block 2,",
    address2: "PECHS, Karachi, Sindh - 75400,",
    country: "Pakistan",
  },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-xs text-gray-400">{section.title}</span>
              </div>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-white hover:text-green-500 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Locations Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-xs text-gray-400">Locations</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {locations.map((location) => (
              <div key={location.city}>
                <h4 className="text-sm font-semibold text-white mb-2">{location.city}</h4>
                <div className="text-xs text-gray-400 leading-relaxed">
                  <p>{location.address}</p>
                  <p>{location.address2}</p>
                  <p>{location.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Contact */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-xs text-gray-400">Contact</span>
              </div>
              <a href="tel:866-978-2220" className="text-green-500 font-medium">
                866-978-2220
              </a>
              <a href="mailto:info@Frionexar.co" className="text-green-500 font-medium">
                info@Frionexar.co
              </a>
            </div>

            {/* Center - Logo & Copyright */}
            <div className="text-center">
              <Link href="/" className="text-xl font-bold text-white mb-2 block">
                Frionexar<span className="text-green-500">.</span>
              </Link>
              <p className="text-xs text-gray-400 mb-2">© 2026 Frionexar. All Rights Reserved</p>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <span>Content protected by DMCA.com</span>
                <span className="bg-white text-black px-2 py-0.5 rounded text-[10px] font-semibold">
                  DMCA PROTECTED
                </span>
              </div>
            </div>

            {/* Right - Social & Legal */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex items-center gap-4">
                <Link href="#" className="text-white hover:text-green-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-green-500 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-green-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-green-500 transition-colors">
                  <Dribbble className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-white hover:text-green-500 transition-colors">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span>|</span>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

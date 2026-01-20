"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Button as ContactButton } from "@/components/contact/ui/button";
import { ContactDrawer } from "@/components/contact/contact-drawer";


const servicesDropdownData = {
  mobileApp: {
    title: "Mobile App",
    items: [
      "iOS App",
      "Android App",
      "eCommerce App",
      "visionOS App",
      "Enterprise App",
      "Low Code No Code App",
      "Progressive Web App",
    ],
    crossPlatform: {
      title: "Cross Platform App",
      items: ["Flutter App", "Hybrid App"],
    },
  },
  softwareDev: {
    title: "Software Development",
    items: [
      "Software Consulting",
      "System Integration",
      "Software Design",
      "Software Testing",
      "Software Maintenance & Support",
      "Software Product Development",
      "Custom API Development",
      "IoT Software Development",
      "Web App Development",
      "Web Development",
      "Custom Web Development",
    ],
  },
  blockchain: {
    title: "Blockchain Development",
    items: [
      "Blockchain Protocol",
      "Crypto Bank Development",
      "Crypto Wallet Development",
      "Smart Contract Development",
      "Defi Staking Platform",
      "Decentralized Exchange",
      "Digital Assets Development",
      "Stablecoin Development",
      "NFT Development Services",
      "NFT Marketplace Development",
      "DApp Development",
    ],
  },
  gameDev: {
    title: "Game Development",
    items: [
      "Mobile Game Development",
      "Unity Game Development",
      "Unreal Game Development",
      "Blockchain Game Development",
      "2D Game Development",
      "3D Game Development",
      "Web3 Game Development",
      "Multiplayer Game Development",
      "Game Testing",
    ],
  },
};

const industriesDropdownData = {
  column1: ["Automotive", "Ecommerce", "CRM Development", "Agriculture"],
  column2: ["B2B Software", "Food", "Logistics", "Finance"],
  column3: ["Healthcare", "Travel", "Manufacturing", "Real Estate"],
  column4: ["Education", "Fashion and Apparel", "Legal", "Hospitality"],
};

const solutionsDropdownData = {
  column1: ["Cubix HappyForce", "On-Demand Delivery", "Cubix Insight Machine"],
  column2: ["Cubix Hero", "Chat Bot", "Event Management"],
  column3: ["Cubix Shop", "Cubix Chain"],
  column4: ["Cubix Messenger", "Social Platform"],
};

const companyDropdownData = {
  about: ["Process", "Careers", "Clients", "University", "Testimonials", "Manifesto"],
  resources: ["Blog", "News & Updates", "Press Release", "Events"],
};

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: ".NET", icon: ".N" },
  { name: "Node.js", icon: "⬢" },
  { name: "Swift", icon: "🔶" },
  { name: "Kotlin", icon: "K" },
  { name: "Flutter", icon: "◇" },
  { name: "AWS", icon: "☁️" },
  { name: "Azure", icon: "◈" },
  { name: "GraphQL", icon: "◆" },
  { name: "REST API", icon: "⟷" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
         {/* Logo */}
<Link href="/" className="flex items-center gap-1">
  <img
    src="/logo.png"   // yahan apni logo image ka path do
    alt="Frionexar Logo"
    className="h-30 w-auto"  // height adjust karo, width auto
  />
</Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                  activeDropdown === "services" ? "text-accent" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                Services
                <ChevronDown size={14} />
              </Link>

              {/* Services Mega Dropdown */}
              {activeDropdown === "services" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-background border border-border rounded-xl shadow-2xl p-6 mt-2">
                  <div className="flex gap-8">
                    {/* Left Column - Services & Technologies */}
                    <div className="w-48 border-r border-border pr-6">
                      <Link
                        href="/services"
                        className="flex items-center justify-between mb-6 group"
                      >
                        <span className="font-semibold text-lg">Services</span>
                        <ArrowRight
                          size={20}
                          className="text-accent group-hover:translate-x-1 transition-transform"
                        />
                      </Link>

                      <div className="mb-4">
                        <span className="font-semibold text-sm text-foreground/60 mb-3 block">
                          Technologies
                        </span>
                        <div className="grid grid-cols-4 gap-2">
                          {technologies.slice(0, 12).map((tech) => (
                            <div
                              key={tech.name}
                              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-xs font-medium hover:bg-[#0097b2]/10 cursor-pointer transition-colors"
                              title={tech.name}
                            >
                              {tech.icon}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Service Categories */}
                    <div className="flex-1 grid grid-cols-4 gap-6">
                      {/* Mobile App */}
                      <div>
                        <h4 className="font-semibold text-sm mb-3">
                          {servicesDropdownData.mobileApp.title}
                        </h4>
                        <ul className="space-y-2">
                          {servicesDropdownData.mobileApp.items.map((item) => (
                            <li key={item}>
                              <Link
                                href="/services"
                                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <h4 className="font-semibold text-sm mt-4 mb-3">
                          {servicesDropdownData.mobileApp.crossPlatform.title}
                        </h4>
                        <ul className="space-y-2">
                          {servicesDropdownData.mobileApp.crossPlatform.items.map((item) => (
                            <li key={item}>
                              <Link
                                href="/services"
                                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Software Development */}
                      <div>
                        <h4 className="font-semibold text-sm mb-3">
                          {servicesDropdownData.softwareDev.title}
                        </h4>
                        <ul className="space-y-2">
                          {servicesDropdownData.softwareDev.items.map((item) => (
                            <li key={item}>
                              <Link
                                href="/services"
                                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Blockchain Development */}
                      <div>
                        <h4 className="font-semibold text-sm mb-3">
                          {servicesDropdownData.blockchain.title}
                        </h4>
                        <ul className="space-y-2">
                          {servicesDropdownData.blockchain.items.map((item) => (
                            <li key={item}>
                              <Link
                                href="/services"
                                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Game Development */}
                      <div>
                        <h4 className="font-semibold text-sm mb-3">
                          {servicesDropdownData.gameDev.title}
                        </h4>
                        <ul className="space-y-2">
                          {servicesDropdownData.gameDev.items.map((item) => (
                            <li key={item}>
                              <Link
                                href="/services"
                                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/services"
                          className="text-sm text-accent hover:underline mt-3 inline-block"
                        >
                          See All Games Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/industries"
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                  activeDropdown === "industries" ? "text-accent" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                Industries
                <ChevronDown size={14} />
              </Link>

              {/* Industries Mega Dropdown */}
              {activeDropdown === "industries" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[750px] bg-background border border-border rounded-xl shadow-2xl p-6 mt-2">
                  <div className="flex gap-8">
                    {/* Left Column - Industries Title */}
                    <div className="w-40 border-r border-border pr-6">
                      <Link
                        href="/industries"
                        className="flex items-center justify-between group"
                      >
                        <span className="font-semibold text-lg">Industries</span>
                        <ArrowRight
                          size={20}
                          className="text-accent group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>

                    {/* Industry Categories - 4 Columns */}
                    <div className="flex-1 grid grid-cols-4 gap-8">
                      <div>
                        <ul className="space-y-3">
                          {industriesDropdownData.column1.map((item) => (
                            <li key={item}>
                              <Link
                                href="/industries"
                                className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-3">
                          {industriesDropdownData.column2.map((item) => (
                            <li key={item}>
                              <Link
                                href="/industries"
                                className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-3">
                          {industriesDropdownData.column3.map((item) => (
                            <li key={item}>
                              <Link
                                href="/industries"
                                className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-3">
                          {industriesDropdownData.column4.map((item) => (
                            <li key={item}>
                              <Link
                                href="/industries"
                                className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                  activeDropdown === "solutions" ? "text-accent" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                Solutions
                <ChevronDown size={14} />
              </button>

              {/* Solutions Mega Dropdown */}
              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-background border border-border rounded-xl shadow-2xl p-6 mt-2">
                  <div className="flex gap-8">
                    {/* Left Column - Solutions Title */}
                    <div className="w-36 border-r border-border pr-6">
                      <div className="flex items-center justify-between group cursor-pointer">
                        <span className="font-semibold text-lg">Solutions</span>
                        <ArrowRight
                          size={20}
                          className="text-accent group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>

                    {/* Solution Categories - 4 Columns */}
                    <div className="flex-1 grid grid-cols-4 gap-6">
                      <div>
                        <ul className="space-y-3">
                          {solutionsDropdownData.column1.map((item) => (
                            <li key={item}>
                              <Link
                                href="/"
                                className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-3">
                          {solutionsDropdownData.column2.map((item) => (
                            <li key={item}>
                              <Link
                                href="/"
                                className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-3">
                          {solutionsDropdownData.column3.map((item) => (
                            <li key={item}>
                              <Link
                                href="/"
                                className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-3">
                          {solutionsDropdownData.column4.map((item) => (
                            <li key={item}>
                              <Link
                                href="/"
                                className="text-sm text-foreground/80 hover:text-foreground transition-colors font-medium"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/work"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Work
            </Link>
            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("company")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                  activeDropdown === "company" ? "text-accent" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                Company
                <ChevronDown size={14} />
              </button>

              {/* Company Mega Dropdown */}
              {activeDropdown === "company" && (
                <div className="absolute top-full right-0 w-[800px] bg-background border border-border rounded-xl shadow-2xl p-6 mt-2">
                  <div className="flex gap-8">
                    {/* Left Column - Company Title */}
                    <div className="w-36 border-r border-border pr-6">
                      <div className="flex items-center justify-between group cursor-pointer">
                        <span className="font-semibold text-lg">Company</span>
                        <ArrowRight
                          size={20}
                          className="text-accent group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>

                    {/* About Column */}
                    <div>
                      <h4 className="font-semibold text-sm mb-4">About</h4>
                      <ul className="space-y-3">
                        {companyDropdownData.about.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#0097b2]" />
                            <Link
                              href="/"
                              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                      <h4 className="font-semibold text-sm mb-4">Resources</h4>
                      <ul className="space-y-3">
                        {companyDropdownData.resources.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#0097b2]" />
                            <Link
                              href="/"
                              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Partners Section */}
                    <div className="flex-1 pl-6 border-l border-border">
                      <p className="text-lg font-medium mb-4 leading-relaxed">
                        We partner with the world&apos;s<br />technology leaders.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-[8px] text-foreground/60">Google Developer</div>
                            <div className="text-[8px] text-foreground/60">Agency Program</div>
                            <div className="bg-blue-600 text-white text-[6px] px-1 rounded mt-0.5">Certified Agency</div>
                          </div>
                        </div>
                        <div className="w-16 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-red-600 font-bold text-sm">A</div>
                            <div className="text-[7px] text-foreground/60">Adobe</div>
                            <div className="text-[7px] font-semibold">SOLUTION</div>
                            <div className="text-[7px] font-semibold">PARTNER</div>
                          </div>
                        </div>
                        <div className="w-16 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-[7px] text-orange-500 font-bold">amazon</div>
                            <div className="text-[6px] text-foreground/60">webservices</div>
                            <div className="text-[6px] text-foreground/60">Partner Network</div>
                          </div>
                        </div>
                        <div className="w-16 h-12 bg-muted rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="grid grid-cols-2 gap-0.5 w-4 h-4 mx-auto mb-0.5">
                              <div className="bg-red-500" />
                              <div className="bg-green-500" />
                              <div className="bg-blue-500" />
                              <div className="bg-yellow-500" />
                            </div>
                            <div className="text-[6px] font-semibold">Microsoft</div>
                            <div className="text-[5px] text-foreground/60">CERTIFIED CONSULTING</div>
                            <div className="text-[5px] text-foreground/60">PARTNER</div>
                          </div>
                        </div>

                      </div>
                    </div>
                    jfghfd
                  </div>
                </div>
              )}
            </div>
            <NavItem label="Contact" href="#" />
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="tel:866-978-2220" className="flex items-center gap-2 text-sm font-medium">
              <span>📞</span>
              +923183919074
            </Link>
            <Button size="sm" className="rounded-full bg-[#0097b2] text-white hover:bg-[##0097b2]/90 px-6">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              <MobileNavItem label="Services" href="/services" />
              <MobileNavItem label="Industries" href="/industries" />
              <MobileNavItem label="Solutions" />
              <MobileNavItem label="Work" />
              <MobileNavItem label="Company" />
              <MobileNavItem label="Contact" />
            </nav>
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
              <Button variant="outline" className="rounded-full bg-transparent">
                866-978-2220
              </Button>
              <Button className="rounded-full bg-[#0097b2] text-white hover:bg-[#0097b2]/90">
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavItem({
  label,
  hasDropdown,
  href = "#",
}: {
  label: string;
  hasDropdown?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
    >
      {label}
      {hasDropdown && <ChevronDown size={14} />}
    </Link>
  );
}

function MobileNavItem({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between w-full px-2 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
    >
      {label}
      <ChevronDown size={14} />
    </Link>
  );
}
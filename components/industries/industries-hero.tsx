import Image from "next/image";
import { Star } from "lucide-react";

export function IndustriesHero() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1 bg-[text-accent] text-white px-3 py-1 rounded-full text-sm font-semibold">
              <span>Frionexar</span>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-accent">Industries</span> We
            <br />
            Empower &<br />
            Support
          </h1>

          {/* Description */}
          <p className="text-lg text-foreground/70 max-w-xl">
            Drive success with industry-specific products
            designed to meet diverse business needs.
          </p>
        </div>
      </div>

      {/* 3D Floating Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <Image
          src="/images/industries-hero-3d.jpg"
          alt="3D decorative shapes"
          fill
          className="object-contain object-right"
        />
      </div>
    </section>
  );
}

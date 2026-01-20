import Image from "next/image";
import { Star } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* 3D Shapes Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/3d-shapes.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-accent">Business</span> through
            <br />
            Accelerated Digital
            <br />
            Services
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl">
            Achieve business goals and meet user satisfaction by developing
            seamless and intuitive products.
          </p>

          {/* Rating Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm font-medium">clutch</span>
            <span className="text-sm text-foreground/60">4.9</span>
          </div>
        </div>
      </div>
    </section>
  );
}

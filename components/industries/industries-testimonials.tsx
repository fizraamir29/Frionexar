import Image from "next/image";
import { Star } from "lucide-react";

const clientLogos = [
  { name: "Clutch", rating: "5.0" },
  { name: "GoodFirms", rating: "5.0" },
  { name: "Expertise", rating: "5.0" },
];

const testimonials = [
  {
    quote:
      "Frionexar successfully built the application, and the client is waiting for Appstore and Playstore approval. The project manager communicated primarily on Zoom and Slack, frequently providing updates. Above all, their genuine interest in the project and in-depth knowledge in this field were notable.",
    author: "Charles Kinnerly Jr, Optiva, Founder",
    avatar: "/images/team-member.jpg",
    rating: 5,
    logo: null,
  },
  {
    quote:
      "Frionexar managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project.",
    author: "Jackie Dallas, Director",
    avatar: "/images/blog-2.jpg",
    rating: 5,
    logo: "Mobiel",
  },
  {
    quote:
      "The engagement met the expectations of the internal team. Frionexar successfully worked within the robust scope, often going above and beyond to ensure client satisfaction. The team provides clients with a high level of support while still working quickly and creatively.",
    author: "Hannah M Zeigler, Digital Manager",
    avatar: "/images/team-member.jpg",
    rating: 5,
    logo: null,
  },
  {
    quote:
      "Frionexar produced clean code and the app got positive reviews. While there were staffing and language issues, the overall experience was positive. The assigned resources were attentive and fixed problems within a day.",
    author: "Geoffrey Anderson, Co-Founder and CEO",
    avatar: "/images/blog-2.jpg",
    rating: 5,
    logo: null,
  },
];

export function IndustriesTestimonials() {
  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our clients simply love <span className="text-accent">what we do</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Proud to serve as the innovation partner for industry leaders who have experienced our expertise and
            excellence firsthand.
          </p>

          {/* Client Logos */}
          <div className="flex items-center justify-center gap-8 mb-12">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="flex items-center gap-2">
                <span className="text-white font-semibold">{logo.name}</span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-white/60">{logo.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[text-accent]/20">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {testimonial.author}
                    </p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {testimonial.logo && (
                  <span className="text-white/40 text-sm">{testimonial.logo}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

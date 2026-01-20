import Image from "next/image";
import { Star } from "lucide-react";

const partners = [
  { name: "Clutch", logo: "C" },
  { name: "Forbes", logo: "F" },
  { name: "Sifted", logo: "S" },
  { name: "TechCrunch", logo: "TC" },
];

const testimonials = [
  {
    id: 1,
    quote:
      "Frionexar successfully built the application, and the client is waiting for Appstore and Playstore approval. The project manager communicated primarily on Zoom and Slack, frequently providing updates. Above all, their genuine interest in the project and in-depth knowledge in this field were notable.",
    author: "Client Kimberly A. Dallas",
    role: "Founder",
    rating: 5,
    avatar: "/images/team-member.jpg",
    companyLogo: null,
  },
  {
    id: 2,
    quote:
      "Frionexar managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project.",
    author: "Jack Anderson",
    role: "Director",
    rating: 5,
    avatar: "/images/blog-2.jpg",
    companyLogo: "Hottest",
  },
  {
    id: 3,
    quote:
      "The engagement met the expectations of the internal team. Frionexar successfully worked within the robust scope, often going above and beyond to ensure client satisfaction. The team provides clients with a high level of support while still working quickly and creatively.",
    author: "Hamza Al Zabir",
    role: "Digital Manager",
    rating: 5,
    avatar: "/images/team-member.jpg",
    companyLogo: null,
  },
  {
    id: 4,
    quote:
      "Frionexar produced clean code and the app got positive reviews. While there were staffing and language issues, the overall experience was positive. The assigned resources were attentive and fixed problems within a day.",
    author: "Matthew Salamon",
    role: "Co-Founder and CEO",
    rating: 5,
    avatar: "/images/blog-2.jpg",
    companyLogo: null,
  },
];

export function ServicesTestimonials() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our clients simply love{" "}
            <span className="text-accent">what we do</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Proud to serve as the innovation partner for industry leaders who
            have experienced our expertise and excellence firsthand.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center items-center gap-8 mb-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="text-foreground/40 font-bold text-lg"
            >
              {partner.logo}
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background rounded-2xl p-6 shadow-sm"
            >
              <p className="text-foreground/80 mb-6 leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-foreground/60 text-xs">
                    {testimonial.role}
                  </p>
                </div>
                {testimonial.companyLogo && (
                  <div className="text-foreground/40 font-semibold text-sm">
                    {testimonial.companyLogo}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

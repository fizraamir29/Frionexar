import Image from "next/image";

const guarantees = [
  {
    id: 1,
    title: "High-Quality Practices",
    description:
      "High-quality practices in software development involve rigorous testing, adherence to standards, and continuous improvement, ensuring reliable, efficient, and robust solutions.",
    image: "/images/guarantee-quality.jpg",
  },
  {
    id: 2,
    title: "Real-estate Software",
    description:
      "Real-Estate software streamlines property management, sales, and client interactions, enhancing efficiency, organization, and profitability for real estate professionals.",
    image: "/images/guarantee-realestate.jpg",
  },
  {
    id: 3,
    title: "Strategic Partnerships",
    description:
      "Strategic partnerships in software development drive innovation and growth by combining expertise, resources, and technologies to deliver superior solutions.",
    image: "/images/guarantee-partnership.jpg",
  },
];

export function Guarantees() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frionexar guarantees
        </h2>
        <div className="h-1 w-24 bg-accent mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

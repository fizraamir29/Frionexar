const steps = [
  {
    number: "01",
    title: "Ideate",
    description: "We work closely with you to understand your vision, goals, and challenges. Our team conducts thorough research and analysis to define the project scope.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our designers create intuitive and visually appealing interfaces that enhance user experience. We prototype and iterate based on feedback.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Our expert developers bring designs to life using cutting-edge technologies. We follow agile methodologies for efficient delivery.",
  },
  {
    number: "04",
    title: "Test",
    description: "Rigorous quality assurance ensures your product is bug-free and performs flawlessly across all platforms and devices.",
  },
  {
    number: "05",
    title: "Launch",
    description: "We handle deployment and ensure a smooth launch. Our team provides support to address any immediate needs.",
  },
  {
    number: "06",
    title: "Support",
    description: "Post-launch, we offer ongoing maintenance and support to keep your software running optimally and evolving with your needs.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our product
            <br />
            <span className="text-accent">development process</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A systematic approach to turning your ideas into successful digital products.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative grid lg:grid-cols-[120px_1fr] gap-6 lg:gap-12"
              >
                {/* Step Number */}
                <div className="flex items-start gap-4 lg:flex-col lg:items-center">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold lg:text-center">{step.title}</h3>
                </div>

                {/* Step Content */}
                <div className="lg:pt-3">
                  <div className={`p-6 rounded-2xl ${index % 2 === 0 ? "bg-background" : "bg-foreground text-background"}`}>
                    <p className={`leading-relaxed ${index % 2 === 0 ? "text-muted-foreground" : "opacity-80"}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

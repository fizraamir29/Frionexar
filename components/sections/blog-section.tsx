import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we build software applications.",
    image: "/images/blog-1.jpg",
    category: "Artificial Intelligence",
    date: "Jan 15, 2026",
    readTime: "5 min read",
  },
  {
    title: "Building Scalable Mobile Applications",
    excerpt: "Learn the best practices for creating mobile apps that can handle millions of users.",
    image: "/images/journey-2.jpg",
    category: "Mobile Development",
    date: "Jan 10, 2026",
    readTime: "8 min read",
  },
  {
    title: "Cloud Migration Strategies for Enterprises",
    excerpt: "A comprehensive guide to successfully migrating your enterprise infrastructure to the cloud.",
    image: "/images/journey-4.jpg",
    category: "Cloud Computing",
    date: "Jan 5, 2026",
    readTime: "6 min read",
  },
];

export function BlogSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-accent">Blogs</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Insights, tutorials, and industry updates from our team of experts.
            </p>
          </div>
          <button className="flex items-center gap-2 text-accent font-medium hover:underline whitespace-nowrap">
            View All Articles
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {blog.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

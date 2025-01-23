import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with this team was an absolute pleasure. Their attention to detail and creative solutions exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechVision",
    },
    {
      quote: "The level of professionalism and technical expertise demonstrated throughout our project was outstanding.",
      author: "Michael Chen",
      role: "CTO, InnovateLabs",
    },
    {
      quote: "They transformed our vision into reality with remarkable precision and creativity. Highly recommended!",
      author: "Emma Rodriguez",
      role: "Product Manager, DesignCraft",
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-display mb-16 text-center">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-secondary p-8 rounded-lg transition-all duration-500 hover:bg-secondary/80"
            >
              <Quote className="absolute -top-4 -left-4 h-8 w-8 text-muted-foreground opacity-50 group-hover:text-primary group-hover:opacity-100 transition-all duration-500" />
              <div className="space-y-4">
                <p className="text-muted-foreground italic leading-relaxed group-hover:text-foreground transition-colors duration-500">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-display text-lg">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import { Code, Share, ShoppingCart } from "lucide-react";

// Services component with Web, Social Media, and E-commerce management services
const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 mb-6" />,
      title: "Web Design & Development",
      description: "Custom website design and development tailored to your brand's unique needs. Creating responsive, modern, and user-friendly web experiences."
    },
    {
      icon: <Share className="w-12 h-12 mb-6" />,
      title: "Social Media Management",
      description: "Strategic social media management and content creation to boost your brand's online presence and engage with your target audience."
    },
    {
      icon: <ShoppingCart className="w-12 h-12 mb-6" />,
      title: "E-commerce Management",
      description: "End-to-end e-commerce solutions including store setup, product management, inventory control, and sales optimization. Specializing in Shopify and custom e-commerce platforms."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-display mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group bg-background/50 backdrop-blur-sm p-8 rounded-lg text-center transition-all duration-300 hover:bg-background/80 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex justify-center text-primary transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-display mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
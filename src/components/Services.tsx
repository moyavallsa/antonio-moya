import { Code2, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Custom website design and development tailored to your brand's unique needs. Creating responsive, modern, and user-friendly web experiences.",
      icon: <Code2 className="h-12 w-12 mb-4 text-primary" />
    },
    {
      title: "Social Media Management",
      description: "Strategic social media management and content creation to boost your brand's online presence and engage with your target audience.",
      icon: <Share2 className="h-12 w-12 mb-4 text-primary" />
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-display mb-12 text-center animate-fade-in">Services</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-secondary border-none hover:bg-secondary/80 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center space-y-4 p-4 md:p-6">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-xl md:text-2xl font-display">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <p className="text-sm md:text-base text-muted-foreground text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
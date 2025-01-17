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
        <h2 className="text-4xl font-display mb-12 text-center animate-fade-in">Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-secondary border-none hover:bg-secondary/80 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
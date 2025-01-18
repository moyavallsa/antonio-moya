import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Unimodul.es",
      url: "https://unimodul.es",
      description: "Website development and management for Unimodul.es platform.",
      image: "/lovable-uploads/c94560f6-92e6-4742-a6ab-ee8281ca6da7.png"
    },
    {
      title: "Luc-ia.fun",
      url: "https://luc-ia.fun",
      description: "Website development and management for Luc-ia.fun platform.",
      image: "/lovable-uploads/c94560f6-92e6-4742-a6ab-ee8281ca6da7.png"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-display mb-12 text-center">Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="group relative overflow-hidden rounded-lg bg-secondary p-6 transition-all duration-500 hover:bg-secondary/80 hover:scale-105 hover:shadow-2xl"
            >
              <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
              <h3 className="text-2xl font-display mb-2 transition-transform duration-300 group-hover:translate-x-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 transition-transform duration-300 group-hover:translate-x-2">{project.description}</p>
              <Button 
                asChild 
                variant="outline"
                className="transition-transform duration-300 group-hover:translate-x-2"
              >
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2"
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
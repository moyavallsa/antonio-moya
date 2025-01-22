import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Unimodul.es",
      url: "https://unimodul.es",
      description: "Website development and management for Unimodul.es platform.",
      image: "/lovable-uploads/dee56d54-aae3-4380-85a4-cc3e3886ce13.png"
    },
    {
      title: "Luc-ia.fun",
      url: "https://luc-ia.fun",
      description: "Website development and management for Luc-ia.fun platform.",
      image: "/lovable-uploads/a9e98fe4-30f2-411d-a92c-d0ef922dc43e.png"
    },
    {
      title: "UseTube",
      url: "https://preview--usetube.lovable.app/",
      description: "A modern YouTube playlist management application.",
      image: "/lovable-uploads/55ac77ce-c6df-4929-b7ed-89778a994cd5.png"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-display mb-12 text-center">Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
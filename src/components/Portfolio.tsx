import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Unimodul.es",
      url: "https://unimodul.es",
      description: "Website development and management for Unimodul.es platform.",
      image: "/placeholder.svg"
    },
    {
      title: "Luc-ia.fun",
      url: "https://luc-ia.fun",
      description: "Website development and management for Luc-ia.fun platform.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-display mb-12 text-center">Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-lg bg-secondary p-6 transition-all hover:bg-secondary/80">
              <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-display mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <Button asChild variant="outline">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
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
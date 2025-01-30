import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "DexView",
      url: "https://dexview.netlify.app",
      description: "A real-time cryptocurrency data platform featuring a comprehensive scraper that aggregates and displays essential metrics for crypto assets, providing instant market insights.",
      image: "/lovable-uploads/dex-view.png"
    },
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
      url: "https://usetube.netlify.app/auth",
      description: "A modern YouTube playlist management application.",
      image: "/lovable-uploads/55ac77ce-c6df-4929-b7ed-89778a994cd5.png"
    },
    {
      title: "Hack News",
      url: "https://hckernews.netlify.app/",
      description: "A modern hacker news-inspired application with a Matrix-style terminal interface.",
      image: "/lovable-uploads/f8d92a45-7c6d-4e8b-a3bc-9d3e47c5b8e1.png"
    }
  ];

  const ecommerceProjects = [
    {
      title: "The Irish Woollen Workshop",
      url: "https://theirishwoollenworkshop.com",
      description: "Luxury Irish sheepskin e-commerce platform featuring seasonal-adaptive products including signature Huggable Booties, sheepskin rugs, pet beds, and baby care items. Includes multi-currency support, installment payments, and free shipping options within Ireland.",
      image: "/lovable-uploads/irish-woollen.png"
    },
    {
      title: "Elite Equine",
      url: "https://eliteequine.ie",
      description: "Complete e-commerce solution for Elite Equine, Ireland's premier brand for equestrian products. Features a comprehensive catalog of horse care products, riding gear, and stable equipment.",
      image: "/lovable-uploads/elite-equine.png"
    }
  ];

  const ProjectCard = ({ project }) => (
    <div 
      key={project.title} 
      className="group relative overflow-hidden rounded-lg bg-secondary p-4 sm:p-6 transition-all duration-500 hover:bg-secondary/80 hover:scale-105 hover:shadow-2xl"
    >
      <div className="aspect-video mb-4 sm:mb-6 overflow-hidden rounded-lg bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
      </div>
      <h3 className="text-xl sm:text-2xl font-display mb-2 transition-transform duration-300 group-hover:translate-x-2">{project.title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground mb-4 transition-transform duration-300 group-hover:translate-x-2">{project.description}</p>
      <Button 
        asChild 
        variant="outline"
        className="w-full sm:w-auto transition-transform duration-300 group-hover:translate-x-2"
      >
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center gap-2"
        >
          Visit Website
          <ExternalLink className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );

  return (
    <>
      <section id="portfolio" className="py-12 px-4 sm:px-6 w-full overflow-x-hidden">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-display mb-12 text-center">Web/App Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="ecommerce-portfolio" className="py-12 px-4 sm:px-6 w-full overflow-x-hidden bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-display mb-12 text-center">E-commerce Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecommerceProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

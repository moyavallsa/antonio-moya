import { Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:a.moya.valls@icloud.com";
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-display mb-12 text-center animate-fade-in">Contact</h2>
        <div className="max-w-xl mx-auto space-y-6 animate-fade-in px-4" style={{ animationDelay: "200ms" }}>
          <div className="flex flex-col items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full max-w-md group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={handleEmailClick}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm md:text-base truncate">a.moya.valls@icloud.com</span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full max-w-md group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/antonio-moya-valls-7168b3256/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm md:text-base">Connect on LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
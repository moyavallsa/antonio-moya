import { Youtube, Music } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 mt-auto bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Antonio Moya. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a
                href="https://www.youtube.com/@antoniomoya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a
                href="https://open.spotify.com/show/antoniomoya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Listen to my podcast on Spotify"
              >
                <Music className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
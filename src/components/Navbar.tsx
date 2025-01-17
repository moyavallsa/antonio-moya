import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md" : ""}`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-xl font-display">
            Antonio Moya.
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
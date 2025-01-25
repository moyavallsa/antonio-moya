import { WavyBackground } from "./ui/wavy-background";

const Hero = () => {
  return (
    <section className="relative w-full">
      <WavyBackground
        className="w-full"
        colors={["#2a2a2a", "#4a4a4a", "#6a6a6a"]}
        blur={10}
        waveWidth={100}
        waveOpacity={0.3}
        speed="slow"
        position="relative"
      >
        <div className="container mx-auto px-6 min-h-screen flex items-center justify-center">
          <div className="flex-1 animate-fadeIn max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-display mb-4">
              Antonio<br />Moya.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Web Designer & Developer
            </p>
            <p className="text-lg text-muted-foreground">
              Creating beautiful, functional websites and digital experiences.
            </p>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default Hero;
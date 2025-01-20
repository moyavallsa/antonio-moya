import { WavyBackground } from "./ui/wavy-background";

const Hero = () => {
  return (
    <WavyBackground
      className="min-h-screen"
      containerClassName="min-h-screen"
      colors={["#1a1a1a", "#222222", "#2a2a2a", "#333333"]}
      waveWidth={100}
      backgroundFill="hsl(var(--background))"
      blur={2}
      waveOpacity={0.3}
      speed="slow"
    >
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-display mb-4">
            Antonio<br />Moya.
          </h1>
          <p className="text-xl md:text-2xl tracking-wide uppercase relative bg-gradient-to-r from-white via-gray-300 to-white bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent">
            Web Designer • Developer<br />
            Social Media Manager
          </p>
        </div>
      </div>
    </WavyBackground>
  );
};

export default Hero;
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
      <div className="container mx-auto px-6 py-12">
        <div className="animate-fadeIn max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-display mb-4">
            Antonio<br />Moya.
          </h1>
          <p className="text-xl md:text-2xl tracking-wide uppercase relative bg-gradient-to-r from-white via-gray-300 to-white bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent">
            Web Designer • Developer<br />
            Social Media Manager
          </p>
        </div>
        
        <div className="animate-fadeIn translate-x-32 translate-y-24 flex justify-end" style={{ animationDelay: "200ms" }}>
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-secondary"></div>
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZiNjBiNzEtZjZiZi00ZmM0LWI3ZDAtZjI5ZTgxNjQ0ZWM4ZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/xT9IgzoKnwFNmISR8I/giphy.gif"
              alt="Terminal showing services"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};

export default Hero;
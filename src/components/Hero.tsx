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
        
        <div className="flex-1 mt-12 lg:mt-0 animate-fadeIn" style={{ animationDelay: "200ms" }}>
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 rounded-full bg-secondary"></div>
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtY2JrY3BxOGt1dWF0MG9pNm51MmVxZnB6NnB3bGZwcWJxYjh6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Coding Animation"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};

export default Hero;
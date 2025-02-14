
import { WavyBackground } from "./ui/wavy-background";
import DecryptedText from "./ui/decrypted-text";

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
              <DecryptedText 
                text="Antonio"
                animateOn="view"
                sequential={true}
                speed={30}
                className="text-foreground"
                encryptedClassName="text-primary/50"
                parentClassName="block"
              />
              <DecryptedText 
                text="Moya."
                animateOn="view"
                sequential={true}
                speed={30}
                className="text-foreground"
                encryptedClassName="text-primary/50"
                parentClassName="block"
              />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              <DecryptedText 
                text="Web Designer & Developer"
                animateOn="view"
                sequential={true}
                speed={20}
                className="text-muted-foreground"
                encryptedClassName="text-muted-foreground/50"
              />
            </p>
            <p className="text-lg text-muted-foreground">
              <DecryptedText 
                text="Creating beautiful, functional websites and digital experiences."
                animateOn="view"
                sequential={true}
                speed={10}
                className="text-muted-foreground"
                encryptedClassName="text-muted-foreground/50"
              />
            </p>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
};

export default Hero;

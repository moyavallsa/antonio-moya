const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-display mb-4">
            Antonio<br />Moya.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground tracking-wide uppercase">
            Web Designer • Developer<br />
            Social Media Manager
          </p>
        </div>
        
        <div className="flex-1 mt-12 lg:mt-0 animate-fadeIn" style={{ animationDelay: "200ms" }}>
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 rounded-full bg-secondary"></div>
            {/* Replace with your headshot image */}
            <img
              src="/placeholder.svg"
              alt="Antonio Moya"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
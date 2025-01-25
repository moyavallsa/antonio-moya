const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-display mb-12 text-center animate-fade-in">About Me</h2>
        <div className="prose prose-invert mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            My journey in the digital world began two years ago when I discovered my passion for social media management and content creation. Working closely with businesses, I realized the profound impact that a well-managed online presence could have on brand growth and engagement.
          </p>
          <p className="text-lg leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
            As I delved deeper into the digital landscape, I naturally gravitated towards web design and development. The ability to create not just content, but entire digital experiences, opened up new possibilities for helping businesses establish their online presence.
          </p>
          <p className="text-lg leading-relaxed animate-fade-in" style={{ animationDelay: "600ms" }}>
            Today, I combine my expertise in social media management with web design and development skills to offer comprehensive digital solutions. My approach focuses on creating cohesive online experiences that help businesses thrive in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
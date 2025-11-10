const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Background image - fixed */}
      <div className="hero-bg">
        <img
          src="/hero-image.jpg"
          alt="Hero background"
          className="hero-bg-img"
        />
      </div>

      {/* Main content */}
      <div className="hero-content">
        <h1 className="hero-title">The best products start with Figma</h1>
        <h4 className="hero-subtitle">
          <span>Most calendars are designed for teams.</span>
          <span className="hidden sm:inline">
            {" "}
            Slate is designed for freelancers
          </span>
        </h4>
        <button className="hero-cta">Try For Free</button>
      </div>

      {/* Bottom triangle decoration */}
      <div className="hero-triangle">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L720,120 L1440,0 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

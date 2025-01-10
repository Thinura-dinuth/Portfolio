const Landingpage = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I&apos;m <span className="accent">Thinura Jayathunga</span>
          </h1>
          <p className="hero-subtitle">
            Frontend, Backend Developer & UI/UX Enthusiast
          </p>
          <div className="hero-buttons">
            <button className="cv-button">
              Download CV
            </button>
            <button className="contact-button" onClick={scrollToContact}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
  );
};

export default Landingpage;
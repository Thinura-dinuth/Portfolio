import { useEffect, useState } from "react";

const Landingpage = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Frontend Developer", "Backend Developer", "UI/UX Designer"];

  // Custom typing effect without typed.js
  useEffect(() => {
    let timeout;
    let currentString = texts[currentIndex];
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      if (!isDeleting && charIndex <= currentString.length) {
        setCurrentText(currentString.substring(0, charIndex));
        charIndex++;
        timeout = setTimeout(type, 50);
      } else if (isDeleting && charIndex >= 0) {
        setCurrentText(currentString.substring(0, charIndex));
        charIndex--;
        timeout = setTimeout(type, 50);
      } else if (!isDeleting && charIndex > currentString.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, 1000);
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        currentString = texts[(currentIndex + 1) % texts.length];
        charIndex = 0;
        timeout = setTimeout(type, 50);
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const buttonStyle = {
    padding: "0.75rem 1.5rem",
    borderRadius: "0.375rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    backgroundColor: "#0d1b2a",
    color: "#e0e1dd",
    border: "none",
    transition: "background-color 0.3s ease",
    textDecoration: "none",
  };

  const primaryButtonStyle = {
    ...buttonStyle,
  };

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: "transparent",
    border: "1px solid #333",
    color: "#333",
  };

  const iconButtonStyle = {
    ...buttonStyle,
    padding: "0.5rem",
    backgroundColor: "transparent",
    border: "none",
    color: "#333",
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "4rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "bold",
              color: "#111827",
              marginBottom: "1rem",
            }}
          >
            Hi, I'm <span style={{ color: "#333" }}>Thinura Jayathunga</span>
          </h1>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
              color: "#333",
              minHeight: "2em",
            }}
          >
            {currentText}
          </h2>
          <p
            style={{
              color: "#333",
              fontSize: "1.125rem",
              maxWidth: "42rem",
              margin: "2rem auto",
            }}
          >
            I build cutting-edge web applications with a focus on AI integration
            and cloud solutions. Let's create something amazing together.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <a href="#contact" style={primaryButtonStyle}>
              Get in Touch →
            </a>
            <a href="#projects" style={outlineButtonStyle}>
              View My Work
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              paddingTop: "1rem",
            }}
          >
            <a
              href="https://github.com/Thinura-dinuth"
              target="_blank"
              rel="noopener noreferrer"
              style={iconButtonStyle}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/thinu-jaya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              style={iconButtonStyle}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landingpage;

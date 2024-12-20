import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-info">
              <h3 className="footer-title">Thinura Jayathunga</h3>
              <p className="footer-subtitle">Computer Science Undergraduate</p>
            </div>
            <div className="footer-social">
              <a
                  href="https://github.com"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
              >
                <Github size={24} strokeWidth={2}/>
              </a>
              <a
                  href="https://linkedin.com"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
              >
                <Linkedin size={24} strokeWidth={2}/>
              </a>
              <a
                  href="https://twitter.com"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
              >
                <Twitter size={24} strokeWidth={2}/>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Thinura Jayathunga. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
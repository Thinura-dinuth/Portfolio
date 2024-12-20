import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
      <nav className="nav">
        <div className="nav-container">
          <a href="#" className="nav-brand">Portfolio</a>
          <button className="nav-menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            {menuItems.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className="nav-link"
                    onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
            ))}
          </div>
        </div>
      </nav>
  );
};

export default Navigation;
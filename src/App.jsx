import { useEffect, useState } from "react";
import Navigation from "../src/components/Navigation";
import Landingpage from "../src/components/Landingpage";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

const App = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen">
            <Navigation />
            <Landingpage />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            {showButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    ↑ Back to Top
                </button>
            )}
        </div>
    );
};

export default App;
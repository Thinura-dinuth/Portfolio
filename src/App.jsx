
import Navigation from "../src/components/Navigation";
import Landingpage from "../src/components/Landingpage";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

const App = () => {
    return (
        <div className="min-h-screen">
            <Navigation/>
            <Landingpage/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
};
export default App;

import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-periwinkle-300 via-purple-400 to-indigo-900 relative overflow-hidden">
      {/* Celestial background elements */}
      <div className="absolute inset-0 celestial-bg">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
        <div className="constellation constellation-1"></div>
        <div className="constellation constellation-2"></div>
      </div>
      
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default Index;

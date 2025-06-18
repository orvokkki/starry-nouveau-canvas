
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-radial from-orange-300 via-periwinkle-300 to-blue-200 relative overflow-hidden">
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
      <Footer />
    </div>
  );
};

export default Index;

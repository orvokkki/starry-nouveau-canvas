
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative" role="banner">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Heading */}
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl italiana-regular text-black art-nouveau-heading leading-tight">
            Luna Design
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-800 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
          Creating enchanting digital experiences where art nouveau elegance meets modern innovation
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-600">
          <a
            href="#portfolio"
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl art-nouveau-button focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <a
            href="#about"
            className="group border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 art-nouveau-button focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About Me
          </a>
        </div>

        {/* Scroll Indicator - Updated with ArrowDown */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
          <ArrowDown className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

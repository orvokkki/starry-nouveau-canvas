
import { ArrowDown, Sparkles, Moon, Stars } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16" role="banner">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Decorative celestial elements */}
        <div className="absolute -top-20 -left-10 w-20 h-20 opacity-30" aria-hidden="true">
          <Moon className="w-full h-full text-yellow-200 animate-pulse" />
        </div>
        <div className="absolute -top-10 -right-10 w-16 h-16 opacity-40" aria-hidden="true">
          <Stars className="w-full h-full text-cyan-200 animate-bounce" />
        </div>

        {/* Main heading */}
        <div className="relative">
          <Sparkles className="w-8 h-8 text-yellow-300 mx-auto mb-4 animate-pulse" aria-hidden="true" />
          <h1 className="text-5xl md:text-7xl italiana-regular text-white mb-6 art-nouveau-heading animate-fade-in">
            Celestial
            <span className="block text-transparent bg-gradient-to-r from-yellow-300 via-cyan-300 to-blue-400 bg-clip-text">
              Design Studio
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
          Creating magical digital experiences that transcend the ordinary. 
          Where art nouveau elegance meets modern innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-600">
          <a 
            href="#portfolio"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 art-nouveau-button focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            View My Work
          </a>
          <a 
            href="#about"
            className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" aria-hidden="true" />
        </div>
      </div>

      {/* Decorative art nouveau curves */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20" aria-hidden="true">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          <path
            d="M0,120 C300,80 400,40 600,60 C800,80 900,40 1200,80 L1200,120 Z"
            fill="url(#nouveau-gradient)"
          />
          <defs>
            <linearGradient id="nouveau-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

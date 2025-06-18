
import { Star, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-blue-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Brand Section */}
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-yellow-300" />
            <span className="text-white font-serif text-lg italiana-regular">
              Luna Design
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:hello@lunadesign.com" 
              className="text-blue-200 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com" 
              className="text-blue-200 hover:text-white transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-blue-200 hover:text-white transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com" 
              className="text-blue-200 hover:text-white transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-4 text-sm">
            <Link 
              to="/impressum" 
              className="text-blue-200 hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <span className="text-blue-300">•</span>
            <p className="text-blue-300">
              © 2024 Luna Design
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

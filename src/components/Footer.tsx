
import { Star, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-blue-900 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-yellow-300" />
              <span className="text-white font-serif text-xl italiana-regular">
                Luna Design
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Creating magical digital experiences that transcend the ordinary. 
              Where art nouveau elegance meets modern innovation.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-lg">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-blue-200">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <a href="mailto:hello@lunadesign.com" className="hover:text-white transition-colors">
                  hello@lunadesign.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+49 123 456 789</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Berlin, Germany</span>
              </div>
            </div>
          </div>

          {/* Impressum */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-lg">Impressum</h3>
            <div className="text-sm text-blue-200 space-y-1">
              <p><strong>Luna Design Studio</strong></p>
              <p>Musterstraße 123</p>
              <p>10115 Berlin, Germany</p>
              <p>USt-IdNr.: DE123456789</p>
              <p>Verantwortlich für den Inhalt:<br />Luna Schmidt</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-blue-300 text-sm">
            © 2024 Luna Design Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

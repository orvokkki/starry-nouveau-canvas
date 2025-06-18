
import { Mail, MessageCircle, Send, Star } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
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
      
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-300 mr-2 animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-serif text-slate-800 art-nouveau-heading italiana-regular">
                Let's Create Magic
              </h1>
              <Star className="w-6 h-6 text-yellow-300 ml-2 animate-pulse" />
            </div>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto">
              Ready to transform your vision into a celestial digital experience? 
              Let's discuss your project over virtual coffee and starlight.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 p-8 relative overflow-hidden shadow-lg">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 border border-slate-400/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-yellow-300/20 rounded-full animate-bounce"></div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-800 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/80 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
                    placeholder="Your magical name"
                  />
                </div>
                <div>
                  <label className="block text-slate-800 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/80 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-800 font-medium mb-2">Project Type</label>
                <select className="w-full px-4 py-3 bg-white/80 border border-slate-300 rounded-lg text-slate-800 focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm">
                  <option value="" className="bg-white">Select your cosmic project</option>
                  <option value="web-design" className="bg-white">Web Design</option>
                  <option value="mobile-app" className="bg-white">Mobile App</option>
                  <option value="branding" className="bg-white">Branding</option>
                  <option value="consultation" className="bg-white">Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-800 font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-white/80 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 focus:border-blue-400 focus:outline-none transition-colors backdrop-blur-sm resize-none"
                  placeholder="Tell me about your vision and dreams..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send to the Stars
              </button>
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-slate-700 mb-6">Prefer a different cosmic channel?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@lunadesign.com"
                className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md border border-white/40 rounded-lg text-slate-800 hover:bg-white/90 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                hello@lunadesign.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-md border border-white/40 rounded-lg text-slate-800 hover:bg-white/90 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;

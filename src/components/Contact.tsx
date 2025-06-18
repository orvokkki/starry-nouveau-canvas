
import { Mail, MessageCircle, Send, Star } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-yellow-300 mr-2 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-serif text-white art-nouveau-heading">
              Let's Create Magic
            </h2>
            <Star className="w-6 h-6 text-yellow-300 ml-2 animate-pulse" />
          </div>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Ready to transform your vision into a celestial digital experience? 
            Let's discuss your project over virtual coffee and starlight.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 border border-purple-300/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-yellow-300/20 rounded-full animate-bounce"></div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none transition-colors backdrop-blur-sm"
                  placeholder="Your magical name"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none transition-colors backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Project Type</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-colors backdrop-blur-sm">
                <option value="" className="bg-purple-900">Select your cosmic project</option>
                <option value="web-design" className="bg-purple-900">Web Design</option>
                <option value="mobile-app" className="bg-purple-900">Mobile App</option>
                <option value="branding" className="bg-purple-900">Branding</option>
                <option value="consultation" className="bg-purple-900">Consultation</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:border-purple-400 focus:outline-none transition-colors backdrop-blur-sm resize-none"
                placeholder="Tell me about your vision and dreams..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send to the Stars
            </button>
          </form>
        </div>

        {/* Alternative Contact Methods */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-purple-200 mb-6">Prefer a different cosmic channel?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@lunadesign.com"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              hello@lunadesign.com
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

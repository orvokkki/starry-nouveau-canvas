
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Star, Palette } from "lucide-react";

const Drawings = () => {
  const drawings = [
    {
      title: "Celestial Portrait",
      description: "Digital illustration exploring cosmic themes",
      category: "Digital Art"
    },
    {
      title: "Art Nouveau Study",
      description: "Traditional pencil drawing inspired by classic motifs",
      category: "Traditional"
    },
    {
      title: "Character Design",
      description: "Original character concept for UI storytelling",
      category: "Character Design"
    },
    {
      title: "Botanical Illustration",
      description: "Detailed study of natural forms and patterns",
      category: "Nature Study"
    },
    {
      title: "Abstract Composition",
      description: "Experimental piece exploring color and form",
      category: "Abstract"
    },
    {
      title: "UI Concept Sketches",
      description: "Hand-drawn wireframes and interface ideas",
      category: "UI Sketches"
    }
  ];

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-yellow-300 mr-2 animate-pulse" />
              <h1 className="text-4xl md:text-5xl font-serif text-slate-800 art-nouveau-heading italiana-regular">
                Artistic Journey
              </h1>
              <Star className="w-6 h-6 text-yellow-300 ml-2 animate-pulse" />
            </div>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto">
              A collection of drawings and illustrations that inspire my digital design work. 
              Each piece represents a different exploration of form, color, and storytelling.
            </p>
          </div>

          {/* Drawings Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drawings.map((drawing, index) => (
              <div key={index} className="group">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Placeholder for artwork */}
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-4 flex items-center justify-center border border-slate-300">
                    <Palette className="w-12 h-12 text-slate-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-slate-800 italiana-regular">
                        {drawing.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                        {drawing.category}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">
                      {drawing.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-20">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 p-8 shadow-lg">
              <h2 className="text-2xl font-serif text-slate-800 mb-6 italiana-regular text-center">
                From Sketch to Screen
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                    <Palette className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800">Inspiration</h3>
                  <p className="text-slate-600 text-sm">
                    Every digital design begins with a hand-drawn exploration of ideas and concepts.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-periwinkle-300 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800">Iteration</h3>
                  <p className="text-slate-600 text-sm">
                    Through sketching and drawing, I refine visual elements and user flow concepts.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800">Implementation</h3>
                  <p className="text-slate-600 text-sm">
                    The final artworks inform color palettes, typography, and overall aesthetic direction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Drawings;

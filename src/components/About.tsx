
import { Heart, Palette, Code, Star, Brush } from "lucide-react";

const About = () => {
  const skills = [
    { name: "UI/UX Design", level: 95, icon: Palette },
    { name: "Frontend Development", level: 88, icon: Code },
    { name: "Art Direction", level: 92, icon: Star }
  ];

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
    }
  ];

  return (
    <section id="about" className="py-20 relative" role="region" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h2 id="about-heading" className="text-4xl md:text-5xl italiana-regular text-black mb-6 art-nouveau-heading">
                About Luna
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-300 to-blue-400 mb-6"></div>
            </div>

            <p className="text-gray-800 text-lg leading-relaxed">
              I'm a passionate UX/UI designer who believes in creating digital experiences 
              that feel like magic. Inspired by the celestial beauty of the cosmos and the 
              elegant curves of Art Nouveau, I craft interfaces that are both functional 
              and enchanting.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed">
              With over 5 years of experience in the design industry, I've helped startups 
              and established companies create memorable digital products that users love. 
              My approach combines data-driven insights with intuitive design principles.
            </p>

            <p className="text-gray-800 text-lg leading-relaxed">
              When I'm not designing digital experiences, you'll find me sketching and drawing, 
              which constantly inspires my design work and helps me explore new creative directions.
            </p>

            {/* Compact Skills */}
            <div className="bg-white/60 backdrop-blur-md rounded-xl border border-white/40 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-600" />
                Core Skills
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-cyan-600" aria-hidden="true" />
                        <span className="text-black text-sm font-medium">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
                          <div
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-700 text-xs w-8" aria-label={`${skill.level} percent proficiency`}>{skill.level}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Design Philosophy - Enhanced */}
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 p-8 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 border-2 border-cyan-300/30 rounded-full animate-pulse" aria-hidden="true"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-blue-400/30 rounded-full animate-bounce" aria-hidden="true"></div>
              <div className="absolute top-1/2 left-4 w-6 h-6 bg-cyan-400/30 rounded-full animate-pulse animation-delay-500" aria-hidden="true"></div>
              
              {/* Enhanced Photo Section */}
              <div className="text-center space-y-6">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white/50 mb-8 bg-white/10 shadow-2xl">
                  <img 
                    src="/lovable-uploads/49f25eae-dc76-4c19-ab2a-d541f722cc15.png" 
                    alt="Luna - UX/UI Designer and Illustrator" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-3xl italiana-regular text-black mb-4">Design Philosophy</h3>
                <p className="text-gray-800 text-center italic text-lg leading-relaxed">
                  "Every pixel should tell a story, every interaction should feel like poetry."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Drawings Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-yellow-600 mr-2" />
              <h3 className="text-3xl italiana-regular text-black art-nouveau-heading">
                Artistic Journey
              </h3>
              <Star className="w-6 h-6 text-yellow-600 ml-2" />
            </div>
            <p className="text-gray-800 text-lg max-w-2xl mx-auto">
              A collection of drawings and illustrations that inspire my digital design work. 
              Each piece represents a different exploration of form, color, and storytelling.
            </p>
          </div>

          {/* Drawings Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {drawings.map((drawing, index) => (
              <div key={index} className="group">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Placeholder for artwork */}
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center border border-gray-300">
                    <Palette className="w-8 h-8 text-gray-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-black italiana-regular">
                        {drawing.title}
                      </h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {drawing.category}
                      </span>
                    </div>
                    <p className="text-gray-700 text-xs">
                      {drawing.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-12">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 p-8 shadow-lg">
              <h4 className="text-2xl italiana-regular text-black mb-6 text-center">
                From Sketch to Screen
              </h4>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                    <Palette className="w-6 h-6 text-orange-600" />
                  </div>
                  <h5 className="font-semibold text-black">Inspiration</h5>
                  <p className="text-gray-700 text-sm">
                    Every digital design begins with a hand-drawn exploration of ideas and concepts.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <h5 className="font-semibold text-black">Iteration</h5>
                  <p className="text-gray-700 text-sm">
                    Through sketching and drawing, I refine visual elements and user flow concepts.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h5 className="font-semibold text-black">Implementation</h5>
                  <p className="text-gray-700 text-sm">
                    The final artworks inform color palettes, typography, and overall aesthetic direction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { Heart, Palette, Code, Star, Brush } from "lucide-react";

const About = () => {
  const skills = [
    { name: "UI/UX Design", level: 95, icon: Palette },
    { name: "Frontend Development", level: 88, icon: Code },
    { name: "Art Direction", level: 92, icon: Star },
    { name: "Drawing & Illustration", level: 90, icon: Brush },
    { name: "User Research", level: 85, icon: Heart }
  ];

  return (
    <section id="about" className="py-20 relative" role="region" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h2 id="about-heading" className="text-4xl md:text-5xl italiana-regular text-white mb-6 art-nouveau-heading">
                About Luna
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-300 to-blue-400 mb-6"></div>
            </div>

            <p className="text-blue-200 text-lg leading-relaxed">
              I'm a passionate UX/UI designer who believes in creating digital experiences 
              that feel like magic. Inspired by the celestial beauty of the cosmos and the 
              elegant curves of Art Nouveau, I craft interfaces that are both functional 
              and enchanting.
            </p>

            <p className="text-blue-200 text-lg leading-relaxed">
              With over 5 years of experience in the design industry, I've helped startups 
              and established companies create memorable digital products that users love. 
              My approach combines data-driven insights with intuitive design principles.
            </p>

            <p className="text-blue-200 text-lg leading-relaxed">
              When I'm not designing digital experiences, you'll find me sketching and drawing, 
              which constantly inspires my design work and helps me explore new creative directions.
            </p>

            {/* Skills */}
            <div className="space-y-4 pt-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-cyan-300" aria-hidden="true" />
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-blue-300 text-sm ml-auto" aria-label={`${skill.level} percent proficiency`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* About Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl backdrop-blur-md border border-white/20 p-8 flex items-center justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 border-2 border-cyan-300/30 rounded-full animate-pulse" aria-hidden="true"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-blue-400/30 rounded-full animate-bounce" aria-hidden="true"></div>
              <div className="absolute top-1/2 left-4 w-6 h-6 bg-cyan-400/30 rounded-full animate-pulse animation-delay-500" aria-hidden="true"></div>
              
              {/* Your Photo */}
              <div className="text-center space-y-4">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-cyan-300/50 mb-6 bg-white/10">
                  <img 
                    src="/lovable-uploads/49f25eae-dc76-4c19-ab2a-d541f722cc15.png" 
                    alt="Luna - UX/UI Designer and Illustrator" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl italiana-regular text-white mb-2">Design Philosophy</h3>
                <p className="text-blue-200 text-center italic">
                  "Every pixel should tell a story, every interaction should feel like poetry."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

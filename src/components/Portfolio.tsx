
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const Portfolio = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: "Celestial Banking App",
      description: "A modern banking interface inspired by cosmic design principles, featuring intuitive navigation and stellar user experience.",
      category: "Mobile App",
      tech: ["React Native", "TypeScript", "Figma"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Art Nouveau E-commerce",
      description: "Luxury fashion platform combining Art Nouveau aesthetics with contemporary e-commerce functionality.",
      category: "Web Design",
      tech: ["React", "Next.js", "Tailwind"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Mystical Dashboard",
      description: "Analytics dashboard with an ethereal design approach, making complex data beautiful and accessible.",
      category: "Dashboard",
      tech: ["Vue.js", "D3.js", "Sketch"],
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "Luna Meditation App",
      description: "Mindfulness application designed to guide users through cosmic-inspired meditation journeys.",
      category: "Mobile App",
      tech: ["Flutter", "Firebase", "Adobe XD"],
      color: "from-orange-400 to-yellow-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target as HTMLDivElement);
            entry.target.classList.add('project-animate-in');
            
            // Add staggered animation delay
            setTimeout(() => {
              entry.target.classList.add('project-expanded');
            }, index * 200);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-20 relative" role="region" aria-labelledby="portfolio-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="portfolio-heading" className="text-4xl md:text-5xl italiana-regular text-black mb-6 art-nouveau-heading">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-800 text-lg max-w-2xl mx-auto">
            A showcase of digital experiences that blend artistic vision with functional design, 
            each project telling its own unique story through thoughtful interaction and visual harmony.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="project-card opacity-0 transform translate-y-20 transition-all duration-1000 ease-out"
            >
              <div className="group bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Project Visual */}
                  <div className={`h-64 bg-gradient-to-br ${project.color} rounded-xl relative overflow-hidden order-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                    <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Star className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={`space-y-6 order-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold text-black italiana-regular group-hover:text-gray-700 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-sm px-3 py-1 bg-gray-200 text-gray-800 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Link */}
                    <button className="group/btn bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 art-nouveau-button focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2">
                      View Project
                      <span className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

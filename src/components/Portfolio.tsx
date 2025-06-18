
import { ExternalLink, Github, Sparkles } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Mystic E-commerce",
      description: "A celestial-themed online store with ethereal animations and intuitive navigation.",
      image: "/placeholder.svg",
      tags: ["UI/UX", "E-commerce", "Animation"],
      link: "#"
    },
    {
      title: "Stellar Dashboard",
      description: "Data visualization platform inspired by constellation patterns and cosmic beauty.",
      image: "/placeholder.svg",
      tags: ["Dashboard", "Data Viz", "SaaS"],
      link: "#"
    },
    {
      title: "Luna Mobile App",
      description: "Meditation app with art nouveau aesthetics and celestial guidance features.",
      image: "/placeholder.svg",
      tags: ["Mobile", "Wellness", "Art Direction"],
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-yellow-300 mr-2" />
            <h2 className="text-4xl md:text-5xl font-serif text-white art-nouveau-heading">
              Featured Works
            </h2>
            <Sparkles className="w-6 h-6 text-yellow-300 ml-2" />
          </div>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            A collection of digital experiences crafted with passion and celestial inspiration.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 border border-white/20 hover:border-purple-300/50"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-purple-200 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/30 text-purple-200 text-xs rounded-full border border-purple-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-lg hover:scale-105 transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white text-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
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

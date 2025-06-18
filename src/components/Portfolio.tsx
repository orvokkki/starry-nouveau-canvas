
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
    <section id="portfolio" className="py-20 relative" role="region" aria-labelledby="portfolio-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-yellow-300 mr-2" aria-hidden="true" />
            <h2 id="portfolio-heading" className="text-4xl md:text-5xl italiana-regular text-white art-nouveau-heading">
              Featured Works
            </h2>
            <Sparkles className="w-6 h-6 text-yellow-300 ml-2" aria-hidden="true" />
          </div>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A collection of digital experiences crafted with passion and celestial inspiration.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 border border-white/20 hover:border-cyan-300/50 focus-within:ring-2 focus-within:ring-blue-400"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-cyan-400 to-blue-500 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl italiana-regular text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4" role="list">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cyan-500/30 text-cyan-200 text-xs rounded-full border border-cyan-400/30"
                      role="listitem"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm rounded-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    View Live
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white text-sm rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

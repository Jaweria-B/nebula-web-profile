
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Brain, Bot, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  category: 'web' | 'ml' | 'ai';
}

interface ProjectsSectionProps {
  webDevProjects: Project[];
  mlProjects: Project[];
  aiAgentProjects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  webDevProjects, 
  mlProjects, 
  aiAgentProjects 
}) => {
  const [activeFilter, setActiveFilter] = useState<'web' | 'ml' | 'ai'>('web');
  const [currentSlide, setCurrentSlide] = useState(0);

  const getCurrentProjects = () => {
    switch (activeFilter) {
      case 'web': return webDevProjects;
      case 'ml': return mlProjects;
      case 'ai': return aiAgentProjects;
      default: return webDevProjects;
    }
  };

  const getFilterTitle = () => {
    switch (activeFilter) {
      case 'web': return 'Web Development Projects';
      case 'ml': return 'Machine Learning Projects';
      case 'ai': return 'AI & Agent Projects';
      default: return 'Projects';
    }
  };

  const projects = getCurrentProjects();
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Reset slide when filter changes
  React.useEffect(() => {
    setCurrentSlide(0);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-12 md:py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4 md:mb-6 animate-[fade-in_0.8s_ease-out]">My Projects</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 animate-[fade-in_0.8s_ease-out_0.2s_both]">
            Explore my diverse portfolio spanning web development, machine learning, and AI agents
          </p>

          {/* Enhanced Filter Buttons - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <button
              onClick={() => setActiveFilter('web')}
              className={`group relative px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                activeFilter === 'web' 
                  ? 'glass-effect text-white shadow-lg shadow-blue-500/25 border border-blue-500/30' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <div className="flex items-center gap-2 md:gap-3">
                <Code className={`w-4 md:w-5 h-4 md:h-5 transition-colors duration-300 ${
                  activeFilter === 'web' ? 'text-blue-400' : 'text-gray-500'
                }`} />
                <span className="font-semibold text-sm md:text-lg">Web Development</span>
              </div>
            </button>

            <button
              onClick={() => setActiveFilter('ml')}
              className={`group relative px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                activeFilter === 'ml' 
                  ? 'glass-effect text-white shadow-lg shadow-green-500/25 border border-green-500/30' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <div className="flex items-center gap-2 md:gap-3">
                <Brain className={`w-4 md:w-5 h-4 md:h-5 transition-colors duration-300 ${
                  activeFilter === 'ml' ? 'text-green-400' : 'text-gray-500'
                }`} />
                <span className="font-semibold text-sm md:text-lg">Machine Learning</span>
              </div>
            </button>

            <button
              onClick={() => setActiveFilter('ai')}
              className={`group relative px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                activeFilter === 'ai' 
                  ? 'glass-effect text-white shadow-lg shadow-purple-500/25 border border-purple-500/30' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <div className="flex items-center gap-2 md:gap-3">
                <Bot className={`w-4 md:w-5 h-4 md:h-5 transition-colors duration-300 ${
                  activeFilter === 'ai' ? 'text-purple-400' : 'text-gray-500'
                }`} />
                <span className="font-semibold text-sm md:text-lg">AI & Agents</span>
              </div>
            </button>
          </div>
        </div>

        {/* Projects Slider */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gradient mb-8 md:mb-12 animate-[fade-in_0.8s_ease-out]">
            {getFilterTitle()}
          </h3>
          
          {/* Slider Container */}
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4">
                      {projects
                        .slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide)
                        .map((project, index) => (
                          <div 
                            key={index}
                            className="glass-effect rounded-xl md:rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-[fade-in_0.8s_ease-out]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="relative h-40 md:h-48 overflow-hidden">
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                            
                            <div className="p-4 md:p-6">
                              <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{project.title}</h4>
                              <p className="text-gray-300 text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">{project.description}</p>
                              
                              <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                                {project.tech.slice(0, 3).map((tech, techIndex) => (
                                  <span 
                                    key={techIndex}
                                    className="px-2 md:px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs text-blue-300 border border-blue-500/30"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex gap-2 md:gap-3">
                                <a 
                                  href={project.liveUrl}
                                  className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white text-xs md:text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                                >
                                  <ExternalLink className="w-3 md:w-4 h-3 md:h-4" />
                                  Live Demo
                                </a>
                                <a 
                                  href={project.githubUrl}
                                  className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 bg-white/10 rounded-lg text-white text-xs md:text-sm font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                                >
                                  <Github className="w-3 md:w-4 h-3 md:h-4" />
                                  Code
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {totalSlides > 1 && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 glass-effect p-2 md:p-3 rounded-full hover:bg-white/10 transition-all duration-300 z-10"
                >
                  <ChevronLeft className="w-5 md:w-6 h-5 md:h-6 text-white" />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 glass-effect p-2 md:p-3 rounded-full hover:bg-white/10 transition-all duration-300 z-10"
                >
                  <ChevronRight className="w-5 md:w-6 h-5 md:h-6 text-white" />
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {totalSlides > 1 && (
              <div className="flex justify-center mt-4 md:mt-6 gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-500 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

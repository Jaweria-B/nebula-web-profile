
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
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
  const [activeCategory, setActiveCategory] = useState<'web' | 'ml' | 'ai'>('web');
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCurrentProjects = () => {
    switch (activeCategory) {
      case 'web': return webDevProjects;
      case 'ml': return mlProjects;
      case 'ai': return aiAgentProjects;
      default: return webDevProjects;
    }
  };

  const projects = getCurrentProjects();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleCategoryChange = (category: 'web' | 'ml' | 'ai') => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio across different domains. Each project showcases innovation, 
            technical excellence, and real-world impact.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect rounded-full p-2">
            <button
              onClick={() => handleCategoryChange('web')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'web'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => handleCategoryChange('ml')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'ml'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Machine Learning
            </button>
            <button
              onClick={() => handleCategoryChange('ai')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'ai'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              AI & Agents
            </button>
          </div>
        </div>

        {/* Project Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl glass-effect">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:flex-row items-center p-8">
                    <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-xl shadow-2xl nebula-glow"
                      />
                    </div>
                    
                    <div className="lg:w-1/2 text-center lg:text-left">
                      <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm text-blue-300 border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4 justify-center lg:justify-start">
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                          >
                            <Github size={16} />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125 nebula-glow' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

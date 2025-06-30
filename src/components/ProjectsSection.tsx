
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Brain, Bot } from 'lucide-react';

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

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">My Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Explore my diverse portfolio spanning web development, machine learning, and AI agents
          </p>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFilter('web')}
              className={`group relative px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                activeFilter === 'web' 
                  ? 'glass-effect nebula-glow text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Code className={`w-5 h-5 transition-colors duration-300 ${
                  activeFilter === 'web' ? 'text-blue-400' : 'text-gray-500'
                }`} />
                <span className="font-semibold text-lg">Web Development</span>
              </div>
              {activeFilter === 'web' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
              )}
            </button>

            <button
              onClick={() => setActiveFilter('ml')}
              className={`group relative px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                activeFilter === 'ml' 
                  ? 'glass-effect nebula-glow text-white shadow-lg shadow-green-500/25' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Brain className={`w-5 h-5 transition-colors duration-300 ${
                  activeFilter === 'ml' ? 'text-green-400' : 'text-gray-500'
                }`} />
                <span className="font-semibold text-lg">Machine Learning</span>
              </div>
              {activeFilter === 'ml' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 to-blue-500/20 animate-pulse"></div>
              )}
            </button>

            <button
              onClick={() => setActiveFilter('ai')}
              className={`group relative px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                activeFilter === 'ai' 
                  ? 'glass-effect nebula-glow text-white shadow-lg shadow-purple-500/25' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Bot className={`w-5 h-5 transition-colors duration-300 ${
                  activeFilter === 'ai' ? 'text-purple-400' : 'text-gray-500'
                }`} />
                <span className="font-semibold text-lg">AI & Agents</span>
              </div>
              {activeFilter === 'ai' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
              )}
            </button>
          </div>
        </div>

        {/* Projects Display */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-center text-gradient mb-12 animate-fade-in">
            {getFilterTitle()}
          </h3>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentProjects().map((project, index) => (
              <div 
                key={index}
                className="glass-effect rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 nebula-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs text-blue-300 border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

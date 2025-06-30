
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import DynamicCosmicElements from './DynamicCosmicElements';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const webDevProjects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard built with React and Node.js.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example",
    category: "web"
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time social media analytics dashboard with data visualization, user engagement metrics, and automated reporting features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["Vue.js", "Express", "PostgreSQL", "Chart.js", "WebSocket"],
    liveUrl: "https://example-dashboard.com",
    githubUrl: "https://github.com/example",
    category: "web"
  },
  {
    title: "Learning Management System",
    description: "Comprehensive LMS with course creation, student progress tracking, video streaming, and interactive assignments.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    tech: ["React", "Django", "AWS S3", "Redis", "Celery"],
    liveUrl: "https://example-lms.com",
    githubUrl: "https://github.com/example",
    category: "web"
  }
];

const mlProjects: Project[] = [
  {
    title: "Predictive Analytics Engine",
    description: "Machine learning model for sales forecasting and customer behavior prediction using advanced regression algorithms and time series analysis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["Python", "scikit-learn", "Pandas", "TensorFlow", "Flask"],
    liveUrl: "https://example-analytics.com",
    githubUrl: "https://github.com/example",
    category: "ml"
  },
  {
    title: "Computer Vision System",
    description: "Object detection and image classification system for quality control in manufacturing using deep learning and neural networks.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    tech: ["PyTorch", "OpenCV", "YOLO", "FastAPI", "Docker"],
    liveUrl: "https://example-vision.com",
    githubUrl: "https://github.com/example",
    category: "ml"
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Natural language processing system for social media sentiment analysis, brand monitoring, and customer feedback insights.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    tech: ["Python", "NLTK", "Transformers", "SpaCy", "MongoDB"],
    liveUrl: "https://example-nlp.com",
    githubUrl: "https://github.com/example",
    category: "ml"
  }
];

const aiAgentProjects: Project[] = [
  {
    title: "Intelligent Customer Support Bot",
    description: "AI-powered chatbot with natural language understanding, context awareness, and integration with CRM systems for automated customer support.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    tech: ["OpenAI GPT", "LangChain", "Rasa", "Python", "WebSocket"],
    liveUrl: "https://example-chatbot.com",
    githubUrl: "https://github.com/example",
    category: "ai"
  },
  {
    title: "Autonomous Trading Agent",
    description: "AI trading bot with market analysis, risk management, and automated execution using reinforcement learning and technical indicators.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    tech: ["Python", "TensorFlow", "Alpha Vantage", "MetaTrader", "QuantLib"],
    liveUrl: "https://example-trading.com",
    githubUrl: "https://github.com/example",
    category: "ai"
  },
  {
    title: "Content Generation AI",
    description: "Multi-modal AI agent for automated content creation including text, images, and video with brand consistency and SEO optimization.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tech: ["OpenAI", "Stable Diffusion", "LangChain", "FFmpeg", "React"],
    liveUrl: "https://example-content.com",
    githubUrl: "https://github.com/example",
    category: "ai"
  }
];

const ProjectSlider: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl cosmic-card">
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
                    className="w-full h-64 object-cover rounded-xl shadow-2xl"
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
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
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
                        className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300"
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

        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-white/10 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-white/10 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-500 scale-125' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('web');

  const filters = [
    { id: 'web', label: 'Web Development', projects: webDevProjects },
    { id: 'ml', label: 'Machine Learning', projects: mlProjects },
    { id: 'ai', label: 'AI & Agents', projects: aiAgentProjects }
  ];

  const activeProjects = filters.find(f => f.id === activeFilter)?.projects || webDevProjects;

  return (
    <section id="projects" className="py-20 relative">
      <DynamicCosmicElements 
        sectionId="projects" 
        density="medium" 
        types={['star', 'meteor', 'explosion']}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">
            Project Galaxy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my universe of projects across Web Development, Machine Learning, and AI Agents. 
            Each project showcases innovation, technical excellence, and real-world impact.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect rounded-full p-2 inline-flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Slider */}
        <ProjectSlider projects={activeProjects} />
      </div>
    </section>
  );
};

export default ProjectsSection;

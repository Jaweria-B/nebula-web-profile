import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ExternalLink, Github } from 'lucide-react';
import SectionMeteors from './SectionMeteors';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'ml' | 'ai';
}

const projects: Project[] = [
  // Web Development Projects
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
  },
  {
    title: "Real Estate Platform",
    description: "Property listing platform with advanced search filters, virtual tours, mortgage calculator, and agent management system.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tech: ["Next.js", "Prisma", "PostgreSQL", "MapBox", "Stripe"],
    liveUrl: "https://example-realestate.com",
    githubUrl: "https://github.com/example",
    category: "web"
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling, medical records, telemedicine integration, and billing management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "MySQL", "WebRTC", "HIPAA"],
    liveUrl: "https://example-healthcare.com",
    githubUrl: "https://github.com/example",
    category: "web"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team collaboration, and advanced filtering capabilities.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/example",
    category: "web"
  },

  // Machine Learning Projects
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
  },
  {
    title: "Recommendation Engine",
    description: "Collaborative filtering recommendation system for e-commerce platforms with real-time personalization and A/B testing capabilities.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tech: ["Python", "Apache Spark", "MLlib", "Kafka", "Redis"],
    liveUrl: "https://example-recommender.com",
    githubUrl: "https://github.com/example",
    category: "ml"
  },
  {
    title: "Fraud Detection System",
    description: "Real-time fraud detection using ensemble methods, anomaly detection, and machine learning for financial transaction monitoring.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    tech: ["Python", "XGBoost", "Isolation Forest", "Kafka", "Elasticsearch"],
    liveUrl: "https://example-fraud.com",
    githubUrl: "https://github.com/example",
    category: "ml"
  },
  {
    title: "Medical Diagnosis AI",
    description: "Deep learning model for medical image analysis and diagnosis assistance using convolutional neural networks.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    tech: ["TensorFlow", "Keras", "OpenCV", "Flask", "NumPy"],
    liveUrl: "https://example-medical.com",
    githubUrl: "https://github.com/example",
    category: "ml"
  },

  // AI & Agents Projects
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
  },
  {
    title: "Smart Home Assistant",
    description: "Voice-activated AI agent for home automation with IoT integration, natural language processing, and personalized learning capabilities.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    tech: ["Python", "Speech Recognition", "IoT", "MQTT", "TensorFlow"],
    liveUrl: "https://example-smarthome.com",
    githubUrl: "https://github.com/example",
    category: "ai"
  },
  {
    title: "Research Assistant AI",
    description: "Academic research automation tool with paper analysis, citation management, literature review generation, and knowledge synthesis.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    tech: ["OpenAI", "Semantic Scholar API", "LangChain", "Pinecone", "Streamlit"],
    liveUrl: "https://example-research.com",
    githubUrl: "https://github.com/example",
    category: "ai"
  },
  {
    title: "AI Code Assistant",
    description: "Intelligent code generation and review assistant with natural language to code conversion and automated testing capabilities.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    tech: ["OpenAI Codex", "GitHub API", "Python", "Docker", "Jest"],
    liveUrl: "https://example-codeai.com",
    githubUrl: "https://github.com/example",
    category: "ai"
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'ml' | 'ai'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filterButtons = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'ml', label: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length },
    { id: 'ai', label: 'AI & Agents', count: projects.filter(p => p.category === 'ai').length }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <SectionMeteors sectionId="projects" meteorCount={4} colors={['#60a5fa', '#a78bfa', '#f472b6']} />
      
      {/* Galactic Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-2xl animate-bounce"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gradient mb-6 floating-element">
            Project Galaxy
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my stellar portfolio across Web Development, Machine Learning, and AI Agents. 
            Each project showcases innovation, technical excellence, and real-world impact.
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {filterButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveFilter(button.id as any)}
              className={`relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 border-2 backdrop-blur-sm ${
                activeFilter === button.id 
                  ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white border-transparent shadow-2xl scale-110' 
                  : 'bg-black/30 text-gray-300 border-gray-600 hover:border-blue-400 hover:text-blue-400 hover:scale-105'
              }`}
            >
              <span className="relative z-10">{button.label}</span>
              <span className="ml-2 text-sm opacity-75">({button.count})</span>
              {activeFilter === button.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-50 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Projects Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-6">
              {filteredProjects.map((project, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative">
                    {/* Cosmic Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    <div className="relative glass-effect rounded-2xl p-6 h-full group-hover:scale-105 transition-all duration-500 nebula-effect border border-gray-700/50 group-hover:border-blue-400/50">
                      <div className="relative overflow-hidden rounded-xl mb-6">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Floating particles on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.2}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-500">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs text-blue-300 border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 bg-gray-500/20 rounded-full text-xs text-gray-400 border border-gray-500/30">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-3 mt-auto">
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white text-sm font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex-1 justify-center hover:scale-105"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg text-white text-sm font-semibold hover:bg-white/10 transition-all duration-300 flex-1 justify-center hover:scale-105"
                          >
                            <Github size={14} />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass-effect border-none text-white hover:bg-white/20 -left-16 w-12 h-12" />
            <CarouselNext className="glass-effect border-none text-white hover:bg-white/20 -right-16 w-12 h-12" />
          </Carousel>
        </div>

        {/* Enhanced Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative text-center glass-effect p-8 rounded-xl nebula-effect group-hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-gradient mb-2">50+</div>
              <div className="text-gray-400">Total Projects</div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative text-center glass-effect p-8 rounded-xl nebula-effect group-hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-gradient mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative text-center glass-effect p-8 rounded-xl nebula-effect group-hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-gradient mb-2">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

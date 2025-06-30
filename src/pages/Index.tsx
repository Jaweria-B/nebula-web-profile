import React, { useEffect } from 'react';
import SolarSystemHero from '../components/SolarSystemHero';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialSlider from '../components/TestimonialSlider';
import HackathonSection from '../components/HackathonSection';
import ExperienceSection from '../components/ExperienceSection';
import ServicesSection from '../components/ServicesSection';
import ContactPortal from '../components/ContactPortal';
import Footer from '../components/Footer';
import DynamicCosmicElements from '../components/DynamicCosmicElements';

// Project data organized by categories
const webDevProjects = [
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
  }
];

const mlProjects = [
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
  }
];

const aiAgentProjects = [
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
  }
];

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Dynamic Cosmic Elements */}
      <DynamicCosmicElements />
      
      {/* Hero Section */}
      <SolarSystemHero />
      
      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gradient mb-8">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              I'm a passionate software engineer and freelancer with 3+ years of experience in crafting 
              digital experiences that span across Web Development, Machine Learning, and AI Agents. 
              My journey has taken me from mentoring at Stanford Code in Place to leading tech teams 
              and delivering 50+ successful projects.
            </p>
            <div className="glass-effect rounded-2xl p-8 nebula-glow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-green-400 mb-2">6</div>
                  <div className="text-gray-300">Companies & Roles</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                  <div className="text-gray-300">Students Mentored</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection 
        webDevProjects={webDevProjects}
        mlProjects={mlProjects}
        aiAgentProjects={aiAgentProjects}
      />

      {/* Hackathons Section */}
      <HackathonSection />

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactPortal />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;


import React from 'react';
import { Code, Brain, Smartphone, Database, Cloud, Bot, Paintbrush, Search, ShoppingCart, LineChart } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
  pricing: string;
}

const services: Service[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Full-Stack Web Development",
    description: "Complete web applications from frontend to backend, with modern frameworks and responsive design.",
    technologies: ["React", "Node.js", "Next.js", "Express", "MongoDB"],
    pricing: "Starting at $2,000"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Machine Learning Solutions",
    description: "Custom ML models for prediction, classification, and data analysis to drive business insights.",
    technologies: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Pandas"],
    pricing: "Starting at $3,000"
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI Agents & Chatbots",
    description: "Intelligent conversational AI and autonomous agents for customer service and automation.",
    technologies: ["OpenAI", "LangChain", "Rasa", "Dialogflow", "Python"],
    pricing: "Starting at $2,500"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications with native performance and beautiful user interfaces.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    pricing: "Starting at $3,500"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Design & Management",
    description: "Optimized database architecture, migration, and performance tuning for scalable applications.",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
    pricing: "Starting at $1,500"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with deployment, monitoring, and DevOps best practices.",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    pricing: "Starting at $2,000"
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design with modern aesthetics and seamless user experience across all devices.",
    technologies: ["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion", "Prototyping"],
    pricing: "Starting at $1,200"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Search engine optimization to improve visibility and drive organic traffic to your website.",
    technologies: ["Google Analytics", "SEMrush", "Technical SEO", "Content Strategy"],
    pricing: "Starting at $800"
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment integration, inventory management, and analytics.",
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "React"],
    pricing: "Starting at $2,800"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Data Analytics & Visualization",
    description: "Transform raw data into actionable insights with interactive dashboards and reports.",
    technologies: ["Power BI", "Tableau", "D3.js", "Chart.js", "Python"],
    pricing: "Starting at $1,800"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">
            Freelance Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. 
            From concept to deployment, I deliver excellence across the entire development lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-blue-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-md text-xs text-blue-300 border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Pricing */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gradient">
                      {service.pricing}
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your requirements and bring your vision to life with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Service Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-white">48hr</div>
            <div className="text-gray-400">Response Time</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-white">70+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-white">3+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

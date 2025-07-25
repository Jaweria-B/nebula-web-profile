import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Smartphone, Globe, Zap, Users, LineChart, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '../components/Footer';
import DynamicCosmicElements from '../components/DynamicCosmicElements';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Full-Stack Web Development",
    description: "Custom web applications built with modern technologies like React, Node.js, and cloud platforms.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    pricing: "Starting at $2,500"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications with native performance and seamless user experience.",
    technologies: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    pricing: "Starting at $3,000"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Machine Learning Solutions",
    description: "AI-powered applications including predictive analytics, computer vision, and NLP systems.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "MLOps"],
    pricing: "Starting at $4,000"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "E-Commerce Solutions",
    description: "Complete online stores with payment integration, inventory management, and admin dashboards.",
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Analytics"],
    pricing: "Starting at $2,000"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "API Development & Integration",
    description: "RESTful APIs, GraphQL endpoints, and third-party service integrations for seamless connectivity.",
    technologies: ["Express.js", "GraphQL", "REST", "Microservices", "Docker"],
    pricing: "Starting at $1,500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cloud & DevOps Services",
    description: "Scalable cloud infrastructure, CI/CD pipelines, and deployment automation for reliable applications.",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    pricing: "Starting at $2,200"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "CRM & Business Automation",
    description: "Custom CRM systems and workflow automation to streamline your business operations.",
    technologies: ["Salesforce", "HubSpot", "Zapier", "Custom Solutions", "APIs"],
    pricing: "Starting at $3,500"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Data Analytics & Visualization",
    description: "Transform raw data into actionable insights with interactive dashboards and reports.",
    technologies: ["Power BI", "Tableau", "D3.js", "Chart.js", "Python"],
    pricing: "Starting at $1,800"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen relative">
      {/* Dynamic Cosmic Elements */}
      <DynamicCosmicElements />
      
      {/* Header */}
      <header className="relative z-10 py-6">
        <div className="container mx-auto px-6">
          <nav className="flex justify-between items-center">
            <motion.a 
              href="/"
              className="text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.a>
            <Button variant="outline" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Freelance Services
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. 
              From concept to deployment, I deliver high-quality, scalable solutions 
              that drive results and exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="h-full"
              >
                <Card className="glass-effect border-gray-800 h-full hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-white text-lg mb-2">{service.title}</CardTitle>
                    <div className="text-2xl font-bold text-gradient mb-2">{service.pricing}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {service.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs text-blue-300 border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      asChild
                    >
                      <a href="/#contact">
                        Get Quote <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 nebula-glow"
          >
            <h3 className="text-3xl font-bold text-center text-gradient mb-8">Why Choose My Services?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-pink-400">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Let's discuss your ideas and bring them to life. Get in touch for a free consultation 
              and custom quote tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                asChild
              >
                <a href="/#contact">
                  Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-gray-600 hover:border-gray-400"
                asChild
              >
                <a href="/#projects">View Portfolio</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
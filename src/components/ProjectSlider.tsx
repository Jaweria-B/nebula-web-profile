import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Code, Brain, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  href?: string;
  github: string;
}

const ProjectSlider: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState({ web: 0, ml: 0, ai: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Web Development Projects with enhanced descriptions and tech tags
  const webProjects: Project[] = [
    {
      title: "Crwn Clothing",
      description: "Full-stack e-commerce platform for stylish clothing with React, Redux, Firebase authentication, and Stripe payment integration.",
      image: "/assets/crwn-clothing.png",
      tech: ["React", "Redux", "Firebase", "Stripe", "Sass"],
      href: "https://crwn-clothing-jb.netlify.app/",
      github: "https://github.com/Jaweria-B/crwn-clothing"
    },
    {
      title: "TinDog",
      description: "Interactive web application for finding perfect matches for your dog with responsive design and modern UI components.",
      image: "/assets/TinDog.png",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      href: "https://jaweria-b.github.io/TinDog/",
      github: "https://github.com/Jaweria-B/tindog"
    },
    {
      title: "Daily Journal",
      description: "Full-featured blog platform with CRUD operations, user authentication, and rich text editing capabilities.",
      image: "/assets/blog-3.png",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      github: "https://github.com/Jaweria-B/journey-junction-blogs"
    },
    {
      title: "Monsters Rolodex",
      description: "React.js application showcasing component-based architecture with search functionality and responsive card layouts.",
      image: "/assets/monsters-rolodex.webp",
      tech: ["React", "JavaScript", "CSS", "API"],
      href: "https://monsters-rolodex-jb.vercel.app/",
      github: "https://github.com/Jaweria-B/monsters-rolodex-v2"
    },
    {
      title: "To-Do-List Website",
      description: "Task management application with database persistence, category organization, and intuitive user interface.",
      image: "/assets/todo-2.png",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      github: "https://github.com/Jaweria-B/to-do-list-v2"
    },
    {
      title: "Drum Kit",
      description: "Interactive musical instrument simulator with keyboard and mouse controls, featuring high-quality drum sounds.",
      image: "/assets/drum-kit.png",
      tech: ["HTML", "CSS", "JavaScript", "Audio API"],
      href: "https://jaweria-b.github.io/Drum-Kit/",
      github: "https://github.com/Jaweria-B/drum-kit"
    },
    {
      title: "Simon Game",
      description: "Classic memory challenge game with progressive difficulty, sound effects, and smooth animations using jQuery.",
      image: "/assets/simon.png",
      tech: ["HTML", "CSS", "JavaScript", "jQuery"],
      href: "https://jaweria-b.github.io/Simon-Game/",
      github: "https://github.com/Jaweria-B/simon-game"
    },
    {
      title: "Dice Game",
      description: "Multiplayer dice rolling game with random number generation, winner determination, and engaging visual effects.",
      image: "/assets/dice.png",
      tech: ["HTML", "CSS", "JavaScript", "DOM"],
      href: "https://jaweria-b.github.io/dice-game/",
      github: "https://github.com/Jaweria-B/dice-game"
    }
  ];

  // Machine Learning Projects with enhanced descriptions and tech tags
  const mlProjects: Project[] = [
    {
      title: "Iris Flower Prediction App",
      description: "Machine learning classifier using scikit-learn to predict Iris flower species with interactive Streamlit interface.",
      image: "/assets/iris.png",
      tech: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
      href: "https://iris-flower-classification-jb.streamlit.app",
      github: "https://github.com/Jaweria-B/iris-flower-classification"
    },
    {
      title: "DNA Nucleotide Count App",
      description: "Bioinformatics tool for DNA sequence analysis with nucleotide composition visualization and statistical insights.",
      image: "/assets/dna.png",
      tech: ["Python", "Streamlit", "Biopython", "Matplotlib"],
      href: "https://dna-nucleotide-count-jb.streamlit.app/",
      github: "https://github.com/Jaweria-B/bioinformatics-dna-app"
    },
    {
      title: "Penguins Species Classification",
      description: "Machine learning model for penguin species identification using morphological features and ensemble methods.",
      image: "/assets/penguins.png",
      tech: ["Python", "Streamlit", "Scikit-learn", "Seaborn"],
      href: "https://penguins-classification-jb.streamlit.app",
      github: "https://github.com/Jaweria-B/penguins-specie-classification"
    },
    {
      title: "Stock Price Tracker App",
      description: "Real-time financial data visualization tool tracking Amazon, Apple, and Microsoft stock prices with interactive charts.",
      image: "/assets/stocks.png",
      tech: ["Python", "Streamlit", "yfinance", "Plotly"],
      href: "https://simple-stock-price.streamlit.app",
      github: "https://github.com/Jaweria-B/simple-stock-price"
    },
    {
      title: "Face Detection App",
      description: "Computer vision application using OpenCV and Haar cascades for real-time face detection in images.",
      image: "/assets/face.png",
      tech: ["Python", "OpenCV", "Streamlit", "PIL"],
      href: "https://face-detection-model-jb.streamlit.app",
      github: "https://github.com/Jaweria-B/face-detection-model"
    },
    {
      title: "Rain Prediction App",
      description: "Weather forecasting model using machine learning algorithms to predict rainfall based on meteorological parameters.",
      image: "/assets/rain.png",
      tech: ["Python", "Scikit-learn", "Streamlit", "NumPy"],
      href: "https://rain-prediction-jb.streamlit.app",
      github: "https://github.com/Jaweria-B/rain-prediction-app"
    }
  ];

  // AI Projects with enhanced descriptions and tech tags
  const aiProjects: Project[] = [
    {
      title: "StoryVerse AI",
      description: "Multi-modal AI application that generates captivating stories with synchronized images, text, and audio narration using advanced language models.",
      image: "/assets/story.png",
      tech: ["Python", "OpenAI API", "Streamlit", "Text-to-Speech"],
      href: "https://storyverse-ai.streamlit.app",
      github: "https://github.com/Jaweria-B/Media-App"
    },
    {
      title: "Code Compass",
      description: "AI-powered learning platform providing personalized coding paths, interactive quizzes, and project recommendations for developers.",
      image: "/assets/code-compass.webp",
      tech: ["Python", "AI/ML", "NLP", "Educational AI"],
      github: "https://github.com/Jaweria-B/code-compass"
    }
  ];

  const categories = [
    { 
      id: 'web' as const, 
      title: 'Web Development', 
      icon: Code, 
      color: 'from-blue-500 to-cyan-500',
      projects: webProjects
    },
    { 
      id: 'ml' as const, 
      title: 'Machine Learning', 
      icon: Brain, 
      color: 'from-purple-500 to-pink-500',
      projects: mlProjects
    },
    { 
      id: 'ai' as const, 
      title: 'AI & Agents', 
      icon: Sparkles, 
      color: 'from-green-500 to-emerald-500',
      projects: aiProjects
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      const currentCategory = categories[activeCategory];
      if (currentCategory) {
        nextSlide(currentCategory.id);
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [activeCategory, currentSlide, isAutoPlaying]);

  // Pause auto-play when user manually navigates
  const handleManualNavigation = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const nextSlide = (categoryId: 'web' | 'ml' | 'ai') => {
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return;
    
    setCurrentSlide(prev => ({
      ...prev,
      [categoryId]: (prev[categoryId] + 1) % category.projects.length
    }));
  };

  const prevSlide = (categoryId: 'web' | 'ml' | 'ai') => {
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return;
    
    setCurrentSlide(prev => ({
      ...prev,
      [categoryId]: prev[categoryId] === 0 
        ? category.projects.length - 1 
        : prev[categoryId] - 1
    }));
  };

  return (
    <section className="py-12 md:py-20 relative z-10" id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4 md:mb-6">
            Project Galaxy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my diverse portfolio spanning web development, machine learning, and AI agents
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`px-4 md:px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                  : 'border-gray-600 text-gray-300 hover:border-gray-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="inline w-4 md:w-5 h-4 md:h-5 mr-2" />
              <span className="text-sm md:text-base">{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Project Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {categories.map((category, categoryIndex) => {
              if (categoryIndex !== activeCategory) return null;
              
              const currentProject = category.projects[currentSlide[category.id]];
              
              return (
                <div key={category.id} className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        prevSlide(category.id);
                        handleManualNavigation();
                      }}
                      className="border-gray-600 hover:border-gray-400 backdrop-blur-sm"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    
                    <div className="flex-1 mx-4 md:mx-8">
                      <Card className="bg-black/40 border-gray-800 backdrop-blur-sm overflow-hidden">
                        <CardContent className="p-4 md:p-8">
                          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                                {currentProject.title}
                              </h3>
                              <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                                {currentProject.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                                {currentProject.tech.slice(0, 4).map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className={`px-2 md:px-3 py-1 bg-gradient-to-r ${category.color} bg-opacity-20 text-white text-xs md:text-sm rounded-full border border-current border-opacity-30`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex gap-2 md:gap-4">
                                {currentProject.github && (
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="border-gray-600 hover:border-gray-400 backdrop-blur-sm text-xs md:text-sm"
                                    asChild
                                  >
                                    <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
                                      <Github className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                                      Code
                                    </a>
                                  </Button>
                                )}
                                {currentProject.href && (
                                  <Button 
                                    size="sm"
                                    className={`bg-gradient-to-r ${category.color} hover:opacity-90 text-xs md:text-sm`}
                                    asChild
                                  >
                                    <a href={currentProject.href} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                                      Live Demo
                                    </a>
                                  </Button>
                                )}
                              </div>
                            </div>
                            
                            <div className="relative">
                              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                                <img 
                                  src={currentProject.image} 
                                  alt={currentProject.title}
                                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        nextSlide(category.id);
                        handleManualNavigation();
                      }}
                      className="border-gray-600 hover:border-gray-400 backdrop-blur-sm"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Slide indicators */}
                  <div className="flex justify-center gap-2">
                    {category.projects.map((_, projectIndex) => (
                      <button
                        key={projectIndex}
                        onClick={() => {
                          setCurrentSlide(prev => ({ ...prev, [category.id]: projectIndex }));
                          handleManualNavigation();
                        }}
                        className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                          projectIndex === currentSlide[category.id]
                            ? `bg-gradient-to-r ${category.color}`
                            : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectSlider;

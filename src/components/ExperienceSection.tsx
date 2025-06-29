
import React from 'react';
import { Building, Calendar, MapPin, Star, Award, Rocket, Users, Code, Trophy } from 'lucide-react';
import SectionMeteors from './SectionMeteors';

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string[];
  skills: string[];
  highlight?: string;
}

const experiences: Experience[] = [
  {
    company: "Stanford University",
    position: "Code in Place Mentor",
    duration: "2024",
    location: "Remote",
    type: "Volunteer",
    highlight: "Outstanding Performance",
    description: [
      "Mentored 44 programming lessons for Stanford's Code in Place program",
      "Guided students through Python fundamentals and problem-solving techniques",
      "Provided personalized feedback and support to enhance learning outcomes",
      "Achieved exceptional student satisfaction ratings and positive testimonials"
    ],
    skills: ["Python", "Teaching", "Mentoring", "Communication"]
  },
  {
    company: "Various Clients",
    position: "Freelance Software Developer",
    duration: "2021 - Present",
    location: "Remote",
    type: "Freelance",
    highlight: "50+ Projects Delivered",
    description: [
      "Developed 50+ web applications and AI solutions for diverse clients",
      "Specialized in full-stack development, machine learning, and AI agents",
      "Delivered projects ranging from e-commerce platforms to ML-powered analytics",
      "Maintained 100% client satisfaction with on-time project delivery"
    ],
    skills: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "AWS"]
  },
  {
    company: "Tech Startup",
    position: "Full Stack Developer",
    duration: "2022 - 2023",
    location: "Remote",
    type: "Full-time",
    highlight: "Performance Optimization Expert",
    description: [
      "Built scalable web applications serving 10,000+ active users",
      "Implemented machine learning models for user behavior prediction",
      "Collaborated with cross-functional teams using Agile methodologies",
      "Optimized application performance resulting in 40% faster load times"
    ],
    skills: ["React", "Python", "PostgreSQL", "Docker", "ML", "Agile"]
  },
  {
    company: "Digital Agency",
    position: "Frontend Developer",
    duration: "2021 - 2022",
    location: "Hybrid",
    type: "Full-time",
    highlight: "Mentorship Excellence",
    description: [
      "Developed responsive web interfaces for 30+ client projects",
      "Integrated APIs and third-party services for enhanced functionality",
      "Collaborated with designers to implement pixel-perfect UI/UX designs",
      "Mentored junior developers and conducted code reviews"
    ],
    skills: ["JavaScript", "React", "CSS", "API Integration", "Git"]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <SectionMeteors sectionId="experience" meteorCount={6} colors={['#fbbf24', '#f59e0b', '#d97706']} />
      
      {/* Enhanced Cosmic Elements */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-yellow-500/25 to-orange-500/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-36 h-36 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-7xl font-bold text-gradient mb-8 floating-element">
            Professional Journey
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            3+ years of experience crafting digital solutions across various galaxies, 
            from mentoring at Stanford to building scalable applications for global clients.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative max-w-7xl mx-auto mb-20">
          {/* Enhanced Timeline Line */}
          <div className="absolute top-32 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-yellow-500 rounded-full transform z-0"></div>
          <div className="absolute top-32 left-0 right-0 h-2 bg-gradient-to-r from-blue-400/60 via-purple-400/60 via-pink-400/60 to-yellow-400/60 rounded-full animate-pulse"></div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Enhanced Timeline Node */}
                <div className="absolute top-24 left-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 z-20 border-4 border-black shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-30"></div>
                  <div className="absolute inset-2 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Enhanced Experience Card */}
                <div className="experience-card group-hover:scale-105 transition-all duration-500 mt-16">
                  <div className="relative z-10">
                    {/* Company Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-400 font-semibold mb-3 text-sm">
                        <Building className="w-4 h-4" />
                        {exp.company}
                      </div>
                      
                      {/* Type and Highlight */}
                      <div className="flex flex-col gap-2 mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                          exp.type === 'Full-time' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          exp.type === 'Freelance' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        }`}>
                          {exp.type}
                        </span>
                        
                        {exp.highlight && (
                          <div className="flex items-center gap-2">
                            <Award className="w-3 h-3 text-yellow-400" />
                            <span className="text-yellow-400 text-xs font-medium">{exp.highlight}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex flex-col gap-2 mb-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 text-blue-400" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-green-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-6">
                      {exp.description.slice(0, 3).map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 text-sm flex items-start gap-2 group-hover:text-gray-200 transition-colors duration-300">
                          <Star className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.slice(0, 4).map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-xs text-purple-300 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Rocket, value: "3+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
            { icon: Code, value: "50+", label: "Projects Delivered", color: "from-green-500 to-emerald-500" },
            { icon: Users, value: "44", label: "Lessons Taught", color: "from-purple-500 to-pink-500" },
            { icon: Trophy, value: "100%", label: "Client Satisfaction", color: "from-yellow-500 to-orange-500" }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
              <div className="relative text-center glass-effect p-8 rounded-xl group-hover:scale-105 transition-all duration-300 nebula-effect">
                <stat.icon className="w-10 h-10 text-transparent bg-gradient-to-r bg-clip-text from-blue-400 to-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

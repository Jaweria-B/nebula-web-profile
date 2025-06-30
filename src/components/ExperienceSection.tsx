
import React from 'react';
import { Building, Calendar, MapPin, Briefcase } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    company: "Stanford University",
    position: "Code in Place Mentor",
    duration: "2024",
    location: "Remote",
    type: "Volunteer",
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
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            3+ years of experience crafting digital solutions across various domains, 
            from mentoring at Stanford to building scalable applications for global clients.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Content Card */}
                <div className={`glass-effect rounded-2xl p-8 ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  {/* Company Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                        <Building className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.type === 'Full-time' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      exp.type === 'Freelance' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Duration and Location */}
                  <div className="flex flex-wrap gap-4 mb-6 text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center glass-effect p-6 rounded-xl">
              <Briefcase className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center glass-effect p-6 rounded-xl">
              <Building className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center glass-effect p-6 rounded-xl">
              <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">44</div>
              <div className="text-gray-400">Lessons Taught</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

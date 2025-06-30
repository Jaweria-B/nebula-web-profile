
import React from 'react';
import { Building, Calendar, MapPin, Briefcase, Users, Trophy, Code } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string[];
  skills: string[];
  highlights?: string[];
}

const experiences: Experience[] = [
  {
    company: "Uinfo",
    position: "Tech & Strategy Lead",
    duration: "May 2024 - Present",
    location: "Remote",
    type: "Leadership",
    description: [
      "Lead cross-functional growth initiatives driving both technology and strategy",
      "Manage three core departments: Web Development, UI/UX Design, and Social Media",
      "Collaborate with founder to define roadmap and product launch strategies",
      "Oversee development of web platforms and internal tools",
      "Guide design teams to create modern, user-focused digital experiences"
    ],
    skills: ["Team Leadership", "Strategic Planning", "Product Management", "Web Development", "UI/UX"],
    highlights: ["Multiple product launches in preparation", "Cross-team collaboration"]
  },
  {
    company: "Upwork",
    position: "Freelance Software Engineer & AI Developer", 
    duration: "Aug 2024 - Present",
    location: "Remote",
    type: "Freelance",
    description: [
      "Built AI chatbots, agents, and full-stack applications using Python, React, Next.js",
      "Helped clients automate workflows and enhance customer experiences",
      "Specialized in OpenAI agents, custom GPT integrations, and smart AI assistants",
      "Deployed scalable applications with modern web technologies"
    ],
    skills: ["Python", "React", "Next.js", "OpenAI", "AI Agents", "LLM APIs"],
    highlights: ["AI-powered solutions", "Client workflow automation"]
  },
  {
    company: "Bryxo Ignite",
    position: "Frontend Developer",
    duration: "Jun 2024 - Aug 2024", 
    location: "Remote",
    type: "Internship",
    description: [
      "Built responsive web interfaces using JavaScript frameworks",
      "Implemented UI/UX improvements for enhanced user experience",
      "Supported full-stack project development in startup environment",
      "Gained experience with fast-paced project cycles"
    ],
    skills: ["JavaScript", "React", "UI/UX", "Responsive Design", "Frontend"],
    highlights: ["Startup experience", "Fast-paced development"]
  },
  {
    company: "Stanford University",
    position: "Section Leader Mentor - Code in Place",
    duration: "Apr 2024 - May 2024",
    location: "Remote",
    type: "Volunteer",
    description: [
      "1-on-1 mentor in Stanford's global coding initiative",
      "Supported students learning Python and computer science fundamentals", 
      "Led TeachNow sessions and helped with debugging and logic",
      "Honed teaching skills and understanding of learning processes"
    ],
    skills: ["Python", "Teaching", "Mentoring", "Computer Science", "Communication"],
    highlights: ["International credibility", "Stanford partnership"]
  },
  {
    company: "CodSoft",
    position: "Python Programming Intern",
    duration: "Mar 2024 - Apr 2024",
    location: "Remote", 
    type: "Internship",
    description: [
      "Created practical Python applications including To-Do App and Contact Book",
      "Deployed Streamlit-based applications with backend integration",
      "Strengthened app development and deployment skills",
      "Practiced problem-solving through hands-on projects"
    ],
    skills: ["Python", "Streamlit", "App Development", "Backend Integration", "Deployment"],
    highlights: ["Hands-on projects", "Full-stack development"]
  },
  {
    company: "iCodeGuru",
    position: "Moderator & AI Trainer",
    duration: "Dec 2022 - Present",
    location: "Remote",
    type: "Volunteer",
    description: [
      "Community trainer & session lead for AI and coding bootcamps",
      "Conducted technical workshops on AI, ML, and software engineering",
      "Mentored aspiring developers through real-world projects",
      "Contributed to nurturing tech learning environment"
    ],
    skills: ["AI", "Machine Learning", "Training", "Community Building", "Workshops"],
    highlights: ["Long-term commitment", "AI expertise sharing"]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My career spans leadership roles, freelance projects, and educational initiatives, 
            showcasing growth from developer to strategic leader across diverse tech domains.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform -translate-y-1/2"></div>
          
          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`glass-effect rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 nebula-glow ${
                  index % 2 === 0 ? 'animate-fade-in' : 'animate-scale-in'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="relative -mt-12 mb-6 flex justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-30"></div>
                  </div>
                </div>

                {/* Company Header */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.position}</h3>
                  <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold mb-2">
                    <Building className="w-4 h-4" />
                    {exp.company}
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    exp.type === 'Leadership' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    exp.type === 'Freelance' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    exp.type === 'Internship' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {exp.type}
                  </span>
                </div>

                {/* Duration and Location */}
                <div className="flex flex-col gap-2 mb-4 text-gray-400 text-sm text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4 text-sm">
                  {exp.description.slice(0, 3).map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start gap-2">
                      <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {exp.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-xs text-purple-300 border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                {exp.highlights && (
                  <div className="border-t border-gray-700 pt-3">
                    <div className="flex flex-wrap gap-1">
                      {exp.highlights.map((highlight, hIndex) => (
                        <span 
                          key={hIndex}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs"
                        >
                          <Trophy className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <Briefcase className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <Building className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">6</div>
              <div className="text-gray-400">Companies</div>
            </div>
            <div className="text-center glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-gray-400">Students Mentored</div>
            </div>
            <div className="text-center glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <Code className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

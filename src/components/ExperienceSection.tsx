
import React from 'react';
import { Building, Calendar, MapPin, Briefcase, Users, Trophy, Code, Zap, Star, Award } from 'lucide-react';

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

        {/* Experience Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          
          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center w-full ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Experience Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div 
                    className="glass-effect rounded-2xl p-8 transform transition-all duration-500 hover:scale-105 nebula-glow animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Company Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Building className="w-6 h-6 text-blue-400" />
                        <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      </div>
                      <h4 className="text-xl text-gradient font-semibold mb-3">{exp.position}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                        exp.type === 'Leadership' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        exp.type === 'Freelance' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        exp.type === 'Internship' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-start gap-3">
                          <Star className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-xs text-purple-300 border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    {exp.highlights && (
                      <div className="border-t border-gray-700 pt-4">
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <span 
                              key={hIndex}
                              className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-lg text-xs"
                            >
                              <Award className="w-3 h-3" />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty space on the other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
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


import React from 'react';
import { Building, Calendar, MapPin, Briefcase, Users, Award, Code } from 'lucide-react';
import DynamicCosmicElements from './DynamicCosmicElements';

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string[];
  skills: string[];
  icon: React.ReactNode;
}

const experiences: Experience[] = [
  {
    company: "Uinfo",
    position: "Tech & Strategy Lead",
    duration: "May 2024 - Present",
    location: "Remote",
    type: "Full-time",
    description: [
      "Lead cross-functional growth initiatives driving both technology and strategy",
      "Manage three core departments: Web Development, UI/UX Design, and Social Media",
      "Collaborate with founder to define company roadmap and product launches",
      "Enhanced operational workflow and cross-team communication"
    ],
    skills: ["Leadership", "Strategy", "Product Management", "Team Building"],
    icon: <Users className="w-6 h-6" />
  },
  {
    company: "Upwork",
    position: "Freelance Software Engineer & AI Developer",
    duration: "Aug 2024 - Present",
    location: "Remote",
    type: "Freelance",
    description: [
      "Built AI chatbots, agents, and full-stack applications using Python, React, Next.js",
      "Specialized in OpenAI agents, custom GPT integrations, and smart AI assistants",
      "Helped clients automate workflows and enhance customer experiences",
      "Delivered scalable applications with 100% client satisfaction"
    ],
    skills: ["AI Development", "Full-Stack", "Python", "React", "OpenAI"],
    icon: <Code className="w-6 h-6" />
  },
  {
    company: "Stanford University",
    position: "Code in Place Section Leader Mentor",
    duration: "Apr 2024 - May 2024",
    location: "Remote",
    type: "Volunteer",
    description: [
      "Supported students learning Python and computer science fundamentals",
      "Led 1-on-1 mentoring sessions in Stanford's global coding initiative",
      "Helped students debug code, learn logic, and stay motivated",
      "Achieved exceptional student satisfaction and positive testimonials"
    ],
    skills: ["Python", "Teaching", "Mentoring", "Communication"],
    icon: <Award className="w-6 h-6" />
  },
  {
    company: "Bryxo Ignite",
    position: "Frontend Developer",
    duration: "Jun 2024 - Aug 2024",
    location: "Remote",
    type: "Internship",
    description: [
      "Built responsive web interfaces using modern JavaScript frameworks",
      "Implemented UI/UX improvements and pixel-perfect designs",
      "Supported full-stack project development in startup environment",
      "Gained experience with fast-paced, agile development processes"
    ],
    skills: ["JavaScript", "React", "UI/UX", "Responsive Design"],
    icon: <Building className="w-6 h-6" />
  },
  {
    company: "CodSoft",
    position: "Python Programming Intern",
    duration: "Mar 2024 - Apr 2024",
    location: "Remote",
    type: "Internship",
    description: [
      "Created practical Python applications including To-Do App and Contact Book",
      "Deployed Streamlit-based apps with backend/frontend integration",
      "Strengthened app development and deployment skills",
      "Practiced problem-solving and clean code principles"
    ],
    skills: ["Python", "Streamlit", "App Development", "Deployment"],
    icon: <Code className="w-6 h-6" />
  },
  {
    company: "iCodeGuru",
    position: "Moderator & AI Trainer",
    duration: "Dec 2022 - Present",
    location: "Remote",
    type: "Volunteer",
    description: [
      "Conducted technical workshops on AI, ML, and software engineering",
      "Mentored aspiring developers through real-world projects",
      "Led coding bootcamps and educational sessions",
      "Contributed to nurturing tech learning community"
    ],
    skills: ["AI/ML Training", "Workshop Leadership", "Community Building"],
    icon: <Users className="w-6 h-6" />
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 relative">
      <DynamicCosmicElements 
        sectionId="experience" 
        density="medium" 
        types={['nebula', 'star', 'comet']}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            3+ years of experience crafting digital solutions across various domains, 
            from leading teams at Uinfo to mentoring at Stanford and building AI-powered applications.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2 z-0"></div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-card cosmic-card p-6 rounded-2xl hover:shadow-2xl relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center z-20">
                  {exp.icon}
                </div>

                {/* Company Header */}
                <div className="text-center mb-4 pt-4">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.position}</h3>
                  <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold mb-2">
                    <Building className="w-4 h-4" />
                    {exp.company}
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    exp.type === 'Full-time' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    exp.type === 'Freelance' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    exp.type === 'Internship' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                    'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {exp.type}
                  </span>
                </div>

                {/* Duration and Location */}
                <div className="flex flex-col gap-2 mb-4 text-gray-400 text-sm text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4 text-sm">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-xs text-purple-300 border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center cosmic-card p-6 rounded-xl">
            <Briefcase className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">3+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center cosmic-card p-6 rounded-xl">
            <Building className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-gray-400 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center cosmic-card p-6 rounded-xl">
            <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">3</div>
            <div className="text-gray-400 text-sm">Teams Led</div>
          </div>
          <div className="text-center cosmic-card p-6 rounded-xl">
            <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">44</div>
            <div className="text-gray-400 text-sm">Students Mentored</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

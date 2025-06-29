
import React, { useState } from 'react';
import { Trophy, Calendar, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface Hackathon {
  name: string;
  year: string;
  position: string;
  type: 'won' | 'participated';
  description: string;
  tech: string[];
  teamSize?: number;
  prize?: string;
}

const hackathons: Hackathon[] = [
  // Won Hackathons
  {
    name: "AI for Good Hackathon",
    year: "2024",
    position: "1st Place",
    type: "won",
    description: "Developed an AI-powered solution for mental health support using NLP and machine learning algorithms.",
    tech: ["Python", "TensorFlow", "React", "Node.js"],
    teamSize: 4,
    prize: "$5,000"
  },
  {
    name: "Web3 Innovation Challenge",
    year: "2024",
    position: "2nd Place", 
    type: "won",
    description: "Built a decentralized application for transparent charity donations using blockchain technology.",
    tech: ["Solidity", "React", "Web3.js", "IPFS"],
    teamSize: 3,
    prize: "$3,000"
  },
  {
    name: "FinTech Revolution Hackathon",
    year: "2023",
    position: "1st Place",
    type: "won",
    description: "Created a mobile banking solution with advanced security features and AI-driven fraud detection.",
    tech: ["React Native", "Python", "MongoDB", "JWT"],
    teamSize: 4,
    prize: "$7,500"
  },
  {
    name: "Healthcare Innovation Lab",
    year: "2023",
    position: "3rd Place",
    type: "won", 
    description: "Designed a telemedicine platform with real-time patient monitoring and AI diagnostics.",
    tech: ["Vue.js", "Python", "WebRTC", "TensorFlow"],
    teamSize: 5,
    prize: "$2,000"
  },
  // Participated Hackathons
  {
    name: "Global Climate Tech Challenge",
    year: "2024",
    position: "Finalist",
    type: "participated",
    description: "Developed a carbon footprint tracking application with gamification elements to encourage eco-friendly behavior.",
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    teamSize: 3
  },
  {
    name: "EdTech Innovation Summit",
    year: "2024", 
    position: "Top 10",
    type: "participated",
    description: "Built an adaptive learning platform using machine learning to personalize educational content.",
    tech: ["React", "Python", "scikit-learn", "MongoDB"],
    teamSize: 4
  },
  {
    name: "Smart City Hackathon",
    year: "2023",
    position: "Participant",
    type: "participated",
    description: "Created an IoT-based traffic management system with real-time data analytics and optimization.",
    tech: ["Arduino", "React", "Node.js", "InfluxDB"],
    teamSize: 6
  },
  {
    name: "Social Impact Code Challenge",
    year: "2023",
    position: "Participant", 
    type: "participated",
    description: "Developed a platform connecting volunteers with local NGOs for community service opportunities.",
    tech: ["Angular", "Spring Boot", "MySQL", "AWS"],
    teamSize: 4
  }
];

const HackathonSection = () => {
  const [activeTab, setActiveTab] = useState<'won' | 'participated'>('won');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredHackathons = hackathons.filter(h => h.type === activeTab);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredHackathons.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredHackathons.length) % filteredHackathons.length);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">
            Hackathon Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My competitive programming journey across various hackathons, 
            showcasing innovation, teamwork, and technical excellence.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect rounded-full p-1">
            <button
              onClick={() => {
                setActiveTab('won');
                setCurrentIndex(0);
              }}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'won'
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Trophy className="w-5 h-5 inline mr-2" />
              Won Hackathons
            </button>
            <button
              onClick={() => {
                setActiveTab('participated');
                setCurrentIndex(0);
              }}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'participated'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Users className="w-5 h-5 inline mr-2" />
              Participated
            </button>
          </div>
        </div>

        {/* Hackathon Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {filteredHackathons.map((hackathon, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8">
                  <div className="text-center">
                    {/* Award Icon */}
                    <div className="mb-6">
                      {hackathon.type === 'won' ? (
                        <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                      ) : (
                        <Award className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                      )}
                    </div>

                    {/* Hackathon Info */}
                    <h3 className="text-3xl font-bold text-white mb-2">{hackathon.name}</h3>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className={`px-4 py-2 rounded-full font-semibold ${
                        hackathon.type === 'won' 
                          ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-400 border border-yellow-500/30'
                          : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {hackathon.position}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {hackathon.year}
                      </span>
                    </div>

                    {hackathon.prize && (
                      <div className="mb-4">
                        <span className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-4 py-2 rounded-full font-semibold border border-green-500/30">
                          Prize: {hackathon.prize}
                        </span>
                      </div>
                    )}

                    <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                      {hackathon.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {hackathon.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Team Size */}
                    {hackathon.teamSize && (
                      <div className="flex items-center justify-center gap-2 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>Team of {hackathon.teamSize}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {filteredHackathons.length > 1 && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}
          </div>

          {/* Dots Indicator */}
          {filteredHackathons.length > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {filteredHackathons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? (activeTab === 'won' ? 'bg-yellow-500 scale-125' : 'bg-blue-500 scale-125')
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center glass-effect p-6 rounded-xl">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">{hackathons.filter(h => h.type === 'won').length}</div>
            <div className="text-gray-400">Hackathons Won</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-xl">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">{hackathons.length}</div>
            <div className="text-gray-400">Total Participated</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-xl">
            <Award className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">$17,500+</div>
            <div className="text-gray-400">Prize Money Won</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;

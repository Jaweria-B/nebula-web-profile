
import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Calendar, Users, Award, ChevronLeft, ChevronRight, ExternalLink, FileText, Rocket } from 'lucide-react';
import { hackathonsParticipated, wonHackathons } from '../data/hackathons';

// Data is sourced from src/data/hackathons.ts

const HackathonSection = () => {
  const [activeTab, setActiveTab] = useState<'won' | 'participated'>('won');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredHackathons = activeTab === 'won' ? wonHackathons : hackathonsParticipated;

  const autoplayRef = useRef<number | null>(null);
  const startAutoplay = () => {
    if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredHackathons.length);
    }, 6000);
  };
  const stopAutoplay = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };
  const nextSlide = () => {
    stopAutoplay();
    setCurrentIndex((prev) => (prev + 1) % filteredHackathons.length);
    startAutoplay();
  };

  const prevSlide = () => {
    stopAutoplay();
    setCurrentIndex((prev) => (prev - 1 + filteredHackathons.length) % filteredHackathons.length);
    startAutoplay();
  };

  const goToSlide = (i: number) => {
    stopAutoplay();
    setCurrentIndex(i);
    startAutoplay();
  };

  const totalEvents = wonHackathons.length + hackathonsParticipated.length;
  const projectsCount =
    wonHackathons.filter((x) => x.project && x.project.length > 0).length +
    hackathonsParticipated.filter((x) => x.project && x.project.length > 0).length;

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [activeTab, filteredHackathons.length]);

  const concisePosition = (text?: string) => {
    if (!text) return 'Winner';
    const lower = text.toLowerCase();
    if (lower.includes('2nd')) return '2nd place';
    if (lower.includes('3rd')) return '3rd place';
    const topMatch = text.match(/Top\s+\d+/i);
    if (topMatch) return `${topMatch[0]} Finalist`;
    if (lower.includes('finalist')) return 'Finalist';
    return text.split(/[—:-]/)[0].trim();
  };

  const wonFacts = (item: any) => {
    const facts: string[] = [];
    if (item.totalTeams) facts.push(`${item.totalTeams} teams`);
    if (item.participants) facts.push(`~${item.participants} participants`);
    const pct = (item.position as string)?.match(/Top\s*([\d.]+)%\s*of\s*teams/i)?.[1];
    if (pct) facts.push(`Top ${pct}% of teams`);
    return facts;
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
              aria-label="Show won hackathons"
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
              aria-label="Show participated hackathons"
            >
              <Users className="w-5 h-5 inline mr-2" />
              Participated
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <span className="glass-effect px-4 sm:px-6 py-2 rounded-full inline-flex items-center gap-2 text-sm text-white">
            <Rocket className="w-4 h-4 text-purple-400" />
            These are projects I built during hackathons.
          </span>
        </div>

        {/* Hackathon Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="glass-effect rounded-2xl overflow-hidden" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {filteredHackathons.map((item: any, index: number) => (
                <div key={index} className="w-full flex-shrink-0 p-8">
                  <div className="text-center animate-enter">
                    {/* Award Icon */}
                    <div className="mb-6">
                      {activeTab === 'won' ? (
                        <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                      ) : (
                        <Award className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                      )}
                    </div>

                    {/* Hackathon Info */}
                    <h3 className="text-3xl font-bold text-white mb-3">{item.hackathonName}</h3>

                    <div className="flex items-center justify-center flex-wrap gap-3 mb-5">
                      {activeTab === 'won' ? (
                        <span className="px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-400 border border-yellow-500/30">
                          {concisePosition(item.position)}
                        </span>
                      ) : (
                        <span className="px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30">
                          {item.placement || item.status || 'Participant'}
                        </span>
                      )}

                      {item.date && (
                        <span className="flex items-center gap-1 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </span>
                      )}
                    </div>

                    {item.description && (
                      <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                        {item.description}
                      </p>
                    )}

                    {/* Tags */}
                    {(item.tags?.length || item.keywords?.length) && (
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {(item.tags?.length ? item.tags : item.keywords).map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Details - won facts */}
                    {activeTab === 'won' && wonFacts(item).length > 0 && (
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {wonFacts(item).map((fact, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-sm text-yellow-300/90 border border-yellow-500/30 bg-yellow-500/10"
                          >
                            {fact}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                      {item.project && item.project.length > 0 && (
                        <a href={item.project} target="_blank" rel="noopener noreferrer" className="glass-effect px-4 py-2 rounded-full hover-scale inline-flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" /> Project
                        </a>
                      )}
                      {item.certificate && item.certificate.length > 0 && (
                        <a href={item.certificate} target="_blank" rel="noopener noreferrer" className="glass-effect px-4 py-2 rounded-full hover-scale inline-flex items-center gap-2">
                          <FileText className="w-4 h-4" /> Certificate
                        </a>
                      )}
                      {item.hackathonLink && item.hackathonLink.length > 0 && (
                        <a href={item.hackathonLink} target="_blank" rel="noopener noreferrer" className="glass-effect px-4 py-2 rounded-full hover-scale inline-flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" /> Event
                        </a>
                      )}
                    </div>
                    {item.team && (
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm text-gray-300 border border-white/10 glass-effect">
                          <Users className="w-4 h-4" />
                          Team of {item.team}
                        </span>
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
                  onClick={() => goToSlide(index)}
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
            <div className="text-3xl font-bold text-white">{wonHackathons.length}</div>
            <div className="text-gray-400">Won / Finalists</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-xl">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">{totalEvents}</div>
            <div className="text-gray-400">Total Events</div>
          </div>
          <div className="text-center glass-effect p-6 rounded-xl">
            <Award className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-white">{projectsCount}</div>
            <div className="text-gray-400">Projects Built</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;

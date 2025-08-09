
import React from 'react';
import { Trophy, Calendar, Users, Award, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { hackathonsParticipated } from '@/data/hackathons';



const HackathonSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const items = hackathonsParticipated;
  const len = items.length;

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % len);
  }, [len]);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + len) % len);
  }, [len]);

  React.useEffect(() => {
    if (paused || len <= 1) return;
    const id = window.setInterval(() => {
      nextSlide();
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused, len, nextSlide]);

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


        {/* Hackathon Slider */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Hackathons participated slider"
        >
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out will-change-transform"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((hack, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8">
                  <div className="text-center">
                    <div className="mb-6">
                      {hack.placement ? (
                        <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                      ) : (
                        <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                      )}
                    </div>

                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      <a
                        href={hack.hackathonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="story-link"
                      >
                        {hack.hackathonName}
                      </a>
                    </h3>

                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="px-4 py-2 rounded-full font-semibold bg-primary/10 text-primary border border-primary/30">
                        {hack.placement ?? 'Participant'}
                      </span>
                      {hack.date && (
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {hack.date}
                        </span>
                      )}
                    </div>

                    {hack.description && (
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                        {hack.description}
                      </p>
                    )}

                    {hack.tags && hack.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {hack.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-sm bg-secondary/30 text-foreground border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                      {hack.team && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>Team {hack.team}</span>
                        </div>
                      )}
                    </div>

                    {(hack.project || hack.certificate || hack.hackathonLink) && (
                      <div className="flex flex-wrap justify-center gap-3">
                        {hack.project && (
                          <Button variant="outline" asChild>
                            <a href={hack.project} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Project
                            </a>
                          </Button>
                        )}
                        {hack.certificate && (
                          <Button variant="secondary" asChild>
                            <a href={hack.certificate} target="_blank" rel="noopener noreferrer">
                              Certificate
                            </a>
                          </Button>
                        )}
                        {hack.hackathonLink && (
                          <Button variant="ghost" asChild>
                            <a href={hack.hackathonLink} target="_blank" rel="noopener noreferrer">
                              Event
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {len > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-background/40 transition-all duration-300"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-background/40 transition-all duration-300"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {len > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-primary scale-125' : 'bg-muted hover:bg-muted/80'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;


import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  course: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Stanford Student",
    content: "Jaweria was an exceptional mentor in Code in Place! Her explanations were crystal clear and she made complex programming concepts feel approachable. She always went above and beyond to help us succeed.",
    rating: 5,
    course: "Code in Place 2024"
  },
  {
    name: "Michael Rodriguez",
    role: "Stanford Student", 
    content: "What made Jaweria stand out was her patience and dedication. She taught 44 lessons with such enthusiasm and made sure every student understood the material. Best mentor I've ever had!",
    rating: 5,
    course: "Code in Place 2024"
  },
  {
    name: "Emily Johnson",
    role: "Stanford Student",
    content: "Jaweria's mentoring style is incredible. She breaks down complex problems into digestible pieces and creates a supportive learning environment. Her expertise in programming really shows!",
    rating: 5,
    course: "Code in Place 2024"
  },
  {
    name: "David Park",
    role: "Stanford Student",
    content: "Having Jaweria as a mentor was a game-changer for my programming journey. Her real-world experience and teaching ability made learning Python so much more engaging and effective.",
    rating: 5,
    course: "Code in Place 2024"
  },
  {
    name: "Lisa Thompson",
    role: "Stanford Student",
    content: "Jaweria's dedication to teaching is unmatched. She made every lesson interactive and fun, while still covering all the important concepts. Her mentorship truly inspired me to pursue programming further!",
    rating: 5,
    course: "Code in Place 2024"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
      />
    ));
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Testimonials from my students at Stanford Code in Place 2024, where I mentored 
            44 lessons and helped shape the next generation of programmers.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="glass-effect rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-500/20" />
            
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-xl font-bold text-white mb-2">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-400 font-semibold mb-1">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentIndex].course}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
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
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Stanford Badge */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-white font-semibold">Stanford Code in Place Mentor</span>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

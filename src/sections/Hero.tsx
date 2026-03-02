import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=800&fit=crop',
      title: 'KARA AI AUTOMATIONS AND TRAINING',
      subtitle: 'Empowering learners globally through accessible tech education',
    },
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=800&fit=crop',
      title: 'Transform Your Business',
      subtitle: 'End-to-end AI integration customized for your niche',
    },
    {
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600&h=800&fit=crop',
      title: 'Education & Mentorship',
      subtitle: 'Bridging knowledge and real-world application',
    },
    {
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1600&h=800&fit=crop',
      title: 'Build Your Future',
      subtitle: 'Transforming potential into leadership and innovation',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-kara-dark/80 via-kara-dark/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="max-w-2xl animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8">
                  {slide.subtitle}
                </p>
                <a
                  href="#about"
                  className="inline-flex items-center px-6 py-3 bg-kara-brown text-white font-medium rounded-lg hover:bg-kara-brown/90 transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-kara-tan w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

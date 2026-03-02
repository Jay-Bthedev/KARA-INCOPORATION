import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "KARA INCORPORATION transformed my understanding of technology. Their mentorship program helped me launch my own tech startup within 6 months!",
      author: "Adeola Williams",
      role: "Tech Entrepreneur",
      rating: 5,
    },
    {
      quote: "The AI automation training was a game-changer for my business. I've saved countless hours and increased my revenue by 40%.",
      author: "Chinedu Okonkwo",
      role: "Small Business Owner",
      rating: 5,
    },
    {
      quote: "Their inclusive approach to tech education made me feel welcome and supported. I went from zero coding knowledge to building full-stack applications.",
      author: "Fatima Ibrahim",
      role: "Software Developer",
      rating: 5,
    },
    {
      quote: "The mentorship and guidance I received from KARA helped me secure my dream job in the tech industry. Forever grateful!",
      author: "Emmanuel Adeyemi",
      role: "Data Analyst",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kara-dark mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-kara-dark/70 max-w-2xl mx-auto">
            Hear from clients who have experienced profound transformations through KARA'S services. 
            Their stories highlight the effectiveness of a newly birthed Tech brand.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-kara-cream rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-kara-brown rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-kara-gold text-kara-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-kara-dark leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-kara-brown/20 flex items-center justify-center">
                  <span className="text-xl font-semibold text-kara-brown">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-kara-dark">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-kara-dark/60">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-kara-dark/10">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-kara-brown w-8'
                        : 'bg-kara-dark/20 hover:bg-kara-dark/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-kara-dark hover:bg-kara-brown hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-kara-dark hover:bg-kara-brown hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

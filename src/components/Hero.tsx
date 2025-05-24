import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-cream min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-sage-900 leading-tight mb-6">
            A Ritual,<br />Not a Routine
          </h1>
          <p className="text-sage-700 text-lg md:text-xl mb-8 max-w-md">
            Elevate your daily cup with our adaptogen-infused coffee blends, designed to nourish your body and calm your mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#shop" 
              className="bg-sage-700 hover:bg-sage-800 text-cream py-3 px-8 rounded-full text-center transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </a>
            <a 
              href="#ritual" 
              className="border border-sage-700 text-sage-700 hover:bg-sage-50 py-3 px-8 rounded-full text-center transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform duration-700 hover:scale-[1.02]">
            <img 
              src="https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg" 
              alt="Person pouring coffee with a calm, mindful approach" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-sage-900 opacity-10"></div>
          </div>
          <div className="absolute -bottom-8 -left-8 hidden md:block">
            <div className="bg-cream p-6 rounded-lg shadow-md">
              <p className="text-terracotta font-serif italic text-xl">"Mindfulness in every sip"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
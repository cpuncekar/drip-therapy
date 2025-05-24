import React from 'react';

const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-sage-900 mb-4">Our Story</h2>
            <h3 className="font-serif text-xl text-terracotta mb-6">Rooted in Ritual, Backed by Purpose</h3>
            <div className="space-y-4 text-sage-700">
              <p>
                Drip Therapy was born from a simple observation: in our fast-paced world, 
                the daily coffee ritual had become just another routine to rush through.
              </p>
              <p>
                Our founder, a wellness enthusiast and coffee lover, sought to transform 
                this daily habit into a mindful practice. By combining premium organic coffee 
                with powerful adaptogens, we created blends that not only taste exceptional 
                but also support your body's natural rhythm.
              </p>
              <p>
                Today, we're more than just a coffee company. We're a community of mindful 
                individuals who believe that every cup of coffee is an opportunity to pause, 
                reflect, and nourish both body and soul.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7262897/pexels-photo-7262897.jpeg"
              alt="Person journaling while enjoying coffee in a peaceful setting"
              className="rounded-xl shadow-lg w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-md max-w-xs hidden lg:block">
              <p className="font-serif text-sage-900 italic">
                "Every morning is an opportunity to start fresh, and we're here to help you make it count."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
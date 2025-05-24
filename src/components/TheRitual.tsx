import React from 'react';
import { Sunrise, Coffee, BookOpen } from 'lucide-react';

interface RitualStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: RitualStep[] = [
  {
    icon: <Sunrise className="h-8 w-8 text-terracotta" />,
    title: "Morning Mix",
    description: "Start your day with intention. Choose your blend based on your needs - focus, calm, or balance."
  },
  {
    icon: <Coffee className="h-8 w-8 text-terracotta" />,
    title: "Mindful Preparation",
    description: "Take a moment to observe the aroma and warmth as you prepare your cup. Let this be your pause."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-terracotta" />,
    title: "Reflect & Reset",
    description: "Use this time to journal, meditate, or simply be present with your thoughts."
  }
];

const TheRitual: React.FC = () => {
  return (
    <section id="ritual" className="py-16 md:py-24 bg-sage-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-sage-900 mb-4">The Ritual</h2>
          <h3 className="text-xl text-terracotta mb-8">How to Sip with Intention</h3>
          <p className="text-sage-700 max-w-2xl mx-auto">
            Transform your daily coffee routine into a mindful ritual. Follow these steps 
            to create a moment of peace and intention in your day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-cream rounded-full">
                  {step.icon}
                </div>
              </div>
              <h4 className="font-serif text-xl text-sage-900 mb-3 text-center">{step.title}</h4>
              <p className="text-sage-700 text-center">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-cream rounded-xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl text-sage-900 mb-4">Ready to Begin Your Ritual?</h3>
          <p className="text-sage-700 mb-8 max-w-xl mx-auto">
            Join our community of mindful coffee enthusiasts and receive weekly ritual inspiration, 
            brewing guides, and exclusive offers.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-full bg-white border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-300"
              />
              <button
                type="submit"
                className="bg-sage-700 hover:bg-sage-800 text-cream px-6 py-3 rounded-full transition-colors duration-200"
              >
                Join Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TheRitual;
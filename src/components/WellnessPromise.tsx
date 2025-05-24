import React from 'react';
import { Leaf, Coffee, Heart } from 'lucide-react';

interface PromiseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const promises: PromiseItem[] = [
  {
    icon: <Leaf className="h-8 w-8 text-sage-700" />,
    title: "Organic Ingredients",
    description: "We source only the highest quality organic ingredients, ensuring our blends are free from pesticides and harmful chemicals."
  },
  {
    icon: <Coffee className="h-8 w-8 text-sage-700" />,
    title: "Adaptogen-Infused",
    description: "Our unique blends incorporate adaptogens like Lion's Mane, Ashwagandha, and Reishi to support your body's natural stress response."
  },
  {
    icon: <Heart className="h-8 w-8 text-sage-700" />,
    title: "Ethically Sourced",
    description: "We work directly with farmers who are paid fairly and use sustainable farming practices to protect our planet."
  }
];

const WellnessPromise: React.FC = () => {
  return (
    <section id="wellness" className="py-16 md:py-24 bg-sage-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-sage-900 mb-4">Our Wellness Promise</h2>
          <p className="text-sage-700 max-w-xl mx-auto">
            We believe that what you put in your body matters. That's why we've created coffee that nourishes both body and mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:translate-y-[-4px]"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-sage-100 rounded-full">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-serif text-xl text-sage-900 mb-3 text-center">{item.title}</h3>
              <p className="text-sage-700 text-center">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-sage-100 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h3 className="font-serif text-2xl md:text-3xl text-sage-900 mb-4">The Science Behind Our Blends</h3>
              <p className="text-sage-700 mb-4">
                We've partnered with nutritionists and herbalists to create formulas that support your well-being through the power of adaptogens and functional mushrooms.
              </p>
              <p className="text-sage-700">
                Each blend is crafted to provide the perfect balance of flavor and function, helping you feel your best throughout the day.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/6941012/pexels-photo-6941012.jpeg"
                alt="Coffee beans and dried herbs arranged on a rustic wooden table"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessPromise;
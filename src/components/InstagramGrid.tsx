import React from 'react';

interface InstagramPost {
  id: number;
  image: string;
  alt: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/8472863/pexels-photo-8472863.jpeg",
    alt: "Person enjoying coffee at sunrise"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/6814537/pexels-photo-6814537.jpeg",
    alt: "Coffee and journal on wooden table"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/6065426/pexels-photo-6065426.jpeg",
    alt: "Coffee brewing process"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/4350054/pexels-photo-4350054.jpeg",
    alt: "Coffee beans and plants"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg",
    alt: "Coffee ceremony with friends"
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg",
    alt: "Morning coffee ritual"
  }
];

const InstagramGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-sage-900 mb-4">Join Our Community</h2>
          <p className="text-sage-700 max-w-xl mx-auto mb-4">
            Follow us on Instagram for daily inspiration, recipes, and wellness tips.
          </p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-terracotta hover:text-terracotta-dark font-medium inline-flex items-center transition-colors duration-200"
          >
            @driptherapy
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map(post => (
            <div 
              key={post.id} 
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
            >
              <img 
                src={post.image} 
                alt={post.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-sage-900 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGrid;
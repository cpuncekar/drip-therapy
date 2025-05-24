import React from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Mindful Morning Blend",
    description: "Our signature coffee blend with Lion's Mane and Ashwagandha to support focus and calm energy.",
    price: "$24.99",
    image: "https://images.pexels.com/photos/5908226/pexels-photo-5908226.jpeg"
  },
  {
    id: 2,
    title: "The Ritual Kit",
    description: "Complete coffee ritual set including our signature blend, ceramic mug, and bamboo spoon.",
    price: "$64.99",
    image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg"
  },
  {
    id: 3,
    title: "The Drip Flight",
    description: "Sample all three of our specialty blends in this tasting flight pack. Perfect for gifting.",
    price: "$34.99",
    image: "https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg"
  }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-sage-900 mb-2">{product.title}</h3>
        <p className="text-sage-700 mb-4 h-20">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-terracotta font-medium">{product.price}</span>
          <button className="bg-sage-700 hover:bg-sage-800 text-cream py-2 px-4 rounded-full text-sm transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid: React.FC = () => {
  return (
    <section id="shop" className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-sage-900 mb-4">Shop Our Collection</h2>
          <p className="text-sage-700 max-w-xl mx-auto">
            Thoughtfully crafted blends to enhance your daily ritual and support your wellness journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
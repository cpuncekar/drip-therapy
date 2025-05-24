import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream py-2 shadow-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="/" className="text-sage-900 font-serif text-2xl font-medium">
          Drip Therapy
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#shop" className="text-sage-900 hover:text-terracotta transition-colors duration-200">
            Shop
          </a>
          <a href="#our-story" className="text-sage-900 hover:text-terracotta transition-colors duration-200">
            Our Story
          </a>
          <a href="#wellness" className="text-sage-900 hover:text-terracotta transition-colors duration-200">
            Wellness
          </a>
          <a href="#ritual" className="text-sage-900 hover:text-terracotta transition-colors duration-200">
            The Ritual
          </a>
          <button className="bg-sage-700 hover:bg-sage-800 text-cream py-2 px-6 rounded-full transition-colors duration-200">
            Shop Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-sage-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream absolute w-full py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#shop" 
              className="text-sage-900 hover:text-terracotta transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </a>
            <a 
              href="#our-story" 
              className="text-sage-900 hover:text-terracotta transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Our Story
            </a>
            <a 
              href="#wellness" 
              className="text-sage-900 hover:text-terracotta transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              Wellness
            </a>
            <a 
              href="#ritual" 
              className="text-sage-900 hover:text-terracotta transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              The Ritual
            </a>
            <button 
              className="bg-sage-700 hover:bg-sage-800 text-cream py-2 px-6 rounded-full transition-colors duration-200 w-full mt-4"
              onClick={() => setIsOpen(false)}
            >
              Shop Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
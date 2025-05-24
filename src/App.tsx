import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import OurStory from './components/OurStory';
import WellnessPromise from './components/WellnessPromise';
import TheRitual from './components/TheRitual';
import InstagramGrid from './components/InstagramGrid';
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';

function App() {
  // Update page title
  useEffect(() => {
    document.title = 'Drip Therapy | A Ritual, Not a Routine';
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="font-sans antialiased text-sage-900">
      <Navbar />
      <Hero />
      <ProductGrid />
      <OurStory />
      <WellnessPromise />
      <TheRitual />
      <InstagramGrid />
      <EmailSignup />
      <Footer />
    </div>
  );
}

export default App;
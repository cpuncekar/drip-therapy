import React, { useState } from 'react';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="signup" className="py-16 md:py-24 bg-sage-800 text-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Join the Ritual</h2>
          <p className="mb-8 text-cream/80">
            Get early access to limited drops, wellness content, and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-cream/30"
                disabled={isSubmitting || isSuccess}
              />
              {error && <p className="mt-2 text-left text-sm text-terracotta">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                isSubmitting || isSuccess 
                  ? 'bg-terracotta/70 cursor-not-allowed' 
                  : 'bg-terracotta hover:bg-terracotta-dark'
              }`}
            >
              {isSubmitting ? 'Subscribing...' : isSuccess ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
          
          <p className="text-sm text-cream/60">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl font-bold mb-4">Our Philosophy</h2>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            <p className="font-sans text-lg mb-4 opacity-80">
              At Colombo Archives, we believe that great marketing isnt just about clicks and conversions. Its about building a legacy. We blend timeless storytelling techniques with cutting-edge digital strategies to create brands that are not just seen, but remembered.
            </p>
            <p className="font-sans text-lg opacity-80">
              Our approach is rooted in the serene, enduring spirit of our tropical namesake. We help you find your voice, cultivate your audience, and grow with authenticity and purpose.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Team at Colombo Archives"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

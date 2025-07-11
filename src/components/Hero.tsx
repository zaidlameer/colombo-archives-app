
import React from 'react';

const PalmTreeIcon = () => (
    <svg width="200" height="220" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-10 -right-20 opacity-10 -rotate-12 hidden lg:block">
        <path d="M100 220C100 220 105 150 105 100C105 50 110 0 110 0" stroke="#F5F2DF" strokeWidth="2"/>
        <path d="M110 40C110 40 140 35 160 50" stroke="#F5F2DF" strokeWidth="2"/>
        <path d="M110 45C110 45 130 55 140 75" stroke="#F5F2DF" strokeWidth="2"/>
        <path d="M108 50C108 50 90 65 80 85" stroke="#F5F2DF" strokeWidth="2"/>
        <path d="M105 55C105 55 70 65 50 80" stroke="#F5F2DF" strokeWidth="2"/>
    </svg>
)

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
            Crafting Digital Narratives that Resonate
        </h1>
        <p className="font-sans text-lg md:text-xl mt-6 max-w-2xl opacity-80">
            We are Colombo Archives, a creative digital marketing agency dedicated to building timeless brand stories in a modern world.
        </p>
        <a 
            href="#services"
            className="mt-10 px-8 py-3 bg-secondary text-primary font-bold uppercase tracking-widest transition-transform duration-300 hover:scale-105"
            >
            Explore Our Services
        </a>

        <PalmTreeIcon />
        </div>
    </section>
  );
};

export default Hero;

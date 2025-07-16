
import React from 'react';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' }
  ];

  return (
    <header className="bg-primary/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
           <a href="#" className="font-serif text-3xl tracking-widest uppercase">
          Colombo <span className="font-thin">Archives</span>
            </a>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm uppercase tracking-wider transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
       <div className="w-full h-px bg-secondary/20"></div>
    </header>
  );
};

export default Header;


import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="bg-primary text-secondary font-sans min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <AnimatePresence>
      <div className="bg-black min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <Portfolio />
          <About />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;

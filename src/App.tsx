import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Portfolio />
      <About />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Program';
import Trainers from './components/Trainers';
import Plans from './components/Plans';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Programs />
      <Trainers />
      <Plans />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

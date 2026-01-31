import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Experience from './components/Experience';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Experience />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
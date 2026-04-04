import React from 'react';
import NavBar from './components/layout/NavBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <div className='min-h-screen bg-black pb-[100vh]'>
      <NavBar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

    </div>
  );
};

export default App;

import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="publications">
        <Publications />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <About />
      </div>
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-100 py-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Yogesh Chandrasekharuni. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

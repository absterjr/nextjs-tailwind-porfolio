import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Bio from '../components/Bio';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <Bio />
      <Education />
      <Skills />
      <Experience />
      <Projects />

      <Footer />
    </>
  );
}

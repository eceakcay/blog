import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Footer from '@/components/sections/Footer';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      // Small optimization: only update state if value actually changes
      const shouldBeScrolled = window.scrollY > 50;
      if (shouldBeScrolled !== isScrolled) {
        // Debounce slightly to avoid rapid state updates on boundary
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsScrolled(shouldBeScrolled);
        }, 10);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isScrolled]);

  const scrollToSection = (id: string) => {
    const targetId = id === 'about' ? 'hakkimda' :
      id === 'skills' ? 'beceriler' :
        id === 'projects' ? 'projeler' :
          id === 'experience' ? 'deneyim' : id;
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030303] text-slate-300 selection:bg-purple-500/40 selection:text-white overflow-x-hidden">
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-purple-500 to-accent z-[100] origin-left" style={{ scaleX }} />

      {/* Modern Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] contrast-150" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <Navbar isScrolled={isScrolled} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default Index;
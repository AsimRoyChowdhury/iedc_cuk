import React, { useState, useEffect } from 'react';

import Header from './components/HeaderSection';
import HeroImageSection from './components/HeroImageSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Spotlight from './components/Spotlight';

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        // Show header after scrolling past 90% of the viewport height
        if (window.scrollY > window.innerHeight * 0.9) {
            setIsHeaderVisible(true);
        } else {
            setIsHeaderVisible(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950">
      <Spotlight />
      <Header isVisible={isHeaderVisible} />
      
      {/* 1. The hero section is placed in a fixed container that acts as a background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <HeroImageSection />
      </div>
      
      {/* 2. This empty spacer div pushes the main content down by one full screen height */}
      <div className="h-screen" />

      {/* 3. This wrapper contains all the content that scrolls over the hero background */}
      <div className="relative z-10 bg-slate-950">
        {/* The container now properly wraps the main content and footer */}
        <div className="container mx-auto px-6 max-w-7xl">
          <main>
            <AboutSection />
            <EventsSection />
            <TeamSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;

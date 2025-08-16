import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Menu, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

// Reusable component for sections that animate on scroll
const AnimatedSection = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
        hidden: { opacity: 0, y: 50 },
      }}
      className="py-20"
    >
      {children}
    </motion.section>
  );
};


// Header Component
const Header = ({ isVisible }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navLinks = [
        { name: 'Home', href: '#hero-image-section' },
        { name: 'About', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'Team', href: '#team' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.header 
            id="header" 
            className="bg-slate-950/70 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-slate-800"
            animate={{ 
                y: isVisible ? 0 : -100,
                opacity: isVisible ? 1 : 0 
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-white">
                    IEDC <span className="gradient-text">[College]</span>
                </a>
                
                <nav className="hidden md:flex items-center space-x-6 text-slate-300">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} className="hover:text-white transition-colors duration-300">{link.name}</a>
                    ))}
                </nav>

                <a href="#contact" className="hidden md:block gradient-button text-white font-semibold px-5 py-2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    Join Us
                </a>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                    <Menu />
                </button>
            </div>

            {isMenuOpen && (
                <div id="mobile-menu" className="md:hidden bg-slate-900">
                    {navLinks.map(link => (
                         <a key={link.name} href={link.href} className="block text-center py-3 px-6 hover:bg-slate-800 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>{link.name}</a>
                    ))}
                    <div className="p-4">
                        <a href="#contact" className="block w-full text-center gradient-button text-white font-semibold px-5 py-2 rounded-lg shadow-lg">
                            Join Us
                        </a>
                    </div>
                </div>
            )}
        </motion.header>
    );
};

// NEW Hero Image Section Component
const HeroImageSection = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <motion.section 
            id="hero-image-section" 
            ref={heroRef}
            style={{ opacity }}
            className="w-full flex items-center justify-center text-center relative"
        >
            <div className="z-10 container mx-auto px-6">
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4"
                >
                    Innovate. <span className="gradient-text">Incubate.</span> Inspire.
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8"
                >
                    Welcome to the Innovation and Entrepreneurship Development Cell of [Your College Name].
                </motion.p>
                <motion.a 
                    href="#about" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="gradient-button text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-transform duration-300 hover:scale-105 inline-block"
                >
                    Discover More
                </motion.a>
            </div>
        </motion.section>
    );
};

// About Section Component
const AboutSection = () => (
    <AnimatedSection id="about">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">What is IEDC?</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full"></div>
            </div>
            <motion.div 
                className="max-w-4xl mx-auto glass-card rounded-xl p-8 md:p-12"
                whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.2)" }}
            >
                <p className="text-slate-300 text-lg text-center leading-relaxed">
                    The Innovation and Entrepreneurship Development Cell (IEDC) is a student-run organization dedicated to fostering a culture of innovation and entrepreneurial spirit within our campus. We provide a platform for students to transform their creative ideas into tangible projects and potential business ventures. Through workshops, mentorship programs, and networking events, we empower the next generation of entrepreneurs and tech pioneers.
                </p>
            </motion.div>
        </div>
    </AnimatedSection>
);

// Events Section Component
const EventsSection = () => {
    const events = [
        { title: "Startup Ideation Workshop", date: "25th Aug, 2025", description: "Learn the fundamentals of brainstorming and validating a startup idea. No prior experience needed!", link: "#", image: "https://placehold.co/600x400/020617/ec4899?text=Workshop" },
        { title: "24-Hour Hackathon", date: "10th Sep, 2025", description: "Build, code, and create innovative solutions to real-world problems. Prizes and glory await!", link: "#", image: "https://placehold.co/600x400/020617/ec4899?text=Hackathon" },
        { title: "Founder's Talk", date: "22nd Sep, 2025", description: "An inspiring session with a successful startup founder. Get insights and ask your questions.", link: "#", image: "https://placehold.co/600x400/020617/ec4899?text=Speaker+Session" },
    ];

    return (
        <AnimatedSection id="events">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Upcoming Events</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div 
                            key={index} 
                            className="glass-card rounded-lg overflow-hidden shadow-lg"
                            whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.2)" }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={event.image} alt="Event Image" className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                                <p className="text-slate-400 mb-1 font-semibold">Date: {event.date}</p>
                                <p className="text-slate-300 mb-4">{event.description}</p>
                                <a href={event.link} className="text-pink-400 hover:text-pink-300 font-semibold">Register Now &rarr;</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

// Team Section Component
const TeamSection = () => {
    const teamMembers = [
        { name: "Alex Johnson", role: "Chief Coordinator", image: "https://placehold.co/400x400/1e293b/a855f7?text=Person+1" },
        { name: "Maria Garcia", role: "Technical Lead", image: "https://placehold.co/400x400/1e293b/a855f7?text=Person+2" },
        { name: "Sam Chen", role: "Events Head", image: "https://placehold.co/400x400/1e293b/a855f7?text=Person+3" },
        { name: "Priya Patel", role: "Marketing Lead", image: "https://placehold.co/400x400/1e293b/a855f7?text=Person+4" },
    ];

    return (
        <AnimatedSection id="team">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Meet the Team</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div 
                            key={index} 
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-700 shadow-lg transition-transform duration-300 hover:scale-110"/>
                            <h3 className="text-xl font-bold text-white">{member.name}</h3>
                            <p className="gradient-text font-semibold">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

// Contact Section Component
const ContactSection = () => (
    <AnimatedSection id="contact">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Involved!</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
                Have an idea? Want to join our team? Or just curious? We'd love to hear from you. Follow us on our social channels to stay updated.
            </p>
            <motion.div 
                className="flex justify-center space-x-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-all duration-300 hover:scale-125"><Instagram size={32} /></a>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-all duration-300 hover:scale-125"><Linkedin size={32} /></a>
                <a href="#" className="text-slate-400 hover:text-pink-400 transition-all duration-300 hover:scale-125"><Twitter size={32} /></a>
                <a href="mailto:iedc@[yourcollege].edu" className="text-slate-400 hover:text-pink-400 transition-all duration-300 hover:scale-125"><Mail size={32} /></a>
            </motion.div>
        </div>
    </AnimatedSection>
);

// Footer Component
const Footer = () => (
    <footer className="border-t border-slate-800 py-6">
        <div className="container mx-auto px-6 text-center text-slate-400">
            <p>&copy; 2025 IEDC [Your College Name]. All Rights Reserved.</p>
        </div>
    </footer>
);


// Spotlight Effect Component
const Spotlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.pageX, y: e.pageY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            id="spotlight"
            style={{
                position: 'absolute', // Use absolute to follow page scroll
            }}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.1 }}
        />
    );
};


// Main App Component
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
    <div className="relative">
      <Spotlight />
      <Header isVisible={isHeaderVisible} />
      <HeroImageSection />
      <main className="relative z-10 bg-slate-950">
        <AboutSection />
        <EventsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App;

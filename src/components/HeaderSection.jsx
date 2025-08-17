import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
        <>
            <motion.header 
                id="header" 
                className="bg-slate-950/70 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-slate-800 flex"
                animate={{ 
                    y: isVisible ? 0 : -100,
                    opacity: isVisible ? 1 : 0 
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    
                    <a href="#" className="text-3xl font-bold text-white z-10 flex items-center">
                        <img src="./iedc_logo.png" alt="IEDC Logo" className="inline-block h-8 mr-4" />
                        IEDC <span className="gradient-text ml-2">CUK</span>
                    </a>
                    
                    {/* Wrapper for right-aligned items */}
                    <div className="flex items-center space-x-4">
                        {/* Desktop Navigation & Join Button */}
                        <div className="hidden md:flex items-center space-x-4">
                            <nav className="flex items-center space-x-6 text-slate-300">
                                {navLinks.map(link => (
                                    <a key={link.name} href={link.href} className="hover:text-white transition-colors duration-300">{link.name}</a>
                                ))}
                            </nav>
                            <a href="#contact" className="gradient-button text-white font-semibold px-5 py-2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                                Join Us
                            </a>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(true)} className="text-white">
                                <Menu />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 bg-slate-950 bg-opacity-95 z-50 flex flex-col items-center justify-center"
                    >
                        <button 
                            onClick={() => setIsMenuOpen(false)} 
                            className="absolute top-6 right-6 text-white"
                        >
                            <X size={28} />
                        </button>
                        <nav className="flex flex-col items-center space-y-6">
                            {navLinks.map(link => (
                                <a 
                                    key={link.name} 
                                    href={link.href} 
                                    className="text-2xl text-slate-300 hover:text-white transition-colors duration-300" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                        <div className="pt-8">
                            <a 
                                href="#contact" 
                                className="gradient-button text-white font-semibold px-8 py-3 rounded-lg shadow-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Join Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;

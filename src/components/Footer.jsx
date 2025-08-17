import React from 'react';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'Team', href: '#team' },
    ];

    const socialLinks = [
        { icon: <Instagram size={24} />, href: 'http://www.instagram.com/iedc_cuk' },
        { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/iedc-cuk-56b73b259/' },
    ];

    return (
        <footer className="bg-slate-950 pt-20 relative">
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[150px]"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-current text-slate-950"
                    ></path>
                </svg>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <a href="#" className="text-2xl font-bold text-white z-10 flex items-center">
                        <img src="./iedc_logo.png" alt="IEDC Logo" className="inline-block h-6 mr-2" />
                        IEDC <span className="gradient-text ml-2">CUK</span>
                    </a>
                        <p className="text-slate-400 mt-2">Innovate. Incubate. Inspire.</p>
                    </div>

                    <div className='flex flex-col md:items-end'>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-slate-400 hover:text-pink-400 transition-colors duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col md:items-end'>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index} 
                                    href={social.href} 
                                    className="text-slate-400 hover:text-pink-400 transition-all duration-300 hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} IEDC Central University of Kerala. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

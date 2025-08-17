import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

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
                <a href='http://www.instagram.com/iedc_cuk' className="text-slate-400 hover:text-pink-400 transition-all duration-300 hover:scale-125"><Instagram size={32} /></a>
                <a href='https://www.linkedin.com/in/iedc-cuk-56b73b259/' className="text-slate-400 hover:text-pink-400 transition-all duration-300 hover:scale-125"><Linkedin size={32} /></a>
            </motion.div>
        </div>
    </AnimatedSection>
);

export default ContactSection;
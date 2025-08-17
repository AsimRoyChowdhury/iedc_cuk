import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const EventsSection = () => {
    const events = [
        { title: "IEDC Orientation", date: "19th Aug, 2025 | 10 AM to 12 PM | Sabarmati Hall", description: "Kickstart your journey into innovation and entrepreneurship with the IEDC Orientation. Open to all, no prior experience needed!", link: "", image: "./src/assets/posters/iedc_orientation.jpeg" },
    ];

    const containerClass = events.length < 3 
        ? "flex justify-center items-center gap-8" 
        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";

    return (
        <AnimatedSection id="events">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Upcoming Events</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full"></div>
                </div>
                <div className={containerClass}>
                    {events.map((event, index) => (
                        <motion.div 
                            key={index} 
                            className="glass-card rounded-lg overflow-hidden shadow-lg max-w-md" 
                            whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.2)" }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={event.image} alt="Event Image" className="w-full object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                                <p className="gradient-text font-['Poppins'] mb-1 font-semibold">{event.date}</p>
                                <p className="text-slate-300 font-['Poppins'] mb-4">{event.description}</p>
                                {event.link != "" && <a href={event.link} className="text-pink-400 hover:text-pink-300 font-semibold">Register Now &rarr;</a>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default EventsSection;

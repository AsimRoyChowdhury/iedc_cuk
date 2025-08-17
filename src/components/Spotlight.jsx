import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

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
  className="spotlight hidden md:block"
  style={{ position: "absolute" }}
  animate={{ x: position.x, y: position.y }}
  transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.1 }}
/>

    );
};

export default Spotlight;

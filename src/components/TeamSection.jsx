import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import adithyaVPic from "../assets/members/adithya v pic.jpg";
import rajitnaPic from "../assets/members/rajitna pic.jpg";
import shilpaPic from "../assets/members/shilpa pic.jpg";
import snehaPic from "../assets/members/sneha pic.jpg";
import thabseeraPic from "../assets/members/thabseera pic.jpg";
import rifanaPic from "../assets/members/rifana pic.jpg";
import adithyaPic from "../assets/members/adithya pic.jpg";
import zuhairsPic from "../assets/members/zuhair pic.jpg";
import raniyaPic from "../assets/members/raniya pic.jpg";
import asimPic from "../assets/members/asim pic.jpg";
import sharmiPic from "../assets/members/sharmi pic.jpg";
import karthikPic from "../assets/members/karthik pic.jpg";

const TeamSection = () => {
  const teamMembers = [
    { name: "Dr. Adithya V.", role: "Nodal Officer", image: adithyaVPic },
    { name: "Ms. Rajitna Balakrishnan", role: "Co-Nodal Officer", image: rajitnaPic },
    { name: "Silpa A. R.", role: "IEDC Lead I", image: shilpaPic },
    { name: "Sneha Krishna K.", role: "IEDC Lead II", image: snehaPic },
    { name: "Fathimath Tabhseera", role: "Women Innovation Lead", image: thabseeraPic },
    { name: "Rifana Rahim", role: "Community Lead", image: rifanaPic },
    { name: "Adithya Anil", role: "Finance Lead", image: adithyaPic },
    { name: "Muhammed Zuhair P.", role: "Research & IPR Lead", image: zuhairsPic },
    { name: "Raniya Zainab", role: "Branding & Marketing Lead", image: raniyaPic },
    { name: "Asim Roy Chowdhury", role: "Technology Lead", image: asimPic },
    { name: "Sharmila M.", role: "Quality & Operation Lead", image: sharmiPic },
    { name: "Boyina Karthik", role: "Creativity & Innovation Lead", image: karthikPic },
  ];

  // Animation variants for each individual card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="team" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Meet the Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* The grid container */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            // Each card now has its own motion component with whileInView
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the card is visible
              className="group relative"
            >
              {/* The glowing effect, blurred and behind the card */}
              <div className="absolute -inset-1 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600 rounded-2xl blur opacity-60  transition duration-800"></div>
              
              {/* The main card content, sits on top */}
              <div className="relative w-full h-full bg-slate-900 rounded-2xl text-center p-6 flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mb-4 border-4 border-slate-700 shadow-lg object-cover transition-transform duration-300 md:group-hover:scale-105"
                />
                <h3 className="text-xl font-bold text-white mt-2">{member.name}</h3>
                <p className="gradient-text font-semibold font-['Poppins']">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 

export default TeamSection;

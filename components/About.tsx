"use client";

import { motion } from "framer-motion";

const skills = [
  "JavaScript / TypeScript", "Python / Django", "React / Next.js", "Node.js / Express", 
  "SQL / MongoDB", "Tailwind / Bootstrap", "Three.js / R3F", "Git"
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24 px-6 md:px-12 lg:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center md:text-left text-white relative mix-blend-difference">About</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
            <div className="space-y-6 text-lg text-white leading-relaxed font-light">
                <p className="mix-blend-difference">
                    I am a versatile Full Stack Developer who thrives on building complex, scalable web applications. My expertise spans the entire development spectrum—from crafting robust backends with Python (Django) and Node.js (Express) to designing dynamic frontends using React, HTML/CSS, and Tailwind.
                </p>
                <p className="mix-blend-difference">
                   I am just as comfortable structuring data with SQL and MongoDB as I am refining pixel-perfect UIs with Bootstrap and modern JavaScript, always aiming to bridge the gap between powerful engineering and intuitive design.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-8 text-white mix-blend-difference">Tech Stack</h3>
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3"
                >
                    {skills.map((skill, index) => (
                        <motion.span 
                            key={index} 
                            variants={itemVariants}
                            className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors cursor-none mix-blend-difference"
                        >
                             {skill}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}

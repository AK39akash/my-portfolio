"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link" ;

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'Rate It App',
    description: 'An interactive dashboard for rating and reviewing stores with role based authentication for admin, owner and user.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
    link: 'https://rate-it-app.vercel.app/'
  },
  {
    title: 'Django Blog & CMS',
    description: 'A blog and content management system with role based authentication for Superuser, Editor and User.',
    tags: ['Python', 'Django', 'MongoDB', 'Bootstrap'],
    link: 'http://akash39.pythonanywhere.com/'
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-32 px-6 md:px-12 lg:px-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-20 text-center md:text-left text-white mix-blend-difference relative"
        >
          Selected Works
        </motion.h2>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
            {projects.map((project, index) => (
                <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    className="group relative p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors overflow-hidden mix-blend-difference"
                >
                  <Link href={project.link} target="_blank" className="cursor-none">
                  

                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
                      
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors text-white">{project.title}</h3>
                      <p className="text-white mb-8 leading-relaxed text-sm">
                          {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags.map(tag => (
                              <span key={tag} className="px-3 py-1 text-xs font-medium border border-white/10 rounded-full text-white group-hover:border-white/30 transition-colors">
                                  {tag}
                              </span>
                          ))}
                      </div>
                  </Link>
                </motion.div>
            ))}
        </motion.div>
    </section>
  );
}

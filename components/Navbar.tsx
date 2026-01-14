'use client';

import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "Home", target: "#" }, // Top of page
    { name: "About", target: "#about" },
    { name: "Projects", target: "#projects" },
    { name: "Contact", target: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (target === "#") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none mix-blend-difference">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex gap-8 px-8 py-4 pointer-events-auto border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
      >
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.target}
            onClick={(e) => handleScroll(e, link.target)}
            className="text-sm font-medium text-white hover:text-white/80 transition-colors cursor-none"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </nav>
  );
}

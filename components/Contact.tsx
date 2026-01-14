"use client";

import { motion } from "framer-motion";

const socials = [
    { name: "GitHub", url: "https://github.com/AK39akash" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/akash-dhiman39/" },
    { name: "Twitter", url: "https://twitter.com/AK39akash" },
]
export default function Contact() {
  const email = "dhimanakakash39@gmail.com";

  return (
    <section id="contact" className="min-h-[80vh] flex items-center justify-center py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto relative z-20 mix-blend-difference"
      >
        <h2 className="text-4xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
            Let's Build Something Great
        </h2>
        <p className="text-xl opacity-60 mb-12 max-w-lg mx-auto leading-relaxed">
          I'm currently available for freelance work and open to new opportunities. Let's turn your vision into reality.
        </p>

        <div className="flex flex-col items-center gap-8">
          
          
          <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dhimanakakash39@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative z-50 inline-block px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all active:scale-95 duration-300 pointer-events-auto"
          >
              <span className="text-lg md:text-xl font-medium tracking-wide text-gray-200 group-hover:text-white transition-colors">dhimanakakash39@gmail.com</span>
          </a>
          
          

            <div className="flex gap-8 mt-4">
                {socials.map((social) => (
                    <a 
                        key={social.name}
                        href={social.url} 
                        className="text-gray-500 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest hover:underline underline-offset-4"
                        target="_blank"
                    >
                        {social.name}
                    </a>
                ))}
            </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Scene from "./Scene";

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <Scene />
        </div>
        
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="text-center z-10 relative mix-blend-difference text-white"
        >
            <h1 className="text-7xl font-bold tracking-tight">Hello, I'm Akash</h1>
            <p className="mt-6 text-xl opacity-70">
                Full Stack • Python • Creative Developer
            </p>
        </motion.div>
    </section>
  );
}

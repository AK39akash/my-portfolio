'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [index, setIndex] = useState(0)
  const [complete, setComplete] = useState(false)
  const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten Tag", "See You"]

  useEffect(() => {
    if (index == words.length - 1) {
        setTimeout(() => setComplete(true), 1000)
        return
    };

    setTimeout(() => {
      setIndex(index + 1)
    }, index === 0 ? 1000 : 150)
  }, [index])

  return (
    <motion.div 
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, delay: 2.5, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full h-screen bg-[#141516] z-[99999] flex items-center justify-center text-white"
        style={{ display: complete ? "none" : "flex" }}
    >
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-bold flex items-center"
        >
            <span className="mr-4 inline-block w-4 h-4 bg-white rounded-full"></span>
            {words[index]}
        </motion.p>
    </motion.div>
  )
}

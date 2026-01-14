'use client';
import { useState } from 'react';
import { audioManager } from '../lib/audioManager';
import { motion } from 'framer-motion';

export default function AudioControl() {
    const [isListening, setIsListening] = useState(false);

    const toggleAudio = async () => {
        if (!isListening) {
            await audioManager.useMicrophone();
            setIsListening(true);
        } else {
            // Ideally we would stop the stream, but for simplicity we just toggle UI state
            // and let the sphere stop reacting (or we could close context)
             setIsListening(false);
             // Optionally suspend context
             if (audioManager.audioContext) {
                 audioManager.audioContext.suspend();
             }
        }
        
        if (!isListening && audioManager.audioContext?.state === 'suspended') {
             audioManager.audioContext.resume();
        }
    };

    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`fixed bottom-8 right-8 z-50 px-6 py-3 rounded-full text-sm font-medium transition-all backdrop-blur-md border ${
                isListening 
                ? 'bg-red-500/20 border-red-500/50 text-red-200 animate-pulse' 
                : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white'
            }`}
            onClick={toggleAudio}
        >
            {isListening ? 'Stop Audio' : 'Enable Audio Reactivity'}
        </motion.button>
    );
}

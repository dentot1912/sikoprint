"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLoading } from '@/context/LoadingContext';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const { setIsLoaded } = useLoading();

  useEffect(() => {
    // Simulate a loading time or wait for window.onload
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait for exit animation to almost finish before triggering other animations
      setTimeout(() => setIsLoaded(true), 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [setIsLoaded]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center"
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] }
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.1, 1],
                opacity: 1
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative w-24 h-24 md:w-32 md:h-32 mb-8"
            >
              <Image
                src="/siko_logo.png"
                alt="SikoPrint Logo"
                fill
                className="object-contain rounded-full shadow-2xl"
              />
            </motion.div>

            {/* Loading Text / Branding */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-xl md:text-2xl font-black tracking-tighter text-black uppercase">
                SikoPrint
              </h2>
              <p className="text-[10px] tracking-[0.4em] text-zinc-400 font-bold uppercase mt-2">
                Digital Printing & Advertising
              </p>
            </motion.div>

            {/* Minimal Progress Bar */}
            <div className="w-48 h-[2px] bg-zinc-100 rounded-full mt-12 overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-black"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

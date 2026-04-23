"use client";

import { motion, Variants } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';

export default function HeroBanner() {
  const { isLoaded } = useLoading();
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full bg-white flex flex-col items-center pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-16 text-center overflow-hidden">
      <motion.div 
        className="max-w-4xl mx-auto flex flex-col items-center"
        initial="initial"
        animate={isLoaded ? "visible" : "initial"}
        viewport={{ once: true }}
      >
        <motion.div 
          className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-zinc-200/50"
          variants={fadeInUp}
        >
          <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
          No.1 Di Kota Payakumbuh
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black leading-[0.95] mb-6"
          variants={fadeInUp}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Digital Printing &<br/>
          <span className="text-zinc-300">Advertising.</span>
        </motion.h1>
        
        <motion.p 
          className="max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-zinc-500 mb-8 md:mb-12 leading-relaxed font-light px-2 sm:px-4"
          variants={fadeInUp}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Siko Print adalah solusi profesional untuk kebutuhan digital printing dan advertising Anda. Kami menyediakan layanan cetak berkualitas tinggi dengan teknologi terbaru dan tim yang berpengalaman.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          variants={fadeInUp}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <a href="#" className="bg-black text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold hover:bg-zinc-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-center text-sm sm:text-base">
            Explore Services
          </a>
          <a href="#" className="bg-white text-black border border-zinc-200 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold hover:bg-zinc-50 transition-all duration-300 text-center text-sm sm:text-base">
            View Portfolio
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

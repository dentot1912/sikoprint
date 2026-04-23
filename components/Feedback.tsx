"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLoading } from '@/context/LoadingContext';

const testimonials = [
  {
    name: "Andi Wijaya",
    role: "CEO Tech Solutions",
    content: "SikoPrint benar-benar memberikan kualitas yang luar biasa. Hasil cetak spanduk kami sangat tajam dan warnanya sangat akurat.",
    rating: 5
  },
  {
    name: "Siska Putri",
    role: "Marketing Manager",
    content: "Pelayanan sangat cepat dan profesional. Tim SikoPrint sangat membantu dalam memberikan saran desain terbaik untuk kartu nama kami.",
    rating: 5
  },
  {
    name: "Budi Santoso",
    role: "Owner Kopi Kenangan",
    content: "Stiker produk kami terlihat sangat premium setelah menggunakan jasa SikoPrint. Sangat direkomendasikan untuk bisnis UMKM.",
    rating: 5
  },
  {
    name: "Rina Sari",
    role: "Event Organizer",
    content: "Kerja sama yang luar biasa. Kebutuhan branding event kami diselesaikan tepat waktu dengan hasil yang sangat memuaskan.",
    rating: 5
  }
];

export default function Feedback() {
  const [index, setIndex] = useState(0);
  const { isLoaded } = useLoading();

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-24 md:py-40 px-4 sm:px-6 md:px-16 flex flex-col items-center overflow-hidden border-t border-zinc-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 flex flex-col lg:flex-row gap-20 items-center">
        
        {/* Left Side: Large Text & Branding */}
        <motion.div 
          className="w-full lg:w-1/3 space-y-10"
          initial={{ opacity: 0, x: -30 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-[2px] bg-black"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Voices of SikoPrint</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-black tracking-tighter leading-[0.85] italic">
              Real<br/>Talk.
            </h2>
          </div>
          
          <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-xs">
            Kami bangga menjadi bagian dari pertumbuhan bisnis Anda melalui kualitas cetak yang tak tertandingi.
          </p>

          <div className="flex gap-4">
            <button onClick={prev} className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button onClick={next} className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </button>
          </div>
        </motion.div>

        {/* Right Side: Large Dynamic Testimonial Card */}
        <div className="w-full lg:w-2/3 relative">
          <div className="absolute -top-20 -left-10 text-[200px] font-black text-zinc-50 select-none -z-10 leading-none">
            “
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="bg-zinc-50 p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] relative overflow-hidden group shadow-[0_20px_80px_rgba(0,0,0,0.02)]"
            >
              <div className="relative z-10 space-y-10 md:space-y-12">
                <div className="flex gap-1.5">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-black text-2xl"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                <blockquote className="text-2xl sm:text-3xl md:text-4xl font-medium text-black leading-tight tracking-tight italic">
                  {testimonials[index].content}
                </blockquote>

                <div className="flex items-center gap-6 pt-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-black text-white flex items-center justify-center font-black text-xl shadow-2xl shadow-black/20 group-hover:rotate-6 transition-transform duration-500">
                    {testimonials[index].name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl md:text-2xl font-black text-black tracking-tight">{testimonials[index].name}</h4>
                    <p className="text-sm md:text-base text-zinc-400 font-bold uppercase tracking-widest mt-1">{testimonials[index].role}</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-zinc-100 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 translate-y-1/2"></div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex gap-3 mt-12 justify-center lg:justify-start">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 transition-all duration-700 rounded-full ${index === i ? 'w-16 bg-black' : 'w-2 bg-zinc-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

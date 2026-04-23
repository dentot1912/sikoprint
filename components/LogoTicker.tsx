"use client";

import { motion } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';

const logos = [
  { name: "Kabupaten Lima Puluh Kota", src: "/logos/lima_puluh_kota.png" },
  { name: "GoJek", src: "/logos/gojek.png" },
  { name: "Kota Payakumbuh", src: "/logos/payakumbuh.png" },
  { name: "Gobook Softindo", src: "/logos/gobook.png" },
  { name: "INAPROC", src: "/logos/inaproc.png" },
  { name: "Blibli Siplah", src: "/logos/blibli.png" }
];

export default function LogoTicker() {
  const { isLoaded } = useLoading();

  return (
    <motion.div 
      className="w-full bg-white py-16 border-y border-zinc-100 overflow-hidden select-none"
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 mb-10">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Mitra Strategis Siko Print</span>
      </div>
      
      <div className="flex overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div 
          className="flex flex-none gap-20 pr-20 items-center"
          animate={isLoaded ? { x: "-50%" } : { x: "0%" }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }
          }}
        >
          {/* Duplicate logos for infinite loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center gap-5 group shrink-0">
              <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                <div 
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${logo.src})` }}
                />
              </div>
              <span className="text-lg md:text-xl font-bold text-zinc-300 tracking-tighter group-hover:text-black transition-colors whitespace-nowrap cursor-default">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

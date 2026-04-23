"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <footer className="w-full bg-black text-white py-16 px-6 md:px-16 flex flex-col items-center overflow-hidden">
      <motion.div 
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        
        {/* Company Info */}
        <motion.div className="col-span-1 md:col-span-2 space-y-6" variants={fadeInUp}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative bg-white rounded-full flex items-center justify-center p-1">
              <Image 
                src="/siko_logo.png" 
                alt="SikoPrint Logo" 
                width={32} 
                height={32} 
                className="object-contain"
              />
            </div>
            <span className="text-xl font-black tracking-tighter">SikoPrint</span>
          </div>
          <p className="text-zinc-400 max-w-md text-sm font-light leading-relaxed">
            Siko Print adalah solusi profesional untuk kebutuhan digital printing dan advertising Anda di Kota Payakumbuh. Kualitas premium, hasil presisi.
          </p>
          <div className="flex gap-4">
            {['IG', 'FB', 'WA'].map((social) => (
              <Link key={social} href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-xs font-bold hover:bg-white hover:text-black transition-all duration-300">
                {social}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div className="space-y-6" variants={fadeInUp} transition={{ delay: 0.1 }}>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">Navigation</h4>
          <ul className="space-y-4 text-sm font-light text-zinc-300">
            <li><Link href="#" className="hover:text-white transition-colors">Tentang Kami</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Produk</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Layanan</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Karir</Link></li>
          </ul>
        </motion.div>

        {/* Contact & Map */}
        <motion.div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-6" variants={fadeInUp} transition={{ delay: 0.2 }}>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500">Lokasi Siko Print</h4>
          <ul className="space-y-4 text-sm font-light text-zinc-300">
            <li className="flex flex-col gap-4">
              {/* Map Embed */}
              <div className="w-full h-48 rounded-2xl overflow-hidden grayscale invert-[0.9] contrast-[1.2] opacity-50 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700 border border-zinc-800">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.742358814!2d100.6308736!3d-0.224164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2ab34a87c53d11%3A0xc0c64c7f078a68b6!2sSiko%20Print!5e0!3m2!1sen!2sid!4v1713854500000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-zinc-500 italic">Tel:</span>
              <span>+62 (812) 3456 7890</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div 
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 mt-16 md:mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-black text-zinc-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <span>&copy; {new Date().getFullYear()} SikoPrint. All Rights Reserved.</span>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </motion.div>
    </footer>
  );
}

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoaded } = useLoading();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      {/* Main Header Row */}
      <header className="w-full bg-white/90 backdrop-blur-md border-b border-zinc-100 sticky top-0 z-[1000]">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-4 flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Logo Area */}
          <Link href="/" className="flex items-center group">
            <motion.div
              className="relative w-10 h-10 md:w-12 md:h-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/siko_logo.png"
                alt="SikoPrint Logo"
                fill
                sizes="(max-width: 768px) 40px, 48px"
                className="object-contain rounded-full"
              />
            </motion.div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-10 font-medium text-sm text-zinc-600">
            {['Tentang Kami', 'Produk', 'Layanan', 'Kerja Sama', 'Karir'].map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={navItemVariants}
              >
                <Link
                  href="#"
                  className="hover:text-black transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA & Toggle */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link href="#" className="hidden sm:flex items-center justify-center bg-black hover:bg-zinc-800 transition-all duration-300 text-white py-2.5 px-6 rounded-full font-medium text-sm tracking-wide shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
                Order Online
              </Link>
            </motion.div>

            {/* Hamburger Button */}
            <motion.button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              whileTap={{ scale: 0.9 }}
            >
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
            </motion.button>
          </div>
        </motion.div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 w-full h-full bg-white z-[9999] md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
            style={{ backgroundColor: '#ffffff' }}
          >
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
                <div className="relative w-10 h-10">
                  <Image 
                    src="/siko_logo.png" 
                    alt="Logo" 
                    fill 
                    sizes="40px"
                    className="object-contain rounded-full" 
                  />
                </div>
                <button
                  className="p-2 w-10 h-10 flex items-center justify-center relative group"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <span className="absolute w-6 h-0.5 bg-black rotate-45 transition-transform duration-500"></span>
                  <span className="absolute w-6 h-0.5 bg-black -rotate-45 transition-transform duration-500"></span>
                </button>
              </div>

              {/* Nav Links Container */}
              <div className="flex flex-col flex-1 px-8 py-12 overflow-y-auto">
                <nav className="flex flex-col gap-8">
                  {['Tentang Kami', 'Produk', 'Layanan', 'Kerja Sama', 'Karir'].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 + 0.2 }}
                    >
                      <Link
                        href="#"
                        className="text-5xl font-black text-black tracking-tighter hover:text-zinc-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Bottom Section */}
                <motion.div
                  className="mt-auto pt-12 space-y-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Hubungi Kami</span>
                    <p className="text-zinc-600 text-sm font-light">Jl. Ahmad Yani, Kota Payakumbuh</p>
                    <Link 
                      href="https://maps.app.goo.gl/vYF8S1K9p1Bf7X6B6" 
                      target="_blank"
                      className="text-[10px] font-black uppercase tracking-widest text-black underline underline-offset-4"
                    >
                      View Map
                    </Link>
                  </div>

                  <Link href="#" className="flex items-center justify-center bg-black text-white py-5 px-8 rounded-2xl font-black text-lg tracking-tighter hover:bg-zinc-800 transition-colors shadow-2xl shadow-black/10">
                    Order Online Now
                  </Link>

                  <div className="flex gap-8 text-zinc-400 font-black text-[10px] uppercase tracking-widest pb-4">
                    <Link href="#" className="hover:text-black">Instagram</Link>
                    <Link href="#" className="hover:text-black">Facebook</Link>
                    <Link href="#" className="hover:text-black">WhatsApp</Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

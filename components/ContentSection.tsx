"use client";

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { useLoading } from '@/context/LoadingContext';

const bestSellers = [
  {
    id: 1,
    name: "Spanduk Flexy China 280 gram",
    detail: "Jenis Bahan: Flexy Finel 280 gr ✅ SEHARI KELAR ✅ KUALITAS WARNA TERJAMIN ✅ BAHAN PREMIUM NO KW KW ✅ SUDAH MENCETAK RATUSAN RIBU M..",
    price: "Rp 25.000",
    image: "/products/banner_mockup.png",
    tag: "Terlaris"
  },
  {
    id: 2,
    name: "STIKER VYNIL METER INDOOR",
    detail: "Bahan : - Exilo - HCR - Maxdecal ✅ SEHARI KELAR ✅ KUALITAS WARNA TERJAMIN ✅ BAHAN PREMIUM NO KW KW ✅ SUDAH MENCETAK RATUSAN RIBU METERAN ...",
    price: "Rp 110.000",
    image: "/products/sticker_mockup.png",
    tag: "Terlaris"
  },
  {
    id: 3,
    name: "NEONBOX",
    detail: "✅ KUALITAS WARNA TERJAMIN ✅ BAHAN PREMIUM NO KW KW ✅ SUDAH MEMBUAT BERBAGAI MACAM NEONBOX ✅ HASIL SUPER HIGHRES",
    price: "Rp 1.000.000",
    image: "/products/neonbox_mockup.png",
    tag: "Terlaris"
  }
];

const newProducts = [
  {
    id: 4,
    name: "LANYARD",
    detail: "Deskripsi Lanyard Custom ✅Cetak Printing Full Colour ✅Hasil Cetak Detail ✅Cetak 2 sisi (Bolak Balik) ✅Panjang Tal...",
    price: "Rp 75.000",
    image: "/products/lanyard_mockup.png",
    tag: "Terbaru"
  },
  {
    id: 5,
    name: "SLIM LIGHT BOX",
    detail: "PO Berlaku untuk design & cetak poster WAJIB VIDIO UNBOXING!!!! JIKA KOMPLAIN TIDAK MENYERTAKAN VIDIO UNBOXING MAKA KOMPLAINAN TIDAK DITERIMA!!!! ...",
    price: "Rp 850.000",
    image: "/products/lightbox_mockup.png",
    tag: "Terbaru"
  },
  {
    id: 6,
    name: "STIKER UV PRINT",
    detail: "Bahan : - Exilo - HCR - Maxdecal ✅ SEHARI KELAR ✅ KUALITAS WARNA TERJAMIN ✅ BAHAN PREMIUM NO KW KW ✅ SUDAH MENCETAK RATUSAN RIBU METERA...",
    price: "Rp 160.000",
    image: "/products/uv_sticker_mockup.png",
    tag: "Terbaru"
  }
];

export default function ContentSection() {
  const { isLoaded } = useLoading();
  const [hasEnteredS1, setHasEnteredS1] = useState(false);
  const [hasEnteredS2, setHasEnteredS2] = useState(false);

  const containerVariants: Variants = {
    initial: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const titleVariants: Variants = {
    initial: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const ProductCard = ({ product }: { product: typeof bestSellers[0] }) => (
    <motion.div 
      variants={itemVariants}
      className="group relative bg-white rounded-[2.5rem] border border-zinc-100 overflow-hidden hover:border-zinc-300 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] flex flex-col h-full"
    >
      <div className="relative h-80 overflow-hidden bg-zinc-50">
        <motion.div
          initial={{ scale: 1.2 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full relative"
        >
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </motion.div>
        
        <div className="absolute top-8 left-8 z-10">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-black/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.3em] px-5 py-2.5 rounded-full shadow-2xl border border-white/10"
          >
            {product.tag}
          </motion.span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="p-10 flex flex-col flex-grow justify-between space-y-8">
        <div className="space-y-6">
          <h3 className="text-3xl font-black tracking-tighter text-black leading-none group-hover:text-zinc-600 transition-colors duration-500">
            {product.name}
          </h3>
          
          <div className="space-y-2">
            {product.detail.includes('✅') ? (
              <ul className="space-y-1.5">
                {product.detail.split('✅').filter(item => item.trim() !== '').map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-400 text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-black mt-0.5">✓</span>
                    <span>{item.trim()}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-[90%]">
                {product.detail}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-zinc-50">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300 mb-1">Mulai Dari</span>
            <span className="text-xl font-black tracking-tight text-black">
              {product.price}
            </span>
          </div>
          
          <motion.button 
            whileHover={{ x: 5 }}
            className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full bg-white py-32 md:py-48 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 space-y-48">
        
        {/* Section 1: Terlaris */}
        <div className="space-y-20">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-end gap-12"
            variants={containerVariants}
            initial="initial"
            animate={(isLoaded && hasEnteredS1) ? "visible" : "initial"}
            onViewportEnter={() => setHasEnteredS1(true)}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="space-y-6" variants={titleVariants}>
              <div className="inline-flex items-center gap-4">
                <motion.span 
                  className="w-16 h-[2px] bg-black"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-400">Paling Banyak Dicari</span>
              </div>
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-black tracking-tighter leading-[0.85] uppercase">
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={(isLoaded && hasEnteredS1) ? { y: 0 } : { y: "100%" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Produk
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={(isLoaded && hasEnteredS1) ? { y: 0 } : { y: "100%" }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-zinc-200"
                  >
                    Terlaris.
                  </motion.div>
                </div>
              </h2>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest max-w-[280px] leading-relaxed border-l-2 border-zinc-100 pl-6"
            >
              Standar industri untuk kebutuhan branding bisnis Anda dengan kualitas cetak tanpa kompromi.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="initial"
            animate={(isLoaded && hasEnteredS1) ? "visible" : "initial"}
            onViewportEnter={() => setHasEnteredS1(true)}
            viewport={{ once: true, margin: "-50px" }}
          >
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>

        {/* Section 2: Terbaru */}
        <div className="space-y-20">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-end gap-12"
            variants={containerVariants}
            initial="initial"
            animate={(isLoaded && hasEnteredS2) ? "visible" : "initial"}
            onViewportEnter={() => setHasEnteredS2(true)}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="space-y-6" variants={titleVariants}>
              <div className="inline-flex items-center gap-4">
                <motion.span 
                  className="w-16 h-[2px] bg-zinc-200"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-400">Inovasi Terkini</span>
              </div>
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-black tracking-tighter leading-[0.85] uppercase">
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={(isLoaded && hasEnteredS2) ? { y: 0 } : { y: "100%" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Produk
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={(isLoaded && hasEnteredS2) ? { y: 0 } : { y: "100%" }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-zinc-200"
                  >
                    Terbaru.
                  </motion.div>
                </div>
              </h2>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest max-w-[280px] leading-relaxed border-l-2 border-zinc-100 pl-6"
            >
              Eksplorasi layanan baru kami yang dirancang untuk memberikan dampak visual maksimal bagi brand Anda.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="initial"
            animate={(isLoaded && hasEnteredS2) ? "visible" : "initial"}
            onViewportEnter={() => setHasEnteredS2(true)}
            viewport={{ once: true, margin: "-50px" }}
          >
            {newProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

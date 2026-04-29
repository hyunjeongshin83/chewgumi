import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Heart } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Theme2() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[#F9F8F6] text-stone-900 selection:bg-stone-200">
      {/* Header */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-12 py-8 flex justify-between items-center",
        isScrolled ? "bg-white/90 backdrop-blur-sm py-4 border-b border-stone-100" : "bg-transparent"
      )}>
        <a href="#" className="text-sm font-bold tracking-[0.3em] uppercase">ChewGumi</a>
        <div className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-widest">
          <a href="#" className="hover:opacity-50 transition-opacity">Collection</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Philosophy</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Journal</a>
        </div>
        <div className="flex gap-8 items-center">
          <button className="text-[10px] font-bold uppercase tracking-widest border-b border-stone-900 pb-1">Account</button>
          <ShoppingBag className="w-5 h-5" />
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[11px] font-bold uppercase tracking-[0.4em] mb-8 text-stone-400"
          >
            Wellness Reimagined
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif italic font-light leading-tight mb-12 max-w-4xl"
          >
            Elevate your daily <br /> state of being.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <button className="bg-stone-900 text-white px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all flex items-center gap-3">
              Discover the Collection <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 font-serif italic text-9xl pointer-events-none select-none"
          >
            Health
          </motion.div>
        </section>

        {/* Featured Section */}
        <section className="py-40 px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24 items-center mb-40">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-50">
                <img 
                  src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=800&auto=format&fit=crop" 
                  alt="Product" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
              <div className="max-w-md">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block text-stone-400">01 — Energy</span>
                <h2 className="text-5xl font-serif mb-8 italic">The Morning Ritual</h2>
                <p className="text-stone-500 leading-relaxed font-light mb-10 text-lg">
                  Designed for the conscious mind. Our Energy Boost formula blends organic botanicals with gentle caffeine to provide a sustained, focused clarity that lasts.
                </p>
                <div className="flex gap-12 border-t border-stone-100 pt-10 text-[10px] font-bold uppercase tracking-tighter">
                  <div>
                    <span className="block text-stone-300 mb-2">Duration</span>
                    <span>6+ Hours</span>
                  </div>
                  <div>
                    <span className="block text-stone-300 mb-2">Benefits</span>
                    <span>Focus / Alertness</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { name: 'Rest', img: 'https://images.unsplash.com/photo-1511113647232-a514daee5d57?auto=format&fit=crop&w=600' },
                { name: 'Clarity', img: 'https://images.unsplash.com/photo-1628102422521-cc94fd13fec1?auto=format&fit=crop&w=600' },
                { name: 'Glow', img: 'https://images.unsplash.com/photo-1540555700478-4be289aefcf1?auto=format&fit=crop&w=600' }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden bg-stone-50 mb-6 scale-95 group-hover:scale-100 transition-transform duration-700">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex justify-between items-end">
                    <h3 className="font-serif text-2xl italic">{item.name}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Shop Now</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-40 bg-[#1a1a1a] text-white text-center">
            <div className="max-w-2xl mx-auto px-6">
                <Heart className="w-8 h-8 mx-auto mb-12 text-stone-500" />
                <h2 className="text-4xl font-serif italic mb-12 leading-relaxed">
                  "Health is the highest form of luxury. We treat every ingredient with the reverence it deserves."
                </h2>
                <div className="w-12 h-px bg-stone-700 mx-auto mb-8" />
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-500">The ChewGumi Manifesto</span>
            </div>
        </section>
      </main>

      <footer className="py-20 px-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">ChewGumi — Paris / Seoul / NY</span>
        <p className="text-stone-400 text-[10px] font-medium">© 2026. Minimalist Luxury Layout.</p>
        <div className="flex gap-8 text-[10px] font-bold uppercase">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  );
}

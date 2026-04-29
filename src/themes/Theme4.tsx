import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Wind, Sun, Heart, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Theme4() {
  return (
    <div className="min-h-screen font-wellness bg-[#FDFCF8] text-[#4A5D4E] selection:bg-[#E8EDE0] selection:text-[#4A5D4E]">
      {/* Background Texture Overlay (Simulated grain) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-10 flex justify-between items-center text-lg font-medium">
        <a href="#" className="flex items-center gap-3 italic">
          <Leaf className="w-5 h-5 text-wellness-sage" />
          <span>ChewGumi</span>
        </a>
        <div className="hidden md:flex gap-16 italic text-sm">
          <a href="#" className="hover:opacity-70 transition-opacity">Our Harvest</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Clean Ingredients</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Sustain</a>
        </div>
        <button className="bg-wellness-sage text-white px-8 py-3 rounded-full text-sm">Shop Now</button>
      </nav>

      <main>
        {/* Soft Hero */}
        <section className="pt-48 pb-32 px-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mb-8"
          >
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wellness-sage/10 text-wellness-sage text-xs font-semibold mb-8 border border-wellness-sage/20">
               <Wind className="w-3 h-3" />
               <span>Ethically Sourced & Clean</span>
             </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-6xl md:text-8xl font-light mb-12 leading-[1.1] italic max-w-5xl mx-auto"
          >
            Nourish your body <br /> 
            <span className="text-wellness-sage">the way nature intended.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-lg md:text-2xl font-light text-[#6B7D6E] max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            We believe wellness shouldn't be a chore. Our organic gummies are made from real fruit, hand-picked botanicals, and zero synthetic fillers.
          </motion.p>
          
          <div className="flex justify-center gap-6">
             <div className="w-24 h-24 border border-wellness-sage/20 rounded-full flex items-center justify-center animate-spin-slow">
                <Sun className="text-wellness-sage" />
             </div>
          </div>
        </section>

        {/* Product Bento-ish Grid but Soft */}
        <section className="px-12 py-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-[#F5F7F1] rounded-[3rem] p-16 relative overflow-hidden group">
               <div className="relative z-10">
                 <span className="text-xs uppercase tracking-widest font-bold text-wellness-sage mb-4 block">Most Loved</span>
                 <h2 className="text-4xl font-light italic mb-8">Awake & Alert</h2>
                 <p className="max-w-md text-lg font-light mb-10 leading-relaxed">
                   Infused with organic citrus and wild-foraged cordyceps for a natural morning vibrancy.
                 </p>
                 <button className="flex items-center gap-3 font-semibold hover:gap-5 transition-all text-wellness-sage italic">
                   Explore Awake <ArrowRight className="w-5 h-5" />
                 </button>
               </div>
               <div className="absolute right-0 bottom-0 w-1/2 aspect-square group-hover:scale-105 transition-transform duration-1000 origin-bottom-right">
                  <img src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&w=800" className="w-full h-full object-cover rounded-tl-[4rem]" alt="Product" />
               </div>
            </div>

            <div className="md:col-span-4 bg-[#E8EDE0] rounded-[3rem] p-12 flex flex-col justify-between">
              <div>
                <Heart className="w-10 h-10 text-wellness-sage/40 mb-12" />
                <h3 className="text-3xl font-light italic mb-6 leading-tight">Gently <br /> Crafted</h3>
              </div>
              <p className="text-sm font-light leading-relaxed opacity-80 italic">
                Cold-pressed, never boiled. Preserving the vital nutrients within every single gummy bite.
              </p>
            </div>

            <div className="md:col-span-4 bg-wellness-sage text-white rounded-[3rem] p-12">
               <Sun className="w-10 h-10 mb-12 opacity-40" />
               <h3 className="text-3xl font-light italic mb-6">Daily Rhythms</h3>
               <button className="bg-white/10 hover:bg-white/20 transition-all px-8 py-3 rounded-full text-sm mt-8 border border-white/20 uppercase tracking-widest font-bold">Try The Discovery Set</button>
            </div>

            <div className="md:col-span-8 bg-[#FDFCF8] border border-wellness-sage/10 rounded-[3rem] p-16 flex flex-col md:flex-row gap-12 items-center">
               <div className="w-48 h-48 rounded-full overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1540555700478-4be289aefcf1?auto=format&fit=crop&w=600" className="w-full h-full object-cover" alt="Wellness" />
               </div>
               <div>
                  <h3 className="text-3xl font-light italic mb-6">Sustainable by nature.</h3>
                  <p className="text-lg font-light leading-relaxed opacity-70">
                    Our packaging is as clean as our products. 100% compostable plant-based pouches and reusable glass jars. Simple. Kind. Effective.
                  </p>
               </div>
            </div>
          </div>
        </section>

        {/* Botanical List */}
        <section className="py-40 px-12 bg-white text-center">
            <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-gray-300 mb-20 whitespace-nowrap overflow-hidden">
               • BERRY • LION'S MANE • REISHI • ELDERBERRY • ASHWAGANDHA 
            </h2>
            <div className="max-w-3xl mx-auto">
               <h3 className="text-4xl md:text-5xl font-light italic leading-snug">
                 "A connection back to our roots, delivered in one small bite of vitality."
               </h3>
               <div className="mt-12 text-wellness-sage font-bold italic">— Harvest Notes, No. 12</div>
            </div>
        </section>
      </main>

      <footer className="py-20 px-12 border-t border-wellness-sage/10 flex flex-col md:flex-row justify-between items-center gap-8 italic text-wellness-sage/60">
        <div className="flex items-center gap-3">
          <Leaf className="w-4 h-4" />
          <span>ChewGumi Wellness</span>
        </div>
        <p className="text-sm">Organic wellness through intentional design.</p>
        <div className="flex gap-8 text-sm">
          <span>Journal</span>
          <span>Contact</span>
        </div>
      </footer>
    </div>
  );
}

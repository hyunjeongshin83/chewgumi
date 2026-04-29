import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Zap, Target, Star, MoreHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';

const BrutalCard = ({ title, desc, tag }: { title: string; desc: string; tag: string }) => (
  <div className="border-[3px] border-black p-8 hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all bg-white cursor-pointer group">
    <div className="flex justify-between items-start mb-12">
      <div className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest">{tag}</div>
      <ArrowRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
    </div>
    <h3 className="text-4xl font-brutal font-black uppercase tracking-tight mb-4 leading-none">{title}</h3>
    <p className="text-sm font-medium leading-relaxed opacity-60 max-w-[200px]">{desc}</p>
  </div>
);

export default function Theme5() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-brand-orange selection:text-white">
      {/* Heavy Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-[3px] border-black bg-white px-8 py-6 flex justify-between items-center overflow-hidden">
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center gap-2">
            <span className="text-3xl font-brutal font-black tracking-tighter uppercase leading-none">ChewGumi</span>
            <div className="w-3 h-3 bg-brand-orange rounded-full animate-pulse" />
          </a>
          <div className="hidden lg:flex gap-12 text-[11px] font-black uppercase tracking-widest">
            <a href="#" className="hover:line-through">Shop_All</a>
            <a href="#" className="hover:line-through">Why_Us</a>
            <a href="#" className="hover:line-through">Lab_Notes</a>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="border-[3px] border-black px-6 py-2 text-xs font-black uppercase hover:bg-black hover:text-white transition-colors">Start_Now</button>
          <div className="w-[3px] h-10 bg-black mx-4 hidden md:block" />
          <button className="p-2 hover:bg-gray-100 transition-colors"><ShoppingBag className="w-6 h-6" /></button>
        </div>
      </nav>

      <main className="pt-24 shrink-0">
        {/* Massive Marquee Hero */}
        <section className="border-b-[3px] border-black overflow-hidden relative">
          <div className="flex py-20 whitespace-nowrap animate-marquee border-b-[3px] border-black bg-brand-orange text-white">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-[12vw] font-brutal font-black uppercase tracking-tighter mx-8 leading-none italic">
                NO FAKE SUPPLEMENTS • NO FAKE SUPPLEMENTS •
              </span>
            ))}
          </div>
          <div className="grid md:grid-cols-2">
             <div className="p-12 md:p-24 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black flex flex-col justify-center">
                <h1 className="text-8xl md:text-[10rem] font-brutal font-black uppercase tracking-tighter leading-[0.8] mb-12">
                   Bite <br /> Back.
                </h1>
                <p className="text-xl font-bold max-w-sm mb-12 leading-tight">
                  High-performance nutritional architecture. Designed for those who demand more from their daily routine.
                </p>
                <div className="flex gap-4">
                  <button className="bg-black text-white px-10 py-5 text-lg font-black uppercase hover:bg-brand-orange transition-all">Get_Started</button>
                  <button className="border-[3px] border-black px-10 py-5 text-lg font-black uppercase hover:bg-black hover:text-white transition-all">More_Info</button>
                </div>
             </div>
             <div className="relative aspect-square md:aspect-auto overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-orange/10 mix-blend-multiply pointer-events-none" />
                <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200" className="w-full h-full object-cover grayscale" alt="Hero" />
                <div className="absolute top-12 right-12 w-24 h-24 bg-white border-[3px] border-black rounded-full flex items-center justify-center animate-bounce">
                   <Zap className="w-10 h-10" />
                </div>
             </div>
          </div>
        </section>

        {/* Grid Blocks */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 border-b-[3px] border-black">
          <BrutalCard title="Hyper Energy" desc="Caffeine + B12 protocol for sustained focus." tag="Active" />
          <BrutalCard title="Void Sleep" desc="Melatonin + L-Theanine for deep recovery." tag="Reset" />
          <BrutalCard title="Pure Focus" desc="Nootropic stack for cognitive clarity." tag="Mental" />
          <div className="bg-black text-white p-8 flex flex-col justify-between">
            <h3 className="text-3xl font-brutal font-black uppercase tracking-tight">Custom Node</h3>
            <p className="text-xs font-bold opacity-60 mb-8 max-w-[150px]">Configure your specific nutritional requirements.</p>
            <button className="border-[3px] border-white px-6 py-3 text-xs font-black uppercase hover:bg-white hover:text-black transition-all">Configure_Now</button>
          </div>
        </section>

        {/* Big Text Split */}
        <section className="grid lg:grid-cols-3">
          <div className="lg:col-span-2 p-12 md:p-24 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black">
            <div className="flex gap-2 items-center mb-12">
               {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 fill-brand-orange text-black" />)}
            </div>
            <h2 className="text-5xl md:text-7xl font-brutal font-black uppercase tracking-tighter leading-none mb-12 italic">
               "This isn't a candy. It's a performance tool. Best I've used."
            </h2>
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-black rounded-sm overflow-hidden border-[3px] border-black shrink-0 relative">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=CEO" className="w-full h-full object-cover" alt="User" />
               </div>
               <div>
                  <div className="text-xl font-black uppercase">Marc.V</div>
                  <div className="text-xs font-black uppercase opacity-50 tracking-widest">Co-Founder, TechProtocol</div>
               </div>
            </div>
          </div>
          <div className="bg-brand-orange p-12 flex items-end justify-center group overflow-hidden relative border-b-[3px] lg:border-b-0 border-black">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
               className="w-48 h-48 border-[10px] border-black rounded-full flex items-center justify-center opacity-10 scale-150 absolute top-0 right-0"
             />
             <h3 className="text-9xl font-brutal font-black uppercase leading-none break-all -mr-20 group-hover:-mr-40 transition-all duration-1000">
               ATTITUDE ATTITUDE ATTITUDE ATTITUDE
             </h3>
             <Target className="w-20 h-20 text-white absolute bottom-12 right-12 group-hover:scale-150 transition-transform duration-500" />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 bg-black text-white text-center px-6">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 block opacity-50">Operational Protocol 2026</span>
           <h2 className="text-6xl md:text-[8vw] font-brutal font-black uppercase tracking-tighter leading-[0.8] mb-20 italic">
              Ready to <br /> upgrade?
           </h2>
           <button className="bg-brand-orange text-white px-20 py-8 text-2xl font-black uppercase hover:bg-white hover:text-black transition-all inline-flex items-center gap-5">
             Upgrade_Me <MoreHorizontal className="w-10 h-10" />
           </button>
        </section>
      </main>

      <footer className="p-8 border-t-[3px] border-black flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em]">
        <div>CHEWGUMI // BOLD_MODERN_V1</div>
        <div className="flex gap-12 mt-4 md:mt-0 italic">
           <a href="#" className="hover:line-through">Instagram</a>
           <a href="#" className="hover:line-through">Twitter</a>
           <a href="#" className="hover:line-through">Email</a>
        </div>
      </footer>
    </div>
  );
}

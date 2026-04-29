import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, Shield, Zap, Target, Database, Cpu, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const StatCard = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
  <div className="bg-[#121212] border border-white/5 p-6 rounded-lg font-mono">
    <div className="flex items-center gap-3 text-brand-orange mb-4">
      {icon}
      <span className="text-[10px] uppercase tracking-widest opacity-50">{label}</span>
    </div>
    <div className="text-3xl font-bold tracking-tighter text-white">{value}</div>
  </div>
);

export default function Theme3() {
  const [activeTab, setActiveTab] = useState('ENERGY');

  return (
    <div className="min-h-screen bg-[#080808] text-white font-mono selection:bg-brand-orange/30">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#080808]/80 backdrop-blur-md px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-orange rounded-sm flex items-center justify-center font-bold text-black italic">CG</div>
            <span className="text-sm font-black tracking-tighter uppercase italic">BioProtocol-25</span>
          </div>
          <div className="hidden lg:flex gap-8 text-[11px] font-medium text-white/40">
            {['Dashboard', 'Formulas', 'Clinical-Trial', 'Nodes'].map(t => (
              <a key={t} href="#" className="hover:text-brand-orange transition-colors">[{t.toUpperCase()}]</a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-[10px] text-brand-orange animate-pulse">● SYSTEM L-ACTIVE</div>
          <button className="bg-white text-black px-4 py-1.5 text-xs font-bold uppercase hover:bg-brand-orange transition-colors">Buy_Token</button>
        </div>
      </nav>

      <main className="pt-32 pb-40 px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-32">
          <div>
            <div className="inline-block border border-brand-orange/30 text-brand-orange px-3 py-1 text-[10px] mb-8 bg-brand-orange/5">
              VERSION_4.0_READY
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter mb-12 italic uppercase">
              Optimize <br /> Human <br /> Performance
            </h1>
            <p className="text-white/40 max-w-md leading-relaxed text-sm mb-12">
              Next-generation nutrient delivery systems. Structured as highly absorbable gummies. Designed for cognitive dominance and physical longevity.
            </p>
            <div className="flex gap-4">
              <button className="bg-brand-orange text-black px-8 py-4 text-sm font-bold uppercase flex items-center gap-3 group">
                Initiate Protocol <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Absorption" value="98.4%" icon={<Zap className="w-4 h-4" />} />
            <StatCard label="Latency" value="12ms" icon={<Activity className="w-4 h-4" />} />
            <StatCard label="Nodes" value="4.2k" icon={<Database className="w-4 h-4" />} />
            <StatCard label="Uptime" value="24/7" icon={<Shield className="w-4 h-4" />} />
          </div>
        </div>

        {/* Data Grid Section */}
        <div className="border border-white/5 bg-[#0a0a0a] rounded-xl overflow-hidden">
          <div className="flex border-b border-white/5 bg-white/5">
            {['ENERGY', 'CLARITY', 'SLEEP'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-8 py-4 text-[10px] font-bold tracking-widest transition-all",
                  activeTab === tab ? "bg-brand-orange text-black" : "text-white/40 hover:bg-white/5"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-12 grid lg:grid-cols-2 gap-20">
            <div>
              <div className="aspect-video bg-white/5 rounded-lg border border-white/10 mb-8 flex items-center justify-center relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800" className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 transition-transform duration-700" alt="Tech" />
                <Target className="w-12 h-12 text-brand-orange relative z-10" />
              </div>
              <div className="flex gap-4 mb-4">
                <div className="w-1 h-1 bg-brand-orange rounded-full" />
                <div className="w-1 h-1 bg-brand-orange rounded-full opacity-50" />
                <div className="w-1 h-1 bg-brand-orange rounded-full opacity-20" />
              </div>
              <h2 className="text-3xl font-bold mb-4 tracking-tighter uppercase italic">{activeTab}_FORMULA_V2</h2>
              <p className="text-white/40 text-xs leading-relaxed uppercase">
                Molecularly tuned to increase dopamine receptor sensitivity while suppressing cortisol production. Lab-verified synthetic-free synthesis.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Caffeine_Anhydrous', value: '150mg', pct: 85 },
                { label: 'L-Theanine_Purity', value: '300mg', pct: 92 },
                { label: 'B12_Methylcobalamin', value: '5000mcg', pct: 75 },
                { label: 'Rhodiola_Rosea', value: '200mg', pct: 60 }
              ].map((ing, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[10px] mb-2 font-bold opacity-60">
                    <span>{ing.label}</span>
                    <span className="text-brand-orange">{ing.value}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${ing.pct}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-brand-orange" 
                    />
                  </div>
                </div>
              ))}
              <div className="pt-8">
                <button className="w-full border border-white/20 py-4 text-xs font-bold uppercase hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3">
                  <Cpu className="w-4 h-4" /> Analyze Ingredients
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="px-8 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-white/20 uppercase tracking-[0.3em]">
        <div>// ROOT.CHEWGUMI.EXE -- 04-29-2026</div>
        <div>Technical Bio-Hacker Layout</div>
        <div>SECURE_ENCRYPTION_V5</div>
      </footer>
    </div>
  );
}

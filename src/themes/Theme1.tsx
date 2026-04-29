import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, Menu, X, ArrowRight, Star, CheckCircle2, Zap, Moon, Target, Sparkles, Instagram, Facebook, Twitter, ChevronRight, Heart
} from 'lucide-react';
import { cn } from '../lib/utils';

interface Product {
  id: string;
  name: string;
  koreanName: string;
  description: string;
  price: number;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  benefits: string[];
  image: string;
}

const PRODUCTS: Product[] = [
  { id: 'energy', name: 'Energy Boost', koreanName: '에너지 부스트', description: 'Natural caffeine and B12 for sustainable energy without the crash.', price: 24.00, color: 'text-brand-orange', bgColor: 'bg-brand-orange/10', icon: <Zap className="w-5 h-5" />, benefits: ['Natural Caffeine', 'Vitamin B12', 'Focus Support'], image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop' },
  { id: 'sleep', name: 'Deep Sleep', koreanName: '딥 슬립', description: 'Melatonin and L-Theanine to help you fall asleep faster and wake up refreshed.', price: 26.00, color: 'text-brand-purple', bgColor: 'bg-brand-purple/10', icon: <Moon className="w-5 h-5" />, benefits: ['Melatonin', 'Chamomile Extract', 'Magnesium'], image: 'https://images.unsplash.com/photo-1511113647232-a514daee5d57?q=80&w=600&auto=format&fit=crop' },
  { id: 'focus', name: 'Mental Focus', koreanName: '멘탈 포커스', description: 'Unlock your creative potential with Ashwagandha and Lion\'s Mane.', price: 28.00, color: 'text-brand-green', bgColor: 'bg-brand-green/10', icon: <Target className="w-5 h-5" />, benefits: ['Ashwagandha', 'Lion\'s Mane', 'Ginkgo Biloba'], image: 'https://images.unsplash.com/photo-1628102422521-cc94fd13fec1?q=80&w=600&auto=format&fit=crop' },
  { id: 'beauty', name: 'Glow Beauty', koreanName: '글로우 뷰티', description: 'Collagen and Biotin for glowing skin, strong hair, and healthy nails.', price: 30.00, color: 'text-rose-500', bgColor: 'bg-rose-50', icon: <Sparkles className="w-5 h-5" />, benefits: ['Marine Collagen', 'Biotin', 'Hyaluronic Acid'], image: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=600&auto=format&fit=crop' },
  { id: 'immune', name: 'Immune Shield', koreanName: '면역 실드', description: 'High-potency Vitamin C, Zinc, and Elderberry for daily defense.', price: 25.00, color: 'text-blue-500', bgColor: 'bg-blue-50', icon: <CheckCircle2 className="w-5 h-5" />, benefits: ['Vitamin C', 'Zinc', 'Elderberry'], image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=600&auto=format&fit=crop' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className="bg-gray-900 text-white py-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] relative z-[60]">
        FREE GLOBAL SHIPPING ON ORDERS OVER $50 🌍
      </div>
      <nav className={cn(
        "fixed top-9 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 top-0" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-display font-bold tracking-tighter text-gray-900">CHEW<span className="text-brand-orange">GUMI</span></a>
            <div className="hidden md:flex items-center gap-6">
              {['Products', 'About', 'Routine', 'Reviews'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">{item}</a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-brand-orange transition-colors relative">
              <ShoppingBag className="w-5 h-5" /><span className="absolute top-1 right-1 w-2 h-2 bg-brand-orange rounded-full" />
            </button>
            <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X /> : <Menu />}</button>
            <button className="hidden md:block bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all active:scale-95">Log In</button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl">
              {['Products', 'About', 'Routine', 'Reviews'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium text-gray-900" onClick={() => setMobileMenuOpen(false)}>{item}</a>
              ))}
              <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium mt-2">Get Started</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-[#fafafa]">
    <div className="absolute top-20 -right-20 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl" />
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3 h-3" /><span>Modern Health Routine</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">한입에 건강을 더하다 <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple">Chew Your Way to Better</span></h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">츄구미는 당신의 바쁜 일상 속에서도 간편하게 건강을 챙길 수 있도록 맞춤형 구미 솔루션을 제공합니다. 설탕 걱정 없이, 즐겁게 시작하세요.</p>
        <div className="flex flex-wrap gap-4"><button className="bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#ff5a1f] transition-all shadow-lg shadow-brand-orange/20 active:scale-95 group">Shop Now<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></button><button className="bg-white border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold hover:border-gray-200 transition-all active:scale-95">Take the Quiz</button></div>
        <div className="mt-12 flex items-center gap-6">
          <div className="flex -space-x-3">{[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden"><img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" /></div>)}</div>
          <div><div className="flex items-center gap-1">{[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />)}</div><p className="text-sm font-medium text-gray-500">Trusted by 50,000+ happy customers</p></div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
        <div className="relative aspect-square bg-gradient-to-br from-brand-orange/20 to-brand-purple/20 rounded-[4rem] overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=800&auto=format&fit=crop" alt="ChewGumi Product" className="w-full h-full object-cover mix-blend-overlay opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="relative z-10 w-full">
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20">
                <div className="flex items-center justify-between mb-6"><span className="text-2xl font-bold">Daily Wellness</span><Heart className="w-6 h-6 text-brand-orange fill-brand-orange" /></div>
                <div className="space-y-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1, delay: 1 }} className="h-full bg-brand-orange" /></div>
                  <div className="flex justify-between text-sm font-bold text-gray-500"><span>Energy Levels</span><span className="text-brand-orange">85%</span></div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 1, delay: 1.2 }} className="h-full bg-brand-purple" /></div>
                  <div className="flex justify-between text-sm font-bold text-gray-500"><span>Sleep Quality</span><span className="text-brand-purple">92%</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const SectionHeading = ({ title, subtitle, centered = false }: { title: string; subtitle: string; centered?: boolean }) => (
  <div className={cn("mb-16", centered && "text-center")}>
    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3 block">{subtitle}</motion.span>
    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight">{title}</motion.h2>
  </div>
);

const ProductCard = ({ product }: { product: Product }) => (
  <motion.div whileHover={{ y: -10 }} className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
    <div className={cn("aspect-[4/3] relative overflow-hidden", product.bgColor)}>
      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-4 left-4"><div className={cn("p-2 rounded-xl bg-white shadow-lg", product.color)}>{product.icon}</div></div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex items-center justify-between mb-4">
        <div><h3 className="text-2xl font-display font-bold text-gray-900 leading-tight">{product.name}</h3><span className="text-sm font-medium text-gray-400">{product.koreanName}</span></div>
        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
      </div>
      <p className="text-gray-500 text-sm mb-6 line-clamp-2">{product.description}</p>
      <div className="flex flex-wrap gap-2 mb-8 mt-auto">{product.benefits.map((benefit, i) => <span key={i} className="px-3 py-1 rounded-full bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-wider">{benefit}</span>)}</div>
      <button className="w-full py-4 rounded-2xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group/btn">Add to Cart<ShoppingBag className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /></button>
    </div>
  </motion.div>
);

const Marquee = () => {
  const values = ["SUGAR FREE", "LAB TESTED", "VEGAN SAFE", "NON-GMO", "ECO PACKAGING", "NATURAL FLAVORS"];
  return (
    <div className="bg-brand-orange py-4 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center px-6">
            {values.map((v, j) => <span key={j} className="text-white font-display font-black text-2xl md:text-4xl tracking-tighter opacity-80 italic">{v}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Theme1() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <section id="products" className="py-24 container mx-auto px-6">
          <SectionHeading title="Tailored to Your Life" subtitle="Our Products" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">{PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}</div>
        </section>
        <section id="routine" className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="relative"><div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"><img src="https://images.unsplash.com/photo-1540555700478-4be289aefcf1?q=80&w=800&auto=format&fit=crop" alt="Wellness" /></div><div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-orange rounded-[2rem] -z-10 rotate-12" /></motion.div>
            <div><SectionHeading title="Made for Your Daily Routine" subtitle="The ChewGumi Way" /><div className="space-y-8">{[{ title: "Morning Energy", desc: "Kickstart your day with a focused mind.", icon: <Zap /> }, { title: "Afternoon Focus", desc: "No more afternoon slump.", icon: <Target /> }, { title: "Evening Rest", desc: "Wind down naturally.", icon: <Moon /> }].map((item, idx) => (<div key={idx} className="flex gap-6"><div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-brand-orange">{item.icon}</div><div><h4 className="font-display font-bold text-lg mb-1">{item.title}</h4><p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p></div></div>))}<button className="mt-12 px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:shadow-xl transition-all">Explore Your Routine</button></div></div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12 text-center text-sm text-gray-500">© 2026 ChewGumi Inc. High Energy & Vibrant Layout.</footer>
    </div>
  );
}

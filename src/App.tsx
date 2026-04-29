import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Check, ChevronRight, Layout, Copy, CheckCircle2 } from 'lucide-react';
import { cn } from './lib/utils';

// Import Themes
import Theme1 from './themes/Theme1';
import Theme2 from './themes/Theme2';
import Theme3 from './themes/Theme3';
import Theme4 from './themes/Theme4';
import Theme5 from './themes/Theme5';

type ThemeId = 1 | 2 | 3 | 4 | 5;

const THEMES: { id: ThemeId; name: string; description: string; color: string }[] = [
  { id: 1, name: 'Vibrant Playful', description: 'Energetic, modern, high-contrast colors and bouncy animations.', color: 'bg-brand-orange' },
  { id: 2, name: 'Minimal Luxury', description: 'Sophisticated editorial style with elegant serif typography.', color: 'bg-stone-400' },
  { id: 3, name: 'Bio-Hacking Tech', description: 'Precise laboratory aesthetic with data visualization and dark mode.', color: 'bg-indigo-600' },
  { id: 4, name: 'Organic Wellness', description: 'Soft earth tones, botanical elements, and a serene atmosphere.', color: 'bg-wellness-sage' },
  { id: 5, name: 'Bold Brutalist', description: 'Massive typography, sharp edges, and a design-forward attitude.', color: 'bg-black' },
];

export default function App() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>(() => {
    // Check URL parameters on initial load
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const themeParam = params.get('theme');
      if (themeParam && [1, 2, 3, 4, 5].includes(Number(themeParam))) {
        return Number(themeParam) as ThemeId;
      }
    }
    return 1;
  });
  const [showPicker, setShowPicker] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleThemeChange = (id: ThemeId) => {
    setActiveTheme(id);
    // Update URL without refreshing the page
    const url = new URL(window.location.href);
    url.searchParams.set('theme', id.toString());
    window.history.pushState({}, '', url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderTheme = () => {
    switch (activeTheme) {
      case 1: return <Theme1 />;
      case 2: return <Theme2 />;
      case 3: return <Theme3 />;
      case 4: return <Theme4 />;
      case 5: return <Theme5 />;
      default: return <Theme1 />;
    }
  };

  return (
    <div className="relative">
      {/* Theme Switcher Overlay */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
        <AnimatePresence>
          {showPicker && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-6 w-80 mb-2"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Layout className="w-3 h-3" /> Design Proposals
                </h3>
                <button 
                  onClick={copyToClipboard}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold transition-all",
                    copied ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  )}
                >
                  {copied ? <CheckCircle2 className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Link Copied!" : "Copy Link"}
                </button>
              </div>
              
              <div className="space-y-3">
                {THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeChange(theme.id as ThemeId)}
                    className={cn(
                      "w-full flex items-center gap-4 p-3 rounded-2xl transition-all border text-left group",
                      activeTheme === theme.id 
                        ? "bg-gray-900 text-white border-gray-900 shadow-lg" 
                        : "bg-gray-50 border-gray-100 text-gray-600 hover:bg-gray-100 sm:hover:border-gray-300"
                    )}
                  >
                    <div className={cn("w-3 h-3 rounded-full shrink-0", theme.color)} />
                    <div className="flex-grow">
                      <div className="text-sm font-bold leading-none mb-1">{theme.name}</div>
                      <div className="text-[10px] opacity-60 leading-tight line-clamp-1">{theme.description}</div>
                    </div>
                    {activeTheme === theme.id && <Check className="w-4 h-4 text-brand-orange" />}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 leading-relaxed italic">
                  * Each proposal features a distinct visual identity, typography system, and layout pattern.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setShowPicker(!showPicker)}
          className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 group",
            showPicker ? "bg-gray-900 text-white" : "bg-brand-orange text-white hover:bg-black"
          )}
        >
          {showPicker ? (
            <motion.div animate={{ rotate: 90 }}><ChevronRight className="w-8 h-8" /></motion.div>
          ) : (
            <Layers className="w-8 h-8 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>

      {/* Main Content Render */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {renderTheme()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

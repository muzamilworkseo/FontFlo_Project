"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Type, Eraser, Sparkles, Sliders, Maximize2, Wand2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StickyInputProps {
  value: string;
  onChange: (val: string) => void;
}

export default function StickyInput({ value, onChange }: StickyInputProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 80);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto px-6 mb-16 relative">
      <div 
        className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isSticky 
            ? "fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl z-[60]" 
            : "relative w-full"
        }`}
      >
        <div className={`
          bg-white rounded-[1.5rem] p-2 flex flex-col gap-2 transition-all duration-700
          ${isSticky ? "shadow-[0_20px_50px_rgba(124,58,237,0.15)] border border-violet-100 backdrop-blur-2xl bg-white/95" : "shadow-2xl shadow-zinc-200/40 border border-zinc-100"}
        `}>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-4 border-b border-zinc-50 pb-2">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-violet-50 rounded-full border border-violet-100">
                        <div className="w-1 h-1 bg-violet-600 rounded-full animate-pulse" />
                        <span className="text-[8px] font-black text-violet-600 uppercase tracking-widest">Flow v2</span>
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">Size</span>
                            <input 
                                type="range" 
                                min="12" 
                                max="48" 
                                value={fontSize}
                                onChange={(e) => setFontSize(parseInt(e.target.value))}
                                className="w-16 accent-violet-600 h-1 bg-zinc-100 rounded-full appearance-none cursor-pointer"
                            />
                            <span className="text-[8px] font-black text-zinc-900 w-4">{fontSize}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <button 
                        onClick={() => onChange("")}
                        className="p-1 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-all flex items-center gap-1 text-[8px] font-black uppercase tracking-widest"
                    >
                        <Eraser className="w-3 h-3" />
                        <span className="hidden sm:inline">Clear</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-stretch gap-2 px-1">
              <div className="flex-1 relative group">
                <div className="absolute left-4 top-3 text-violet-600 group-focus-within:scale-110 transition-transform z-10">
                  <Wand2 className="w-4 h-4" />
                </div>
                <textarea
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="Type anything..."
                  style={{ fontSize: `${fontSize}px` }}
                  className="w-full bg-zinc-50/50 rounded-[1.25rem] pl-11 pr-4 py-3 min-h-[48px] max-h-[120px] outline-none border-2 border-transparent focus:border-violet-100 focus:bg-white transition-all text-zinc-800 font-semibold leading-relaxed resize-none shadow-inner"
                  rows={1}
                />
                
                <div className="absolute right-4 bottom-3 flex items-center gap-4 text-[7px] font-black uppercase tracking-[0.2em] text-zinc-300">
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col items-end leading-none">
                            <span className="text-zinc-900">{value.length}</span>
                            <span>Chars</span>
                        </div>
                        <div className="w-px h-5 bg-zinc-100" />
                        <div className="flex flex-col items-end leading-none">
                            <span className="text-zinc-900">{value.trim() ? value.trim().split(/\s+/).length : 0}</span>
                            <span>Words</span>
                        </div>
                    </div>
                </div>
              </div>
              
              <div className="flex md:flex-col gap-2">
                <button className="flex-1 md:w-16 bg-zinc-900 text-white p-2 rounded-xl font-black flex flex-col items-center justify-center gap-1 hover:bg-violet-600 shadow-xl transition-all active:scale-95 group">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400 group-hover:text-white transition-colors" />
                  <span className="text-[7px] uppercase tracking-widest">Magic</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          {isSticky && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-zinc-900 text-white text-[8px] font-black rounded-full uppercase tracking-[0.3em] shadow-2xl z-20 flex items-center gap-2 border border-white/10"
            >
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500"></span>
              </span>
              Flow Active
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

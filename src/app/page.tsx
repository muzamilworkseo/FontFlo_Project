"use client";

import { useState } from "react";
import { FONTS, CATEGORIES } from "@/lib/fonts";
import FontCard from "@/components/FontCard";
import StickyInput from "@/components/StickyInput";
import ReviewPopup from "@/components/ReviewPopup";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, MousePointer2, Cpu, Globe, Layout, Palette, PenTool, Layers, Repeat, Wind, Fingerprint, Activity, Terminal, Search, Box, Code2, Database, Rocket, Command } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [sampleText, setSampleText] = useState("The quick brown fox jumps over the lazy dog");
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [copyCount, setCopyCount] = useState(0);

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const handleCopy = () => {
    setCopyCount((prev) => prev + 1);
    if (copyCount === 2 || (copyCount > 2 && copyCount % 5 === 0)) {
      setShowReviewPopup(true);
    }
  };

  const modernFeatures = [
    { icon: Cpu, title: "Neural Font Pairing", description: "Smart AI suggestions for perfect combinations." },
    { icon: Globe, title: "Global Delivery CDN", description: "Ultra-fast font loading across any continent." },
    { icon: Layout, title: "Variable Weight Axis", description: "Fluid control over every typographic dimension." },
    { icon: Palette, title: "Auto-Theme Engine", description: "Generates CSS palettes from font characteristics." },
    { icon: PenTool, title: "Custom Glyph Lab", description: "Experimental character modifications for brands." },
    { icon: Shield, title: "Enterprise Grade", description: "Security and licensing for massive deployments." },
    { icon: Box, title: "3D Extrusion Engine", description: "Preview any font in real-time 3D environments." },
    { icon: Zap, title: "Instant SVG Export", description: "One-click vectorized path generation for logos." },
    { icon: MousePointer2, title: "Heatmap Analysis", description: "Visualize readability patterns across layouts." },
    { icon: Activity, title: "Sub-pixel Rendering AI", description: "Perfect clarity on any display hardware." },
    { icon: PenTool, title: "Bézier Optimizer", description: "Mathematical curve perfection for smooth edges." },
    { icon: Command, title: "OpenType Explorer", description: "Access deep character variants and stylistic sets." },
    { icon: Shield, title: "Smart Rights Check", description: "Real-time license validation for your projects." },
    { icon: Rocket, title: "Ghost Loading", description: "Pre-render fonts before they're even needed." },
    { icon: Sparkles, title: "Style Morphing", description: "Transition between different font families smoothly." },
    { icon: Terminal, title: "Performance Metrics", description: "Real-time tracking of font rendering speeds." },
    { icon: Search, title: "Semantic Search", description: "Find fonts by describing the mood or intent." },
    { icon: Globe, title: "Multi-script Support", description: "Seamless integration for non-Latin writing systems." },
    { icon: Palette, title: "Contrast Validator", description: "Automated accessibility checks for readability." },
    { icon: Code2, title: "Generative Ligatures", description: "AI-powered unique character connections." },
  ];

  return (
    <div className="flex flex-col gap-12 pb-32 overflow-hidden bg-white">
      {/* Tool Section - Truly Topmost */}
      <section className="relative pt-32 pb-12 flex flex-col items-center">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none opacity-[0.03] select-none flex flex-col justify-center gap-16 -rotate-2 scale-110 overflow-hidden"
        >
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-[14rem] font-black uppercase tracking-tighter">TYPOGRAPHY • DESIGN • FLUIDITY • QUANTUM • EVOLUTION • </span>
          </div>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-40 relative"
          >
             <StickyInput value={sampleText} onChange={setSampleText} />
          </motion.div>
        </div>
      </section>

      {/* Font Deep Dive Section - IMMEDIATELY BELOW TOOL */}
      <div className="flex flex-col gap-16">
        {CATEGORIES.map((category, idx) => {
          const categoryFonts = FONTS.filter(f => f.category === category.id).slice(0, 4);
          return (
            <motion.section 
              key={category.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="container mx-auto px-6 flex flex-col gap-8"
            >
              <div className="flex items-end justify-between bg-zinc-50/50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                <div className="flex flex-col gap-3 relative z-10">
                  <div className="inline-flex items-center gap-2 bg-violet-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest w-fit shadow-lg shadow-violet-200">
                      {category.name} Segment
                  </div>
                  <h2 className="text-3xl font-black text-zinc-900 tracking-tight">{category.name} Mastery</h2>
                  <p className="text-zinc-500 max-w-xl text-sm font-medium opacity-80">{category.description}</p>
                </div>
                <Link 
                  href={`/category/${category.slug}`}
                  className="hidden md:flex items-center gap-3 bg-zinc-900 text-white px-8 py-3.5 rounded-2xl font-black text-xs hover:bg-violet-600 transition-all hover:translate-x-2 shadow-xl relative z-10"
                >
                  EXPLORE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryFonts.map((font) => (
                  <FontCard 
                    key={font.id} 
                    font={font} 
                    sampleText={sampleText} 
                    onCopy={handleCopy}
                  />
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Hero Content - MOVED DOWN */}
      <section className="container mx-auto px-6 text-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-zinc-900 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.4em] mb-10 shadow-xl"
        >
          <Sparkles className="w-3 h-3 text-violet-400" />
          <span>Quantum Type Engine</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-black text-zinc-900 tracking-tighter leading-[0.8] mb-8"
        >
          Beyond <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 italic">Typography</span>
        </motion.h1>
      </section>

      {/* Extraordinary Features Grid */}
      <section className="container mx-auto px-6">
        <div className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 overflow-hidden relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-white/5">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/20 blur-[150px] rounded-full" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -40, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full" 
          />
          
          <div className="relative z-10 flex flex-col gap-16">
            <div className="flex flex-col gap-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-violet-600" />
                <span className="text-violet-500 font-black text-[10px] uppercase tracking-[0.3em]">Core Technologies</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-none">Advanced Capabilities</h2>
              <p className="text-zinc-500 text-sm md:text-lg font-medium">Revolutionary architecture for the next generation of digital creators.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-16">
              {modernFeatures.map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  viewport={{ once: true }}
                  className="group flex flex-col gap-5"
                >
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 shadow-2xl group-hover:scale-110 group-hover:rotate-6">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[11px] font-black text-white tracking-widest uppercase">{feat.title}</h3>
                    <p className="text-zinc-500 leading-relaxed text-[10px] font-semibold group-hover:text-zinc-300 transition-colors">{feat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col gap-2 mb-12 text-center">
            <h2 className="text-3xl font-black text-zinc-900 tracking-tight">Design Ecosystems</h2>
            <div className="w-16 h-1 bg-violet-600 mx-auto rounded-full mt-2" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="flex"
            >
              <Link
                href={`/category/${cat.slug}`}
                className="group relative flex flex-col items-center justify-center gap-6 p-8 w-full bg-white border border-zinc-100 rounded-[2.5rem] hover:shadow-[0_40px_80px_-15px_rgba(124,58,237,0.15)] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-violet-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative z-10 w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-900 group-hover:bg-white group-hover:text-violet-600 group-hover:scale-110 transition-all duration-500 shadow-sm border border-zinc-100">
                  <Zap className="w-7 h-7 fill-current" />
                </div>
                <div className="relative z-10 text-center">
                    <span className="block font-black text-xs text-zinc-900 tracking-widest uppercase group-hover:text-violet-600 transition-colors">{cat.name}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Impact Section */}
      <section className="container mx-auto px-6">
        <div className="bg-zinc-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.5)]">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_70%)]" 
          />
          
          <div className="relative z-10 flex flex-col items-center gap-12">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-violet-400 mx-auto">
                    <Activity className="w-3 h-3" />
                    <span>Real-time Evolution</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">Join the Type <br />Revolution</h2>
                <p className="text-zinc-500 text-sm md:text-lg max-w-xl mx-auto font-medium">Empowering 50,000+ creators with the world's most sophisticated typography toolkit.</p>
              </div>
            
            <div className="flex flex-wrap justify-center gap-6">
                <Link href="/signup" className="px-10 py-4 bg-violet-600 text-white rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-2xl shadow-violet-500/20 active:scale-95">
                    Get Started Free
                </Link>
                <Link href="/reviews" className="px-10 py-4 bg-white/5 backdrop-blur-2xl text-white border border-white/10 rounded-2xl font-black text-sm hover:bg-white/10 transition-all active:scale-95">
                    View Reviews
                </Link>
            </div>
          </div>
        </div>
      </section>

      <ReviewPopup show={showReviewPopup} onClose={() => setShowReviewPopup(false)} />
    </div>
  );
}

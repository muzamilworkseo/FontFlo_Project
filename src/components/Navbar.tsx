"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CATEGORIES } from "@/lib/fonts";
import { Menu, X, ChevronDown, Sparkles, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-xl shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
        <div className="container mx-auto px-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  className="absolute inset-0 bg-zinc-900 rounded-2xl flex items-center justify-center text-white overflow-hidden group-hover:bg-violet-600 transition-colors duration-700 shadow-2xl"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 0.7, 1],
                      rotate: [0, 180, -180, 0],
                      borderRadius: ["20%", "50%", "20%", "20%"],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-5 border-2 border-violet-400/50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-black text-sm tracking-tighter italic select-none">F</span>
                      <span className="font-black text-sm tracking-tighter italic select-none -ml-0.5 text-violet-400">F</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/40 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                
                {/* Quantum rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-1 border border-violet-600/20 rounded-[1.2rem] blur-[0.5px]"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2.5 border-t border-r border-indigo-600/10 rounded-[1.6rem]"
                />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-violet-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(124,58,237,1)] border-2 border-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-zinc-900 leading-none group-hover:text-violet-600 transition-colors">
                  Font<span className="text-violet-600 group-hover:text-zinc-900">Flo</span>
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                    <div className="flex gap-1">
                      {[1,2,3,4].map(i => (
                          <motion.div 
                              key={i}
                              animate={{ 
                                opacity: [0.2, 1, 0.2],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                              className="w-1 h-1 bg-violet-500 rounded-full" 
                          />
                      ))}
                    </div>
                    <span className="text-[7px] font-black text-zinc-400 uppercase tracking-[0.5em] ml-1">Quantum Type v4.0</span>
                </div>
              </div>
            </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 bg-zinc-50/50 px-6 py-1.5 rounded-full border border-zinc-100 shadow-sm">
            <div className="relative group/nav">
              <button className="flex items-center gap-1 text-zinc-500 hover:text-violet-600 font-bold text-[9px] uppercase tracking-widest transition-colors">
                Catalog <ChevronDown className="w-2.5 h-2.5 opacity-50" />
              </button>
              <div className="absolute top-full left-0 mt-4 w-48 bg-white border border-zinc-100 rounded-2xl shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 p-2">
                <div className="grid grid-cols-1 gap-0.5">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.slug}`}
                      className="flex items-center justify-between px-3 py-1.5 text-[9px] font-bold text-zinc-500 hover:text-white hover:bg-violet-600 rounded-lg transition-all"
                    >
                      {cat.name.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/features" className="text-zinc-500 hover:text-violet-600 font-bold text-[9px] uppercase tracking-widest transition-colors">
              Features
            </Link>
            <Link href="/reviews" className="text-zinc-500 hover:text-violet-600 font-bold text-[9px] uppercase tracking-widest transition-colors">
              Reviews
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/signin"
              className="px-4 py-1.5 text-zinc-500 hover:text-violet-600 font-bold text-[9px] uppercase tracking-widest transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 bg-zinc-900 text-white rounded-lg font-bold text-[9px] uppercase tracking-widest hover:bg-violet-600 shadow-lg transition-all active:scale-95"
            >
              Join
            </Link>
          </div>


        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-zinc-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-100 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Navigation</span>
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    className="text-2xl font-black text-zinc-900 hover:text-violet-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
              <div className="h-px bg-zinc-100" />
              <div className="flex flex-col gap-4">
                <Link href="/features" className="text-lg font-bold text-zinc-600" onClick={() => setIsOpen(false)}>Features</Link>
                <Link href="/reviews" className="text-lg font-bold text-zinc-600" onClick={() => setIsOpen(false)}>Reviews</Link>
                <Link href="/faq" className="text-lg font-bold text-zinc-600" onClick={() => setIsOpen(false)}>FAQs</Link>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <Link
                  href="/signin"
                  className="w-full py-4 text-center text-zinc-900 font-black uppercase tracking-widest text-[10px] border border-zinc-200 rounded-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="w-full py-4 text-center bg-violet-600 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-lg shadow-violet-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Access
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

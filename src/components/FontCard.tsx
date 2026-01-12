"use client";

import { Font } from "@/lib/fonts";
import { Copy, Check, ExternalLink, Zap } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

interface FontCardProps {
  font: Font;
  sampleText: string;
  onCopy?: () => void;
}

export default function FontCard({ font, sampleText, onCopy }: FontCardProps) {
  const [copied, setCopied] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleText || font.name);
    setCopied(true);
    if (onCopy) onCopy();
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group bg-white border border-zinc-100/80 rounded-[2rem] p-6 hover:shadow-[0_40px_80px_-15px_rgba(124,58,237,0.1)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
    >
      <div style={{ transform: "translateZ(30px)" }} className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-violet-50 rounded-lg flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 shadow-sm">
                <Zap className="w-3.5 h-3.5 fill-current" />
            </div>
            <div className="flex flex-col">
                <span className="text-[7px] font-black text-zinc-400 uppercase tracking-[0.2em]">
                  Master Collection
                </span>
                <span className="text-[9px] font-bold text-violet-600 uppercase tracking-widest leading-none mt-0.5">
                  {font.category}
                </span>
            </div>
          </div>
          
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-black text-[8px] tracking-widest transition-all duration-500 shadow-sm ${
              copied 
                ? "bg-zinc-900 text-white" 
                : "bg-zinc-50 text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-2.5 h-2.5" />
                <span>COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-2.5 h-2.5" />
                <span>COPY TYPE</span>
              </>
            )}
          </button>
        </div>

        <div className="min-h-[70px] flex items-center justify-center text-center px-4 py-3 bg-zinc-50/20 rounded-[1.25rem] border border-zinc-50 transition-all group-hover:bg-white group-hover:border-violet-100 group-hover:shadow-inner">
          <p
            style={{ fontFamily: font.family }}
            className="text-xl md:text-2xl text-zinc-900 break-words w-full selection:bg-violet-600 selection:text-white leading-[1.1] tracking-tight"
          >
            {sampleText || font.name}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-xl font-black text-zinc-900 tracking-tighter leading-none">{font.name}</span>
            <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-violet-600 rounded-full" />
                <span className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.2em]">Premium Foundry v2.0</span>
            </div>
          </div>
          <Link 
            href={`/category/${font.category.toLowerCase()}`} 
            className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-violet-600 hover:scale-110 transition-all duration-500 shadow-lg"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute inset-0 bg-violet-600/95 backdrop-blur-sm rounded-[2.5rem] flex flex-col items-center justify-center text-white z-20"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4"
            >
              <Check className="w-6 h-6" />
            </motion.div>
            <span className="font-black text-xl tracking-tight">Copied to Clipboard</span>
            <span className="text-violet-200 text-[9px] font-bold uppercase tracking-widest mt-2">Ready to use</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

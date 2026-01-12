"use client";

import { useState, use } from "react";
import { FONTS, CATEGORIES } from "@/lib/fonts";
import FontCard from "@/components/FontCard";
import StickyInput from "@/components/StickyInput";
import ReviewPopup from "@/components/ReviewPopup";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const category = CATEGORIES.find((c) => c.slug === slug);
  
  if (!category) {
    notFound();
  }

  const categoryFonts = FONTS.filter((f) => f.category === category.id);
  const [sampleText, setSampleText] = useState("The quick brown fox jumps over the lazy dog");
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [copyCount, setCopyCount] = useState(0);

  const handleCopy = () => {
    setCopyCount((prev) => prev + 1);
    if (copyCount === 2 || (copyCount > 2 && copyCount % 5 === 0)) {
      setShowReviewPopup(true);
    }
  };

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Category Header */}
      <section className="bg-zinc-50 py-16">
        <div className="container mx-auto px-6">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-zinc-500 hover:text-violet-600 font-bold mb-8 transition-colors group w-fit"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <div className="flex items-center gap-2 text-violet-600 font-bold bg-violet-100 w-fit px-4 py-1 rounded-full text-sm">
                <Sparkles className="w-4 h-4" />
                <span>{categoryFonts.length} Fonts Found</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">
                {category.name} Fonts
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed">
                {category.description}
              </p>
            </div>
            
            <div className="hidden lg:block w-48 h-48 bg-white border border-zinc-200 rounded-[2rem] p-6 shadow-xl shadow-zinc-100 rotate-3">
              <div className="w-full h-full border-4 border-violet-100 rounded-2xl flex items-center justify-center text-4xl font-black text-violet-600">
                {category.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Input Section */}
      <StickyInput value={sampleText} onChange={setSampleText} />

      {/* Font Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoryFonts.map((font, idx) => (
            <motion.div
              key={font.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(idx * 0.05, 1) }}
            >
              <FontCard 
                font={font} 
                sampleText={sampleText} 
                onCopy={handleCopy}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* AdSense Placeholder */}
      <section className="container mx-auto px-6 pt-12">
        <div className="w-full h-40 bg-zinc-50 rounded-3xl border-2 border-dashed border-zinc-200 flex items-center justify-center text-zinc-400 font-medium">
          Category Page AdSense Placeholder
        </div>
      </section>

      <ReviewPopup show={showReviewPopup} onClose={() => setShowReviewPopup(false)} />
    </div>
  );
}

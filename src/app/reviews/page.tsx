"use client";

import { Star, MessageSquareQuote, User, Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Alex Thompson",
      role: "Senior Graphic Designer",
      text: "FontFlo has become my go-to tool for every project. The categorization is incredibly helpful when I'm looking for a specific vibe.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Frontend Developer",
      text: "The real-time preview feature is a lifesaver. Being able to see how an entire paragraph looks across 100+ fonts in seconds is amazing.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Content Creator",
      text: "Clean, fast, and beautiful. The UI/UX of FontFlo is a masterclass in modern web design. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sophie Chen",
      role: "Marketing Manager",
      text: "I love the 3D cards! It makes choosing fonts feel like an experience rather than a chore. Great job team!",
      rating: 4,
    },
    {
      name: "David Miller",
      role: "Freelance Designer",
      text: "Found the perfect handwritten font for a wedding invite in less than 2 minutes. This site is pure magic.",
      rating: 5,
    },
    {
      name: "Emma Roberts",
      role: "Blog Owner",
      text: "The essay preview capability is exactly what I needed. Now I can see exactly how my blog posts will look before committing to a font.",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col gap-24 pb-32">
      <section className="relative pt-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-violet-50/50 -z-10 blur-3xl rounded-full" />
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl"
          >
            <Sparkles className="w-3 h-3 text-violet-400" />
            <span>Community Feedback</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-zinc-900 tracking-tight mb-8 leading-[0.9]"
          >
            Loved by <br />
            <span className="text-violet-600">Creators Everywhere</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Join over 50,000 professional designers and developers who use FontFlo to streamline their typography workflow.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-zinc-100 p-10 rounded-[3.5rem] relative group hover:border-violet-100 hover:shadow-[0_40px_80px_-15px_rgba(124,58,237,0.12)] transition-all duration-500"
            >
              <Quote className="absolute top-8 right-10 w-16 h-16 text-violet-50 group-hover:text-violet-100 transition-colors -z-0" />
              <div className="relative z-10 flex flex-col gap-8 h-full">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-100"}`} 
                    />
                  ))}
                </div>
                <p className="text-zinc-600 font-medium leading-relaxed text-xl flex-1">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-5 pt-8 border-t border-zinc-50">
                  <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 font-black text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-zinc-900 tracking-tight">{review.name}</span>
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{review.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="bg-zinc-900 rounded-[4rem] p-12 md:p-24 flex flex-col items-center gap-10 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight relative z-10">
              Share Your Journey
           </h2>
           <p className="text-zinc-400 text-xl max-w-2xl relative z-10 font-medium">
              We're constantly evolving based on your feedback. Tell us how FontFlo has helped your creative process.
           </p>
           <div className="flex flex-wrap justify-center gap-6 relative z-10">
                <Link href="/rate-us" className="px-12 py-5 bg-violet-600 text-white rounded-[2rem] font-black text-lg hover:bg-violet-700 transition-all shadow-2xl">
                    SUBMIT REVIEW
                </Link>
                <Link href="/contact" className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-[2rem] font-black text-lg hover:bg-white/10 transition-all">
                    TALK TO US
                </Link>
           </div>
        </div>
      </section>
    </div>
  );
}

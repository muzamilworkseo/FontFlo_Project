"use client";

import { useState, useEffect } from "react";
import { X, Star, MessageSquareHeart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface ReviewPopupProps {
  show: boolean;
  onClose: () => void;
}

export default function ReviewPopup({ show, onClose }: ReviewPopupProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 w-80 bg-white rounded-3xl shadow-2xl shadow-violet-200 border border-violet-100 p-6"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-600">
              <MessageSquareHeart className="w-8 h-8" />
            </div>
            
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-zinc-900 text-lg">Loving FontFlo?</h3>
              <p className="text-zinc-500 text-sm">
                Your feedback helps us grow. Would you mind leaving a quick review?
              </p>
            </div>
            
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <div className="flex flex-col w-full gap-2 pt-2">
              <Link
                href="/rate-us"
                onClick={onClose}
                className="w-full py-3 bg-violet-600 text-white font-bold rounded-2xl shadow-lg shadow-violet-200 hover:bg-violet-700 transition-all"
              >
                Rate Us Now
              </Link>
              <button
                onClick={onClose}
                className="w-full py-3 text-zinc-400 font-semibold text-sm hover:text-zinc-600 transition-all"
              >
                Maybe later
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { Star, MessageSquareHeart, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RateUsPage() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-20">
      <section className="bg-zinc-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageSquareHeart className="w-8 h-8" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tight mb-6"
          >
            We Value Your <span className="text-violet-600">Feedback</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            How are we doing? Let us know your thoughts and help us make FontFlo even better.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-zinc-100 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-zinc-100"
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                  <div className="flex flex-col items-center gap-6 text-center">
                    <h3 className="text-2xl font-bold text-zinc-900">How would you rate FontFlo?</h3>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onMouseEnter={() => setHoveredRating(s)}
                          onMouseLeave={() => setHoveredRating(0)}
                          onClick={() => setRating(s)}
                          className="p-1 transition-transform active:scale-90"
                        >
                          <Star
                            className={`w-12 h-12 transition-all ${
                              s <= (hoveredRating || rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-zinc-200"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    {rating > 0 && (
                      <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-violet-600 font-bold"
                      >
                        {rating === 5 ? "Amazing! 😍" : rating === 4 ? "Great! 😊" : rating === 3 ? "Good! 🙂" : rating === 2 ? "Could be better 😕" : "Poor 😞"}
                      </motion.span>
                    )}
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-zinc-900 ml-1">What did you like most?</label>
                      <textarea
                        rows={3}
                        placeholder="Share your favorite features..."
                        className="bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 outline-none focus:border-violet-300 focus:bg-white transition-all resize-none"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-zinc-900 ml-1">Any suggestions for improvement?</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us what we can do better..."
                        className="bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 outline-none focus:border-violet-300 focus:bg-white transition-all resize-none"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-zinc-900 ml-1">Email (Optional)</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 outline-none focus:border-violet-300 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <button
                    disabled={rating === 0}
                    className="bg-violet-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-violet-700 shadow-xl shadow-violet-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                  >
                    <Send className="w-5 h-5" />
                    Submit Feedback
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-zinc-100 rounded-[3rem] p-16 shadow-2xl shadow-zinc-100 text-center flex flex-col items-center gap-8"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl font-black text-zinc-900">Thank You!</h3>
                  <p className="text-zinc-500 text-lg leading-relaxed">
                    Your feedback has been received and helps us make FontFlo better for everyone. We appreciate your support!
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-violet-600 font-bold hover:underline"
                >
                  Submit another response
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

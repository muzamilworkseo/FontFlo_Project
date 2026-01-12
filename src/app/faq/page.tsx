"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const faqs = [
    {
      question: "Is FontFlo free to use?",
      answer: "Yes! FontFlo offers a generous free tier that allows you to preview and copy all 100+ fonts in our collection. We also have premium features for advanced designers coming soon.",
    },
    {
      question: "How do I use these fonts in my project?",
      answer: "Most of the fonts on FontFlo are sourced from Google Fonts. You can copy the font name and search for it on Google Fonts to get the integration code for your website or app.",
    },
    {
      question: "Can I upload my own fonts?",
      answer: "Currently, FontFlo only supports our curated collection of 100+ fonts. We are working on a feature that will allow users to upload and categorize their own font files.",
    },
    {
      question: "How does the 'Magic' button work?",
      answer: "The Magic button uses our proprietary algorithm to suggest the best font pairings and styles based on the text you've entered. Try it out on the home page!",
    },
    {
      question: "Is there a limit to how much text I can preview?",
      answer: "No! Our input bars are designed to handle everything from short slogans to long-form essays. Go ahead and paste that 2,000-word article to see how it looks in different styles.",
    },
    {
      question: "Do you offer an API for developers?",
      answer: "We are currently in the process of developing a FontFlo API. Join our newsletter to be the first to know when it launches.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="pb-20">
      <section className="bg-zinc-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tight mb-6"
          >
            Frequently Asked <br />
            <span className="text-violet-600">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Got questions? We've got answers. Everything you need to know about FontFlo.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`border rounded-3xl transition-all duration-300 ${
                activeIndex === idx ? "border-violet-200 bg-violet-50/30" : "border-zinc-100 bg-white"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <span className={`text-xl font-bold transition-colors ${activeIndex === idx ? "text-violet-600" : "text-zinc-900"}`}>
                  {faq.question}
                </span>
                {activeIndex === idx ? (
                  <ChevronUp className="w-6 h-6 text-violet-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-zinc-400" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-500 leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 text-center">
        <p className="text-zinc-400 text-lg">
          Still have questions? <a href="/contact" className="text-violet-600 font-bold hover:underline">Contact our support team</a>
        </p>
      </section>
    </div>
  );
}

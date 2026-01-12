"use client";

import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="pb-20">
      <section className="bg-zinc-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tight mb-6"
          >
            Get in <span className="text-violet-600">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Have a question, feedback, or just want to say hi? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-black text-zinc-900 tracking-tight">Contact Information</h2>
              <p className="text-zinc-500 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Email</span>
                  <span className="text-lg font-bold text-zinc-900">hello@fontflo.com</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Phone</span>
                  <span className="text-lg font-bold text-zinc-900">+1 (555) 123-4567</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Location</span>
                  <span className="text-lg font-bold text-zinc-900">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-zinc-100 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-zinc-100">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-zinc-900 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 outline-none focus:border-violet-300 focus:bg-white transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-zinc-900 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 outline-none focus:border-violet-300 focus:bg-white transition-all"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-zinc-900 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?" 
                  className="bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 outline-none focus:border-violet-300 focus:bg-white transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-zinc-900 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us more about your inquiry..." 
                  className="bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 outline-none focus:border-violet-300 focus:bg-white transition-all resize-none"
                />
              </div>
              
              <button className="bg-violet-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-violet-700 shadow-xl shadow-violet-200 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

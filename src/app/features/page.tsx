"use client";

import { Zap, Shield, MousePointer2, Sparkles, Type, Smartphone, Palette, Code, PenTool, Cpu, Globe, Layout, Wand2, Terminal, Layers } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturesPage() {
    const features = [
      {
        title: "100+ Premium Fonts",
        description: "Access a curated collection of over 100 high-quality fonts categorized for every project need from elegant serifs to modern sans.",
        icon: <Type className="w-6 h-6" />,
        color: "bg-zinc-900",
      },
      {
        title: "Neural Font Pairing",
        description: "Our proprietary AI analyzes visual weight and x-height to suggest the perfect secondary fonts for your primary selection.",
        icon: <Cpu className="w-6 h-6" />,
        color: "bg-violet-600",
      },
      {
        title: "Variable Axis Control",
        description: "Fluidly adjust weight, width, and slant on supported variable fonts with real-time browser rendering.",
        icon: <Layers className="w-6 h-6" />,
        color: "bg-indigo-600",
      },
      {
        title: "Essay Flow Engine",
        description: "Preview large blocks of text instantly. Handles everything from slogans to 5000-word essays with zero lag.",
        icon: <Zap className="w-6 h-6" />,
        color: "bg-amber-500",
      },
      {
        title: "Design System Tokens",
        description: "Export your font choices directly as Tailwind CSS, CSS Variables, or SCSS tokens for seamless integration.",
        icon: <Terminal className="w-6 h-6" />,
        color: "bg-emerald-600",
      },
      {
        title: "Universal Type CDN",
        description: "Fast-load fonts directly into your projects with our globally distributed edge delivery network.",
        icon: <Globe className="w-6 h-6" />,
        color: "bg-blue-600",
      },
      {
        title: "3D Spatial Previews",
        description: "Interact with typography in a 3D space. Our interactive cards react to your every movement for a tactile feel.",
        icon: <Smartphone className="w-6 h-6" />,
        color: "bg-pink-600",
      },
      {
        title: "Smart Contrast Tool",
        description: "Automatic WCAG compliance checking for your font colors against any background in real-time.",
        icon: <Shield className="w-6 h-6" />,
        color: "bg-red-600",
      },
      {
        title: "Custom Glyph Editor",
        description: "Modify ligatures and character spacing on the fly to create unique brand-specific letterforms.",
        icon: <PenTool className="w-6 h-6" />,
        color: "bg-cyan-600",
      },
    ];

  return (
    <div className="flex flex-col gap-24 pb-32">
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-violet-50/50 -z-10 blur-3xl rounded-full" />
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-violet-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-xl shadow-violet-200"
          >
            <Sparkles className="w-3 h-3" />
            <span>Extraordinary Capabilities</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-zinc-900 tracking-tight mb-8 leading-[0.9]"
          >
            The Future of <br />
            <span className="text-violet-600">Typography Engineering</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium"
          >
            FontFlo isn't just a library—it's a comprehensive suite of tools designed to elevate the digital narrative of modern creators.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white border border-zinc-100 p-10 rounded-[3.5rem] hover:shadow-[0_40px_80px_-15px_rgba(124,58,237,0.12)] hover:border-violet-100 transition-all duration-500"
            >
              <div className={`w-16 h-16 ${feature.color} text-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-medium text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advanced Capabilities Deep Dive */}
      <section className="container mx-auto px-6">
        <div className="bg-zinc-900 rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
                <div className="w-12 h-1 bg-violet-600 rounded-full" />
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">Built for Scale. <br />Designed for Speed.</h2>
                <p className="text-zinc-400 text-xl leading-relaxed">
                    Our infrastructure is optimized for high-performance typography. 
                    From intelligent font subsetting to adaptive loading strategies, 
                    FontFlo ensures your site stays fast while looking beautiful.
                </p>
                <div className="flex flex-wrap gap-4">
                    {["React", "Next.js", "Figma", "Tailwind", "Webflow"].map((tech) => (
                        <div key={tech} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-white text-xs font-bold uppercase tracking-widest">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
                {[
                    { label: "Uptime", value: "99.9%" },
                    { label: "Fonts", value: "100+" },
                    { label: "Speed", value: "< 20ms" },
                    { label: "Users", value: "50k+" },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col gap-2">
                        <span className="text-violet-400 font-black text-4xl tracking-tight">{stat.value}</span>
                        <span className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="bg-gradient-to-tr from-violet-600 to-indigo-700 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-8 relative z-10">Start Your Free Trial</h2>
          <p className="text-violet-100 text-xl max-w-2xl mx-auto mb-12 relative z-10">Experience the full power of FontFlo today. No credit card required.</p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link href="/signup" className="px-12 py-5 bg-white text-zinc-900 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-2xl">
                SIGN UP NOW
            </Link>
            <Link href="/contact" className="px-12 py-5 bg-violet-500/30 backdrop-blur-md text-white border border-white/20 rounded-[2rem] font-black text-xl hover:bg-violet-500/50 transition-all">
                BOOK A DEMO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

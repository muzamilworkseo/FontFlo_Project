import Link from "next/link";
import { CATEGORIES } from "@/lib/fonts";
import { Twitter, Instagram, Github, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md shadow-violet-100">
                FF
              </div>
              <span className="text-xl font-black tracking-tighter text-zinc-900">
                Font<span className="text-violet-600">Flo</span>
              </span>
            </Link>
            <p className="text-zinc-500 leading-relaxed">
              Explore over 100+ premium fonts categorized for your convenience. The ultimate typography tool for creators.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-violet-600 hover:text-white transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-violet-600 hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-violet-600 hover:text-white transition-all shadow-sm">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-zinc-900 text-lg">Categories</h3>
            <ul className="flex flex-col gap-3">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.slug}`} className="text-zinc-500 hover:text-violet-600 transition-colors">
                    {cat.name} Fonts
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-zinc-900 text-lg">Resources</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/features" className="text-zinc-500 hover:text-violet-600 transition-colors">Features</Link></li>
              <li><Link href="/reviews" className="text-zinc-500 hover:text-violet-600 transition-colors">User Reviews</Link></li>
              <li><Link href="/faq" className="text-zinc-500 hover:text-violet-600 transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="text-zinc-500 hover:text-violet-600 transition-colors">Contact Us</Link></li>
              <li><Link href="/rate-us" className="text-zinc-500 hover:text-violet-600 transition-colors">Rate Us</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-zinc-900 text-lg">Newsletter</h3>
            <p className="text-zinc-500">Get notified about new fonts and features.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-2 outline-none focus:border-violet-300 transition-colors text-sm"
              />
              <button className="bg-violet-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} FontFlo. Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for Designers.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-zinc-400 text-sm hover:text-zinc-600">Privacy Policy</Link>
            <Link href="/terms" className="text-zinc-400 text-sm hover:text-zinc-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

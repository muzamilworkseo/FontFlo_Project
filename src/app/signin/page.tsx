"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Mail, Lock, ArrowRight, Github, Chrome, AlertCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-zinc-50">
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-100/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50/50 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white border border-zinc-100 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-violet-100"
      >
        <div className="flex flex-col items-center gap-6 mb-10">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-violet-200">
              FF
            </div>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-black text-zinc-900 tracking-tight">Welcome Back</h1>
            <p className="text-zinc-500">Sign in to your FontFlo account</p>
          </div>
        </div>

        <form onSubmit={handleSignIn} className="flex flex-col gap-5">
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl flex items-center gap-3 text-sm font-medium">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-zinc-900 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="name@example.com"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-violet-300 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-bold text-zinc-900">Password</label>
              <button type="button" className="text-xs font-bold text-violet-600 hover:underline">Forgot?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-violet-300 focus:bg-white transition-all"
              />
            </div>
          </div>

          <button
            disabled={loading}
            className="w-full bg-violet-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-violet-700 shadow-xl shadow-violet-200 transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 mt-2"
          >
            {loading ? "Signing in..." : "Sign In"}
            {!loading && <ArrowRight className="w-5 h-5" />}
          </button>
        </form>

        <div className="mt-8 flex flex-col gap-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-zinc-400 font-bold tracking-widest">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-zinc-100 rounded-2xl hover:bg-zinc-50 transition-all font-bold text-zinc-700">
              <Chrome className="w-5 h-5" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-zinc-100 rounded-2xl hover:bg-zinc-50 transition-all font-bold text-zinc-700">
              <Github className="w-5 h-5" />
              Github
            </button>
          </div>

          <p className="text-center text-zinc-500 text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-violet-600 font-bold hover:underline">Sign Up Free</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

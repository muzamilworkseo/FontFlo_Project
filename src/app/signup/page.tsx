"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Mail, Lock, User, ArrowRight, Github, Chrome, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-zinc-50">
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-100/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50/50 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white border border-zinc-100 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-violet-100"
      >
        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex flex-col items-center gap-6 mb-10">
                <Link href="/" className="flex items-center gap-2 group">
                  <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-violet-200">
                    FF
                  </div>
                </Link>
                <div className="text-center">
                  <h1 className="text-3xl font-black text-zinc-900 tracking-tight">Create Account</h1>
                  <p className="text-zinc-500">Join 10,000+ creators on FontFlo</p>
                </div>
              </div>

              <form onSubmit={handleSignUp} className="flex flex-col gap-5">
                {error && (
                  <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl flex items-center gap-3 text-sm font-medium">
                    <AlertCircle className="w-5 h-5" />
                    {error}
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-zinc-900 ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder="John Doe"
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-violet-300 focus:bg-white transition-all"
                    />
                  </div>
                </div>

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
                  <label className="text-sm font-bold text-zinc-900 ml-1">Password</label>
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
                  {loading ? "Creating account..." : "Get Started Free"}
                  {!loading && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>

              <div className="mt-8 flex flex-col gap-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-zinc-100"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-4 text-zinc-400 font-bold tracking-widest">Or sign up with</span>
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
                  Already have an account?{" "}
                  <Link href="/signin" className="text-violet-600 font-bold hover:underline">Sign In</Link>
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center flex flex-col items-center gap-8"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-black text-zinc-900">Check Your Email</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  We've sent a confirmation link to <strong>{email}</strong>. Please click the link to activate your account.
                </p>
              </div>
              <Link
                href="/signin"
                className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-black transition-all"
              >
                Go to Sign In
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

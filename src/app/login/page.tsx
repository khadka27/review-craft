"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  LogOut,
  CheckCircle2,
  AlertCircle,
  KeyRound,
  Shield,
  Zap,
} from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";
import { useToast } from "@/components/ui/Toast";

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/home";

  const { isAuthenticated, username, login, logout, isLoading } = useAuth();
  const toast = useToast();

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!inputUsername.trim() || !inputPassword.trim()) {
      setErrorMessage("Please enter both username and password");
      return;
    }

    setSubmitting(true);
    const result = await login(inputUsername.trim(), inputPassword.trim());
    setSubmitting(false);

    if (result.success) {
      toast.success("Welcome back! Ad-Free mode is now active.");
      router.push(redirectPath);
    } else {
      setErrorMessage(result.message || "Invalid username or password");
    }
  };

  const handleLogout = async () => {
    setSubmitting(true);
    await logout();
    setSubmitting(false);
    toast.info("Logged out. Regular ad display mode restored.");
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 z-10 flex items-center justify-center">
      {/* Outer Frosted Glass Backdrop Container (Figma Glass Frame Style) */}
      <div className="relative w-full rounded-[2.5rem] bg-white/[0.08] backdrop-blur-2xl border border-white/[0.18] p-4 sm:p-10 lg:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.35)] overflow-hidden flex items-center justify-center">
        
        {/* Floating 3D Geometric Accents inside glass container */}
        <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-300/10 blur-xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/15 blur-xl pointer-events-none" />
        
        {/* 3D Decorative Pills/Ribbons inside frame */}
        <div className="hidden sm:block absolute top-12 left-10 opacity-70 pointer-events-none animate-pulse">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 28C12 19.1634 19.1634 12 28 12C36.8366 12 44 19.1634 44 28V36C44 44.8366 36.8366 52 28 52C19.1634 52 12 44.8366 12 36V28Z"
              fill="url(#paint0_linear)"
              fillOpacity="0.8"
            />
            <defs>
              <linearGradient id="paint0_linear" x1="12" y1="12" x2="44" y2="52" gradientUnits="userSpaceOnUse">
                <stop stopColor="#93C5FD" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="hidden sm:block absolute bottom-12 right-12 opacity-70 pointer-events-none">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 36C18 26.0589 26.0589 18 36 18C45.9411 18 54 26.0589 54 36C54 45.9411 45.9411 54 36 54C26.0589 54 18 45.9411 18 36Z"
              stroke="url(#paint1_linear)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="paint1_linear" x1="18" y1="18" x2="54" y2="54" gradientUnits="userSpaceOnUse">
                <stop stopColor="#67E8F9" />
                <stop offset="1" stopColor="#2563EB" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Central Pure Glassmorphic Login Card */}
        <div className="relative w-full max-w-md rounded-3xl bg-white/[0.14] backdrop-blur-3xl border border-white/[0.3] p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white">
          
          {/* Logo Section */}
          <div className="text-center flex flex-col items-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center p-2 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20 shadow-md hover:scale-105 transition-transform"
            >
              <Image
                src="/logo/logo.png"
                alt="ReviewCraft Logo"
                width={130}
                height={40}
                priority
                className="h-8 sm:h-9 w-auto brightness-0 invert filter"
              />
            </Link>

            <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/20 border border-white/30 text-white shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Personal Studio • Ad-Free Mode</span>
            </div>

            <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Login
            </h1>
            <p className="mt-1 text-xs text-blue-100/80">
              Sign in to suppress all ads & access your tools
            </p>
          </div>

          {/* Already Logged In View */}
          {isAuthenticated ? (
            <div className="space-y-5">
              <div className="rounded-2xl border border-emerald-400/40 bg-emerald-950/40 backdrop-blur-md p-4 text-emerald-200 shadow-inner">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">Active Ad-Free Studio</span>
                      <span className="text-[9px] bg-emerald-400/30 text-emerald-200 border border-emerald-400/40 px-2 py-0.5 rounded-full font-bold">ONLINE</span>
                    </div>
                    <p className="mt-1 text-emerald-200/90 leading-relaxed">
                      Signed in as <span className="font-bold text-white">{username}</span>. All Google AdSense ads, banners, and auto-ads are completely blocked.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <Link
                  href={redirectPath}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white py-3 px-4 text-sm font-semibold shadow-xl shadow-black/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-indigo-300" />
                  <span>Open Mockup Generators</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white py-2.5 px-4 transition-all disabled:opacity-50 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5 text-red-300" />
                  <span>{submitting ? "Signing out..." : "Sign Out & Restore Regular Mode"}</span>
                </button>
              </div>
            </div>
          ) : (
            /* Login Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="rounded-xl border border-red-400/40 bg-red-950/60 backdrop-blur-md p-3 text-xs text-red-200 flex items-start gap-2.5 animate-slide-in shadow-md">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{errorMessage}</span>
                </div>
              )}

              {/* Username Input Field */}
              <div className="space-y-1.5 text-left">
                <label
                  htmlFor="username"
                  className="block text-xs font-bold text-white/90 uppercase tracking-wider"
                >
                  Username / Email
                </label>
                <div className="relative">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    autoComplete="username"
                    value={inputUsername}
                    onChange={(e) => setInputUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full rounded-xl bg-white/90 text-slate-900 placeholder:text-slate-500 font-medium px-4 py-2.5 text-sm border border-white/60 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md transition-all"
                  />
                </div>
              </div>

              {/* Password Input Field */}
              <div className="space-y-1.5 text-left">
                <label
                  htmlFor="password"
                  className="block text-xs font-bold text-white/90 uppercase tracking-wider"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full rounded-xl bg-white/90 text-slate-900 placeholder:text-slate-500 font-medium px-4 pr-10 py-2.5 text-sm border border-white/60 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-600 hover:text-slate-900 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={submitting || isLoading}
                className="w-full mt-2 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] active:bg-[#020617] text-white py-3 px-4 text-sm font-bold shadow-xl shadow-black/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Verifying...</span>
                  </div>
                ) : (
                  <>
                    <span>Sign in</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Bottom Return Link */}
          <div className="mt-6 pt-4 border-t border-white/20 text-center">
            <Link
              href="/"
              className="text-xs text-blue-100 hover:text-white transition-colors font-medium inline-flex items-center gap-1"
            >
              ← Back to ReviewCraft Homepage
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div
      className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center overflow-hidden py-10 px-4"
      style={{
        background:
          "linear-gradient(135deg, #03346E 0%, #005B96 30%, #0284C7 65%, #0369A1 100%)",
      }}
    >
      {/* 3D Fluid Floating Soft Shapes & Ribbons Backdrop (Matching Reference Figma Art) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-0">
        
        {/* Ambient Glows */}
        <div className="absolute top-1/6 left-1/4 w-[600px] h-[600px] bg-cyan-400/20 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/6 right-1/4 w-[500px] h-[500px] bg-blue-600/30 blur-[140px] rounded-full" />

        {/* 3D Soft Tube / Ribbon 1 (Top Center) */}
        <svg
          className="absolute -top-16 left-1/3 w-80 h-80 opacity-60 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] animate-pulse"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 100 C50 40, 150 40, 150 100 C150 160, 50 160, 50 100"
            stroke="url(#gradient-tube-1)"
            strokeWidth="32"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient-tube-1" x1="50" y1="40" x2="150" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#67E8F9" />
              <stop offset="0.5" stopColor="#38BDF8" />
              <stop offset="1" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
        </svg>

        {/* 3D Soft Tube / Ribbon 2 (Left Side) */}
        <svg
          className="absolute top-1/3 -left-12 w-96 h-96 opacity-50 filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 60 C120 60, 120 180, 180 180 C240 180, 240 240, 180 240"
            stroke="url(#gradient-tube-2)"
            strokeWidth="44"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient-tube-2" x1="60" y1="60" x2="240" y2="240" gradientUnits="userSpaceOnUse">
              <stop stopColor="#93C5FD" />
              <stop offset="0.6" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
        </svg>

        {/* 3D Soft Tube / S-Wave (Bottom Right) */}
        <svg
          className="absolute -bottom-20 right-4 w-[28rem] h-[28rem] opacity-65 filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 320 C80 200, 220 200, 220 120 C220 40, 360 40, 360 160"
            stroke="url(#gradient-tube-3)"
            strokeWidth="48"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient-tube-3" x1="80" y1="320" x2="360" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#2563EB" />
              <stop offset="1" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>
        </svg>

        {/* 3D Floating Ring (Bottom Left) */}
        <svg
          className="absolute bottom-10 left-1/4 w-48 h-48 opacity-45 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="80" cy="80" r="50" stroke="url(#gradient-ring)" strokeWidth="24" />
          <defs>
            <linearGradient id="gradient-ring" x1="30" y1="30" x2="130" y2="130" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A5F3FC" />
              <stop offset="1" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
        </svg>

      </div>

      {/* Main Content with Suspense */}
      <Suspense
        fallback={
          <div className="w-full max-w-md p-10 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 text-center text-white">
            <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm font-semibold">Loading Personal Workspace...</p>
          </div>
        }
      >
        <LoginFormContent />
      </Suspense>
    </div>
  );
}

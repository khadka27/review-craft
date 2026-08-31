"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
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
    <div className="w-full max-w-md">
      {/* Glassmorphic Card */}
      <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/40">
        
        {/* Header Icon */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 text-indigo-400 mb-4 shadow-inner">
            <ShieldCheck className="w-8 h-8 text-indigo-400 animate-pulse" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Personal Workspace
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Sign in to enable ad-free mode and prevent accidental ad clicks.
          </p>
        </div>

        {/* Already logged in view */}
        {isAuthenticated ? (
          <div className="space-y-6">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-4 text-emerald-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-emerald-200">
                    Ad-Free Personal Mode Active
                  </p>
                  <p className="mt-1 text-emerald-300/80 leading-relaxed text-xs">
                    Logged in as <span className="font-bold text-white">{username}</span>. All Google AdSense units, auto-ads, and external promotional scripts are completely suppressed.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link
                href={redirectPath}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 hover:from-indigo-500 hover:to-violet-500 transition-all active:scale-[0.99]"
              >
                <Sparkles className="w-4 h-4" />
                Open Review Generators
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-700/60 bg-slate-800/40 px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors disabled:opacity-50 cursor-pointer"
              >
                <LogOut className="w-4 h-4 text-slate-400" />
                {submitting ? "Signing out..." : "Sign Out"}
              </button>
            </div>
          </div>
        ) : (
          /* Login Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && (
              <div className="rounded-xl border border-red-500/30 bg-red-950/40 p-3.5 text-sm text-red-300 flex items-start gap-2.5 animate-slide-in">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{errorMessage}</span>
              </div>
            )}

            {/* Username input */}
            <div className="space-y-1.5">
              <label
                htmlFor="username"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
              >
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  value={inputUsername}
                  onChange={(e) => setInputUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full rounded-xl border border-slate-700/60 bg-slate-800/60 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                />
              </div>
            </div>

            {/* Password input */}
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded-xl border border-slate-700/60 bg-slate-800/60 pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 transition-colors"
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

            {/* Notice */}
            <div className="pt-1">
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Credentials are configured securely in your server environment (<code className="text-slate-400">.env</code>).
              </p>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={submitting || isLoading}
              className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 hover:from-indigo-500 hover:to-violet-500 hover:shadow-indigo-900/60 transition-all active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {submitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Signing In...</span>
                </div>
              ) : (
                <>
                  <span>Sign In & Activate Ad-Free Mode</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Bottom link */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 text-center">
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
          >
            ← Back to ReviewCraft Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      {/* Ambient background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/20 to-purple-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-600/10 blur-[90px] rounded-full" />
      </div>

      <Suspense
        fallback={
          <div className="w-full max-w-md p-8 rounded-3xl border border-slate-800/80 bg-slate-900/80 text-center text-slate-400">
            <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm">Loading workspace...</p>
          </div>
        }
      >
        <LoginFormContent />
      </Suspense>
    </div>
  );
}

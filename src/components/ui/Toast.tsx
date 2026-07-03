"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

export type ToastType = "success" | "error" | "info";

export interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType, duration?: number) => void;
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (message: string, type: ToastType = "info", duration = 4000) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type, duration }]);

      setTimeout(() => {
        removeToast(id);
      }, duration);
    },
    [removeToast]
  );

  const success = useCallback((message: string, duration?: number) => toast(message, "success", duration), [toast]);
  const error = useCallback((message: string, duration?: number) => toast(message, "error", duration), [toast]);
  const info = useCallback((message: string, duration?: number) => toast(message, "info", duration), [toast]);

  return (
    <ToastContext.Provider value={{ toast, success, error, info }}>
      {children}
      {/* Toast container */}
      <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl border pointer-events-auto shadow-2xl animate-slide-in transition-all duration-300"
            style={{
              background: "rgba(17, 24, 39, 0.9)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderColor:
                t.type === "success"
                  ? "rgba(16, 185, 129, 0.4)"
                  : t.type === "error"
                  ? "rgba(239, 68, 68, 0.4)"
                  : "rgba(59, 130, 246, 0.4)",
              boxShadow:
                t.type === "success"
                  ? "0 10px 25px -5px rgba(16, 185, 129, 0.2)"
                  : t.type === "error"
                  ? "0 10px 25px -5px rgba(239, 68, 68, 0.2)"
                  : "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
            }}
          >
            <div className="flex-shrink-0">
              {t.type === "success" && <CheckCircle className="text-emerald-400 w-5 h-5" />}
              {t.type === "error" && <XCircle className="text-red-400 w-5 h-5" />}
              {t.type === "info" && <Info className="text-blue-400 w-5 h-5" />}
            </div>
            
            <p className="text-sm font-medium text-white flex-grow leading-snug">
              {t.message}
            </p>

            <button
              onClick={() => removeToast(t.id)}
              className="flex-shrink-0 text-gray-400 hover:text-white p-0.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

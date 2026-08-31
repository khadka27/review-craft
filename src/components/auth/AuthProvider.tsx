"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  isLoading: boolean;
  login: (
    user: string,
    pass: string
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  username: null,
  isLoading: true,
  login: async () => ({ success: false }),
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
  initialIsAuthenticated?: boolean;
  initialUsername?: string | null;
}

export function AuthProvider({
  children,
  initialIsAuthenticated = false,
  initialUsername = null,
}: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    initialIsAuthenticated
  );
  const [username, setUsername] = useState<string | null>(initialUsername);
  const [isLoading, setIsLoading] = useState(!initialIsAuthenticated);

  // Synchronize DOM attributes for CSS ad suppression
  const syncDomAdState = useCallback((adFree: boolean) => {
    if (typeof document === "undefined") return;
    if (adFree) {
      document.documentElement.setAttribute("data-ad-free", "true");
      document.body?.classList.add("ad-free-mode");
    } else {
      document.documentElement.removeAttribute("data-ad-free");
      document.body?.classList.remove("ad-free-mode");
    }
  }, []);

  // Check session on mount if not provided from server layout
  useEffect(() => {
    let isMounted = true;

    syncDomAdState(isAuthenticated);

    const checkSession = async () => {
      try {
        const res = await fetch("/api/auth/session", {
          method: "GET",
          headers: { "Cache-Control": "no-cache" },
        });
        if (!res.ok) throw new Error("Failed to fetch session");
        const data = await res.json();
        if (isMounted) {
          setIsAuthenticated(Boolean(data.authenticated));
          setUsername(data.username || null);
          syncDomAdState(Boolean(data.authenticated));
        }
      } catch (err) {
        console.error("Session check error:", err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    checkSession();

    return () => {
      isMounted = false;
    };
  }, [syncDomAdState]);

  const login = async (user: string, pass: string) => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: user, password: pass }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setUsername(data.user?.username || user);
        syncDomAdState(true);
        return { success: true, message: data.message };
      } else {
        return {
          success: false,
          message: data.message || "Invalid credentials",
        };
      }
    } catch (err) {
      console.error("Login request failed:", err);
      return {
        success: false,
        message: "An error occurred while signing in. Please try again.",
      };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await fetch("/api/auth/logout", {
        method: "POST",
      });
      setIsAuthenticated(false);
      setUsername(null);
      syncDomAdState(false);
    } catch (err) {
      console.error("Logout request failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        username,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

function isLoginPath(pathname: string): boolean {
  return pathname === "/login" || pathname === "/login/";
}

const authGateDisabled = process.env.NEXT_PUBLIC_DISABLE_AUTH_GATE === "true";

export function AuthGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (authGateDisabled) return;

    if (isLoginPath(pathname)) {
      setAllowed(true);
      setReady(true);
      return;
    }

    if (isAuthenticated()) {
      setAllowed(true);
      setReady(true);
      return;
    }

    const redirect = pathname === "/" ? "" : `?redirect=${encodeURIComponent(pathname)}`;
    router.replace(`/login${redirect}`);
  }, [pathname, router]);

  if (authGateDisabled) {
    return <>{children}</>;
  }

  if (isLoginPath(pathname)) {
    return <>{children}</>;
  }

  if (!ready || !allowed) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-black text-white/60">
        <p className="text-sm">Checking access…</p>
      </div>
    );
  }

  return <>{children}</>;
}

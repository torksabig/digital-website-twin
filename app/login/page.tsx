import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/LoginForm";
import "./login.css";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to access the digital website twin preview.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="login-theme flex min-h-svh flex-col lg:flex-row">
      <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-12">
        <Suspense fallback={<p className="text-sm text-muted-foreground">Loading…</p>}>
          <LoginForm />
        </Suspense>
      </div>

      <div className="relative hidden flex-1 bg-primary lg:block">
        <div className="flex h-full flex-col justify-between p-12 text-primary-foreground">
          <div className="font-serif text-xl font-semibold">Aether Applied</div>

          <blockquote className="max-w-md">
            <p className="text-2xl font-medium leading-relaxed text-balance">
              &ldquo;This digital twin lets us preview site changes safely before anything touches
              production.&rdquo;
            </p>
            <footer className="mt-6 text-sm text-primary-foreground/70">
              Digital twin preview &middot; Staging only
            </footer>
          </blockquote>

          <div className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Aether Applied. Twin access only.
          </div>
        </div>
      </div>
    </main>
  );
}

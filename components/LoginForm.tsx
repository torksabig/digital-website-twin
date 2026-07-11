"use client";

import type React from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/login-ui/button";
import { Input } from "@/components/login-ui/input";
import { Label } from "@/components/login-ui/label";
import { Checkbox } from "@/components/login-ui/checkbox";
import { getSitePassword, setAuthenticated } from "@/lib/auth";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    const form = event.currentTarget;
    const password = new FormData(form).get("password")?.toString() ?? "";
    const remember = form.elements.namedItem("remember") instanceof HTMLInputElement
      ? (form.elements.namedItem("remember") as HTMLInputElement).checked
      : false;

    window.setTimeout(() => {
      if (password !== getSitePassword()) {
        setError("Incorrect password. Check README for twin demo credentials.");
        setIsLoading(false);
        return;
      }

      setAuthenticated(remember);
      const redirect = searchParams.get("redirect");
      router.replace(redirect && redirect.startsWith("/") && !redirect.startsWith("/login") ? redirect : "/");
      router.refresh();
    }, 400);
  }

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8 flex flex-col gap-2">
        <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <span className="font-serif text-lg font-semibold">A</span>
        </div>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-balance">Welcome back</h1>
        <p className="text-sm text-muted-foreground text-pretty">
          Sign in to access the digital twin preview.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <span className="text-sm font-medium text-muted-foreground">Twin access only</span>
          </div>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        {error ? (
          <p className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
            {error}
          </p>
        ) : null}

        <div className="flex items-center gap-2">
          <Checkbox id="remember" name="remember" defaultChecked />
          <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground">
            Remember me for 30 days
          </Label>
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Digital twin staging — not for production use.
      </p>
    </div>
  );
}

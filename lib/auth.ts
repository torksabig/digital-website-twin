export const AUTH_COOKIE = "twin-auth";
export const AUTH_STORAGE_KEY = "twin-auth";
export const REMEMBER_DAYS = 30;

export function getSitePassword(): string {
  return process.env.NEXT_PUBLIC_SITE_PASSWORD ?? "twin-demo";
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  if (sessionStorage.getItem(AUTH_STORAGE_KEY) === "1") return true;
  return document.cookie.split("; ").some((c) => c === `${AUTH_COOKIE}=1`);
}

export function setAuthenticated(remember: boolean): void {
  sessionStorage.setItem(AUTH_STORAGE_KEY, "1");
  if (remember) {
    const maxAge = REMEMBER_DAYS * 24 * 60 * 60;
    document.cookie = `${AUTH_COOKIE}=1; path=/; max-age=${maxAge}; SameSite=Lax`;
  } else {
    document.cookie = `${AUTH_COOKIE}=1; path=/; SameSite=Lax`;
  }
}

export function clearAuthenticated(): void {
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
  document.cookie = `${AUTH_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
}

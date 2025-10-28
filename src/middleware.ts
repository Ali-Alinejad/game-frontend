import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware to set a `lang` cookie based on visitor country.
 * - If a `lang` cookie already exists, do nothing.
 * - Otherwise, use `req.geo?.country` or common headers and set `lang=fa` for Iran (IR), else `lang=en`.
 */
export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  try {
    const cookieLang = req.cookies.get("lang")?.value;
    if (!cookieLang) {
      const country =
        ((req as any).geo?.country as string) ||
        req.headers.get("x-vercel-ip-country") ||
        req.headers.get("cf-ipcountry") ||
        req.headers.get("x-vercel-country") ||
        "";

      if (country && country.toUpperCase() === "IR") {
        res.cookies.set("lang", "fa", {
          path: "/",
          maxAge: 60 * 60 * 24 * 365,
        });
      } else {
        res.cookies.set("lang", "en", {
          path: "/",
          maxAge: 60 * 60 * 24 * 365,
        });
      }
    }
  } catch (e) {
    // Fail silently — middleware should not break the request
    console.warn("language middleware error", e);
  }

  return res;
}

export const config = {
  // run on all routes so the cookie exists on first visit
  matcher: ["/:path*"],
};

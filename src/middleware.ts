import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface NextRequestWithGeo extends NextRequest {
  geo?: { country?: string };
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  try {
    const cookieLang = req.cookies.get("lang")?.value;

    if (!cookieLang) {
      // Cast to include geo
      const reqWithGeo = req as NextRequestWithGeo;
      const country = (
        reqWithGeo.geo?.country ??
        req.headers.get("x-vercel-ip-country") ??
        req.headers.get("cf-ipcountry") ??
        req.headers.get("x-vercel-country") ??
        ""
      ).toUpperCase();

      const lang = country === "IR" ? "fa" : "en";

      res.cookies.set("lang", lang, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 year
      });
    }
  } catch (e) {
    console.warn("language middleware error", e);
  }

  return res;
}

export const config = {
  matcher: ["/:path*"],
};

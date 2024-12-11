import acceptLanguage from "accept-language";
import { type NextRequest, NextResponse } from "next/server";

import { fallbackLng, languages } from "@/lib/i18n/settings";

const locales = languages;
acceptLanguage.languages(languages);

const NEXT_LOCAL = "NEXT_LOCALE";

// Get the preferred locale, similar to the above or using a library
function getLocale(req: NextRequest) {
    return (req.cookies.has(NEXT_LOCAL)
    // @ts-expect-error ignore .get possibly undefined
        && acceptLanguage.get(req.cookies.get(NEXT_LOCAL).value))
    || acceptLanguage.get(req.headers.get("Accept-Language"))
    || fallbackLng;
}

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname, search } = request.nextUrl;
    const lngInReferer = locales.find(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

    if (lngInReferer) {
        const response = NextResponse.next();
        response.cookies.set(NEXT_LOCAL, lngInReferer);
        return response;
    }

    // Redirect if there is no locale in pathname
    const locale = getLocale(request);
    console.log(`locale ${locale}`);
    request.nextUrl.pathname = `/${locale}${pathname}${search}`;
    const response = NextResponse.redirect(request.nextUrl);
    response.cookies.set(NEXT_LOCAL, locale);
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return response;
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next).*)",
        // Optional: only run on root (/) URL
        // '/'
    ],
};

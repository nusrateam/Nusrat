import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if it's an admin path
    const isAdminPath = pathname.match(/^\/(uz|en|ar|tr|az|kk|ky|tk)\/admin/);
    const isLoginPage = pathname.match(/^\/(uz|en|ar|tr|az|kk|ky|tk)\/admin\/login/);

    if (isAdminPath && !isLoginPage) {
        const adminToken = request.cookies.get('admin_token');

        // If not authenticated, redirect to login
        if (!adminToken || adminToken.value !== 'authenticated') {
            // Extract locale to redirect correctly
            const localeMatch = pathname.match(/^\/(uz|en|ar|tr|az|kk|ky|tk)/);
            const locale = localeMatch ? localeMatch[1] : 'uz'; // Default to 'uz' if somehow missing but matched

            return NextResponse.redirect(new URL(`/${locale}/admin/login`, request.url));
        }
    }

    return intlMiddleware(request);
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(uz|en|ar|tr|az|kk|ky|tk)/:path*']
};

import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['uz', 'en', 'ar', 'tr', 'az', 'kk', 'ky', 'tk'],
    defaultLocale: 'uz',
    localePrefix: 'always'
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);

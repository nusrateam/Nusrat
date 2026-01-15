"use client";

import { useLocale } from "next-intl";
import { routing, useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Globe } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const languages = [
    { code: "uz", label: "O'zbek", flag: "🇺🇿" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "ar", label: "العربي", flag: "🇸🇦" },
    { code: "tr", label: "Türkçe", flag: "🇹🇷" },
    { code: "az", label: "Azerbaycan", flag: "🇦🇿" },
    { code: "kk", label: "Қазақ", flag: "🇰🇿" },
    { code: "ky", label: "Кыргыз", flag: "🇰🇬" },
    { code: "tk", label: "Turkmen", flag: "🇹🇲" },
];

export function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const currentLocale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (locale: string) => {
        router.replace(pathname, { locale });
        setIsOpen(false);
    };

    const activeLang = languages.find((l) => l.code === currentLocale);

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-2"
            >
                <Globe size={18} />
                <span className="hidden sm:inline font-bold uppercase tracking-tight">{currentLocale}</span>
            </Button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-50 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 mb-2">
                            Select Language
                        </div>
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={cn(
                                    "w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors",
                                    currentLocale === lang.code ? "text-primary font-bold bg-primary/5" : "text-slate-600 dark:text-slate-400"
                                )}
                            >
                                <span>{lang.flag} {lang.label}</span>
                                {currentLocale === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

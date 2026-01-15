"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("Navbar");

    const links = [
        { label: t("about"), href: "/about" },
        { label: t("projects"), href: "/projects" },
        { label: t("blog"), href: "/blog" },
        { label: t("team"), href: "/team" },
        { label: t("contact"), href: "/contact" },
        { label: "Admin", href: "/admin" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/logo.png"
                        alt="Nusrat Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto transition-transform group-hover:scale-105 object-contain"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href as "/"}
                            className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors uppercase tracking-tight"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
                    <LanguageSwitcher />
                    <Button variant="primary" size="sm" className="font-bold">
                        {t("getStarted")}
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <LanguageSwitcher />
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href as "/"}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-bold text-slate-600 dark:text-slate-300 uppercase tracking-tight"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button className="w-full font-bold">{t("getStarted")}</Button>
                </div>
            )}
        </nav>
    );
}

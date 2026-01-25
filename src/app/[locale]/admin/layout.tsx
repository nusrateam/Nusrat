"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { LayoutDashboard, PenTool, Sparkles, Settings, Users, Briefcase, Globe, LogOut, MessageSquare, Menu, X } from "lucide-react";
import { logout } from "@/app/actions/auth";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations("Common");
    const at = useTranslations("AIAssistant");

    const menuItems = [
        { icon: LayoutDashboard, label: t("dashboard"), href: "/admin" },
        { icon: MessageSquare, label: "Murojaatlar", href: "/admin/inquiries" },
        { icon: Sparkles, label: t("aiAssistant"), href: "/admin/ai-assistant" },
        { icon: Briefcase, label: t("projects"), href: "/admin/projects" },
        { icon: PenTool, label: t("blog"), href: "/admin/blog" },
        { icon: Users, label: t("team"), href: "/admin/team" },
        { icon: Globe, label: t("seo"), href: "/admin/seo" },
        { icon: Settings, label: t("settings"), href: "/admin/settings" },
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Mobile Header */}
            <header className="md:hidden fixed top-0 w-full z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-16 flex items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={32} height={32} className="h-8 w-auto dark:invert" />
                    <span className="font-heading font-bold text-primary dark:text-white uppercase">Admin</span>
                </Link>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 text-slate-600 dark:text-slate-400"
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Backdrop for Mobile Sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={cn(
                "w-64 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 flex flex-col fixed inset-y-0 z-50 transition-transform duration-300 md:translate-x-0",
                locale === 'ar'
                    ? (isSidebarOpen ? "translate-x-0" : "translate-x-full") + " right-0 border-l"
                    : (isSidebarOpen ? "translate-x-0" : "-translate-x-full") + " left-0 border-r"
            )}>
                <div className="p-6 hidden md:block">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/logo.png"
                            alt="Nusrat Logo"
                            width={40}
                            height={40}
                            className="h-10 w-auto transition-transform group-hover:scale-105 dark:invert"
                            priority
                        />
                        <span className="font-heading text-lg font-bold text-primary dark:text-white uppercase">Admin</span>
                    </Link>
                </div>

                {/* Mobile Sidebar Close Button */}
                <div className="md:hidden p-4 flex justify-end">
                    <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-slate-500">
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-grow px-4 space-y-1 overflow-y-auto">
                    {menuItems.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href as "/admin"}
                                onClick={() => setIsSidebarOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all uppercase tracking-tight",
                                    active
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                                )}
                            >
                                <item.icon size={18} />
                                {item.label}
                            </Link>
                        )
                    })}
                    <button
                        onClick={() => logout()}
                        className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all uppercase tracking-tight text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10"
                    >
                        <LogOut size={18} />
                        {t("logout") || "Logout"}
                    </button>
                </nav>

                <div className="p-4 mt-auto">
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 text-xs">
                        <p className="font-bold text-slate-800 dark:text-white mb-1 uppercase">{at("title")} Pro</p>
                        <p className="text-slate-500 mb-3 font-medium">{at("description")}</p>
                        <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary w-3/4" />
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className={cn(
                "flex-grow p-4 md:p-8 pt-20 md:pt-8",
                locale === 'ar' ? "md:mr-64" : "md:ml-64"
            )}>
                {children}
            </main>
        </div>
    );
}

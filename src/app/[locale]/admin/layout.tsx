"use client";

import { Link } from "@/i18n/routing";
import { LayoutDashboard, PenTool, Sparkles, Settings, Users, Briefcase, Globe, LogOut, MessageSquare } from "lucide-react";
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

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Sidebar */}
            <aside className={cn(
                "w-64 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 flex flex-col fixed inset-y-0",
                locale === 'ar' ? "right-0 border-l" : "left-0 border-r"
            )}>
                <div className="p-6">
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

                <nav className="flex-grow px-4 space-y-2">
                    {menuItems.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href as "/admin"}
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
                "flex-grow p-8",
                locale === 'ar' ? "mr-64" : "ml-64"
            )}>
                {children}
            </main>
        </div>
    );
}

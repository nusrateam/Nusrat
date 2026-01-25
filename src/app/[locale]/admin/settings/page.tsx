"use client";

import * as React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Settings, Bell, Shield, Palette, Globe, Save, HelpCircle, HardDrive, Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

export default function AdminSettingsPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h1 className="text-3xl font-bold font-heading mb-2">Tizim Sozlamalari</h1>
                <p className="text-slate-500">Platforma parametrlarini va xavfsizlik sozlamalarini boshqaring.</p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 gap-1 scrollbar-hide">
                    {[
                        { icon: Settings, label: "Umumiy", active: true },
                        { icon: Palette, label: "Tashqi ko'rinish" },
                        { icon: Bell, label: "Bildirishnomalar" },
                        { icon: Shield, label: "Xavfsizlik" },
                        { icon: Globe, label: "Lokalizatsiya" },
                        { icon: HardDrive, label: "Ma'lumotlar" },
                    ].map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.label}
                                className={`flex-shrink-0 flex items-center gap-3 px-4 py-2 text-sm font-bold rounded-lg transition-colors whitespace-nowrap ${item.active ? "bg-primary text-white" : "text-slate-500 hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
                                    }`}
                            >
                                <Icon size={18} />
                                {item.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="md:col-span-3 space-y-6">
                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-bold font-heading">Umumiy ma&apos;lumotlar</h2>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Sayt Nomi</label>
                                    <input type="text" defaultValue="Nusrat" className="w-full p-2.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Sayt Shiori</label>
                                    <input type="text" defaultValue="Innovation. Create. Grow." className="w-full p-2.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Admin E-mail</label>
                                <input type="email" defaultValue="admin@nusrat.team" className="w-full p-2.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Qisqacha tavsif (Footer uchun)</label>
                                <textarea rows={3} defaultValue="Keyingi avlod professional mukammalligi uchun zamonaviy yechimlarni yaratish." className="w-full p-2.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm resize-none focus:ring-2 focus:ring-primary/20 outline-none" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card id="appearance">
                        <CardHeader>
                            <h2 className="text-lg font-bold font-heading">Tashqi ko&apos;rinish</h2>
                        </CardHeader>
                        <CardContent>
                            <div className="p-4 bg-slate-50/50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                                <h4 className="text-sm font-bold mb-4">Mavzuni tanlash</h4>
                                <ThemeSelector />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-bold font-heading">Xavfsizlik &amp; Kirish</h2>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 gap-4">
                                <div className="text-center sm:text-left">
                                    <h4 className="text-sm font-bold">Ikki bosqichli autentifikatsiya (2FA)</h4>
                                    <p className="text-xs text-slate-500">Hisobingiz xavfsizligini oshirish uchun 2FA-ni yoqing.</p>
                                </div>
                                <div className="w-10 h-5 bg-primary rounded-full relative shrink-0">
                                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 gap-4">
                                <div className="text-center sm:text-left">
                                    <h4 className="text-sm font-bold">Login Bildirishnomalari</h4>
                                    <p className="text-xs text-slate-500">Har bir yangi kirishda elektron pochta orqali xabar olish.</p>
                                </div>
                                <div className="w-10 h-5 bg-slate-200 dark:bg-slate-700 rounded-full relative shrink-0">
                                    <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="bg-slate-50/50 dark:bg-slate-800/30 flex flex-col sm:flex-row justify-between gap-4">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <HelpCircle size={14} /> Ko&apos;proq ma&apos;lumot oling
                            </div>
                            <Button className="flex items-center gap-2 w-full sm:w-auto justify-center">
                                <Save size={16} /> O&apos;zgarishlarni saqlash
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function ThemeSelector() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
                onClick={() => setTheme("light")}
                className={`flex-1 p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${theme === "light" ? "border-primary bg-primary/10 text-primary shadow-lg shadow-primary/20" : "border-slate-200 dark:border-slate-700 bg-background hover:border-primary/50"}`}
            >
                <Sun size={24} />
                <span className="text-sm font-bold">Kunduzgi</span>
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={`flex-1 p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${theme === "dark" ? "border-primary bg-primary/10 text-primary shadow-lg shadow-primary/20" : "border-slate-200 dark:border-slate-700 bg-background hover:border-primary/50"}`}
            >
                <Moon size={24} />
                <span className="text-sm font-bold">Tungi</span>
            </button>
            <button
                onClick={() => setTheme("system")}
                className={`flex-1 p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${theme === "system" ? "border-primary bg-primary/10 text-primary shadow-lg shadow-primary/20" : "border-slate-200 dark:border-slate-700 bg-background hover:border-primary/50"}`}
            >
                <Laptop size={24} />
                <span className="text-sm font-bold">Tizim</span>
            </button>
        </div>
    );
}

"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Globe, Search, BarChart3, ArrowUpRight, Save, RotateCcw, ShieldCheck } from "lucide-react";


export default function AdminSEOPage() {

    const pages = [
        { path: "/", title: "Home", score: 94, keywords: 12, issues: 0 },
        { path: "/about", title: "About Us", score: 88, keywords: 8, issues: 2 },
        { path: "/projects", title: "Portfolio", score: 91, keywords: 15, issues: 1 },
        { path: "/blog", title: "Blog", score: 82, keywords: 24, issues: 4 },
        { path: "/contact", title: "Contact", score: 96, keywords: 5, issues: 0 },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-heading mb-2">SEO Optimizatsiyasi</h1>
                    <p className="text-slate-500">Saytingizning qidiruv tizimlaridagi reytingini kuzating va boshqaring.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2">
                        <RotateCcw size={18} />
                        Qayta tahlil qilish
                    </Button>
                    <Button className="flex items-center gap-2">
                        <Save size={18} />
                        Barcha sozlamalarni saqlash
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-green-100/50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
                                <BarChart3 size={20} />
                            </div>
                            <span className="text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-100/50 dark:bg-green-900/20 px-2 py-1 rounded-full">+2.4%</span>
                        </div>
                        <h3 className="text-2xl font-bold">92/100</h3>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{"O'rtacha"} SEO balli</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                                <Search size={20} />
                            </div>
                            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/20 px-2 py-1 rounded-full">+15%</span>
                        </div>
                        <h3 className="text-2xl font-bold">14.2k</h3>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Oylik Organik Kliklar</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-100/50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg">
                                <Globe size={20} />
                            </div>
                            <span className="text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-100/50 dark:bg-green-900/20 px-2 py-1 rounded-full">Yaxshi</span>
                        </div>
                        <h3 className="text-2xl font-bold">248</h3>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{"Kalit so'zlar indeksi"}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-orange-100/50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-lg">
                                <ShieldCheck size={20} />
                            </div>
                            <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 bg-orange-100/50 dark:bg-orange-900/20 px-2 py-1 rounded-full">7 Xato</span>
                        </div>
                        <h3 className="text-2xl font-bold">98%</h3>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Sog'lomlik ko'rsatkichi</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader className="border-b border-slate-100 dark:border-slate-800">
                    <h2 className="text-xl font-bold font-heading">Sahifalar Bo'yicha SEO Tahlili</h2>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-100/50 dark:bg-slate-800/50 text-xs font-bold uppercase tracking-widest text-slate-500">
                                <tr>
                                    <th className="px-6 py-4">Sahifa</th>
                                    <th className="px-6 py-4">URL</th>
                                    <th className="px-6 py-4">SEO Balli</th>
                                    <th className="px-6 py-4">{"Kalit so'zlar"}</th>
                                    <th className="px-6 py-4">Muammolar</th>
                                    <th className="px-6 py-4 text-right">Boshqarish</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {pages.map((page) => (
                                    <tr key={page.path} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4 font-bold text-slate-800 dark:text-white">{page.title}</td>
                                        <td className="px-6 py-4 text-sm text-slate-500">{page.path}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-12 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${page.score >= 90 ? "bg-green-500" : page.score >= 80 ? "bg-blue-500" : "bg-orange-500"
                                                            }`}
                                                        style={{ width: `${page.score}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs font-bold">{page.score}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium">{page.keywords}</td>
                                        <td className="px-6 py-4">
                                            {page.issues > 0 ? (
                                                <span className="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-100/50 dark:bg-orange-900/20 px-2 py-1 rounded-full">
                                                    {page.issues} ta topildi
                                                </span>
                                            ) : (
                                                <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100/50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                                    {"Muammo yo'q"}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Button variant="ghost" size="sm" className="text-primary font-bold">
                                                Optimallashtirish <ArrowUpRight className="ml-1" size={14} />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

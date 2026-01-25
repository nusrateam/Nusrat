"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Plus, Search, Filter, PenTool, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function AdminBlogPage() {
    const t = useTranslations("Blog");
    const [searchQuery, setSearchQuery] = useState("");

    const posts = [
        { id: "1", title: t("data.1.title"), category: t("data.1.category"), author: t("data.1.author"), date: t("data.1.date"), status: "Nashr qilingan" },
        { id: "2", title: t("data.2.title"), category: t("data.2.category"), author: t("data.2.author"), date: t("data.2.date"), status: "Nashr qilingan" },
        { id: "3", title: t("data.3.title"), category: t("data.3.category"), author: t("data.3.author"), date: t("data.3.date"), status: "Qoralama" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-heading mb-2">{t("title")} boshqaruvi</h1>
                    <p className="text-slate-500">Blog postlarini boshqaring va SI yordamida yangi kontent yarating.</p>
                </div>
                <div className="flex gap-3">
                    <Link href="/admin/ai-assistant">
                        <Button variant="outline" className="flex items-center gap-2 text-primary border-primary/20 hover:bg-primary/5 dark:text-blue-400 dark:border-blue-900/50">
                            <Sparkles size={18} />
                            SI bilan yozish
                        </Button>
                    </Link>
                    <Button className="flex items-center gap-2">
                        <Plus size={18} />
                        Yangi post
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Card className="bg-primary/10 dark:bg-primary/5 border-primary/10">
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/20">
                                <PenTool size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Jami postlar</p>
                                <h3 className="text-2xl font-bold">128</h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-green-100/50 dark:bg-green-900/10 border-green-100/50 dark:border-green-900/20">
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-500 text-white rounded-xl shadow-lg shadow-green-500/20">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Nashr qilingan</p>
                                <h3 className="text-2xl font-bold">115</h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-orange-100/50 dark:bg-orange-900/10 border-orange-100/50 dark:border-orange-900/20">
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-500/20">
                                <Clock size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Qoralamalar</p>
                                <h3 className="text-2xl font-bold">13</h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader className="border-b border-slate-100 dark:border-slate-800 p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="relative flex-grow max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Maqolalarni qidiring..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-slate-50/50 dark:bg-slate-800/50 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                            />
                        </div>
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                            <Filter size={16} />
                            Filtrlash
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="space-y-0 divide-y divide-slate-100 dark:divide-slate-800">
                        {posts.map((post) => (
                            <div key={post.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${post.status === "Nashr qilingan" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                                            }`}>
                                            {post.status}
                                        </span>
                                        <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-800 dark:text-white hover:text-primary transition-colors cursor-pointer">
                                        {post.title}
                                    </h4>
                                    <div className="flex items-center gap-4 mt-2">
                                        <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {post.category}
                                        </span>
                                        <span className="text-xs text-slate-500 font-medium">Muallif: <span className="text-slate-800 dark:text-slate-300">{post.author}</span></span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="font-bold uppercase tracking-tight text-[10px]">Tahrirlash</Button>
                                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2">
                                        <Clock size={16} />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Plus, Search, Filter, Edit2, Trash2, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AdminProjectsPage() {
    const t = useTranslations("Projects");
    const [searchQuery, setSearchQuery] = useState("");

    const projects = [
        { id: "1", title: t("data.1.title"), category: t("data.1.category"), status: t("data.1.status"), date: "2024-01-10" },
        { id: "2", title: t("data.2.title"), category: t("data.2.category"), status: t("data.2.status"), date: "2024-01-08" },
        { id: "3", title: t("data.3.title"), category: t("data.3.category"), status: t("data.3.status"), date: "2024-01-05" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-heading mb-2">{t("title")} boshqaruvi</h1>
                    <p className="text-slate-500">Portfolio loyihalarini tahrirlang va yangilarini {"qo'shing"}.</p>
                </div>
                <Button className="flex items-center gap-2">
                    <Plus size={18} />
                    Yangi loyiha
                </Button>
            </div>

            <Card>
                <CardHeader className="border-b border-slate-100 dark:border-slate-800 p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="relative flex-grow max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Loyihalarni qidiring..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="sm" className="flex items-center gap-2">
                                <Filter size={16} />
                                Filtrlash
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs font-bold uppercase tracking-widest text-slate-500">
                                <tr>
                                    <th className="px-6 py-4">Loyiha</th>
                                    <th className="px-6 py-4">Kategoriya</th>
                                    <th className="px-6 py-4">Holat</th>
                                    <th className="px-6 py-4">Sana</th>
                                    <th className="px-6 py-4 text-right">Amallar</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {projects.map((project) => (
                                    <tr key={project.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-slate-800 dark:text-white">{project.title}</div>
                                            <div className="text-xs text-slate-400">ID: {project.id}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">
                                                {project.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${project.status === "Tugallangan"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-orange-100 text-orange-600"
                                                }`}>
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500">
                                            {project.date}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-primary transition-colors">
                                                    <Edit2 size={16} />
                                                </button>
                                                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-red-500 transition-colors">
                                                    <Trash2 size={16} />
                                                </button>
                                                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-secondary transition-colors">
                                                    <ExternalLink size={16} />
                                                </button>
                                            </div>
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

"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { UserPlus, Edit, Trash2, Shield, MoreHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AdminTeamPage() {
    const t = useTranslations("Team");
    const [activeView, setActiveView] = useState("all");

    const members = [
        { id: "alex", name: "Alimjonov Abdulvosit", role: t("members.alex.role"), bio: t("members.alex.bio"), status: "Faol", access: "Admin" },
        { id: "sarah", name: "Yuldoshev Shohrux", role: t("members.sarah.role"), bio: t("members.sarah.bio"), status: "Faol", access: "Mutaxassis" },
        { id: "michael", name: "Ma'rufxonov Orifxon", role: t("members.michael.role"), bio: t("members.michael.bio"), status: "Faol", access: "Mutaxassis" },
        { id: "elena", name: "Abduvahhobov Jahongir", role: t("members.elena.role"), bio: t("members.elena.bio"), status: "Faol", access: "Mutaxassis" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-heading mb-2">Jamoa boshqaruvi</h1>
                    <p className="text-slate-500">Mutaxassislarni boshqaring va ularga ruxsatnomalar bering.</p>
                </div>
                <Button className="flex items-center gap-2">
                    <UserPlus size={18} />
                    {"Yangi a'zo"}
                </Button>
            </div>

            <div className="flex gap-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                {[
                    { id: "all", label: "Barcha a'zolar" },
                    { id: "admins", label: "Adminlar" },
                    { id: "roles", label: "Rollar" }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveView(tab.id)}
                        className={`px-4 py-2 text-sm font-bold transition-all ${activeView === tab.id ? "text-primary border-b-2 border-primary" : "text-slate-400"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                    <Card key={member.id} className="group relative overflow-hidden">
                        <CardHeader className="pb-4">
                            <div className="flex items-start justify-between">
                                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    <Shield size={32} />
                                </div>
                                <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{member.name}</h3>
                                <p className="text-sm font-bold text-primary uppercase tracking-tight">{member.role}</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                                {member.bio}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400 rounded uppercase tracking-tighter">
                                    {member.access}
                                </span>
                                <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-tighter ${member.status === "Faol" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                                    }`}>
                                    {member.status}
                                </span>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-0 border-t border-slate-50 dark:border-slate-800/50 mt-2">
                            <div className="flex w-full divide-x divide-slate-50 dark:divide-slate-800/50">
                                <button className="flex-1 py-3 flex items-center justify-center gap-2 text-xs font-bold text-slate-400 hover:text-primary transition-colors">
                                    <Edit size={14} /> Tahrirlash
                                </button>
                                <button className="flex-1 py-3 flex items-center justify-center gap-2 text-xs font-bold text-slate-400 hover:text-red-500 transition-colors">
                                    <Trash2 size={14} /> {"O'chirish"}
                                </button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

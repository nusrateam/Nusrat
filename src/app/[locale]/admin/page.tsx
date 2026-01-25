"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { TrendingUp, Users, Briefcase, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";
import { getInquiryCount } from "@/app/actions/inquiry";
import { teamMembers } from "@/data/team";

export default function AdminDashboard() {
    const t = useTranslations("Admin");
    const [inquiryCount, setInquiryCount] = useState<number | string>("...");

    useEffect(() => {
        console.log("AdminDashboard: Fetching inquiry count...");
        getInquiryCount().then((count) => {
            console.log("AdminDashboard: Received count:", count);
            setInquiryCount(count);
        }).catch(err => console.error("AdminDashboard: Error fetching count", err));
    }, []);

    const stats = [
        { label: t("stats.projects"), value: "24", icon: Briefcase, color: "text-blue-600" },
        { label: t("stats.team"), value: teamMembers.length.toString(), icon: Users, color: "text-green-600" },
        { label: t("stats.inquiries"), value: inquiryCount.toString(), icon: MessageSquare, color: "text-purple-600" },
        { label: t("stats.growth"), value: "+12%", icon: TrendingUp, color: "text-orange-600" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-heading mb-2">{t("title")}</h1>
                <p className="text-slate-500">{t("welcome")}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat) => (
                    <Card key={stat.label}>
                        <CardHeader className="flex flex-row items-center justify-between p-6">
                            <div className={stat.color}>
                                <stat.icon size={24} />
                            </div>
                            <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">+4%</span>
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                            <p className="text-sm text-slate-500">{stat.label}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <h2 className="text-xl font-bold font-heading">{t("activity.title")}</h2>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <div>
                                        <p className="text-sm font-medium">{t("activity.projectApproved")}</p>
                                        <p className="text-xs text-slate-400">{t("activity.hoursAgo", { count: 2 })}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <h2 className="text-xl font-bold font-heading">{t("aiTips.title")}</h2>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                            <p className="text-sm text-primary font-bold mb-2 tracking-tight">{t("aiTips.strategyTitle")}</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                                {t("aiTips.strategyDesc")}
                            </p>
                        </div>
                        <div className="p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                            <p className="text-sm text-secondary font-bold mb-2 tracking-tight">{t("aiTips.seoTitle")}</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                                {t("aiTips.seoDesc")}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

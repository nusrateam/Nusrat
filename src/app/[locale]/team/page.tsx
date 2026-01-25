"use client";

import Image from "next/image";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Github, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

import { teamMembers } from "@/data/team";

export default function TeamPage() {
    const t = useTranslations("Team");


    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-32 pb-12 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-800 to-primary/80 opacity-90" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 drop-shadow-sm">{t("title")}</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
                        {t("description")}
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid md:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <Card key={member.name} className="group text-center hover:shadow-2xl transition-all duration-500 border-slate-100 dark:border-slate-800 bg-card">
                            <CardHeader>
                                <div className="w-32 h-32 mx-auto bg-slate-50 dark:bg-slate-800 rounded-full mb-6 relative overflow-hidden ring-4 ring-slate-100/50 dark:ring-slate-800 group-hover:ring-primary/20 transition-all shadow-inner">
                                    {(member as any).image ? (
                                        <Image
                                            src={(member as any).image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xs uppercase tracking-widest">{t("photo")}</div>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold font-heading">{member.name}</h3>
                                <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-4">{t(`members.${member.id}.role`)}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-500 text-sm mb-6 leading-relaxed italic">"{t(`members.${member.id}.bio`)}"</p>
                                <div className="flex flex-wrap justify-center gap-2 mb-8">
                                    {member.skills.map((skill) => (
                                        <span key={skill} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[9px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors"><Github size={18} /></a>
                                    <a href={member.socials.website} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors"><Globe size={18} /></a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            <Footer />
        </main>
    );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Search } from "lucide-react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const projects = [
    {
        id: "1",
        title: "EcoSphere AI",
        category: "AI Solutions",
        description: "An AI-powered environmental monitoring system for smart cities.",
        tech: ["Next.js", "Python", "TensorFlow"],
        status: "Completed",
        image: "/project1.jpg",
    },
    {
        id: "2",
        title: "GlobalPay Next",
        category: "Fintech",
        description: "Cross-border payment gateway with real-time settlement.",
        tech: ["TypeScript", "PostgreSQL", "Node.js"],
        status: "Ongoing",
        image: "/project2.jpg",
    },
    {
        id: "3",
        title: "Nusrat Dashboard",
        category: "Enterprise",
        description: "Internal team management and growth tracking platform.",
        tech: ["Next.js", "Tailwind", "Prisma"],
        status: "Completed",
        image: "/project3.jpg",
    },
];

const categories = ["All", "AI Solutions", "Fintech", "Enterprise", "Marketing"];

export default function ProjectsPage() {
    const pt = useTranslations("Projects");
    const t = useTranslations("Common");

    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const projectKeys = ["1", "2", "3"];
    const categoryKeys = ["all", "ai", "fintech", "enterprise", "marketing"];

    const projects = projectKeys.map(key => ({
        id: key,
        title: pt(`data.${key}.title`),
        category: pt(`data.${key}.category`),
        categoryKey: key === "1" ? "ai" : key === "2" ? "fintech" : "enterprise", // Simplified for lookup
        description: pt(`data.${key}.description`),
        status: pt(`data.${key}.status`),
        tech: key === "1" ? ["Next.js", "Python", "TensorFlow"] : key === "2" ? ["TypeScript", "PostgreSQL", "Node.js"] : ["Next.js", "Tailwind", "Prisma"],
        image: `/images/project${key}.png`,
    }));

    const filteredProjects = projects.filter((p) => {
        const matchesCategory = activeCategory === "all" || p.categoryKey === activeCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-32 pb-12 bg-background border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-primary dark:text-blue-500">{pt("title")}</h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{pt("description")}</p>
                </div>
            </div>

            <Section>
                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {categoryKeys.map((key) => (
                            <Button
                                key={key}
                                variant={activeCategory === key ? "secondary" : "ghost"}
                                size="sm"
                                onClick={() => setActiveCategory(key)}
                                className="font-bold uppercase tracking-tight"
                            >
                                {pt(`categories.${key}`)}
                            </Button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder={t("search")}
                            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <Card key={project.id} className="flex flex-col group hover:shadow-xl transition-all duration-300">
                            <div className="aspect-video bg-slate-200 dark:bg-slate-800 relative group overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                                    <Link href={`/projects/${project.id}` as any}>
                                        <Button variant="secondary" size="sm" className="font-bold">{pt("viewDetails")}</Button>
                                    </Link>
                                </div>
                            </div>
                            <CardHeader>
                                <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">{project.category}</div>
                                <h3 className="text-xl font-bold font-heading">{project.title}</h3>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-slate-500 mb-4 text-sm leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="border-t border-slate-100 dark:border-slate-800 pt-4 flex justify-between items-center">
                                <span className={cn(
                                    "text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider",
                                    project.status === pt("data.1.status") || project.status === pt("data.3.status") ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                                )}>
                                    {project.status}
                                </span>
                                <Link href={`/projects/${project.id}` as any} className="text-primary hover:text-secondary inline-flex items-center text-sm font-bold">
                                    {t("readMore")} <ExternalLink className="ml-1 w-3 h-3" />
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Section>

            <Footer />
        </main>
    );
}

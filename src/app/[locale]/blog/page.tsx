"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Search, Calendar, User, Tag } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const posts = [
    {
        id: "1",
        title: "The Future of AI in Enterprise Systems",
        excerpt: "How generative AI is reshapping the way elite teams build and scale software infrastructure.",
        category: "AI & Tech",
        date: "Jan 10, 2026",
        author: "Sarah Chen",
    },
    {
        id: "2",
        title: "Scaling Distributed Teams Globally",
        excerpt: "Lessons learned from managing high-performance remote engineering clusters across 3 continents.",
        category: "Leadership",
        date: "Jan 08, 2026",
        author: "Alex Johnson",
    },
    {
        id: "3",
        title: "SEO Strategies for 2026",
        excerpt: "Why traditional keyword optimization is dead and what semantic authority means for your brand.",
        category: "Marketing",
        date: "Jan 05, 2026",
        author: "Elena Petrova",
    },
];

const categories = ["All", "AI & Tech", "Leadership", "Marketing", "Case Studies"];

export default function BlogPage() {
    const bt = useTranslations("Blog");
    const t = useTranslations("Common");

    const [activeCategory, setActiveCategory] = useState("all");

    const postKeys = ["1", "2", "3"];
    const categoryKeys = ["all", "tech", "leadership", "marketing", "case"];

    const posts = postKeys.map(key => ({
        id: key,
        title: bt(`data.${key}.title`),
        excerpt: bt(`data.${key}.excerpt`),
        category: bt(`data.${key}.category`),
        categoryKey: key === "1" ? "tech" : key === "2" ? "leadership" : "marketing",
        date: bt(`data.${key}.date`),

        author: bt(`data.${key}.author`),
        image: `/images/blog${key}.png`,
    }));

    const filteredPosts = posts.filter((p) =>
        activeCategory === "all" || p.categoryKey === activeCategory
    );

    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-32 pb-12 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-primary">{bt("title")}</h1>
                    <p className="text-lg text-slate-500">{bt("description")}</p>
                </div>
            </div>

            <Section>
                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-8 mb-12 items-start justify-between">
                    <div className="flex flex-wrap gap-2">
                        {categoryKeys.map((key) => (
                            <Button
                                key={key}
                                variant={activeCategory === key ? "primary" : "ghost"}
                                size="sm"
                                onClick={() => setActiveCategory(key)}
                                className="font-bold uppercase tracking-tight"
                            >
                                {bt(`categories.${key}`)}
                            </Button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder={t("search")}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <Card key={post.id} className="flex flex-col group hover:shadow-2xl transition-all duration-500 overflow-hidden border-slate-100 dark:border-slate-800">
                            <div className="aspect-video bg-slate-900 overflow-hidden relative">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all duration-500" />
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold uppercase tracking-wider border border-white/20 z-10">
                                    {post.category}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                                    <Link href={`/blog/${post.id}` as any}>
                                        <Button variant="secondary" size="sm" className="font-bold">{t("readMore")}</Button>
                                    </Link>
                                </div>
                            </div>
                            <CardHeader>
                                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 mb-4 uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                </div>
                                <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors leading-tight">
                                    {post.title}
                                </h3>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-slate-500 text-sm leading-relaxed">{post.excerpt}</p>
                            </CardContent>
                            <CardFooter className="pt-6 border-t border-slate-50 dark:border-slate-800 mx-6 pb-6 mt-0 px-0">
                                <Link href={`/blog/${post.id}` as any} className="text-primary font-bold text-xs tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all">
                                    {t("readMore")} →
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

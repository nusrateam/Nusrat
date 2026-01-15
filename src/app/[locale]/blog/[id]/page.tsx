import { Navbar } from "@/components/layout/Navbar";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function BlogDetail({
    params
}: {
    params: Promise<{ id: string, locale: string }>
}) {
    const { id } = await params;
    const t = await getTranslations("Blog");
    const c = await getTranslations("Common");

    const post = {
        title: t(`data.${id}.title`),
        content: t(`data.${id}.content`), // Content should now exist in json
        category: t(`data.${id}.category`),
        date: t(`data.${id}.date`),
        author: t(`data.${id}.author`),
        image: `/images/blog${id}.png`,
    };

    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-32 pb-12">
                <div className="max-w-4xl mx-auto px-6">
                    <Link href="/blog" className="inline-flex items-center text-primary font-bold mb-8 hover:gap-2 transition-all">
                        <ArrowLeft className="mr-2 w-4 h-4" /> {c("back")}
                    </Link>

                    <div className="mb-6 flex gap-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <span className="text-secondary">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">{post.title}</h1>

                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                            <User size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">{post.author}</p>
                            <p className="text-xs text-slate-500">Author</p>
                        </div>
                    </div>
                </div>
            </div>

            <Section className="pt-0">
                <div className="max-w-4xl mx-auto">
                    <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden relative shadow-lg mb-12">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {/* We use dangerouslySetInnerHTML because we added <br/> tags in the JSON. 
                            In a real app, use a markdown parser. */}
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-slate-500">Share this article</span>
                            <div className="flex gap-2">
                                {/* Social share placeholders */}
                                <Button variant="ghost" size="sm">Twitter</Button>
                                <Button variant="ghost" size="sm">LinkedIn</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}

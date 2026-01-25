import { Navbar } from "@/components/layout/Navbar";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function ProjectDetail({
    params
}: {
    params: Promise<{ id: string, locale: string }>
}) {
    const { id } = await params;
    const t = await getTranslations("Projects");
    const c = await getTranslations("Common");

    const project = {
        title: t(`data.${id}.title`),
        category: t(`data.${id}.category`),
        description: t(`data.${id}.description`),
        status: t(`data.${id}.status`),
        highlights: t.raw(`data.${id}.highlights`) as string[],
        tech: id === "1" ? ["Next.js", "Python", "TensorFlow", "AWS IoT", "Tailwind CSS"] : id === "2" ? ["TypeScript", "PostgreSQL", "Node.js", "API", "Auth0"] : ["Next.js", "Tailwind", "Prisma", "AI", "PostgreSQL"],
    };

    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <Link href="/projects" className="inline-flex items-center text-primary font-bold mb-8 hover:gap-2 transition-all">
                        <ArrowLeft className="mr-2 w-4 h-4" /> {c("back")}
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-sm font-bold text-secondary uppercase tracking-[3px] mb-2 block">{project.category}</span>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading">{project.title}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <Section variant="muted" className="bg-slate-50/50 dark:bg-slate-900/30">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-8">
                        <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-slate-200 dark:border-slate-800">
                            <Image
                                src={`/images/project${id}.png`}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-6">{t("overview")}</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-card p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl">
                            <h3 className="text-xl font-bold mb-6">{t("highlights")}</h3>
                            <ul className="space-y-4">
                                {project.highlights.map((h, idx) => (
                                    <li key={idx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-6">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-wider">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}

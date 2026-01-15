"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations("About");
    const c = useTranslations("Common");

    const timeline = ["2022", "2023", "2024", "2025", "2026"].map(year => ({
        year,
        title: t(`timeline.${year}.title`),
        description: t(`timeline.${year}.description`)
    }));

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <div className="pt-32 pb-20 bg-primary text-white text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">{t("title")}</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-4 text-primary">{t("missionTitle")}</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                {t("missionDesc")}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-4 text-secondary">{t("visionTitle")}</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                {t("visionDesc")}
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <h2 className="text-3xl font-bold font-heading mb-8">{t("valuesTitle")}</h2>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{t("integrityTitle")}</h4>
                                    <p className="text-slate-500">{t("integrityDesc")}</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-12 h-12 bg-secondary text-white rounded-lg flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{t("innovationTitle")}</h4>
                                    <p className="text-slate-500">{t("innovationDesc")}</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{t("excellenceTitle")}</h4>
                                    <p className="text-slate-500">{t("excellenceDesc")}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Timeline Section */}
            <Section variant="muted">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">{t("milestonesTitle")}</h2>
                    <p className="text-slate-600 dark:text-slate-400">{t("milestonesSub")}</p>
                </div>

                <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0 md:flex md:border-l-0 md:border-t-2 md:pt-12 md:max-w-5xl md:mx-auto">
                    {timeline.map((item, idx) => (
                        <motion.div
                            key={item.year}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8 mb-12 md:pl-0 md:mb-0 md:flex-1 md:px-4"
                        >
                            {/* Dot */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary md:top-[-9px] md:left-4" />

                            <div className="md:mt-4">
                                <span className="text-secondary font-bold text-xl">{item.year}</span>
                                <h4 className="font-bold text-lg mb-2 text-primary">{item.title}</h4>
                                <p className="text-sm text-slate-500">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Footer />
        </main>
    );
}

"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Stats() {
    const t = useTranslations("Stats");

    const stats = [
        { label: t("exp"), value: "3+" },
        { label: t("projects"), value: "15+" },
        { label: t("members"), value: "5+" },
        { label: t("partners"), value: "1+" },
    ];

    return (
        <div className="py-12 border-y border-slate-200 dark:border-slate-800 bg-background/50">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-center"
                    >
                        <h3 className="text-4xl font-bold font-heading text-primary dark:text-secondary mb-2">
                            {stat.value}
                        </h3>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest leading-relaxed">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

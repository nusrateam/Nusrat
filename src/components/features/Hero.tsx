"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations("Hero");

    return (
        <div className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-slate-900">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase bg-secondary/10 text-secondary rounded-full">
                        {t("badge")}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-slate-900 to-secondary dark:from-white dark:via-slate-200 dark:to-secondary">
                        {t("title1")} {t("title2")} <br /> {t("title3")}
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 mb-10">
                        {t("description")}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="group font-bold">
                            {t("ctaPrimary")}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="font-bold">
                            {t("ctaSecondary")}
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

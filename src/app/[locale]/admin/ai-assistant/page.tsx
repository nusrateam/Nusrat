"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Sparkles, Copy, RotateCcw, Search, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function AIAssistantPage() {
    const t = useTranslations("AIAssistant");
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("content");

    const handleGenerate = async () => {
        if (!prompt) return;
        setLoading(true);
        setResult("");

        try {
            const response = await fetch("/api/ai/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt, type: activeTab }),
            });
            const data = await response.json();
            if (data.success) {
                setResult(data.content);
            } else {
                setResult("Error: " + data.error);
            }
        } catch (error) {
            setResult("An error occurred while communicating with the AI assistant.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8 max-w-5xl">
            <div>
                <h1 className="text-3xl font-bold font-heading mb-2 flex items-center gap-3">
                    {t("title")} <Sparkles className="text-secondary" size={28} />
                </h1>
                <p className="text-slate-500">{t("description")}</p>
            </div>

            <div className="flex gap-4 border-b border-slate-200 dark:border-slate-800 pb-2">
                {["content", "seo", "translate"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn("px-4 py-2 text-sm font-bold transition-all", activeTab === tab ? "text-primary border-b-2 border-primary" : "text-slate-400")}
                    >
                        {t(`tabs.${tab}`)}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Input Column */}
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardContent className="pt-6">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 block">
                                {t(`inputLabels.${activeTab}`)}
                            </label>
                            <textarea
                                rows={6}
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder={t(`placeholders.${activeTab}`)}
                                className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-sm focus:ring-2 focus:ring-secondary/20 outline-none resize-none"
                            />
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center justify-between text-xs font-bold text-slate-400 italic">
                                    {t("tone")}: <span className="text-primary">{t("toneValue")}</span>
                                </div>
                                <Button onClick={handleGenerate} className="w-full" disabled={loading}>
                                    {loading ? t("running") : t("run")}
                                    {!loading && <Sparkles className="ml-2 w-4 h-4" />}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="bg-slate-50/50 dark:bg-slate-800/20 rounded-xl p-6 border border-dashed border-slate-200 dark:border-slate-800">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{t("templates")}</h4>
                        <div className="space-y-4">
                            {["project", "blog", "seo"].map((tpl) => (
                                <button key={tpl} className="w-full text-left p-2 text-xs hover:bg-white dark:hover:bg-slate-800/50 rounded transition-colors border border-transparent hover:border-slate-200 block">
                                    {t(`tpl_${tpl}`)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Output Column */}
                <div className="md:col-span-3">
                    <Card className="h-full min-h-[500px] flex flex-col">
                        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 dark:border-slate-800 p-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{t("response")}</span>
                            <div className="flex gap-2">
                                <Button variant="ghost" size="sm" className="h-8 px-2"><RotateCcw size={14} /></Button>
                                <Button variant="ghost" size="sm" className="h-8 px-2"><Copy size={14} /></Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow">
                            {result ? (
                                <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed">
                                    {result.split('\n').map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center opacity-40">
                                    <Sparkles size={48} className="mb-4" />
                                    <p>{t("emptyResponse")}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

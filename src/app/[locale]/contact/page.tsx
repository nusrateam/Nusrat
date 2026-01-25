"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import { createInquiry } from "@/app/actions/inquiry";

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const t = useTranslations("Contact");
    const c = useTranslations("Common");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const name = formData.get("user_name")?.toString().trim();
        const surname = formData.get("user_surname")?.toString().trim();
        const email = formData.get("user_email")?.toString().trim();
        const subjectValue = formData.get("subject")?.toString().trim();
        const message = formData.get("message")?.toString().trim();

        // Validation
        if (!name || !surname || !message) {
            alert("Iltimos, barcha maydonlarni to'ldiring.");
            return;
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Iltimos, to'g'ri elektron pochta manzilini kiriting.");
            return;
        }

        setLoading(true);

        // Get readable subject
        let subjectText = subjectValue;
        if (subjectValue === 'project') subjectText = t('subjects.project');
        else if (subjectValue === 'collab') subjectText = t('subjects.collab');
        else if (subjectValue === 'join') subjectText = t('subjects.join');
        else if (subjectValue === 'other') subjectText = t('subjects.other');

        // Save to Database
        try {
            await createInquiry({
                user_name: name,
                user_surname: surname,
                user_email: email,
                subject: subjectText || "No Subject",
                message: message
            });
        } catch (dbError) {
            console.error("Failed to save to database:", dbError);
            // We continue to send email even if DB save fails
        }

        // Append email and subject to message body to ensure visibility
        const fullName = `${name} ${surname}`;
        const fullMessage = `Mavzu: ${subjectText}\n\nSiz ${fullName} dan yangi xabar oldingiz.\n\n${message}\n\n---\nYuboruvchi Email: ${email}`;

        const templateParams = {
            user_name: name,
            user_surname: surname,
            from_name: fullName,
            user_email: email,
            subject: subjectText,
            message: fullMessage,
        };

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id",
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id",
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key"
        )
            .then((result) => {
                setLoading(false);
                setIsSubmitted(true);
            }, (error) => {
                setLoading(false);
                console.error(error.text);
                alert("Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.");
            });
    };


    if (isSubmitted) {
        return (
            <main className="min-h-screen">
                <Navbar />
                <div className="min-h-[80vh] flex items-center justify-center p-6 text-center">
                    <div className="max-w-md">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-100/50">
                            <CheckCircle size={48} />
                        </div>
                        <h1 className="text-3xl font-bold font-heading mb-4">{t("successTitle")}</h1>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            {t("successDesc")}
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} className="font-bold px-8">{t("another")}</Button>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="pt-32 pb-12 bg-slate-950 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
                    <h1 className="text-3xl md:text-6xl font-bold font-heading mb-6 tracking-tight">{t("title")}</h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                        {t("description")}
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-8">{t("infoTitle")}</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Mail />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{t("email")}</h4>
                                        <a href="mailto:dev.alimjonov@gmail.com" className="text-slate-500 font-medium hover:text-primary transition-colors">dev.alimjonov@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Send />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{t("telegram")}</h4>
                                        <a href="https://t.me/futurefotih" target="_blank" rel="noopener noreferrer" className="text-slate-500 font-medium hover:text-primary transition-colors">@futurefotih</a>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Instagram />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{t("instagram")}</h4>
                                        <a href="https://www.instagram.com/futurefotih" target="_blank" rel="noopener noreferrer" className="text-slate-500 font-medium hover:text-primary transition-colors">futurefotih</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Form */}
                    <div className="bg-background p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">{t("firstName")}</label>
                                    <Input required type="text" name="user_name" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">{t("lastName")}</label>
                                    <Input required type="text" name="user_surname" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">{t("emailLabel")}</label>
                                <Input required type="email" name="user_email" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">{t("subject")}</label>
                                <select name="subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary/20 outline-none bg-transparent font-medium">
                                    <option value="project">{t("subjects.project")}</option>
                                    <option value="collab">{t("subjects.collab")}</option>
                                    <option value="join">{t("subjects.join")}</option>
                                    <option value="other">{t("subjects.other")}</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">{t("message")}</label>
                                <textarea required name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary/20 outline-none resize-none bg-background font-medium" placeholder="..."></textarea>
                            </div>
                            <Button type="submit" size="lg" className="w-full group font-bold" disabled={loading}>
                                {loading ? t("sending") : t("send")}
                                {!loading && <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </Button>
                        </form>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}

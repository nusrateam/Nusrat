import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export function Footer() {
    const t = useTranslations("Footer");
    const n = useTranslations("Navbar");
    const locale = useLocale();

    return (
        <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                    <Link href="/" className="flex items-center gap-2 mb-6 group">
                        <Image
                            src="/logo.png"
                            alt="Nusrat Logo"
                            width={100}
                            height={32}
                            className="h-8 w-auto transition-transform group-hover:scale-105 rounded-sm object-contain"
                        />
                    </Link>
                    <p className="max-w-sm mb-6">
                        {t("mission")}
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">{t("quickLinks")}</h4>
                    <ul className="space-y-4">
                        <li><Link href="/about" className="hover:text-secondary transition-colors">{t("links.about")}</Link></li>
                        <li><Link href="/projects" className="hover:text-secondary transition-colors">{t("links.projects")}</Link></li>
                        <li><Link href="/blog" className="hover:text-secondary transition-colors">{t("links.blog")}</Link></li>
                        <li><Link href="/contact" className="hover:text-secondary transition-colors">{t("links.contact")}</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">{t("connect")}</h4>
                    <ul className="space-y-4">
                        <li><a href="https://t.me/futurefotih" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Telegram</a></li>
                        <li><a href="https://instagram.com/futurefotih" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Instagram</a></li>
                        <li><a href="mailto:dev.alimjonov@gmail.com" className="hover:text-secondary transition-colors">Email</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-sm text-center">
                © {new Date().getFullYear()} Nusrat Team. {t("rights")}
            </div>
        </footer>
    );
}

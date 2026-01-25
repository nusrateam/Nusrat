import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/features/Hero";
import { Stats } from "@/components/features/Stats";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Common");
  const h = useTranslations("Home");

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />

      {/* Featured Service/CTA Section */}
      <Section variant="muted">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              {h("empowerTitle")}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              {h("empowerDesc")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" className="font-bold">
                {t("readMore")} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div className="h-40 md:h-56 bg-primary rounded-3xl flex flex-col items-center justify-center p-4 md:p-8 text-white text-center font-bold text-sm md:text-xl shadow-xl shadow-primary/20 transform hover:-translate-y-1 transition-transform">
              {h("services.scalable")}
            </div>
            <div className="h-40 md:h-56 bg-secondary rounded-3xl md:translate-y-12 flex flex-col items-center justify-center p-4 md:p-8 text-white text-center font-bold shadow-xl shadow-secondary/20 text-sm md:text-xl transform hover:-translate-y-1 transition-transform">
              {h("services.ai")}
            </div>
            <div className="h-40 md:h-56 bg-slate-900 dark:bg-black rounded-3xl flex flex-col items-center justify-center p-4 md:p-8 text-white text-center font-bold text-sm md:text-xl shadow-xl transform hover:-translate-y-1 transition-transform">
              {h("services.growth")}
            </div>
            <div className="h-40 md:h-56 bg-primary rounded-3xl md:translate-y-12 flex flex-col items-center justify-center p-4 md:p-8 text-white text-center font-bold shadow-xl shadow-primary/20 text-sm md:text-xl transform hover:-translate-y-1 transition-transform">
              {h("services.seo")}
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Quote / Vision Section */}
      <Section className="text-center bg-primary text-white">
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-heading font-medium italic mb-8">
            {h("visionQuote")}
          </p>
          <cite className="not-italic text-secondary font-bold text-lg">{h("visionCite")}</cite>
        </blockquote>
      </Section>

      <Footer />
    </main>
  );
}

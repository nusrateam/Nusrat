import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    variant?: "default" | "muted" | "primary" | "dark";
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, variant = "default", children, ...props }, ref) => {
        const variants = {
            default: "bg-background",
            muted: "bg-slate-50 dark:bg-slate-900",
            primary: "bg-primary text-white",
            dark: "bg-slate-900 text-white",
        };

        return (
            <section
                ref={ref}
                className={cn("py-20 px-6", variants[variant], className)}
                {...props}
            >
                <div className="max-w-7xl mx-auto">{children}</div>
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };

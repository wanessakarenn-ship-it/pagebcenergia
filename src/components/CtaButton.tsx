import { cn } from "@/lib/utils";

// Central place for the signup destination so every CTA points to the same URL.
// Swap this for the real cadastro route/URL when it exists.
export const SIGNUP_ROUTE = "#lead-form";

type CtaButtonProps = {
  children: React.ReactNode;
  href?: string;
  size?: "default" | "lg";
  variant?: "solid" | "yellow" | "outline";
  className?: string;
};

const sizeStyles = {
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantStyles = {
  solid: "bg-brand-teal text-white hover:bg-brand-teal-mid",
  yellow: "bg-brand-yellow text-brand-navy hover:brightness-95",
  outline: "border-2 border-brand-cyan bg-transparent text-brand-cyan hover:bg-brand-cyan hover:text-brand-navy",
};

/**
 * Reusable primary call-to-action button used throughout the landing page.
 * Defaults to the signup destination.
 */
export function CtaButton({
  children,
  href = SIGNUP_ROUTE,
  size = "default",
  variant = "solid",
  className,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-display font-semibold uppercase tracking-tight shadow-sm transition-all hover:shadow-md active:scale-[0.98]",
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CtaButton } from "@/components/CtaButton";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-bc.png.asset.json";

const NAV_LINKS = [
  { label: "Para Você", href: "#para-voce" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Sobre a BC", href: "#sobre" },
];

const LOGIN_ROUTE = "/entrar";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 bg-background transition-shadow",
        scrolled ? "shadow-md" : "shadow-none",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center" aria-label="Grupo BC Energia — início">
          <img src={logo.url} alt="Grupo BC Energia" className="h-12 w-auto sm:h-14" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-semibold uppercase tracking-tight text-brand-navy transition-colors hover:text-brand-teal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={LOGIN_ROUTE}
            className="inline-flex items-center justify-center rounded-full border border-brand-teal px-5 py-2 font-display text-sm font-semibold uppercase tracking-tight text-brand-teal transition-colors hover:bg-brand-teal hover:text-white"
          >
            Entrar
          </a>
          <CtaButton size="default">Quero Economizar</CtaButton>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Abrir menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-navy"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-display uppercase tracking-tight text-brand-navy">
                Menu
              </SheetTitle>
              <nav className="mt-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-3 font-display text-base font-semibold uppercase tracking-tight text-brand-navy transition-colors hover:bg-brand-gray"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={LOGIN_ROUTE}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-brand-teal px-5 py-3 font-display text-sm font-semibold uppercase tracking-tight text-brand-teal transition-colors hover:bg-brand-teal hover:text-white"
                >
                  Entrar
                </a>
                <CtaButton size="default" className="w-full">
                  Quero Economizar
                </CtaButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

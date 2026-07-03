import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState, useMemo, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Menu,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  Loader2,
  CheckCircle2,
  UploadCloud,
  FileText,
  AlertCircle,
  Zap,
  BarChart3,
  MapPin,
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-bc.png.asset.json";
import heroSolar from "@/assets/hero-solar.jpg";
import { BrazilMapBadge } from "@/components/BrazilMapBadge";

// ============================================================================
// 1. CTA BUTTON COMPONENT
// ============================================================================
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

export function CtaButton({
  children,
  href = SIGNUP_ROUTE,
  size = "default",
  variant = "solid",
  className,
}: CtaButtonProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleScroll}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-display font-semibold uppercase tracking-tight shadow-sm transition-all hover:shadow-md active:scale-[0.98] cursor-pointer",
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

// ============================================================================
// 2. HEADER COMPONENT
// ============================================================================
const NAV_LINKS = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Simulador", href: "#simulador" },
  { label: "Sobre a BC", href: "#sobre" },
  { label: "Dúvidas", href: "#faq" },
];

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

// ============================================================================
// 3. WHATSAPP BUTTON COMPONENT
// ============================================================================
export function WhatsAppButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href="#lead-form"
      onClick={handleClick}
      aria-label="Falar com nossa equipe comercial"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" stroke="white" strokeWidth={1.5} />
    </a>
  );
}

// ============================================================================
// 4. LEAD FORM COMPONENT
// ============================================================================
const CAPTURE_ENDPOINT = "";
const URL_POLITICA = "#";
const COM_UPLOAD = true;
const MAX_FILE_MB = 10;
const ACCEPTED = ".pdf,.jpg,.jpeg,.png";
const ACCEPTED_TYPES = ["application/pdf", "image/jpeg", "image/png"];

const isMock = !CAPTURE_ENDPOINT || CAPTURE_ENDPOINT.trim().startsWith("[");

const VALOR_OPTIONS = [
  "Menos de R$ 800",
  "R$ 800 a R$ 1.200",
  "R$ 1.200 a R$ 2.000",
  "R$ 2.000 a R$ 5.000",
  "Acima de R$ 5.000",
];

const TIPO_OPTIONS = ["Residencial", "Comercial", "Industrial"];

type Status = "idle" | "enviando" | "sucesso" | "erro";

type FormState = {
  nome: string;
  whatsapp: string;
  cidade: string;
  valor: string;
  tipo: string;
  titular: string;
  lgpd: boolean;
  fatura: File | null;
};

const initialFormState: FormState = {
  nome: "",
  whatsapp: "",
  cidade: "",
  valor: "",
  tipo: "",
  titular: "",
  lgpd: false,
  fatura: null,
};

function maskWhatsapp(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.replace(/^(\d{0,2})/, "($1");
  if (d.length <= 7) return d.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  return d.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.nome.trim()) e.nome = "Informe seu nome.";
    if (form.whatsapp.replace(/\D/g, "").length < 10) e.whatsapp = "Informe um WhatsApp válido.";
    if (!form.cidade.trim()) e.cidade = "Informe sua cidade.";
    if (!form.valor) e.valor = "Selecione o valor da conta.";
    if (!form.tipo) e.tipo = "Selecione o tipo de conta.";
    if (!form.titular) e.titular = "Selecione uma opção.";
    if (!form.lgpd) e.lgpd = "É necessário autorizar o contato.";
    if (COM_UPLOAD && form.fatura) {
      if (form.fatura.size > MAX_FILE_MB * 1024 * 1024)
        e.fatura = `Arquivo acima de ${MAX_FILE_MB} MB.`;
      else if (form.fatura.type && !ACCEPTED_TYPES.includes(form.fatura.type))
        e.fatura = "Formato não aceito. Use PDF, JPG ou PNG.";
    }
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const markTouched = (key: string) => setTouched((prev) => ({ ...prev, [key]: true }));

  const showError = (key: keyof FormState) => touched[key] && errors[key];

  const handleFile = (file: File | null) => {
    markTouched("fatura");
    setField("fatura", file);
  };

  const handleSubmit = async () => {
    setTouched({
      nome: true,
      whatsapp: true,
      cidade: true,
      valor: true,
      tipo: true,
      titular: true,
      lgpd: true,
      fatura: true,
    });
    if (!isValid) return;

    setStatus("enviando");

    const payload = new FormData();
    payload.append("nome", form.nome.trim());
    payload.append("whatsapp", form.whatsapp);
    payload.append("cidade", form.cidade.trim());
    payload.append("valor_conta", form.valor);
    payload.append("tipo", form.tipo);
    payload.append("titular", form.titular);
    payload.append("lgpd", String(form.lgpd));
    if (COM_UPLOAD && form.fatura) payload.append("fatura", form.fatura);

    try {
      if (isMock) {
        console.log("[LeadForm mock] payload:", Object.fromEntries(payload.entries()));
        await new Promise((r) => setTimeout(r, 800));
        setStatus("sucesso");
        return;
      }
      const res = await fetch(CAPTURE_ENDPOINT, { method: "POST", body: payload });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sucesso");
    } catch (err) {
      console.error("[LeadForm] erro no envio:", err);
      setStatus("erro");
    }
  };

  const ctaLabel = COM_UPLOAD
    ? "Enviar minha fatura para análise gratuita"
    : "Solicitar análise gratuita";

  if (status === "sucesso") {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-xl sm:p-10">
        <CheckCircle2 className="mx-auto h-14 w-14 text-brand-teal" strokeWidth={1.75} />
        <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight text-brand-navy">
          Recebemos sua fatura!
        </h3>
        <p className="mt-3 text-muted-foreground">
          Nossa equipe vai te chamar no WhatsApp com a sua análise gratuita.
        </p>
      </div>
    );
  }

  const enviando = status === "enviando";

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
      <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy">
        Análise gratuita da sua fatura
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Preencha os dados e descubra quanto você pode economizar.
      </p>

      <div className="mt-6 space-y-4">
        {/* Nome */}
        <div className="space-y-1.5">
          <Label htmlFor="lf-nome">Nome</Label>
          <Input
            id="lf-nome"
            value={form.nome}
            onChange={(e) => setField("nome", e.target.value)}
            onBlur={() => markTouched("nome")}
            aria-invalid={!!showError("nome")}
            placeholder="Seu nome completo"
          />
          {showError("nome") && <FieldError msg={errors.nome!} />}
        </div>

        {/* WhatsApp */}
        <div className="space-y-1.5">
          <Label htmlFor="lf-whatsapp">WhatsApp</Label>
          <Input
            id="lf-whatsapp"
            type="tel"
            inputMode="numeric"
            value={form.whatsapp}
            onChange={(e) => setField("whatsapp", maskWhatsapp(e.target.value))}
            onBlur={() => markTouched("whatsapp")}
            aria-invalid={!!showError("whatsapp")}
            placeholder="(00) 00000-0000"
          />
          {showError("whatsapp") && <FieldError msg={errors.whatsapp!} />}
        </div>

        {/* Cidade */}
        <div className="space-y-1.5">
          <Label htmlFor="lf-cidade">Cidade</Label>
          <Input
            id="lf-cidade"
            value={form.cidade}
            onChange={(e) => setField("cidade", e.target.value)}
            onBlur={() => markTouched("cidade")}
            aria-invalid={!!showError("cidade")}
            placeholder="Sua cidade"
          />
          {showError("cidade") && <FieldError msg={errors.cidade!} />}
        </div>

        {/* Valor médio da conta */}
        <div className="space-y-1.5">
          <Label htmlFor="lf-valor">Valor médio da conta de luz</Label>
          <Select
            value={form.valor}
            onValueChange={(v) => {
              setField("valor", v);
              markTouched("valor");
            }}
          >
            <SelectTrigger id="lf-valor" aria-invalid={!!showError("valor")}>
              <SelectValue placeholder="Selecione uma faixa" />
            </SelectTrigger>
            <SelectContent>
              {VALOR_OPTIONS.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {showError("valor") && <FieldError msg={errors.valor!} />}
        </div>

        {/* Tipo de conta */}
        <div className="space-y-1.5">
          <Label htmlFor="lf-tipo">Tipo de conta</Label>
          <Select
            value={form.tipo}
            onValueChange={(v) => {
              setField("tipo", v);
              markTouched("tipo");
            }}
          >
            <SelectTrigger id="lf-tipo" aria-invalid={!!showError("tipo")}>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              {TIPO_OPTIONS.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {showError("tipo") && <FieldError msg={errors.tipo!} />}
        </div>

        {/* Upload da fatura */}
        {COM_UPLOAD && (
          <div className="space-y-1.5">
            <Label htmlFor="lf-fatura">Upload da fatura de energia</Label>
            <input
              ref={fileInputRef}
              id="lf-fatura"
              type="file"
              accept={ACCEPTED}
              className="sr-only"
              onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className={cn(
                "flex w-full items-center gap-3 rounded-md border border-dashed px-4 py-3 text-left text-sm transition-colors hover:bg-brand-gray/30",
                showError("fatura") ? "border-destructive" : "border-input",
              )}
            >
              {form.fatura ? (
                <>
                  <FileText className="h-5 w-5 shrink-0 text-brand-teal" />
                  <span className="truncate text-brand-navy">{form.fatura.name}</span>
                </>
              ) : (
                <>
                  <UploadCloud className="h-5 w-5 shrink-0 text-brand-teal" />
                  <span className="text-muted-foreground">
                    PDF, JPG ou PNG — até {MAX_FILE_MB} MB
                  </span>
                </>
              )}
            </button>
            {showError("fatura") && <FieldError msg={errors.fatura!} />}
          </div>
        )}

        {/* Titular / responsável */}
        <div className="space-y-2">
          <Label>Você é titular ou responsável pela conta?</Label>
          <RadioGroup
            className="flex gap-6"
            value={form.titular}
            onValueChange={(v) => {
              setField("titular", v);
              markTouched("titular");
            }}
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="Sim" id="lf-titular-sim" />
              <Label htmlFor="lf-titular-sim" className="font-normal">
                Sim
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="Não" id="lf-titular-nao" />
              <Label htmlFor="lf-titular-nao" className="font-normal">
                Não
              </Label>
            </div>
          </RadioGroup>
          {showError("titular") && <FieldError msg={errors.titular!} />}
        </div>

        {/* LGPD */}
        <div className="space-y-1.5">
          <div className="flex items-start gap-3">
            <Checkbox
              id="lf-lgpd"
              checked={form.lgpd}
              onCheckedChange={(c) => {
                setField("lgpd", c === true);
                markTouched("lgpd");
              }}
              aria-invalid={!!showError("lgpd")}
              className="mt-0.5"
            />
            <Label htmlFor="lf-lgpd" className="text-xs font-normal leading-relaxed text-muted-foreground">
              Autorizo o contato do Grupo BC Energia e o uso dos meus dados para análise da minha
              conta, conforme a{" "}
              <a
                href={URL_POLITICA}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-teal underline"
              >
                Política de Privacidade
              </a>
              .
            </Label>
          </div>
          {showError("lgpd") && <FieldError msg={errors.lgpd!} />}
        </div>

        {status === "erro" && (
          <div className="flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4 shrink-0" />
            Não foi possível enviar agora. Tente novamente em instantes.
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isValid || enviando}
          className={cn(
            "flex w-full items-center justify-center gap-2 rounded-full bg-brand-teal px-6 py-4 font-display text-base font-semibold uppercase tracking-tight text-white shadow-sm transition-all hover:bg-brand-teal-mid active:scale-[0.99]",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        >
          {enviando && <Loader2 className="h-5 w-5 animate-spin" />}
          {enviando ? "Enviando..." : ctaLabel}
        </button>
      </div>
    </div>
  );
}

function FieldError({ msg }: { msg: string }) {
  return (
    <p className="flex items-center gap-1 text-xs text-destructive" role="alert">
      <AlertCircle className="h-3.5 w-3.5" />
      {msg}
    </p>
  );
}

// ============================================================================
// 5. HERO SECTION
// ============================================================================
const chips = [
  "Até 25% de desconto",
  "Sem placas solares",
  "Sem obra",
  "Sem investimento inicial",
  "Energia limpa e renovável",
  "Análise gratuita da fatura",
];

export function Hero() {
  return (
    <section id="lead-form" className="relative isolate scroll-mt-20 overflow-hidden">
      <img
        src={heroSolar}
        alt="Painéis solares ao pôr do sol em um campo verde"
        width={1600}
        height={1000}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-brand-navy/85" />
      <div className="absolute inset-0 -z-10 bg-gradient-brand-dark opacity-60" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-navy shadow-sm">
            Análise gratuita para contas a partir de R$ 800
          </div>
          
          <h1 className="max-w-2xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Economize até 25% na conta de luz sem instalar placas solares
          </h1>
          
          <p className="max-w-xl text-lg text-white/90">
            Com o Consórcio BC Energia, sua empresa pode reduzir custos todos os meses usando créditos
            de energia limpa e renovável — sem obra, sem investimento inicial e sem mudar sua rotina.
          </p>
          
          <ul className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <li
                key={c}
                className="rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur"
              >
                {c}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 border border-white/15 rounded-2xl overflow-hidden max-w-md bg-white/5 backdrop-blur text-center w-full mt-2">
            <div className="p-3.5 flex flex-col gap-0.5">
              <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider">Goiás</span>
              <b className="text-brand-yellow font-display text-2xl font-black">GO</b>
              <span className="text-white text-xs font-bold">até 25%</span>
            </div>
            <div className="p-3.5 flex flex-col gap-0.5 border-x border-white/15">
              <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider">Tocantins</span>
              <b className="text-brand-yellow font-display text-2xl font-black">TO</b>
              <span className="text-white text-xs font-bold">até 23%</span>
            </div>
            <div className="p-3.5 flex flex-col gap-0.5">
              <span className="text-white/60 text-[10px] uppercase font-bold tracking-wider">Paraná</span>
              <b className="text-brand-yellow font-display text-2xl font-black">PR</b>
              <span className="text-white text-xs font-bold">até 22%</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 6. QUALIFICATION SECTION
// ============================================================================
export function Qualification() {
  return (
    <section className="bg-brand-gray/40 border-y border-brand-gray/50">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-navy sm:text-4xl">
          Você paga mais de R$ 800 por mês em energia?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Se a sua conta de luz passa de R$ 800 por mês, você pode ter potencial de economia com o
          Consórcio BC Energia. Envie sua fatura e receba uma análise gratuita para descobrir quanto
          sua empresa pode economizar.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton size="lg" href="#lead-form">
            Quero minha análise gratuita
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 7. STEPS COMPONENT (CAROUSEL)
// ============================================================================
export function Steps({ openForm }: { openForm?: () => void }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handleScroll = () => {
    if (openForm) openForm();
    else document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const slides = [
    {
      title: "1. Geração de energia",
      pretitle: "Etapa 01",
      body: "O Grupo BC Energia gera energia limpa e renovável em centenas de usinas fotovoltaicas espalhadas pelo país.",
      visual: (
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[300px] sm:max-h-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
          <defs>
            <linearGradient id="grass-grad-s1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffa3" />
              <stop offset="100%" stopColor="#007d4b" />
            </linearGradient>
            <linearGradient id="solar-panel-grad-s1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="100%" stopColor="#0066ff" />
            </linearGradient>
            <filter id="glow-light-s1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <ellipse cx="250" cy="310" rx="170" ry="38" fill="rgba(0, 255, 204, 0.12)" filter="url(#glow-light-s1)"/>
          <g className="animate-float-pedestal">
            <path d="M 80,220 L 250,300 L 250,325 L 80,245 Z" fill="#2d1c12" />
            <path d="M 250,300 L 420,220 L 420,245 L 250,325 Z" fill="#1f130b" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="url(#grass-grad-s1)" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="rgba(0,255,204,0.15)" />
            <g transform="translate(130, 165)">
              <line x1="20" y1="20" x2="20" y2="0" stroke="#a0c4c5" strokeWidth="3" />
              <line x1="40" y1="30" x2="40" y2="10" stroke="#a0c4c5" strokeWidth="3" />
              <path d="M 10,-10 L 50,10 L 40,25 L 0,5 Z" fill="url(#solar-panel-grad-s1)" stroke="#fff" strokeWidth="1.5" />
              <line x1="25" y1="0" x2="20" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <line x1="35" y1="5" x2="30" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            </g>
            <g transform="translate(230, 165)">
              <line x1="20" y1="20" x2="20" y2="0" stroke="#a0c4c5" strokeWidth="3" />
              <line x1="40" y1="30" x2="40" y2="10" stroke="#a0c4c5" strokeWidth="3" />
              <path d="M 10,-10 L 50,10 L 40,25 L 0,5 Z" fill="url(#solar-panel-grad-s1)" stroke="#fff" strokeWidth="1.5" />
              <line x1="25" y1="0" x2="20" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <line x1="35" y1="5" x2="30" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            </g>
            <g transform="translate(180, 205)">
              <line x1="20" y1="20" x2="20" y2="0" stroke="#a0c4c5" strokeWidth="3" />
              <line x1="40" y1="30" x2="40" y2="10" stroke="#a0c4c5" strokeWidth="3" />
              <path d="M 10,-10 L 50,10 L 40,25 L 0,5 Z" fill="url(#solar-panel-grad-s1)" stroke="#fff" strokeWidth="1.5" />
              <line x1="25" y1="0" x2="20" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <line x1="35" y1="5" x2="30" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            </g>
            <path d="M 280,240 L 305,252 L 290,260 L 265,248 Z" fill="#333" />
            <path d="M 265,248 L 290,260 L 290,270 L 265,258 Z" fill="#222" />
            <path d="M 290,260 L 305,252 L 305,262 L 290,270 Z" fill="#111" />
            <circle cx="280" cy="257" r="2.5" fill="#00ffcc" className="animate-pulse" filter="url(#glow-light-s1)" />
            <path d="M 170,195 Q 220,230 270,251" fill="none" stroke="#00ffcc" strokeWidth="2" strokeDasharray="5 3" />
            <path d="M 270,195 Q 285,220 285,248" fill="none" stroke="#00ffcc" strokeWidth="2" strokeDasharray="5 3" />
            <path d="M 290,268 Q 320,285 360,280" fill="none" stroke="#00ffcc" strokeWidth="3" strokeLinecap="round" />
          </g>
          <g transform="translate(-10, -10)">
            <circle cx="340" cy="80" r="24" fill="#ffd700" filter="url(#glow-light-s1)"/>
            <circle cx="340" cy="80" r="18" fill="#fff" />
          </g>
        </svg>
      ),
    },
    {
      title: "2. Injeção na rede",
      pretitle: "Etapa 02",
      body: "Toda a energia gerada é injetada na rede da distribuidora local, que aloca os créditos na sua Unidade Consumidora (UC).",
      visual: (
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[300px] sm:max-h-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
          <defs>
            <linearGradient id="grass-grad-s1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffa3" />
              <stop offset="100%" stopColor="#007d4b" />
            </linearGradient>
            <filter id="glow-light-s1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <ellipse cx="250" cy="310" rx="170" ry="38" fill="rgba(0, 255, 204, 0.12)" filter="url(#glow-light-s1)"/>
          <g className="animate-float-pedestal">
            <path d="M 80,220 L 250,300 L 250,325 L 80,245 Z" fill="#2d1c12" />
            <path d="M 250,300 L 420,220 L 420,245 L 250,325 Z" fill="#1f130b" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="url(#grass-grad-s1)" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="rgba(0,255,204,0.1)" />
            <g transform="translate(180, 70)">
              <line x1="40" y1="130" x2="50" y2="20" stroke="#ffffff" strokeWidth="2" opacity="0.9" />
              <line x1="60" y1="130" x2="50" y2="20" stroke="#ffffff" strokeWidth="2" opacity="0.9" />
              <line x1="50" y1="20" x2="50" y2="0" stroke="#ffffff" strokeWidth="2.5" />
              <line x1="45" y1="70" x2="55" y2="70" stroke="#ffffff" strokeWidth="1.5" />
              <line x1="42" y1="100" x2="58" y2="100" stroke="#ffffff" strokeWidth="1.5" />
              <line x1="40" y1="130" x2="58" y2="100" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
              <line x1="60" y1="130" x2="42" y2="100" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
              <line x1="30" y1="40" x2="70" y2="40" stroke="#ffffff" strokeWidth="3" />
              <circle cx="30" cy="40" r="3" fill="#ffd700" />
              <circle cx="70" cy="40" r="3" fill="#ffd700" />
              <line x1="20" y1="75" x2="80" y2="75" stroke="#ffffff" strokeWidth="3" />
              <circle cx="20" cy="75" r="3" fill="#ffd700" />
              <circle cx="80" cy="75" r="3" fill="#ffd700" />
            </g>
            <g transform="translate(310, 170)">
              <path d="M 20,30 L 45,42 L 35,47 L 10,35 Z" fill="#ffffff" />
              <path d="M 45,42 L 60,35 L 50,30 L 35,37 Z" fill="#dddddd" />
              <path d="M 20,30 L 35,20 L 45,42 L 35,37 Z" fill="#ffd700" opacity="0.9" />
              <path d="M 35,20 L 50,30 L 45,42 Z" fill="#ccac00" />
              <polygon points="20,38 27,41 27,45 20,42" fill="#00ffcc" className="animate-pulse" />
            </g>
            <path d="M 250,115 Q 300,130 345,185" fill="none" stroke="#00ffcc" strokeWidth="2.5" strokeDasharray="6 4" />
          </g>
        </svg>
      ),
    },
    {
      title: "3. Economia na conta",
      pretitle: "Etapa 03",
      body: "Esses créditos são compartilhados com os consumidores do consórcio, gerando desconto direto na conta de energia.",
      visual: (
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[300px] sm:max-h-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
          <defs>
            <linearGradient id="grass-grad-s1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffa3" />
              <stop offset="100%" stopColor="#007d4b" />
            </linearGradient>
            <filter id="glow-light-s1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <ellipse cx="250" cy="310" rx="170" ry="38" fill="rgba(0, 255, 204, 0.12)" filter="url(#glow-light-s1)"/>
          <g className="animate-float-pedestal">
            <path d="M 80,220 L 250,300 L 250,325 L 80,245 Z" fill="#2d1c12" />
            <path d="M 250,300 L 420,220 L 420,245 L 250,325 Z" fill="#1f130b" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="url(#grass-grad-s1)" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="rgba(0,255,204,0.1)" />
            <g transform="translate(140, 130)">
              <path d="M 40,0 L 130,45 L 90,110 L 0,65 Z" fill="#ffffff" stroke="#00ffcc" strokeWidth="2" />
              <line x1="55" y1="15" x2="115" y2="45" stroke="#a0c4c5" strokeWidth="3" />
              <line x1="50" y1="28" x2="90" y2="48" stroke="#a0c4c5" strokeWidth="2" />
              <line x1="45" y1="38" x2="105" y2="68" stroke="#a0c4c5" strokeWidth="2.5" />
              <circle cx="45" cy="70" r="12" fill="rgba(0,255,204,0.15)" />
              <path d="M 39,70 L 43,74 L 51,66" fill="none" stroke="#00ffcc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <g transform="translate(290, 200)">
              <path d="M 0,40 C 15,40 30,35 30,28 L 30,34 C 30,41 15,46 0,46 C -15,46 -30,41 -30,34 L -30,28 C -30,35 -15,40 0,40 Z" fill="#ccac00" />
              <ellipse cx="0" cy="28" rx="30" ry="12" fill="#ffd700" stroke="#ffffff" strokeWidth="0.5" />
              <path d="M 0,28 C 15,28 30,23 30,16 L 30,22 C 30,29 15,34 0,34 C -15,34 -30,29 -30,22 L -30,16 C -30,23 -15,28 0,28 Z" fill="#ccac00" />
              <ellipse cx="0" cy="16" rx="30" ry="12" fill="#ffd700" stroke="#ffffff" strokeWidth="0.5" />
              <path d="M 0,16 C 15,16 30,11 30,4 L 30,10 C 30,17 15,22 0,22 C -15,22 -30,17 -30,10 L -30,4 C -30,11 -15,16 0,16 Z" fill="#ccac00" />
              <ellipse cx="0" cy="4" rx="30" ry="12" fill="#ffd700" stroke="#ffffff" strokeWidth="0.5" />
            </g>
            <g transform="translate(190, 80)">
              <path d="M 0,15 L 140,15 L 120,45 L -20,45 Z" fill="#032021" stroke="#00ffcc" strokeWidth="2" />
              <text x="12" y="36" fill="#00ffcc" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">ATÉ 25% DESCONTO</text>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section 
      id="como-funciona" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden border-b border-brand-teal/10 bg-[#f8fafc]"
    >
      <BrazilMapBadge activeState="GO" />

      <div className="w-full max-w-7xl mx-auto relative z-2 text-center flex flex-col items-center gap-12">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal mb-3 inline-block">
            Como funciona
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-brand-navy uppercase tracking-tight leading-none mb-4">
            Como funciona o Consórcio BC Energia
          </h2>
          <p className="text-lg text-muted-foreground">
            Você continua usando energia normalmente. A diferença é que os créditos de energia renovável ajudam a reduzir o valor da sua fatura.
          </p>
        </div>

        <div className="flex flex-col gap-8 w-full items-center">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-brand-dark border border-brand-teal/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide, idx) => (
                  <div key={idx} className="min-w-0 flex-[0_0_100%] p-8 sm:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
                      <div className="flex flex-col items-start text-left">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow mb-2">
                          {slide.pretitle}
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                          {slide.title}
                        </h2>
                        <p className="text-base sm:text-lg text-brand-gray/80 max-w-xl leading-relaxed">
                          {slide.body}
                        </p>
                      </div>
                      <div className="w-full flex items-center justify-center">
                        {slide.visual}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-navy/80 border border-brand-teal/40 text-brand-teal hover:bg-brand-teal hover:text-brand-navy items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] z-20 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-navy/80 border border-brand-teal/40 text-brand-teal hover:bg-brand-teal hover:text-brand-navy items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] z-20 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Próximo slide"
            >
              <ChevronRight className="h-6 w-6 stroke-[2.5]" />
            </button>
          </div>

          <div className="flex justify-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`h-3 rounded-full border border-brand-teal/40 transition-all duration-300 cursor-pointer ${
                  idx === selectedIndex
                    ? "w-8 bg-brand-teal shadow-[0_0_10px_rgba(0,255,204,0.6)]"
                    : "w-3 bg-brand-teal/20"
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <button
              onClick={handleScroll}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-yellow hover:brightness-95 text-brand-navy font-bold rounded-full text-base uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer shadow-md"
            >
              Quero minha análise gratuita
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 8. TWO INVOICES SECTION (DESCONTO DE COMPENSAÇÃO)
// ============================================================================
export function TwoInvoices() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
          Sua energia continua chegando normalmente. A diferença está no desconto.
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-relaxed text-muted-foreground">
          Com o Consórcio BC Energia, você continua recebendo energia pela mesma distribuidora,
          usando a mesma rede elétrica e o mesmo medidor. A diferença é que os créditos de energia
          renovável gerados pelas usinas da BC Energia são compensados na sua fatura, reduzindo o
          valor pago todos os meses.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-2xl border border-brand-gray bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/10">
              <Zap className="h-6 w-6 text-brand-teal" strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-brand-navy">
              Nada muda no fornecimento
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A energia continua chegando pela distribuidora local, sem troca de medidor, obra ou instalação.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-brand-gray bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/10">
              <FileText className="h-6 w-6 text-brand-teal" strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-brand-navy">
              Créditos compensados na fatura
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Os créditos de energia renovável são aplicados na sua Unidade Consumidora, gerando economia mensal.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-brand-gray bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/10">
              <BarChart3 className="h-6 w-6 text-brand-teal" strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-brand-navy">
              Acompanhamento da economia
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A equipe BC Energia acompanha o processo e apresenta uma solução adequada para o seu perfil de consumo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 9. SIMULATOR COMPONENT
// ============================================================================
export function Simulator({ openForm }: { openForm?: () => void }) {
  const [billValue, setBillValue] = useState(1200);
  const [activeState, setActiveState] = useState<"GO" | "PR" | "TO">("GO");

  const discountMap = {
    GO: 0.25,
    PR: 0.22,
    TO: 0.23,
  };

  const discountPct = discountMap[activeState];
  
  const monthlySavings = useMemo(() => {
    return billValue * discountPct;
  }, [billValue, discountPct]);

  const annualSavings = useMemo(() => {
    return monthlySavings * 12;
  }, [monthlySavings]);

  const handleStateChange = (state: "GO" | "PR" | "TO") => {
    setActiveState(state);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillValue(Number(e.target.value));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val >= 0) {
      setBillValue(val);
    }
  };

  return (
    <section id="simulador" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      <BrazilMapBadge activeState={activeState} />

      <div className="w-full max-w-7xl mx-auto relative z-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Controls */}
          <div className="lg:col-span-5 bg-brand-navy/70 border border-brand-teal/20 backdrop-blur-md p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col gap-6">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-brand-teal to-brand-yellow" />
            
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-2 leading-tight">Simule sua economia</h2>
              <p className="text-sm text-brand-gray/60">Descubra o desconto real na sua conta em segundos.</p>
            </div>

            {/* State selector */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">Selecione seu Estado</span>
              <div className="grid grid-cols-3 gap-2 bg-brand-navy/90 p-1.5 rounded-2xl border border-brand-teal/15">
                {(["GO", "PR", "TO"] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => handleStateChange(st)}
                    className={`py-3 text-sm font-bold rounded-xl transition-all duration-300 cursor-pointer ${
                      activeState === st
                        ? "bg-brand-teal text-brand-navy shadow-lg shadow-brand-teal/30"
                        : "bg-transparent text-brand-gray/60 hover:text-white"
                    }`}
                  >
                    {st === "GO" ? "Goiás" : st === "PR" ? "Paraná" : "Tocantins"}
                  </button>
                ))}
              </div>
            </div>

            {/* Value range input */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">Valor médio da sua conta de luz</span>
              <div className="bg-brand-navy/90 p-6 rounded-2xl border border-brand-teal/15 flex flex-col gap-4 focus-within:border-brand-teal/50 transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-brand-gray/60">R$</span>
                  <input
                    type="number"
                    value={billValue}
                    onChange={handleNumberChange}
                    min="800"
                    max="50000"
                    step="50"
                    className="bg-transparent border-none text-white text-3xl font-black text-right outline-none w-full"
                  />
                </div>
                <input
                  type="range"
                  min="800"
                  max="10000"
                  step="100"
                  value={billValue > 10000 ? 10000 : billValue}
                  onChange={handleSliderChange}
                  className="w-full h-1.5 bg-brand-teal/10 rounded-lg appearance-none cursor-pointer accent-brand-teal"
                />
              </div>
            </div>

            {/* Results block */}
            <div className="bg-gradient-to-br from-brand-teal/5 to-brand-yellow/5 border border-brand-teal/20 rounded-2xl p-6 text-center">
              <span className="text-xs text-brand-gray/60 mb-2 block">Sua economia estimada (até {Math.round(discountPct * 100)}%):</span>
              <div className="text-4xl font-black text-brand-teal mb-1 drop-shadow-[0_0_15px_rgba(0,255,204,0.3)]">
                R$ {monthlySavings.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                <span className="text-sm font-medium text-brand-gray/60 ml-2">/ mês</span>
              </div>
              <div className="text-sm font-semibold text-brand-yellow">
                Economia anual de R$ {annualSavings.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>

            {/* Estimations Table */}
            <div className="overflow-hidden rounded-2xl bg-brand-navy/60 border border-brand-teal/10">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-brand-teal/20 text-brand-gray/60">
                    <th className="px-3 py-2 font-semibold">Conta Mensal</th>
                    <th className="px-3 py-2 text-right font-semibold">Economia (até {Math.round(discountPct * 100)}%)</th>
                  </tr>
                </thead>
                <tbody>
                  {[800, 1200, 2000, 5000].map((val) => (
                    <tr key={val} className="border-b border-brand-teal/10 last:border-0 text-white/80">
                      <td className="px-3 py-2">R$ {val.toLocaleString("pt-BR")}</td>
                      <td className="px-3 py-2 text-right font-display font-bold text-brand-yellow">
                        até R$ {Math.round(val * discountPct).toLocaleString("pt-BR")}/mês
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                if (openForm) openForm();
                else document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-teal to-[#00c3a6] hover:from-brand-teal-mid hover:to-brand-teal text-brand-navy font-bold rounded-full text-base uppercase tracking-wider shadow-[0_4px_20px_rgba(0,255,204,0.3)] hover:shadow-[0_6px_25px_rgba(0,255,204,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
            >
              Quero minha análise gratuita
              <ArrowRight className="h-5 w-5" />
            </button>

            <span className="text-[10px] text-brand-gray/50 leading-relaxed">
              Condições válidas para contas a partir de R$ 800. A economia pode variar conforme análise da fatura, estado, distribuidora, bandeira tarifária, disponibilidade de créditos e condições comerciais.
            </span>
          </div>

          {/* SVG Map (Right side) */}
          <div className="lg:col-span-7 w-full relative flex items-center justify-center min-h-[400px]">
            <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[420px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
              <ellipse cx="250" cy="320" rx="190" ry="40" fill="rgba(0, 255, 204, 0.1)" />
              <g className="animate-float-pedestal">
                <path d="M 50,220 L 250,320 L 250,345 L 50,245 Z" fill="#2d1c12" />
                <path d="M 250,320 L 450,220 L 450,245 L 250,345 Z" fill="#1f130b" />
                <path d="M 250,120 L 450,220 L 250,320 L 50,220 Z" fill="url(#grass-grad-s1)" />
                <path d="M 250,120 L 450,220 L 250,320 L 50,220 Z" fill="rgba(0,255,204,0.05)" />

                <path 
                  d="M 50,220 Q 150,230 220,180" 
                  fill="none" 
                  stroke={activeState === 'GO' ? '#00ffcc' : 'rgba(0,255,204,0.15)'} 
                  strokeWidth={activeState === 'GO' ? '2.5' : '1.5'} 
                  strokeDasharray="6 4"
                  className={activeState === 'GO' ? "animate-pulse" : ""}
                />
                <path 
                  d="M 50,220 Q 180,180 270,140" 
                  fill="none" 
                  stroke={activeState === 'TO' ? '#00ffcc' : 'rgba(0,255,204,0.15)'} 
                  strokeWidth={activeState === 'TO' ? '2.5' : '1.5'} 
                  strokeDasharray="6 4"
                  className={activeState === 'TO' ? "animate-pulse" : ""}
                />
                <path 
                  d="M 50,220 Q 120,270 170,240" 
                  fill="none" 
                  stroke={activeState === 'PR' ? '#00ffcc' : 'rgba(0,255,204,0.15)'} 
                  strokeWidth={activeState === 'PR' ? '2.5' : '1.5'} 
                  strokeDasharray="6 4"
                  className={activeState === 'PR' ? "animate-pulse" : ""}
                />

                {/* TOCANTINS */}
                <g transform="translate(270, 140)">
                  <ellipse cx="0" cy="20" rx="18" ry="8" fill="#1f130b" />
                  <path 
                    d="M -18,20 L 18,20 L 18,-15 L -18,-15 Z" 
                    fill={activeState === 'TO' ? "rgba(0, 255, 204, 0.15)" : "rgba(6,35,37,0.8)"} 
                    stroke={activeState === 'TO' ? "#00ffcc" : "#ffd700"} 
                    strokeWidth={activeState === 'TO' ? "2.5" : "1.5"} 
                  />
                  <ellipse cx="0" cy="-15" rx="18" ry="8" fill={activeState === 'TO' ? "rgba(0, 255, 204, 0.6)" : "rgba(255, 215, 0, 0.4)"} stroke={activeState === 'TO' ? "#00ffcc" : "#ffd700"} />
                  {activeState === 'TO' && <circle cx="0" cy="-15" r="3" fill="#ffffff" className="animate-pulse" />}
                </g>

                {/* GOIÁS */}
                <g transform="translate(220, 180)">
                  <ellipse cx="0" cy="20" rx="22" ry="10" fill="#1f130b" />
                  <path 
                    d="M -22,20 L 22,20 L 22,-25 L -22,-25 Z" 
                    fill={activeState === 'GO' ? "rgba(0, 255, 204, 0.15)" : "rgba(6,35,37,0.8)"} 
                    stroke={activeState === 'GO' ? "#00ffcc" : "#ffd700"} 
                    strokeWidth={activeState === 'GO' ? "2.5" : "1.5"} 
                  />
                  <ellipse cx="0" cy="-25" rx="22" ry="10" fill={activeState === 'GO' ? "rgba(0, 255, 204, 0.6)" : "rgba(255, 215, 0, 0.4)"} stroke={activeState === 'GO' ? "#00ffcc" : "#ffd700"} />
                  {activeState === 'GO' && <circle cx="0" cy="-25" r="4" fill="#ffffff" className="animate-pulse" />}
                </g>

                {/* PARANÁ */}
                <g transform="translate(170, 240)">
                  <ellipse cx="0" cy="20" rx="18" ry="8" fill="#1f130b" />
                  <path 
                    d="M -18,20 L 18,20 L 18,-10 L -18,-10 Z" 
                    fill={activeState === 'PR' ? "rgba(0, 255, 204, 0.15)" : "rgba(6,35,37,0.8)"} 
                    stroke={activeState === 'PR' ? "#00ffcc" : "#ffd700"} 
                    strokeWidth={activeState === 'PR' ? "2.5" : "1.5"} 
                  />
                  <ellipse cx="0" cy="-10" rx="18" ry="8" fill={activeState === 'PR' ? "rgba(0, 255, 204, 0.6)" : "rgba(255, 215, 0, 0.4)"} stroke={activeState === 'PR' ? "#00ffcc" : "#ffd700"} />
                  {activeState === 'PR' && <circle cx="0" cy="-10" r="3" fill="#ffffff" className="animate-pulse" />}
                </g>
              </g>
            </svg>

            <div 
              className={`absolute top-[35%] left-[45%] text-[10px] sm:text-xs font-bold rounded-lg px-2.5 py-1.5 shadow-md border pointer-events-none transition-all duration-300 animate-float-pedestal ${
                activeState === 'GO'
                  ? "bg-brand-teal/25 border-brand-teal text-brand-teal scale-110 shadow-brand-teal/20"
                  : "bg-[#031415]/85 border-[#ffd700]/20 text-white"
              }`}
            >
              GOIÁS: até 25%
            </div>

            <div 
              className={`absolute top-[15%] left-[55%] text-[10px] sm:text-xs font-bold rounded-lg px-2.5 py-1.5 shadow-md border pointer-events-none transition-all duration-300 animate-float-pedestal ${
                activeState === 'TO'
                  ? "bg-brand-teal/25 border-brand-teal text-brand-teal scale-110 shadow-brand-teal/20"
                  : "bg-[#031415]/85 border-[#ffd700]/20 text-white"
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              TOCANTINS: até 23%
            </div>

            <div 
              className={`absolute bottom-[25%] left-[32%] text-[10px] sm:text-xs font-bold rounded-lg px-2.5 py-1.5 shadow-md border pointer-events-none transition-all duration-300 animate-float-pedestal ${
                activeState === 'PR'
                  ? "bg-brand-teal/25 border-brand-teal text-brand-teal scale-110 shadow-brand-teal/20"
                  : "bg-[#031415]/85 border-[#ffd700]/20 text-white"
              }`}
              style={{ animationDelay: "1s" }}
            >
              PARANÁ: até 22%
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 10. SOCIAL PROOF CAROUSEL COMPONENT
// ============================================================================
const BASE = "https://page.grupobcenergia.com.br";
const lifeboxImg = `${BASE}/__l5e/assets-v1/c602a98d-f1bc-4eba-9116-5aed1b54663a/lifebox.png`;
const grupoCerealFabrica = `${BASE}/__l5e/assets-v1/fc643ea2-d1df-4c09-bd23-09032a80b36e/grupo-cereal-fabrica.jpg`;
const grupoCerealLogo = `${BASE}/__l5e/assets-v1/467fd3df-0cda-45ee-b1e9-54a2c5c26d5c/grupo-cereal-logo.png`;
const cocoBambuImg = `${BASE}/__l5e/assets-v1/756d697d-d5ac-49ec-b437-c706f3fa1d0b/coco-bambu.jpg`;

export function SocialProofCarousel({ scrollToForm }: { scrollToForm: () => void }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const cases = [
    {
      key: "lifebox",
      empresa: "LifeBox",
      image: lifeboxImg,
      imageAlt: "Restaurante LifeBox - cliente BC Energia",
      logo: null as string | null,
      descricao:
        "A LifeBox reduziu drasticamente seus custos com energia sem instalar placas solares ou realizar obras — com o modelo de assinatura do Grupo BC Energia.",
      economia: [
        { label: "Economia Anual", value: "+R$ 400.000" },
        { label: "Resultado", value: "Comprovado" },
      ],
      cta: "Quero economizar",
    },
    {
      key: "cereal",
      empresa: "Grupo Cereal",
      image: grupoCerealFabrica,
      imageAlt: "Fábrica do Grupo Cereal - Cliente BC Energia",
      logo: grupoCerealLogo,
      descricao:
        "Uma das maiores empresas do agronegócio brasileiro confia no Grupo BC Energia para reduzir drasticamente seus custos com energia — com economia que supera quase R$ 1 milhão por ano.",
      economia: [
        { label: "Economia Anual", value: "R$ 997.450" },
        { label: "Economia Média Mensal", value: "R$ 83.120" },
      ],
      cta: "Quero economizar",
    },
    {
      key: "cocobambu",
      empresa: "Coco Bambu",
      image: cocoBambuImg,
      imageAlt: "Coco Bambu - Cliente BC Energia",
      logo: null,
      descricao:
        "Uma das maiores redes de restaurantes do Brasil confia no Grupo BC Energia para reduzir seus custos com energia — com economia comprovada de fevereiro de 2025 a fevereiro de 2026.",
      economia: [{ label: "Economia Total", value: "R$ 338.881,76" }],
      cta: "Quero economizar",
    },
  ];

  return (
    <section className="relative bg-background py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/10 px-4 py-1.5 text-brand-teal">
          <CheckCircle2 className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-widest">Caso Real</span>
        </div>

        <h2 className="mb-6 max-w-4xl text-center font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-brand-navy md:text-4xl lg:text-5xl">
          Empresas já estão economizando
          <br />
          <span className="text-brand-teal">com o Grupo BC Energia</span>
        </h2>
        <p className="mb-12 max-w-2xl text-center text-lg font-light text-muted-foreground md:text-xl">
          Veja como empresas já reduziram custos com energia usando as soluções do Grupo BC Energia.
        </p>

        {/* Carousel container */}
        <div className="relative w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {cases.map((c) => (
                <div key={c.key} className="min-w-0 flex-[0_0_100%]">
                  <div className="w-full rounded-[2.5rem] overflow-hidden border border-brand-teal/20 bg-gradient-to-br from-brand-teal/5 via-card to-brand-cyan/5 backdrop-blur-xl">
                    <div className="flex flex-col lg:flex-row">
                      <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[500px] group">
                        <img
                          src={c.image}
                          alt={c.imageAlt}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-brand-navy/10" />
                        {c.logo && (
                          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                            <img src={c.logo} alt={`${c.empresa} logo`} className="h-12 sm:h-14 w-auto" />
                          </div>
                        )}
                      </div>
                      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-10 lg:p-12 space-y-5">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal w-fit">
                          <CheckCircle2 className="h-4 w-4" />
                          <span className="text-xs font-bold uppercase tracking-widest">Cliente Satisfeito</span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-brand-navy leading-tight">
                          {c.empresa}
                        </h3>
                        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{c.descricao}</p>
                        <div className="flex flex-wrap gap-4 pt-2">
                          {c.economia.map((e) => (
                            <div
                              key={e.label}
                              className="bg-brand-teal/5 border border-brand-teal/10 rounded-2xl px-6 py-4 text-center"
                            >
                              <p className="text-muted-foreground text-xs font-medium mb-1">{e.label}</p>
                              <p className="font-display text-brand-teal font-black text-2xl sm:text-3xl whitespace-nowrap">
                                {e.value}
                              </p>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={scrollToForm}
                          className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-teal px-10 py-4 font-display text-base font-semibold uppercase tracking-tight text-white shadow-sm transition-all hover:bg-brand-teal-mid hover:shadow-md active:scale-[0.98] sm:w-auto"
                        >
                          {c.cta}
                          <ArrowUp className="h-5 w-5 rotate-90 shrink-0" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Anterior"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card shadow-lg transition-colors hover:bg-brand-teal hover:text-white disabled:opacity-30 lg:-translate-x-6 cursor-pointer"
            disabled={!canScrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="Próximo"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full border border-border bg-card shadow-lg transition-colors hover:bg-brand-teal hover:text-white disabled:opacity-30 lg:translate-x-6 cursor-pointer"
            disabled={!canScrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center gap-3">
          {cases.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para o caso ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                i === selectedIndex ? "w-8 bg-brand-teal" : "w-3 bg-brand-teal/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 11. ELIGIBILITY SECTION
// ============================================================================
export function Eligibility() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-navy sm:text-5xl">
          Atendimento disponível em Goiás, Tocantins e Paraná
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Confira as condições de economia disponíveis para cada estado.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {coverage.map(({ state, discount }) => (
            <div
              key={state}
              className="flex flex-col items-center gap-3 rounded-2xl border border-brand-gray bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <MapPin className="h-9 w-9 text-brand-teal" strokeWidth={1.75} />
              <span className="font-display text-2xl font-bold uppercase tracking-tight text-brand-navy">
                {state}
              </span>
              <span className="text-sm font-semibold text-brand-teal uppercase tracking-wide">
                {discount}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          É necessário ser titular ou responsável pela conta de energia para solicitar a análise.
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// 12. WHO WE ARE SECTION (QUEM SOMOS)
// ============================================================================
export function WhoWeAre({ openForm }: { openForm?: () => void }) {
  const handleScroll = () => {
    if (openForm) openForm();
    else document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sobre" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center border-b border-brand-teal/10 overflow-hidden">
      <BrazilMapBadge activeState="GO" />

      <div className="w-full max-w-7xl mx-auto relative z-2 flex flex-col gap-20">
        
        {/* Subsection 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="flex flex-col items-start text-left">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow mb-2">
              Sobre Nós
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-6">
              Quem é o Grupo BC Energia
            </h2>
            <p className="text-base sm:text-lg text-brand-gray/80 mb-8 max-w-xl leading-relaxed">
              O Grupo BC Energia é um conjunto de empresas especializadas no setor elétrico, oferecendo soluções inovadoras e sustentáveis para redução de custos com energia. Atuamos em geração distribuída, comercialização de energia e gestão energética, levando economia para consumidores e empresas.
            </p>
            <button
              onClick={handleScroll}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-teal to-[#00c3a6] hover:from-brand-teal-mid hover:to-brand-teal text-brand-navy font-bold rounded-full text-base uppercase tracking-wider shadow-[0_4px_20px_rgba(0,255,204,0.3)] hover:shadow-[0_6px_25px_rgba(0,255,204,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
            >
              Quero minha análise gratuita
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="w-full relative flex items-center justify-center min-h-[350px]">
            <svg viewBox="0 0 450 350" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[350px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
              <ellipse cx="225" cy="270" rx="140" ry="30" fill="rgba(0, 255, 204, 0.1)" />
              <g className="animate-float-pedestal">
                <path d="M 225,120 L 365,200 L 225,280 L 85,200 Z" fill="url(#grass-grad-s1)" />
                <path d="M 180,185 L 225,210 L 270,185 C 270,150 180,150 180,185 Z" fill="rgba(0, 255, 204, 0.2)" stroke="#00ffcc" strokeWidth="2" />
                <path d="M 195,193 L 225,210 L 255,193 L 255,202 L 225,218 L 195,202 Z" fill="#ffffff" opacity="0.8" />
              </g>
            </svg>

            <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
              <div 
                className="absolute top-[5%] left-[-2%] sm:left-[5%] bg-brand-navy/90 border border-brand-teal rounded-xl p-3 sm:p-4 shadow-lg flex flex-col pointer-events-auto transition-transform duration-300 hover:scale-105 animate-float-pedestal"
                style={{ animationDelay: "0s" }}
              >
                <span className="text-xl sm:text-2xl font-black text-brand-teal">+10 Anos</span>
                <span className="text-[10px] sm:text-xs font-semibold text-white">De experiência</span>
              </div>
              
              <div 
                className="absolute bottom-[10%] left-[8%] sm:left-[15%] bg-brand-navy/90 border border-brand-teal rounded-xl p-3 sm:p-4 shadow-lg flex flex-col pointer-events-auto transition-transform duration-300 hover:scale-105 animate-float-pedestal"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-xl sm:text-2xl font-black text-brand-teal">+5.000</span>
                <span className="text-[10px] sm:text-xs font-semibold text-white">Clientes atendidos</span>
              </div>

              <div 
                className="absolute bottom-[5%] right-[-2%] sm:right-[5%] bg-brand-navy/90 border border-brand-teal rounded-xl p-3 sm:p-4 shadow-lg flex flex-col pointer-events-auto transition-transform duration-300 hover:scale-105 animate-float-pedestal"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-xl sm:text-2xl font-black text-brand-teal">R$ 400M+</span>
                <span className="text-[10px] sm:text-xs font-semibold text-white">Economia gerada</span>
              </div>

              <div 
                className="absolute top-[25%] right-[-5%] sm:right-[0%] bg-brand-navy/90 border border-brand-teal rounded-xl p-3 sm:p-4 shadow-lg flex flex-col pointer-events-auto transition-transform duration-300 hover:scale-105 animate-float-pedestal"
                style={{ animationDelay: "1.5s" }}
              >
                <span className="text-xl sm:text-2xl font-black text-brand-teal">+15k Ton</span>
                <span className="text-[10px] sm:text-xs font-semibold text-white">CO₂ Evitadas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subsection 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="flex flex-col items-start text-left lg:order-last">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow mb-2">
              Nossos Pilares
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-6">
              Compromisso com a Excelência
            </h2>
            <p className="text-base sm:text-lg text-brand-gray/80 mb-8 max-w-xl leading-relaxed">
              Atuamos com base em diretrizes rígidas de integridade, pioneirismo mercadológico e dedicação ao cliente. Integramos tecnologia de ponta e sustentabilidade para entregar economia pura e inteligência energética.
            </p>
            <button
              onClick={handleScroll}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-brand-teal text-brand-teal hover:bg-brand-teal/10 font-bold rounded-full text-base uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
            >
              Falar com um Especialista
            </button>
          </div>

          <div className="w-full flex items-center justify-center">
            <svg viewBox="0 0 450 350" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[350px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
              <ellipse cx="225" cy="270" rx="140" ry="30" fill="rgba(0, 255, 204, 0.1)" />
              <g className="animate-float-pedestal">
                <path d="M 225,120 L 365,200 L 225,280 L 85,200 Z" fill="url(#grass-grad-s1)" />
                <path d="M 150,170 Q 225,230 300,170" fill="none" stroke="#00ffcc" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 225,140 Q 225,200 225,250" fill="none" stroke="#00ffcc" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 150,170 Q 225,180 300,170" fill="none" stroke="#00ffcc" strokeWidth="2" strokeDasharray="4 4" />
                
                <g transform="translate(150, 160)">
                  <ellipse cx="0" cy="10" rx="20" ry="10" fill="#0c3e40" stroke="#00ffcc" strokeWidth="1.5" />
                  <circle cx="0" cy="-5" r="12" fill="#00ffcc" />
                  <path d="M -3,-10 Q 5,-10 3,-2 Q -5,-2 -3,-10 Z" fill="#031415" />
                </g>
                <text x="125" y="195" fill="#fff" fontSize="11" fontWeight="700" fontFamily="'Outfit', sans-serif">Expertise</text>

                <g transform="translate(225, 130)">
                  <ellipse cx="0" cy="10" rx="20" ry="10" fill="#0c3e40" stroke="#00ffcc" strokeWidth="1.5" />
                  <circle cx="0" cy="-5" r="12" fill="#00ffcc" />
                  <path d="M 0,-12 L 4,-5 L 2,0 L -2,0 L -4,-5 Z" fill="#031415" />
                </g>
                <text x="185" y="160" fill="#fff" fontSize="11" fontWeight="700" fontFamily="'Outfit', sans-serif">Sustentabilidade</text>

                <g transform="translate(300, 160)">
                  <ellipse cx="0" cy="10" rx="20" ry="10" fill="#0c3e40" stroke="#00ffcc" strokeWidth="1.5" />
                  <circle cx="0" cy="-5" r="12" fill="#00ffcc" />
                  <path d="M 0,-8 C -3,-12 -8,-8 -4,-4 L 0,0 L 4,-4 C 8,-8 3,-12 0,-8 Z" fill="#031415" />
                </g>
                <text x="270" y="195" fill="#fff" fontSize="11" fontWeight="700" fontFamily="'Outfit', sans-serif">Pioneirismo</text>

                <g transform="translate(225, 230)">
                  <ellipse cx="0" cy="10" rx="20" ry="10" fill="#0c3e40" stroke="#00ffcc" strokeWidth="1.5" />
                  <circle cx="0" cy="-5" r="12" fill="#ffd700" />
                  <path d="M -4,-5 L -1,-2 L 4,-8" fill="none" stroke="#031415" strokeWidth="2.5" strokeLinecap="round" />
                </g>
                <text x="190" y="260" fill="#ffd700" fontSize="11" fontWeight="700" fontFamily="'Outfit', sans-serif">Infraestrutura</text>
              </g>
            </svg>
          </div>
        </div>

        <p className="text-center text-xs text-white/50 max-w-2xl mx-auto -mt-6">
          Modelo de geração distribuída regulamentado pela ANEEL e pelo Marco Legal da GD.
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// 13. FAQ COMPONENT
// ============================================================================
const faqs = [
  {
    q: "Preciso instalar placas solares?",
    a: "Não. A energia é gerada pelas usinas fotovoltaicas do Grupo BC Energia.",
  },
  {
    q: "Preciso fazer obra?",
    a: "Não. Não há instalação física, reforma ou mudança na estrutura da empresa.",
  },
  {
    q: "Preciso investir algum valor inicial?",
    a: "Não. A análise é gratuita e a solução não exige investimento inicial.",
  },
  {
    q: "Minha energia muda?",
    a: "Não. O fornecimento continua normalmente pela distribuidora da sua região.",
  },
  {
    q: "Como o desconto aparece?",
    a: "Os créditos de energia renovável são compensados na sua Unidade Consumidora, reduzindo o valor final pago na conta de energia.",
  },
  {
    q: "Quem pode contratar?",
    a: "Clientes com contas a partir de R$ 800 nos estados atendidos podem solicitar a análise. A aprovação depende da análise da fatura, disponibilidade de créditos e condições comerciais.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background border-b border-brand-teal/10">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-tight text-brand-navy sm:text-4xl">
          Você não precisa instalar nada para começar a economizar
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-lg font-semibold uppercase tracking-tight text-brand-navy">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// ============================================================================
// 14. FINAL CTA COMPONENT
// ============================================================================
export function FinalCta() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-brand">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          Envie sua fatura e descubra quanto sua empresa pode economizar
        </h2>
        <p className="max-w-2xl text-lg text-white/90">
          Solicite uma análise gratuita e veja se a sua conta de energia tem potencial para receber
          desconto com o Consórcio BC Energia.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <CtaButton size="lg" variant="yellow" href="#lead-form">
            Enviar minha fatura agora
          </CtaButton>
          <a
            href="#lead-form"
            onClick={handleScroll}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 font-display text-lg font-semibold uppercase tracking-tight text-white transition-colors hover:bg-white hover:text-brand-teal cursor-pointer"
          >
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 15. FOOTER COMPONENT
// ============================================================================
const menuLinks = [
  { label: "Página Inicial", href: "/" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Simulador", href: "#simulador" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Perguntas Frequentes", href: "#faq" },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
];

const socials = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-tight text-brand-cyan">
              Menu
            </h3>
            <ul className="mt-4 space-y-2.5">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/80 transition-colors hover:text-brand-yellow">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-tight text-brand-cyan">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/80 transition-colors hover:text-brand-yellow">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-tight text-brand-cyan">
              Atendimento
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>Seg–Sex, 9h às 18h</li>
              <li>
                <a
                  href="#lead-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white transition-colors hover:text-brand-yellow font-semibold"
                >
                  Fale com nossa equipe comercial
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-tight text-brand-cyan">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>
                Relacionamento
                <br />
                <a href="mailto:relacionamento@bcenergia.com.br" className="text-white transition-colors hover:text-brand-yellow">
                  relacionamento@bcenergia.com.br
                </a>
              </li>
              <li>
                Ouvidoria
                <br />
                <a href="mailto:ouvidoria@bcenergia.com.br" className="text-white transition-colors hover:text-brand-yellow">
                  ouvidoria@bcenergia.com.br
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-teal"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Grupo BC Energia" className="h-11 w-auto brightness-0 invert sm:h-12" />
          </div>
          <p className="text-xs text-white/60">
            © 2026 Grupo BC Energia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// 16. TANSTACK ROUTER SETUP & MAIN INDEX PAGE COMPONENT
// ============================================================================
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Consórcio BC Energia | Economize até 25% na Conta de Luz" },
      {
        name: "description",
        content:
          "Reduza a conta de luz da sua empresa com energia limpa e renovável. Sem placas solares, sem obra e sem investimento inicial. Solicite sua análise gratuita.",
      },
      { property: "og:title", content: "Consórcio BC Energia | Economize até 25% na Conta de Luz" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content:
          "Reduza a conta de luz da sua empresa com energia limpa e renovável. Sem placas solares, sem obra e sem investimento inicial. Solicite sua análise gratuita.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <Qualification />
        <Steps openForm={scrollToForm} />
        <TwoInvoices />
        <Simulator openForm={scrollToForm} />
        <SocialProofCarousel scrollToForm={scrollToForm} />
        <Eligibility />
        <WhoWeAre openForm={scrollToForm} />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

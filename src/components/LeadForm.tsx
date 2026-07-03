import { useMemo, useRef, useState } from "react";
import { Loader2, CheckCircle2, UploadCloud, FileText, AlertCircle } from "lucide-react";
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
import { cn } from "@/lib/utils";

// ============================================================================
// Backend endpoint — será fornecido depois (Edge Function capture-lead).
// Enquanto estiver como placeholder/vazio, o form roda em modo MOCK:
// apenas loga o payload no console e mostra o estado de sucesso.
// ============================================================================
const CAPTURE_ENDPOINT = "[ENDPOINT_CAPTURE_LEAD]";

// Política de privacidade — preencher antes de publicar.
const URL_POLITICA = "[URL_POLITICA]";

// FLAG DE VERSÃO — alternar entre as duas LPs do brief.
// true  -> mostra o campo de upload da fatura
// false -> esconde o upload e ajusta o texto do CTA
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

const initialState: FormState = {
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
  const [form, setForm] = useState<FormState>(initialState);
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
        // Modo mock: backend ainda não conectado.
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

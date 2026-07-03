import { Home, Building2, KeyRound } from "lucide-react";

// Placeholder [ESTADOS] — ajustar conforme cobertura real (default: Goiás).
const ESTADOS = "Goiás";

const imoveis = [
  { Icon: Home, label: "Casa" },
  { Icon: Building2, label: "Apartamento" },
  { Icon: KeyRound, label: "Imóvel alugado" },
];

export function Eligibility() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-navy sm:text-5xl">
          Você já pode ser cliente BC em {ESTADOS}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          É necessário ser o titular da conta de luz.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {imoveis.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-brand-gray bg-white p-8"
            >
              <Icon className="h-9 w-9 text-brand-teal" strokeWidth={1.75} />
              <span className="font-display text-lg font-semibold uppercase tracking-tight text-brand-navy">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

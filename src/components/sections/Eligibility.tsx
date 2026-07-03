import { MapPin } from "lucide-react";

const coverage = [
  { state: "Goiás", discount: "até 25% de desconto" },
  { state: "Tocantins", discount: "até 23% de desconto" },
  { state: "Paraná", discount: "até 22% de desconto" },
];

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

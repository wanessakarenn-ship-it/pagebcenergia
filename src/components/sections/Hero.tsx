import heroSolar from "@/assets/hero-solar.jpg";
import { LeadForm } from "@/components/LeadForm";

const chips = [
  "Até 25% de desconto",
  "Sem placas solares",
  "Sem obra",
  "Sem investimento inicial",
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
      <div className="absolute inset-0 -z-10 bg-brand-navy/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-brand-dark opacity-50" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <h1 className="max-w-2xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Economize até 25% na conta de luz sem instalar placas solares
          </h1>
          <p className="max-w-xl text-lg text-white/85">
            Com o Consórcio BC Energia, sua empresa reduz custos todos os meses usando energia limpa
            e renovável — sem obra, sem investimento inicial e sem mudar sua rotina de consumo.
          </p>
          <ul className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <li
                key={c}
                className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="w-full">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

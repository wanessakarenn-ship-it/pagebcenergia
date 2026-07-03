import heroSolar from "@/assets/hero-solar.jpg";
import { LeadForm } from "@/components/LeadForm";

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

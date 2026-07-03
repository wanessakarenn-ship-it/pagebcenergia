import { HardHat, Wallet, MousePointerClick, HeartHandshake } from "lucide-react";

const benefits = [
  { Icon: HardHat, label: "Sem obras" },
  { Icon: Wallet, label: "Sem investimento" },
  { Icon: MousePointerClick, label: "Adesão 100% online" },
  { Icon: HeartHandshake, label: "Atendimento próximo" },
];

export function Benefits() {
  return (
    <section className="bg-brand-gray/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-16">
        {benefits.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Icon className="h-7 w-7 text-brand-teal" strokeWidth={1.75} />
            </span>
            <span className="font-display text-base font-semibold uppercase tracking-tight text-brand-navy sm:text-lg">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

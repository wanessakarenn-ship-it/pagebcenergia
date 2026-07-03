import contaUnica from "@/assets/conta-unica.jpg";
import { CtaButton } from "@/components/CtaButton";

export function ContaUnica() {
  return (
    <section className="bg-brand-gray/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-navy sm:text-5xl">
            Adeus às contas complicadas
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Com a BC, você passa a receber uma Conta Única, direto no seu WhatsApp e e-mail, com toda a
            economia detalhada e fácil de entender. A conta da distribuidora é quitada automaticamente —
            você não precisa se preocupar com boletos separados nem prazos diferentes.
          </p>
          <div className="mt-8">
            <CtaButton size="lg">Quero minha conta mais barata</CtaButton>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src={contaUnica}
            alt="Pessoa conferindo a economia da Conta Única BC no celular"
            width={1200}
            height={1000}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

import { CtaButton } from "@/components/CtaButton";

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

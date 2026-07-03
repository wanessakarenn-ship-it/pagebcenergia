import { Zap, ScrollText } from "lucide-react";

export function TwoInvoices() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-tight text-brand-navy sm:text-4xl">
          Você paga a energia com uma tarifa mais competitiva
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
          Na prática, sua conta passa a funcionar de forma mais inteligente. Você escolhe um
          fornecedor de energia mais competitivo e continua usando normalmente a rede da
          distribuidora da sua região.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-brand-gray bg-white p-8 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/10">
              <Zap className="h-6 w-6 text-brand-teal" strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-brand-navy">
              Fatura BC Energia
            </h3>
            <p className="text-muted-foreground">
              Você paga pelo consumo de energia com uma tarifa mais competitiva.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-brand-gray bg-white p-8 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/10">
              <ScrollText className="h-6 w-6 text-brand-teal" strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-brand-navy">
              Fatura da Distribuidora
            </h3>
            <p className="text-muted-foreground">
              Você paga apenas a taxa de uso da rede — como se fosse o “frete” da energia.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-brand-navy p-8 text-center text-white">
          <p className="mx-auto max-w-3xl text-lg leading-relaxed">
            É como uma compra online: você escolhe o melhor fornecedor do produto e paga a entrega
            separadamente. Na energia, essa separação pode deixar a conta final muito mais barata.
          </p>
        </div>
      </div>
    </section>
  );
}

import { Zap, FileText, BarChart3 } from "lucide-react";

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

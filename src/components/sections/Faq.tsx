import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso instalar placas solares?",
    a: "Não. A energia é gerada pelas usinas fotovoltaicas do Grupo BC Energia.",
  },
  {
    q: "Preciso fazer obra?",
    a: "Não. Não há instalação física, reforma ou mudança na estrutura da empresa.",
  },
  {
    q: "Preciso investir algum valor inicial?",
    a: "Não. A análise é gratuita e a solução não exige investimento inicial.",
  },
  {
    q: "Minha energia muda?",
    a: "Não. O fornecimento continua normalmente pela distribuidora da sua região.",
  },
  {
    q: "Como o desconto aparece?",
    a: "Os créditos de energia renovável são compensados na sua Unidade Consumidora, reduzindo o valor final pago na conta de energia.",
  },
  {
    q: "Quem pode contratar?",
    a: "Clientes com contas a partir de R$ 800 nos estados atendidos podem solicitar a análise. A aprovação depende da análise da fatura, disponibilidade de créditos e condições comerciais.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background border-b border-brand-teal/10">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-tight text-brand-navy sm:text-4xl">
          Você não precisa instalar nada para começar a economizar
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-lg font-semibold uppercase tracking-tight text-brand-navy">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

import { MessageCircle } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";

export function FinalCta() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-brand">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          Envie sua fatura e descubra quanto sua empresa pode economizar
        </h2>
        <p className="max-w-2xl text-lg text-white/90">
          Solicite uma análise gratuita e veja se a sua conta de energia tem potencial para receber
          desconto com o Consórcio BC Energia.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <CtaButton size="lg" variant="yellow" href="#lead-form">
            Enviar minha fatura agora
          </CtaButton>
          <a
            href="#lead-form"
            onClick={handleScroll}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 font-display text-lg font-semibold uppercase tracking-tight text-white transition-colors hover:bg-white hover:text-brand-teal cursor-pointer"
          >
            <MessageCircle className="h-5 w-5" />
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}

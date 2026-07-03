import { MessageCircle } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";

// Preencher antes de publicar.
const NUMERO_WHATSAPP = "[NUMERO_WHATSAPP]"; // ex: 5562999999999
const MENSAGEM_WHATSAPP = "Olá! Quero falar com um especialista sobre o Consórcio BC Energia.";

const whatsappHref = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(MENSAGEM_WHATSAPP)}`;

export function FinalCta() {
  return (
    <section className="bg-gradient-brand">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
          Envie sua fatura e comece a economizar
        </h2>
        <p className="max-w-2xl text-lg text-white/90">
          Solicite uma análise gratuita e veja quanto sua empresa pode economizar já no próximo mês
          com o Consórcio BC Energia.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <CtaButton size="lg" variant="yellow" href="#lead-form">
            Enviar minha fatura agora
          </CtaButton>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 font-display text-lg font-semibold uppercase tracking-tight text-white transition-colors hover:bg-white hover:text-brand-teal"
          >
            <MessageCircle className="h-5 w-5" />
            Falar com um especialista no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Qualification } from "@/components/sections/Qualification";
import { Steps } from "@/components/sections/Steps";
import { Simulator } from "@/components/sections/Simulator";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LeadForm } from "@/components/LeadForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Consórcio BC Energia — Economize até 25% na conta de luz" },
      {
        name: "description",
        content:
          "Reduza a conta de luz da sua empresa em até 25% com energia renovável — sem placas, sem obra e sem investimento inicial. Peça a análise gratuita da sua fatura.",
      },
      { property: "og:title", content: "Consórcio BC Energia — Economize até 25% na conta de luz" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content:
          "Reduza a conta de luz da sua empresa em até 25% com energia renovável — sem placas, sem obra e sem investimento inicial.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        {/* SEÇÃO 1: Carrossel Como Funciona */}
        <Steps openForm={openForm} />

        {/* SEÇÃO 2: Qualificação Para quem é */}
        <Qualification openForm={openForm} />

        {/* SEÇÃO 3: Institucional O Grupo BC */}
        <WhoWeAre openForm={openForm} />

        {/* SEÇÃO 4: Simulador Interativo */}
        <Simulator openForm={openForm} />
      </main>
      <Footer />
      <WhatsAppButton />

      {/* Pop-up Lead Form Dialog for CTAs */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-xl p-0 bg-transparent border-none overflow-hidden max-h-[90vh] overflow-y-auto">
          <div className="bg-brand-navy border border-brand-teal/20 rounded-3xl p-6 relative">
            <LeadForm />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}


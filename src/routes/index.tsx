import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { Qualification } from "@/components/sections/Qualification";
import { Steps } from "@/components/sections/Steps";
import { TwoInvoices } from "@/components/sections/TwoInvoices";
import { Simulator } from "@/components/sections/Simulator";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import { Eligibility } from "@/components/sections/Eligibility";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

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
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <Qualification />
        <Steps />
        <TwoInvoices />
        <Simulator />
        <SocialProofCarousel
          scrollToForm={() =>
            document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <Eligibility />
        <WhoWeAre />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

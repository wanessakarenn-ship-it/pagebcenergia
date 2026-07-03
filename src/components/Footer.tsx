import { Instagram, Facebook, Linkedin } from "lucide-react";
import { WHATSAPP_COMERCIAL, WHATSAPP_CLIENTES } from "@/components/WhatsAppButton";
import logo from "@/assets/logo-bc.png.asset.json";

const menuLinks = [
  { label: "Página Inicial", href: "/" },
  { label: "Para Você", href: "#para-voce" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Blog", href: "#blog" },
  { label: "Entrar", href: "/entrar" },
  { label: "Cadastrar", href: "/cadastro" },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "#privacidade" },
  { label: "Termos de Uso", href: "#termos" },
];

const socials = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-tight text-brand-cyan">
              Menu
            </h3>
            <ul className="mt-4 space-y-2.5">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/80 transition-colors hover:text-brand-yellow">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-tight text-brand-cyan">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/80 transition-colors hover:text-brand-yellow">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-tight text-brand-cyan">
              Atendimento
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>Seg–Sex, 9h às 18h</li>
              <li>
                WhatsApp Comercial
                <br />
                <a href={`https://wa.me/${WHATSAPP_COMERCIAL}`} className="text-white transition-colors hover:text-brand-yellow">
                  {WHATSAPP_COMERCIAL}
                </a>
              </li>
              <li>
                WhatsApp Clientes
                <br />
                <a href={`https://wa.me/${WHATSAPP_CLIENTES}`} className="text-white transition-colors hover:text-brand-yellow">
                  {WHATSAPP_CLIENTES}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-tight text-brand-cyan">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>
                Relacionamento
                <br />
                <a href="mailto:relacionamento@bcenergia.com.br" className="text-white transition-colors hover:text-brand-yellow">
                  relacionamento@bcenergia.com.br
                </a>
              </li>
              <li>
                Ouvidoria
                <br />
                <a href="mailto:ouvidoria@bcenergia.com.br" className="text-white transition-colors hover:text-brand-yellow">
                  ouvidoria@bcenergia.com.br
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-teal"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Grupo BC Energia" className="h-11 w-auto brightness-0 invert sm:h-12" />
          </div>
          <p className="text-xs text-white/60">
            CNPJ 00.000.000/0001-00 · © 2026 Grupo BC Energia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

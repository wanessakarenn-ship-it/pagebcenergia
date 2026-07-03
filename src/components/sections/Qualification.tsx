import * as React from "react";
import { BrazilMapBadge } from "@/components/BrazilMapBadge";

type QualificationProps = {
  openForm?: () => void;
};

export function Qualification({ openForm }: QualificationProps) {
  const cards = [
    {
      type: "Residencial",
      title: "Para quem tem Casa",
      pretitle: "Você já pode ser cliente BC em Goiás.",
      desc: "Ideal para proprietários de casas residenciais que buscam economizar na conta de luz sem a necessidade de instalar painéis solares no telhado. Economia imediata, sem obras e sem qualquer manutenção.",
      btnText: "Simular para minha Casa",
      visual: (
        <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <ellipse cx="120" cy="140" rx="80" ry="18" fill="rgba(0, 255, 204, 0.1)" />
          <g className="animate-float-pedestal">
            {/* Grass */}
            <path d="M 120,70 L 200,110 L 120,150 L 40,110 Z" fill="url(#grass-grad-s1)" />
            {/* House Body */}
            <path d="M 80,100 L 120,120 L 120,140 L 80,120 Z" fill="#eeeeee" />
            <path d="M 120,120 L 160,100 L 160,120 L 120,140 Z" fill="#dddddd" />
            <path d="M 80,100 L 120,80 L 120,120 L 80,120 Z" fill="#0c3e40" />
            <path d="M 120,80 L 160,100 L 160,120 L 120,120 Z" fill="#0d6e70" />
            
            {/* Highlighted Meter */}
            <g transform="translate(135, 115)">
              <path d="M 0,0 L 25,-25" stroke="#00ffcc" strokeWidth="1.5" />
              <path d="M 25,-25 L 40,-17 L 40,-7 L 25,-15 Z" fill="#111" stroke="#00ffcc" strokeWidth="1" />
              <circle cx="33" cy="-14" r="3" fill="#00ffcc" className="animate-pulse" />
            </g>
          </g>
        </svg>
      ),
    },
    {
      type: "Apartamento",
      title: "Para quem mora em Apartamento",
      pretitle: "Você já pode ser cliente BC em Goiás.",
      desc: "Quem mora em apartamento também pode aproveitar os benefícios da energia solar por assinatura. Os créditos de desconto são aplicados diretamente no seu CPF/CNPJ, sem alterar nada no condomínio.",
      btnText: "Desconto no Apartamento",
      visual: (
        <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <ellipse cx="120" cy="140" rx="80" ry="18" fill="rgba(0, 255, 204, 0.1)" />
          <g className="animate-float-pedestal">
            {/* Grass */}
            <path d="M 120,70 L 200,110 L 120,150 L 40,110 Z" fill="url(#grass-grad-s1)" />
            {/* Skyscraper */}
            <path d="M 100,50 L 120,60 L 120,135 L 100,125 Z" fill="#ffffff" />
            <path d="M 120,60 L 140,50 L 140,125 L 120,135 Z" fill="#cccccc" />
            <path d="M 100,50 L 120,40 L 140,50 L 120,60 Z" fill="#38ef7d" />
            
            {/* Windows */}
            <circle cx="107" cy="70" r="1.5" fill="#032021" />
            <circle cx="113" cy="73" r="1.5" fill="#032021" />
            <circle cx="107" cy="85" r="1.5" fill="#00ffcc" className="animate-pulse" />
            <circle cx="113" cy="88" r="1.5" fill="#032021" />
            <circle cx="107" cy="100" r="1.5" fill="#032021" />
            <circle cx="113" cy="103" r="1.5" fill="#00ffcc" className="animate-pulse" />
            
            {/* Highlighted Meter */}
            <g transform="translate(130, 95)">
              <path d="M 0,15 L 25,0" stroke="#00ffcc" strokeWidth="1.5" />
              <path d="M 25,0 L 40,8 L 40,18 L 25,10 Z" fill="#111" stroke="#00ffcc" strokeWidth="1" />
              <rect x="29" y="5" width="8" height="8" fill="#00ffcc" className="animate-pulse" opacity="0.8" />
            </g>
          </g>
        </svg>
      ),
    },
    {
      type: "Alugado",
      title: "Para quem está em Imóvel Alugado",
      pretitle: "Você já pode ser cliente BC em Goiás.",
      desc: "Não precisa ser proprietário do imóvel para economizar. Se você mora de aluguel ou possui um comércio alugado em Goiás, o consórcio de energia é 100% digital, não exige reformas e migra com você caso mude de endereço.",
      btnText: "Economizar no Imóvel Alugado",
      visual: (
        <svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <ellipse cx="120" cy="140" rx="80" ry="18" fill="rgba(0, 255, 204, 0.1)" />
          <g className="animate-float-pedestal">
            {/* Grass */}
            <path d="M 120,70 L 200,110 L 120,150 L 40,110 Z" fill="url(#grass-grad-s1)" />
            {/* House */}
            <path d="M 90,105 L 120,120 L 120,135 L 90,120 Z" fill="#eeeeee" />
            <path d="M 120,120 L 150,105 L 150,120 L 120,135 Z" fill="#cccccc" />
            <path d="M 90,105 L 120,90 L 120,120 L 90,120 Z" fill="#0c3e40" />
            <path d="M 120,90 L 150,105 L 150,120 L 120,120 Z" fill="#0d6e70" />

            {/* Floating Golden Key */}
            <g transform="translate(105, 55)" className="animate-float-pedestal" style={{ animationDelay: "-1.5s" }}>
              <path d="M 0,10 L 25,10 L 25,18 L 20,18 L 20,13 L 15,13 L 15,18 L 10,18 L 10,13 L 0,13 Z" fill="#ffd700" stroke="#fff" strokeWidth="0.5" />
              <circle cx="0" cy="11.5" r="5" fill="#ffd700" stroke="#fff" strokeWidth="0.5" />
              <circle cx="0" cy="11.5" r="2.5" fill="#032021" />
            </g>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section id="qualificacao" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center border-b border-brand-teal/10">
      {/* Absolute Stylized Brazil Map Badge */}
      <BrazilMapBadge activeState="GO" />

      <div className="w-full max-w-7xl mx-auto relative z-2">
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow mb-2">
            Qualificação
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Para quem é o Consórcio BC Energia
          </h2>
          <p className="text-base sm:text-lg text-brand-gray/80">
            Descubra as modalidades qualificadas para o consórcio de energia no estado de Goiás. Economia descomplicada e 100% digital para qualquer perfil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.title}
              className="flex flex-col items-start p-8 rounded-3xl bg-brand-navy/60 border border-brand-teal/10 hover:border-brand-teal/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 group"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-yellow bg-brand-yellow/10 px-3 py-1 rounded-full mb-6">
                Goiás Disponível
              </span>
              
              {/* Visual 3D SVG */}
              <div className="w-full h-44 flex items-center justify-center mb-6">
                {card.visual}
              </div>
              
              <span className="text-xs font-medium text-brand-gray/60 mb-1">
                {card.pretitle}
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-4 leading-tight group-hover:text-brand-teal transition-colors">
                {card.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-brand-gray/80 mb-8 flex-grow">
                {card.desc}
              </p>
              
              <button
                onClick={() => {
                  if (openForm) openForm();
                  else document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-navy border border-brand-teal/30 hover:border-brand-teal hover:bg-brand-teal hover:text-brand-navy text-brand-teal font-bold rounded-full text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm active:scale-[0.98]"
              >
                {card.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

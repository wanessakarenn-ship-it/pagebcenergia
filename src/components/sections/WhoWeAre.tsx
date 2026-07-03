import * as React from "react";
import { BrazilMapBadge } from "@/components/BrazilMapBadge";
import { ArrowRight } from "lucide-react";

type WhoWeAreProps = {
  openForm: () => void;
};

export function WhoWeAre({ openForm }: WhoWeAreProps) {
  return (
    <section id="sobre" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center border-b border-brand-teal/10 overflow-hidden">
      {/* Absolute Stylized Brazil Map Badge */}
      <BrazilMapBadge activeState="GO" />

      <div className="w-full max-w-7xl mx-auto relative z-2 flex flex-col gap-24">
        
        {/* SUBSEÇÃO 1: ESCALA (A Comercializadora) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="flex flex-col items-start text-left">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow mb-2">
              O Grupo BC Energia
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-6">
              Maior Comercializadora de Energia do Centro-Oeste
            </h2>
            <p className="text-base sm:text-lg text-brand-gray/80 mb-8 max-w-xl">
              Com sólido histórico e liderança de mercado, o Grupo BC Energia conecta produtores e consumidores para entregar inovação e eficiência financeira. Nossa robustez operacional assegura a consistência e segurança do seu desconto mensal.
            </p>
            <button
              onClick={openForm}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-teal to-[#00c3a6] hover:from-brand-teal-mid hover:to-brand-teal text-brand-navy font-bold rounded-full text-base uppercase tracking-wider shadow-[0_4px_20px_rgba(0,255,204,0.3)] hover:shadow-[0_6px_25px_rgba(0,255,204,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
            >
              Conhecer nossa história
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="w-full relative flex items-center justify-center min-h-[350px]">
            {/* Dome Illustration on Grass */}
            <svg viewBox="0 0 450 350" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[350px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
              <ellipse cx="225" cy="270" rx="140" ry="30" fill="rgba(0, 255, 204, 0.1)" />
              <g className="animate-float-pedestal">
                <path d="M 225,120 L 365,200 L 225,280 L 85,200 Z" fill="url(#grass-grad-s1)" />
                <path d="M 180,185 L 225,210 L 270,185 C 270,150 180,150 180,185 Z" fill="rgba(0, 255, 204, 0.2)" stroke="#00ffcc" strokeWidth="2" />
                <path d="M 195,193 L 225,210 L 255,193 L 255,202 L 225,218 L 195,202 Z" fill="#ffffff" opacity="0.8" />
              </g>
            </svg>

            {/* Floating Glass Cards Overlay */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
              <div 
                className="absolute top-[10%] left-[-2%] sm:left-[5%] bg-brand-navy/90 border border-brand-teal rounded-xl p-3 sm:p-4 shadow-lg flex flex-col pointer-events-auto transition-transform duration-300 hover:scale-105 animate-float-pedestal"
                style={{ animationDelay: "0s" }}
              >
                <span className="text-xl sm:text-2xl font-black text-brand-teal">+5.000</span>
                <span className="text-[10px] sm:text-xs font-semibold text-white">Clientes atendidos</span>
              </div>
              
              <div 
                className="absolute bottom-[10%] left-[8%] sm:left-[15%] bg-brand-navy/90 border border-brand-teal rounded-xl p-3 sm:p-4 shadow-lg flex flex-col pointer-events-auto transition-transform duration-300 hover:scale-105 animate-float-pedestal"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-xl sm:text-2xl font-black text-brand-teal">R$ 400M+</span>
                <span className="text-[10px] sm:text-xs font-semibold text-white">Economizados</span>
              </div>

              <div 
                className="absolute top-[30%] right-[-2%] sm:right-[5%] bg-brand-navy/90 border border-brand-teal rounded-xl p-3 sm:p-4 shadow-lg flex flex-col pointer-events-auto transition-transform duration-300 hover:scale-105 animate-float-pedestal"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-xl sm:text-2xl font-black text-brand-teal">+15k Ton</span>
                <span className="text-[10px] sm:text-xs font-semibold text-white">CO₂ Evitadas</span>
              </div>
            </div>
          </div>
        </div>

        {/* SUBSEÇÃO 2: PILARES CONECTADOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 lg:direction-rtl">
          <div className="flex flex-col items-start text-left lg:order-last">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow mb-2">
              Valores e Propósito
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-6">
              Nossos Pilares e Serviços
            </h2>
            <p className="text-base sm:text-lg text-brand-gray/80 mb-8 max-w-xl">
              Atuamos baseados em diretrizes rígidas de integridade, pioneirismo mercadológico e dedicação ao cliente. Integramos tecnologia de ponta e sustentabilidade para entregar economia pura e inteligência energética.
            </p>
            <button
              onClick={openForm}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-brand-teal text-brand-teal hover:bg-brand-teal/10 font-bold rounded-full text-base uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
            >
              Fale com um Especialista
            </button>
          </div>

          <div className="w-full flex items-center justify-center">
            {/* Interconnected circuit isometric SVG */}
            <svg viewBox="0 0 450 350" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[350px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
              <ellipse cx="225" cy="270" rx="140" ry="30" fill="rgba(0, 255, 204, 0.1)" />
              <g className="animate-float-pedestal">
                <path d="M 225,120 L 365,200 L 225,280 L 85,200 Z" fill="url(#grass-grad-s1)" />
                
                {/* Circuit lines */}
                <path d="M 150,170 Q 225,230 300,170" fill="none" stroke="#00ffcc" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 225,140 Q 225,200 225,250" fill="none" stroke="#00ffcc" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 150,170 Q 225,180 300,170" fill="none" stroke="#00ffcc" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* Node 1: Sustentabilidade */}
                <g transform="translate(150, 160)">
                  <ellipse cx="0" cy="10" rx="20" ry="10" fill="#0c3e40" stroke="#00ffcc" strokeWidth="1.5" />
                  <circle cx="0" cy="-5" r="12" fill="#00ffcc" />
                  <path d="M -3,-10 Q 5,-10 3,-2 Q -5,-2 -3,-10 Z" fill="#031415" />
                </g>
                <text x="100" y="195" fill="#fff" fontSize="11" fontWeight="700" fontFamily="'Outfit', sans-serif">Sustentabilidade</text>

                {/* Node 2: Pioneirismo */}
                <g transform="translate(225, 130)">
                  <ellipse cx="0" cy="10" rx="20" ry="10" fill="#0c3e40" stroke="#00ffcc" strokeWidth="1.5" />
                  <circle cx="0" cy="-5" r="12" fill="#00ffcc" />
                  <path d="M 0,-12 L 4,-5 L 2,0 L -2,0 L -4,-5 Z" fill="#031415" />
                </g>
                <text x="195" y="160" fill="#fff" fontSize="11" fontWeight="700" fontFamily="'Outfit', sans-serif">Pioneirismo</text>

                {/* Node 3: Respeito */}
                <g transform="translate(300, 160)">
                  <ellipse cx="0" cy="10" rx="20" ry="10" fill="#0c3e40" stroke="#00ffcc" strokeWidth="1.5" />
                  <circle cx="0" cy="-5" r="12" fill="#00ffcc" />
                  <path d="M 0,-8 C -3,-12 -8,-8 -4,-4 L 0,0 L 4,-4 C 8,-8 3,-12 0,-8 Z" fill="#031415" />
                </g>
                <text x="275" y="195" fill="#fff" fontSize="11" fontWeight="700" fontFamily="'Outfit', sans-serif">Respeito</text>

                {/* Node 4: Confiança */}
                <g transform="translate(225, 230)">
                  <ellipse cx="0" cy="10" rx="20" ry="10" fill="#0c3e40" stroke="#00ffcc" strokeWidth="1.5" />
                  <circle cx="0" cy="-5" r="12" fill="#ffd700" />
                  <path d="M -4,-5 L -1,-2 L 4,-8" fill="none" stroke="#031415" strokeWidth="2.5" strokeLinecap="round" />
                </g>
                <text x="200" y="260" fill="#ffd700" fontSize="11" fontWeight="700" fontFamily="'Outfit', sans-serif">Confiança</text>
              </g>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { BrazilMapBadge } from "@/components/BrazilMapBadge";

type StepsProps = {
  openForm: () => void;
};

export function Steps({ openForm }: StepsProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      title: "Geração de Energia",
      pretitle: "01. Usinas Solares",
      body: "Nossas usinas solares parceiras captam a radiação solar e geram energia limpa e 100% renovável. Esta eletricidade ecológica de alta performance é injetada diretamente na rede de distribuição local.",
      btnText: "Energia limpa que transforma o futuro.",
      visual: (
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
          <defs>
            <linearGradient id="grass-grad-s1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffa3" />
              <stop offset="100%" stopColor="#007d4b" />
            </linearGradient>
            <linearGradient id="solar-panel-grad-s1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="100%" stopColor="#0066ff" />
            </linearGradient>
            <filter id="glow-light-s1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Platform Shadow */}
          <ellipse cx="250" cy="310" rx="170" ry="38" fill="rgba(0, 255, 204, 0.12)" filter="url(#glow-light-s1)"/>
          
          {/* Isometric Group floating */}
          <g className="animate-float-pedestal">
            {/* Side Wall Left (Soil) */}
            <path d="M 80,220 L 250,300 L 250,325 L 80,245 Z" fill="#2d1c12" />
            {/* Side Wall Right (Soil) */}
            <path d="M 250,300 L 420,220 L 420,245 L 250,325 Z" fill="#1f130b" />
            {/* Top Grass */}
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="url(#grass-grad-s1)" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="rgba(0,255,204,0.15)" />
            
            {/* Panel 1 */}
            <g transform="translate(130, 165)">
              <line x1="20" y1="20" x2="20" y2="0" stroke="#a0c4c5" strokeWidth="3" />
              <line x1="40" y1="30" x2="40" y2="10" stroke="#a0c4c5" strokeWidth="3" />
              <path d="M 10,-10 L 50,10 L 40,25 L 0,5 Z" fill="url(#solar-panel-grad-s1)" stroke="#fff" strokeWidth="1.5" />
              <line x1="25" y1="0" x2="20" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <line x1="35" y1="5" x2="30" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            </g>

            {/* Panel 2 */}
            <g transform="translate(230, 165)">
              <line x1="20" y1="20" x2="20" y2="0" stroke="#a0c4c5" strokeWidth="3" />
              <line x1="40" y1="30" x2="40" y2="10" stroke="#a0c4c5" strokeWidth="3" />
              <path d="M 10,-10 L 50,10 L 40,25 L 0,5 Z" fill="url(#solar-panel-grad-s1)" stroke="#fff" strokeWidth="1.5" />
              <line x1="25" y1="0" x2="20" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <line x1="35" y1="5" x2="30" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            </g>

            {/* Panel 3 */}
            <g transform="translate(180, 205)">
              <line x1="20" y1="20" x2="20" y2="0" stroke="#a0c4c5" strokeWidth="3" />
              <line x1="40" y1="30" x2="40" y2="10" stroke="#a0c4c5" strokeWidth="3" />
              <path d="M 10,-10 L 50,10 L 40,25 L 0,5 Z" fill="url(#solar-panel-grad-s1)" stroke="#fff" strokeWidth="1.5" />
              <line x1="25" y1="0" x2="20" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <line x1="35" y1="5" x2="30" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            </g>
            
            {/* Inverter Box */}
            <path d="M 280,240 L 305,252 L 290,260 L 265,248 Z" fill="#333" />
            <path d="M 265,248 L 290,260 L 290,270 L 265,258 Z" fill="#222" />
            <path d="M 290,260 L 305,252 L 305,262 L 290,270 Z" fill="#111" />
            <circle cx="280" cy="257" r="2.5" fill="#00ffcc" className="animate-pulse" filter="url(#glow-light-s1)" />
            
            {/* Wiring */}
            <path d="M 170,195 Q 220,230 270,251" fill="none" stroke="#00ffcc" strokeWidth="2" strokeDasharray="5 3" />
            <path d="M 270,195 Q 285,220 285,248" fill="none" stroke="#00ffcc" strokeWidth="2" strokeDasharray="5 3" />
            <path d="M 290,268 Q 320,285 360,280" fill="none" stroke="#00ffcc" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Sun */}
          <g transform="translate(-10, -10)">
            <circle cx="340" cy="80" r="24" fill="#ffd700" filter="url(#glow-light-s1)"/>
            <circle cx="340" cy="80" r="18" fill="#fff" />
          </g>
        </svg>
      ),
    },
    {
      title: "Injeção na Rede",
      pretitle: "02. Distribuição",
      body: "A energia gerada pelas nossas usinas é direcionada para a rede elétrica da concessionária. A distribuidora local converte essa eletricidade verde em créditos de energia, prontos para serem alocados.",
      btnText: "Energia que gera valor para você.",
      visual: (
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
          <ellipse cx="250" cy="310" rx="170" ry="38" fill="rgba(0, 255, 204, 0.12)" filter="url(#glow-light-s1)"/>
          
          <g className="animate-float-pedestal">
            <path d="M 80,220 L 250,300 L 250,325 L 80,245 Z" fill="#2d1c12" />
            <path d="M 250,300 L 420,220 L 420,245 L 250,325 Z" fill="#1f130b" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="url(#grass-grad-s1)" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="rgba(0,255,204,0.1)" />

            {/* Transmission Pylon */}
            <g transform="translate(180, 70)">
              <line x1="40" y1="130" x2="50" y2="20" stroke="#ffffff" strokeWidth="2" opacity="0.9" />
              <line x1="60" y1="130" x2="50" y2="20" stroke="#ffffff" strokeWidth="2" opacity="0.9" />
              <line x1="50" y1="20" x2="50" y2="0" stroke="#ffffff" strokeWidth="2.5" />
              
              <line x1="45" y1="70" x2="55" y2="70" stroke="#ffffff" strokeWidth="1.5" />
              <line x1="42" y1="100" x2="58" y2="100" stroke="#ffffff" strokeWidth="1.5" />
              
              <line x1="40" y1="130" x2="58" y2="100" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
              <line x1="60" y1="130" x2="42" y2="100" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
              
              <line x1="30" y1="40" x2="70" y2="40" stroke="#ffffff" strokeWidth="3" />
              <circle cx="30" cy="40" r="3" fill="#ffd700" />
              <circle cx="70" cy="40" r="3" fill="#ffd700" />
              
              <line x1="20" y1="75" x2="80" y2="75" stroke="#ffffff" strokeWidth="3" />
              <circle cx="20" cy="75" r="3" fill="#ffd700" />
              <circle cx="80" cy="75" r="3" fill="#ffd700" />
            </g>

            {/* Consumer House */}
            <g transform="translate(310, 170)">
              <path d="M 20,30 L 45,42 L 35,47 L 10,35 Z" fill="#ffffff" />
              <path d="M 45,42 L 60,35 L 50,30 L 35,37 Z" fill="#dddddd" />
              <path d="M 20,30 L 35,20 L 45,42 L 35,37 Z" fill="#ffd700" opacity="0.9" />
              <path d="M 35,20 L 50,30 L 45,42 Z" fill="#ccac00" />
              <polygon points="20,38 27,41 27,45 20,42" fill="#00ffcc" className="animate-pulse" />
            </g>
            
            {/* Flow line */}
            <path d="M 250,115 Q 300,130 345,185" fill="none" stroke="#00ffcc" strokeWidth="2.5" strokeDasharray="6 4" />
          </g>
        </svg>
      ),
    },
    {
      title: "Economia na Conta",
      pretitle: "03. Desconto Direto",
      body: "Os créditos de energia acumulados entram como descontos automáticos na sua conta mensal de energia. Você economiza até 25% todos os meses de forma limpa, simples e sem nenhum investimento.",
      btnText: "Quero minha análise gratuita.",
      visual: (
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
          <ellipse cx="250" cy="310" rx="170" ry="38" fill="rgba(0, 255, 204, 0.12)" filter="url(#glow-light-s1)"/>
          
          <g className="animate-float-pedestal">
            <path d="M 80,220 L 250,300 L 250,325 L 80,245 Z" fill="#2d1c12" />
            <path d="M 250,300 L 420,220 L 420,245 L 250,325 Z" fill="#1f130b" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="url(#grass-grad-s1)" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="rgba(0,255,204,0.1)" />

            {/* Bill Sheet */}
            <g transform="translate(140, 130)">
              <path d="M 40,0 L 130,45 L 90,110 L 0,65 Z" fill="#ffffff" stroke="#00ffcc" strokeWidth="2" />
              <line x1="55" y1="15" x2="115" y2="45" stroke="#a0c4c5" strokeWidth="3" />
              <line x1="50" y1="28" x2="90" y2="48" stroke="#a0c4c5" strokeWidth="2" />
              <line x1="45" y1="38" x2="105" y2="68" stroke="#a0c4c5" strokeWidth="2.5" />
              <circle cx="45" cy="70" r="12" fill="rgba(0,255,204,0.15)" />
              <path d="M 39,70 L 43,74 L 51,66" fill="none" stroke="#00ffcc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Stack of Coins */}
            <g transform="translate(290, 200)">
              <path d="M 0,40 C 15,40 30,35 30,28 L 30,34 C 30,41 15,46 0,46 C -15,46 -30,41 -30,34 L -30,28 C -30,35 -15,40 0,40 Z" fill="#ccac00" />
              <ellipse cx="0" cy="28" rx="30" ry="12" fill="#ffd700" stroke="#ffffff" strokeWidth="0.5" />
              <path d="M 0,28 C 15,28 30,23 30,16 L 30,22 C 30,29 15,34 0,34 C -15,34 -30,29 -30,22 L -30,16 C -30,23 -15,28 0,28 Z" fill="#ccac00" />
              <ellipse cx="0" cy="16" rx="30" ry="12" fill="#ffd700" stroke="#ffffff" strokeWidth="0.5" />
              <path d="M 0,16 C 15,16 30,11 30,4 L 30,10 C 30,17 15,22 0,22 C -15,22 -30,17 -30,10 L -30,4 C -30,11 -15,16 0,16 Z" fill="#ccac00" />
              <ellipse cx="0" cy="4" rx="30" ry="12" fill="#ffd700" stroke="#ffffff" strokeWidth="0.5" />
            </g>

            {/* Glowing 3D Badge */}
            <g transform="translate(190, 80)">
              <path d="M 0,15 L 140,15 L 120,45 L -20,45 Z" fill="#032021" stroke="#00ffcc" strokeWidth="2" />
              <text x="12" y="36" fill="#00ffcc" fontSize="13" fontWeight="900" fontFamily="'Outfit', sans-serif" letterSpacing="1">ATÉ 25% DESCONTO</text>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Start auto rotate
    timerRef.current = setInterval(handleNext, 8000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const pauseTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resumeTimer = () => {
    timerRef.current = setInterval(handleNext, 8000);
  };

  return (
    <section 
      id="como-funciona" 
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden border-b border-brand-teal/10"
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
    >
      {/* Absolute Stylized Brazil Map Badge */}
      <BrazilMapBadge activeState="GO" />

      <div className="w-full max-w-7xl mx-auto relative z-2">
        <div className="flex flex-col gap-8 w-full">
          <div className="relative w-full min-h-[600px] lg:min-h-[550px] overflow-hidden rounded-3xl bg-brand-navy/60 border border-brand-teal/20 backdrop-blur-md">
            
            {slides.map((slide, idx) => (
              <div
                key={slide.title}
                className={`absolute inset-0 w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center p-6 sm:p-12 lg:p-16 gap-10 transition-all duration-700 ease-in-out ${
                  idx === activeSlide
                    ? "opacity-100 scale-100 pointer-events-auto z-10"
                    : "opacity-0 scale-95 pointer-events-none z-0"
                }`}
              >
                {/* Slide content (Left) */}
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow mb-2">
                    {slide.pretitle}
                  </span>
                  <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-none mb-6">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg text-brand-gray/80 mb-8 max-w-xl">
                    {slide.body}
                  </p>
                  
                  <button
                    onClick={openForm}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-teal to-[#00c3a6] hover:from-brand-teal-mid hover:to-brand-teal text-brand-navy font-bold rounded-full text-base uppercase tracking-wider shadow-[0_4px_20px_rgba(0,255,204,0.3)] hover:shadow-[0_6px_25px_rgba(0,255,204,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                  >
                    {slide.btnText}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Slide visual (Right) */}
                <div className="w-full flex items-center justify-center">
                  {slide.visual}
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-[50%] -translate-y-[50%] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-navy/80 border border-brand-teal/40 text-brand-teal hover:bg-brand-teal hover:text-brand-navy flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] z-20 cursor-pointer"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-[50%] -translate-y-[50%] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-navy/80 border border-brand-teal/40 text-brand-teal hover:bg-brand-teal hover:text-brand-navy flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] z-20 cursor-pointer"
              aria-label="Próximo slide"
            >
              <ChevronRight className="h-6 w-6 stroke-[2.5]" />
            </button>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-3 rounded-full border border-brand-teal/40 transition-all duration-300 cursor-pointer ${
                  idx === activeSlide
                    ? "w-8 bg-brand-teal shadow-[0_0_10px_rgba(0,255,204,0.6)]"
                    : "w-3 bg-brand-teal/20"
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

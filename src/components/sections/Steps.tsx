import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { BrazilMapBadge } from "@/components/BrazilMapBadge";

type StepsProps = {
  openForm?: () => void;
};

export function Steps({ openForm }: StepsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handleScroll = () => {
    if (openForm) openForm();
    else document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const slides = [
    {
      title: "1. Geração de energia",
      pretitle: "Etapa 01",
      body: "O Grupo BC Energia gera energia limpa e renovável em centenas de usinas fotovoltaicas espalhadas pelo país.",
      visual: (
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[300px] sm:max-h-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
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
          
          <ellipse cx="250" cy="310" rx="170" ry="38" fill="rgba(0, 255, 204, 0.12)" filter="url(#glow-light-s1)"/>
          
          <g className="animate-float-pedestal">
            <path d="M 80,220 L 250,300 L 250,325 L 80,245 Z" fill="#2d1c12" />
            <path d="M 250,300 L 420,220 L 420,245 L 250,325 Z" fill="#1f130b" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="url(#grass-grad-s1)" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="rgba(0,255,204,0.15)" />
            
            <g transform="translate(130, 165)">
              <line x1="20" y1="20" x2="20" y2="0" stroke="#a0c4c5" strokeWidth="3" />
              <line x1="40" y1="30" x2="40" y2="10" stroke="#a0c4c5" strokeWidth="3" />
              <path d="M 10,-10 L 50,10 L 40,25 L 0,5 Z" fill="url(#solar-panel-grad-s1)" stroke="#fff" strokeWidth="1.5" />
              <line x1="25" y1="0" x2="20" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <line x1="35" y1="5" x2="30" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            </g>

            <g transform="translate(230, 165)">
              <line x1="20" y1="20" x2="20" y2="0" stroke="#a0c4c5" strokeWidth="3" />
              <line x1="40" y1="30" x2="40" y2="10" stroke="#a0c4c5" strokeWidth="3" />
              <path d="M 10,-10 L 50,10 L 40,25 L 0,5 Z" fill="url(#solar-panel-grad-s1)" stroke="#fff" strokeWidth="1.5" />
              <line x1="25" y1="0" x2="20" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <line x1="35" y1="5" x2="30" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            </g>

            <g transform="translate(180, 205)">
              <line x1="20" y1="20" x2="20" y2="0" stroke="#a0c4c5" strokeWidth="3" />
              <line x1="40" y1="30" x2="40" y2="10" stroke="#a0c4c5" strokeWidth="3" />
              <path d="M 10,-10 L 50,10 L 40,25 L 0,5 Z" fill="url(#solar-panel-grad-s1)" stroke="#fff" strokeWidth="1.5" />
              <line x1="25" y1="0" x2="20" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <line x1="35" y1="5" x2="30" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
            </g>
            
            <path d="M 280,240 L 305,252 L 290,260 L 265,248 Z" fill="#333" />
            <path d="M 265,248 L 290,260 L 290,270 L 265,258 Z" fill="#222" />
            <path d="M 290,260 L 305,252 L 305,262 L 290,270 Z" fill="#111" />
            <circle cx="280" cy="257" r="2.5" fill="#00ffcc" className="animate-pulse" filter="url(#glow-light-s1)" />
            
            <path d="M 170,195 Q 220,230 270,251" fill="none" stroke="#00ffcc" strokeWidth="2" strokeDasharray="5 3" />
            <path d="M 270,195 Q 285,220 285,248" fill="none" stroke="#00ffcc" strokeWidth="2" strokeDasharray="5 3" />
            <path d="M 290,268 Q 320,285 360,280" fill="none" stroke="#00ffcc" strokeWidth="3" strokeLinecap="round" />
          </g>

          <g transform="translate(-10, -10)">
            <circle cx="340" cy="80" r="24" fill="#ffd700" filter="url(#glow-light-s1)"/>
            <circle cx="340" cy="80" r="18" fill="#fff" />
          </g>
        </svg>
      ),
    },
    {
      title: "2. Injeção na rede",
      pretitle: "Etapa 02",
      body: "Toda a energia gerada é injetada na rede da distribuidora local, que aloca os créditos na sua Unidade Consumidora (UC).",
      visual: (
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[300px] sm:max-h-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
          <defs>
            <linearGradient id="grass-grad-s1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffa3" />
              <stop offset="100%" stopColor="#007d4b" />
            </linearGradient>
            <filter id="glow-light-s1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <ellipse cx="250" cy="310" rx="170" ry="38" fill="rgba(0, 255, 204, 0.12)" filter="url(#glow-light-s1)"/>
          
          <g className="animate-float-pedestal">
            <path d="M 80,220 L 250,300 L 250,325 L 80,245 Z" fill="#2d1c12" />
            <path d="M 250,300 L 420,220 L 420,245 L 250,325 Z" fill="#1f130b" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="url(#grass-grad-s1)" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="rgba(0,255,204,0.1)" />

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

            <g transform="translate(310, 170)">
              <path d="M 20,30 L 45,42 L 35,47 L 10,35 Z" fill="#ffffff" />
              <path d="M 45,42 L 60,35 L 50,30 L 35,37 Z" fill="#dddddd" />
              <path d="M 20,30 L 35,20 L 45,42 L 35,37 Z" fill="#ffd700" opacity="0.9" />
              <path d="M 35,20 L 50,30 L 45,42 Z" fill="#ccac00" />
              <polygon points="20,38 27,41 27,45 20,42" fill="#00ffcc" className="animate-pulse" />
            </g>
            
            <path d="M 250,115 Q 300,130 345,185" fill="none" stroke="#00ffcc" strokeWidth="2.5" strokeDasharray="6 4" />
          </g>
        </svg>
      ),
    },
    {
      title: "3. Economia na conta",
      pretitle: "Etapa 03",
      body: "Esses créditos são compartilhados com os consumidores do consórcio, gerando desconto direto na conta de energia.",
      visual: (
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[300px] sm:max-h-[380px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
          <defs>
            <linearGradient id="grass-grad-s1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffa3" />
              <stop offset="100%" stopColor="#007d4b" />
            </linearGradient>
            <filter id="glow-light-s1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <ellipse cx="250" cy="310" rx="170" ry="38" fill="rgba(0, 255, 204, 0.12)" filter="url(#glow-light-s1)"/>
          
          <g className="animate-float-pedestal">
            <path d="M 80,220 L 250,300 L 250,325 L 80,245 Z" fill="#2d1c12" />
            <path d="M 250,300 L 420,220 L 420,245 L 250,325 Z" fill="#1f130b" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="url(#grass-grad-s1)" />
            <path d="M 250,140 L 420,220 L 250,300 L 80,220 Z" fill="rgba(0,255,204,0.1)" />

            <g transform="translate(140, 130)">
              <path d="M 40,0 L 130,45 L 90,110 L 0,65 Z" fill="#ffffff" stroke="#00ffcc" strokeWidth="2" />
              <line x1="55" y1="15" x2="115" y2="45" stroke="#a0c4c5" strokeWidth="3" />
              <line x1="50" y1="28" x2="90" y2="48" stroke="#a0c4c5" strokeWidth="2" />
              <line x1="45" y1="38" x2="105" y2="68" stroke="#a0c4c5" strokeWidth="2.5" />
              <circle cx="45" cy="70" r="12" fill="rgba(0,255,204,0.15)" />
              <path d="M 39,70 L 43,74 L 51,66" fill="none" stroke="#00ffcc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            <g transform="translate(290, 200)">
              <path d="M 0,40 C 15,40 30,35 30,28 L 30,34 C 30,41 15,46 0,46 C -15,46 -30,41 -30,34 L -30,28 C -30,35 -15,40 0,40 Z" fill="#ccac00" />
              <ellipse cx="0" cy="28" rx="30" ry="12" fill="#ffd700" stroke="#ffffff" strokeWidth="0.5" />
              <path d="M 0,28 C 15,28 30,23 30,16 L 30,22 C 30,29 15,34 0,34 C -15,34 -30,29 -30,22 L -30,16 C -30,23 -15,28 0,28 Z" fill="#ccac00" />
              <ellipse cx="0" cy="16" rx="30" ry="12" fill="#ffd700" stroke="#ffffff" strokeWidth="0.5" />
              <path d="M 0,16 C 15,16 30,11 30,4 L 30,10 C 30,17 15,22 0,22 C -15,22 -30,17 -30,10 L -30,4 C -30,11 -15,16 0,16 Z" fill="#ccac00" />
              <ellipse cx="0" cy="4" rx="30" ry="12" fill="#ffd700" stroke="#ffffff" strokeWidth="0.5" />
            </g>

            <g transform="translate(190, 80)">
              <path d="M 0,15 L 140,15 L 120,45 L -20,45 Z" fill="#032021" stroke="#00ffcc" strokeWidth="2" />
              <text x="12" y="36" fill="#00ffcc" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">ATÉ 25% DESCONTO</text>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section 
      id="como-funciona" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden border-b border-brand-teal/10 bg-[#f8fafc]"
    >
      {/* Absolute Stylized Brazil Map Badge */}
      <BrazilMapBadge activeState="GO" />

      <div className="w-full max-w-7xl mx-auto relative z-2 text-center flex flex-col items-center gap-12">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal mb-3 inline-block">
            Como funciona
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-brand-navy uppercase tracking-tight leading-none mb-4">
            Como funciona o Consórcio BC Energia
          </h2>
          <p className="text-lg text-muted-foreground">
            Você continua usando energia normalmente. A diferença é que os créditos de energia renovável ajudam a reduzir o valor da sua fatura.
          </p>
        </div>

        <div className="flex flex-col gap-8 w-full items-center">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-brand-dark border border-brand-teal/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide, idx) => (
                  <div key={idx} className="min-w-0 flex-[0_0_100%] p-8 sm:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
                      
                      {/* Slide content (Left) */}
                      <div className="flex flex-col items-start text-left">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow mb-2">
                          {slide.pretitle}
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                          {slide.title}
                        </h2>
                        <p className="text-base sm:text-lg text-brand-gray/80 max-w-xl leading-relaxed">
                          {slide.body}
                        </p>
                      </div>

                      {/* Slide visual (Right) */}
                      <div className="w-full flex items-center justify-center">
                        {slide.visual}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows (Hidden on mobile for better space usage, touch swiping works) */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-navy/80 border border-brand-teal/40 text-brand-teal hover:bg-brand-teal hover:text-brand-navy items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] z-20 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-6 w-6 stroke-[2.5]" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-navy/80 border border-brand-teal/40 text-brand-teal hover:bg-brand-teal hover:text-brand-navy items-center justify-center transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] z-20 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Próximo slide"
            >
              <ChevronRight className="h-6 w-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`h-3 rounded-full border border-brand-teal/40 transition-all duration-300 cursor-pointer ${
                  idx === selectedIndex
                    ? "w-8 bg-brand-teal shadow-[0_0_10px_rgba(0,255,204,0.6)]"
                    : "w-3 bg-brand-teal/20"
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Centered CTA button below dots */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleScroll}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-yellow hover:brightness-95 text-brand-navy font-bold rounded-full text-base uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer shadow-md"
            >
              Quero minha análise gratuita
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

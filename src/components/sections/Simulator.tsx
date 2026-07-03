import * as React from "react";
import { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { BrazilMapBadge } from "@/components/BrazilMapBadge";

type SimulatorProps = {
  openForm: () => void;
};

export function Simulator({ openForm }: SimulatorProps) {
  const [billValue, setBillValue] = useState(800);
  const [activeState, setActiveState] = useState<"GO" | "PR" | "TO">("GO");

  const discountMap = {
    GO: 0.25,
    PR: 0.22,
    TO: 0.23,
  };

  const discountPct = discountMap[activeState];
  
  const monthlySavings = useMemo(() => {
    return billValue * discountPct;
  }, [billValue, discountPct]);

  const annualSavings = useMemo(() => {
    return monthlySavings * 12;
  }, [monthlySavings]);

  const handleStateChange = (state: "GO" | "PR" | "TO") => {
    setActiveState(state);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillValue(Number(e.target.value));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val >= 0) {
      setBillValue(val);
    }
  };

  return (
    <section id="simulador" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      {/* Absolute Stylized Brazil Map Badge */}
      <BrazilMapBadge activeState={activeState} />

      <div className="w-full max-w-7xl mx-auto relative z-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* PAINEL ESQUERDO: CONTROLES */}
          <div className="lg:col-span-5 bg-brand-navy/70 border border-brand-teal/20 backdrop-blur-md p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col gap-6">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-brand-teal to-brand-yellow" />
            
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-2 leading-tight">Simule sua economia</h2>
              <p className="text-sm text-brand-gray/60">Descubra o desconto real na sua conta em segundos.</p>
            </div>

            {/* Seletor de Estado */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">Selecione seu Estado</span>
              <div className="grid grid-cols-3 gap-2 bg-brand-navy/90 p-1.5 rounded-2xl border border-brand-teal/15">
                {(["GO", "PR", "TO"] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => handleStateChange(st)}
                    className={`py-3 text-sm font-bold rounded-xl transition-all duration-300 cursor-pointer ${
                      activeState === st
                        ? "bg-brand-teal text-brand-navy shadow-lg shadow-brand-teal/30"
                        : "bg-transparent text-brand-gray/60 hover:text-white"
                    }`}
                  >
                    {st === "GO" ? "Goiás" : st === "PR" ? "Paraná" : "Tocantins"}
                  </button>
                ))}
              </div>
            </div>

            {/* Entrada do Valor da Conta */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">Valor médio da sua conta de luz</span>
              <div className="bg-brand-navy/90 p-6 rounded-2xl border border-brand-teal/15 flex flex-col gap-4 focus-within:border-brand-teal/50 transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-brand-gray/60">R$</span>
                  <input
                    type="number"
                    value={billValue}
                    onChange={handleNumberChange}
                    min="100"
                    max="50000"
                    step="50"
                    className="bg-transparent border-none text-white text-3xl font-black text-right outline-none w-full"
                  />
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="50"
                  value={billValue > 10000 ? 10000 : billValue}
                  onChange={handleSliderChange}
                  className="w-full h-1.5 bg-brand-teal/10 rounded-lg appearance-none cursor-pointer accent-brand-teal"
                />
              </div>
            </div>

            {/* Resultados */}
            <div className="bg-gradient-to-br from-brand-teal/5 to-brand-yellow/5 border border-brand-teal/20 rounded-2xl p-6 text-center">
              <span className="text-xs text-brand-gray/60 mb-2 block">Sua economia estimada (até {Math.round(discountPct * 100)}%):</span>
              <div className="text-4xl font-black text-brand-teal mb-1 drop-shadow-[0_0_15px_rgba(0,255,204,0.3)]">
                R$ {monthlySavings.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                <span className="text-sm font-medium text-brand-gray/60 ml-2">/ mês</span>
              </div>
              <div className="text-sm font-semibold text-brand-yellow">
                Economia anual de R$ {annualSavings.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={openForm}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-teal to-[#00c3a6] hover:from-brand-teal-mid hover:to-brand-teal text-brand-navy font-bold rounded-full text-base uppercase tracking-wider shadow-[0_4px_20px_rgba(0,255,204,0.3)] hover:shadow-[0_6px_25px_rgba(0,255,204,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
            >
              Quero minha análise gratuita
              <ArrowRight className="h-5 w-5" />
            </button>

            <span className="text-[10px] text-brand-gray/60 leading-normal">
              * Valores simulados de desconto estimados com base nas tarifas médias residenciais/comerciais B1 vigentes. Sujeito a análise técnica da distribuidora.
            </span>
          </div>

          {/* VISUALIZAÇÃO DIREITA: MAPA GEOGRÁFICO INTERATIVO */}
          <div className="lg:col-span-7 w-full relative flex items-center justify-center min-h-[400px]">
            <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-h-[420px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
              <ellipse cx="250" cy="320" rx="190" ry="40" fill="rgba(0, 255, 204, 0.1)" />
              
              <g className="animate-float-pedestal">
                {/* Soil Left */}
                <path d="M 50,220 L 250,320 L 250,345 L 50,245 Z" fill="#2d1c12" />
                {/* Soil Right */}
                <path d="M 250,320 L 450,220 L 450,245 L 250,345 Z" fill="#1f130b" />
                {/* Grass */}
                <path d="M 250,120 L 450,220 L 250,320 L 50,220 Z" fill="url(#grass-grad-s1)" />
                <path d="M 250,120 L 450,220 L 250,320 L 50,220 Z" fill="rgba(0,255,204,0.05)" />

                {/* Connection lines from left edge of platform */}
                <path 
                  d="M 50,220 Q 150,230 220,180" 
                  fill="none" 
                  stroke={activeState === 'GO' ? '#00ffcc' : 'rgba(0,255,204,0.15)'} 
                  strokeWidth={activeState === 'GO' ? '2.5' : '1.5'} 
                  strokeDasharray="6 4"
                  className={activeState === 'GO' ? "animate-pulse" : ""}
                />
                <path 
                  d="M 50,220 Q 180,180 270,140" 
                  fill="none" 
                  stroke={activeState === 'TO' ? '#00ffcc' : 'rgba(0,255,204,0.15)'} 
                  strokeWidth={activeState === 'TO' ? '2.5' : '1.5'} 
                  strokeDasharray="6 4"
                  className={activeState === 'TO' ? "animate-pulse" : ""}
                />
                <path 
                  d="M 50,220 Q 120,270 170,240" 
                  fill="none" 
                  stroke={activeState === 'PR' ? '#00ffcc' : 'rgba(0,255,204,0.15)'} 
                  strokeWidth={activeState === 'PR' ? '2.5' : '1.5'} 
                  strokeDasharray="6 4"
                  className={activeState === 'PR' ? "animate-pulse" : ""}
                />

                {/* TOCANTINS Column */}
                <g transform="translate(270, 140)">
                  <ellipse cx="0" cy="20" rx="18" ry="8" fill="#1f130b" />
                  <path 
                    d="M -18,20 L 18,20 L 18,-15 L -18,-15 Z" 
                    fill={activeState === 'TO' ? "rgba(0, 255, 204, 0.15)" : "rgba(6,35,37,0.8)"} 
                    stroke={activeState === 'TO' ? "#00ffcc" : "#ffd700"} 
                    strokeWidth={activeState === 'TO' ? "2.5" : "1.5"} 
                  />
                  <ellipse cx="0" cy="-15" rx="18" ry="8" fill={activeState === 'TO' ? "rgba(0, 255, 204, 0.6)" : "rgba(255, 215, 0, 0.4)"} stroke={activeState === 'TO' ? "#00ffcc" : "#ffd700"} />
                  {activeState === 'TO' && <circle cx="0" cy="-15" r="3" fill="#ffffff" className="animate-pulse" />}
                </g>

                {/* GOIÁS Column */}
                <g transform="translate(220, 180)">
                  <ellipse cx="0" cy="20" rx="22" ry="10" fill="#1f130b" />
                  <path 
                    d="M -22,20 L 22,20 L 22,-25 L -22,-25 Z" 
                    fill={activeState === 'GO' ? "rgba(0, 255, 204, 0.15)" : "rgba(6,35,37,0.8)"} 
                    stroke={activeState === 'GO' ? "#00ffcc" : "#ffd700"} 
                    strokeWidth={activeState === 'GO' ? "2.5" : "1.5"} 
                  />
                  <ellipse cx="0" cy="-25" rx="22" ry="10" fill={activeState === 'GO' ? "rgba(0, 255, 204, 0.6)" : "rgba(255, 215, 0, 0.4)"} stroke={activeState === 'GO' ? "#00ffcc" : "#ffd700"} />
                  {activeState === 'GO' && <circle cx="0" cy="-25" r="4" fill="#ffffff" className="animate-pulse" />}
                </g>

                {/* PARANÁ Column */}
                <g transform="translate(170, 240)">
                  <ellipse cx="0" cy="20" rx="18" ry="8" fill="#1f130b" />
                  <path 
                    d="M -18,20 L 18,20 L 18,-10 L -18,-10 Z" 
                    fill={activeState === 'PR' ? "rgba(0, 255, 204, 0.15)" : "rgba(6,35,37,0.8)"} 
                    stroke={activeState === 'PR' ? "#00ffcc" : "#ffd700"} 
                    strokeWidth={activeState === 'PR' ? "2.5" : "1.5"} 
                  />
                  <ellipse cx="0" cy="-10" rx="18" ry="8" fill={activeState === 'PR' ? "rgba(0, 255, 204, 0.6)" : "rgba(255, 215, 0, 0.4)"} stroke={activeState === 'PR' ? "#00ffcc" : "#ffd700"} />
                  {activeState === 'PR' && <circle cx="0" cy="-10" r="3" fill="#ffffff" className="animate-pulse" />}
                </g>
              </g>
            </svg>

            {/* Overlays (Interactive State badges) */}
            <div 
              className={`absolute top-[35%] left-[45%] text-[10px] sm:text-xs font-bold rounded-lg px-2.5 py-1.5 shadow-md border pointer-events-none transition-all duration-300 animate-float-pedestal ${
                activeState === 'GO'
                  ? "bg-brand-teal/25 border-brand-teal text-brand-teal scale-110 shadow-brand-teal/20"
                  : "bg-[#031415]/85 border-[#ffd700]/20 text-white"
              }`}
            >
              GOIÁS: até 25%
            </div>

            <div 
              className={`absolute top-[15%] left-[55%] text-[10px] sm:text-xs font-bold rounded-lg px-2.5 py-1.5 shadow-md border pointer-events-none transition-all duration-300 animate-float-pedestal ${
                activeState === 'TO'
                  ? "bg-brand-teal/25 border-brand-teal text-brand-teal scale-110 shadow-brand-teal/20"
                  : "bg-[#031415]/85 border-[#ffd700]/20 text-white"
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              TOCANTINS: até 23%
            </div>

            <div 
              className={`absolute bottom-[25%] left-[32%] text-[10px] sm:text-xs font-bold rounded-lg px-2.5 py-1.5 shadow-md border pointer-events-none transition-all duration-300 animate-float-pedestal ${
                activeState === 'PR'
                  ? "bg-brand-teal/25 border-brand-teal text-brand-teal scale-110 shadow-brand-teal/20"
                  : "bg-[#031415]/85 border-[#ffd700]/20 text-white"
              }`}
              style={{ animationDelay: "1s" }}
            >
              PARANÁ: até 22%
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

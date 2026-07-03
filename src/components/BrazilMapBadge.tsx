import * as React from "react";

type BrazilMapBadgeProps = {
  activeState?: "GO" | "PR" | "TO";
};

export function BrazilMapBadge({ activeState = "GO" }: BrazilMapBadgeProps) {
  return (
    <div className="absolute top-6 right-6 w-32 h-32 sm:w-40 sm:h-40 opacity-30 hover:opacity-50 transition-opacity duration-300 pointer-events-none z-10">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <filter id="map-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Dashed Outline of Brazil */}
        <path 
          d="M 80,25 L 110,27 L 145,35 L 165,55 L 180,75 L 170,95 L 150,105 L 135,115 L 125,135 L 115,165 L 100,180 L 90,175 L 80,155 L 60,145 L 50,140 L 40,115 L 25,95 L 15,80 L 20,60 L 30,55 L 40,55 L 50,45 L 65,35 L 70,30 Z" 
          fill="rgba(0, 255, 204, 0.02)" 
          stroke="rgba(0, 255, 204, 0.25)" 
          strokeWidth="1.5" 
          strokeDasharray="4 3" 
        />
        
        {/* Network connections between states */}
        <line x1="100" y1="75" x2="95" y2="105" stroke="rgba(0, 255, 204, 0.3)" strokeWidth="1" />
        <line x1="95" y1="105" x2="85" y2="140" stroke="rgba(0, 255, 204, 0.3)" strokeWidth="1" />
        
        {/* TO Node (Tocantins) */}
        <circle 
          cx="100" 
          cy="75" 
          r={activeState === 'TO' ? "5" : "3.5"} 
          fill={activeState === 'TO' ? "#00ffcc" : "#ffd700"} 
          filter="url(#map-glow-filter)" 
          className={activeState === 'TO' ? "animate-pulse" : ""}
        />
        <circle cx="100" cy="75" r="1.5" fill="#fff" />
        <text 
          x="108" 
          y="79" 
          fill={activeState === 'TO' ? '#00ffcc' : '#a0c4c5'} 
          fontSize="9" 
          fontWeight="bold" 
          fontFamily="'Outfit', sans-serif"
        >
          TO
        </text>
        
        {/* GO Node (Goiás) */}
        <circle 
          cx="95" 
          cy="105" 
          r={activeState === 'GO' ? "6" : "3.5"} 
          fill={activeState === 'GO' ? "#00ffcc" : "#ffd700"} 
          filter="url(#map-glow-filter)" 
          className={activeState === 'GO' ? "animate-pulse" : ""}
        />
        <circle cx="95" cy="105" r="1.5" fill="#fff" />
        <text 
          x="104" 
          y="109" 
          fill={activeState === 'GO' ? '#00ffcc' : '#fff'} 
          fontSize="10" 
          fontWeight="bold" 
          fontFamily="'Outfit', sans-serif"
        >
          GO
        </text>
        
        {/* PR Node (Paraná) */}
        <circle 
          cx="85" 
          cy="140" 
          r={activeState === 'PR' ? "5" : "3.5"} 
          fill={activeState === 'PR' ? "#00ffcc" : "#ffd700"} 
          filter="url(#map-glow-filter)" 
          className={activeState === 'PR' ? "animate-pulse" : ""}
        />
        <circle cx="85" cy="140" r="1.5" fill="#fff" />
        <text 
          x="93" 
          y="144" 
          fill={activeState === 'PR' ? '#00ffcc' : '#a0c4c5'} 
          fontSize="9" 
          fontWeight="bold" 
          fontFamily="'Outfit', sans-serif"
        >
          PR
        </text>
      </svg>
    </div>
  );
}

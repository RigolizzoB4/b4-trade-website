import React from 'react';

// Logo vetorial "B4 Soluções financeiras" (sem fundo), multicolor, alta legibilidade
// Observação: sem o arquivo de fonte original, uso Inter para o texto de apoio.
// Se desejar, posso ajustar posições e espessuras milimetricamente após seu feedback visual.
export default function LogoB4({ height = 110, className = '' }) {
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <svg
      role="img"
      aria-label="B4 Soluções financeiras"
      width="auto"
      height={h}
      viewBox="0 0 560 240"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>B4 Soluções financeiras</title>
      <defs>
        <style>
          {`
            .b4-dark { fill: #6B6F73; }
            .b4-light { fill: #A9ADB1; }
            .b4-text { fill: #A9ADB1; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
            .b4-orange { fill: #F4A62A; }
          `}
        </style>
      </defs>

      {/* Quadradinhos laranja superiores (como no original) */}
      <rect className="b4-orange" x="18" y="16" width="18" height="18" rx="2" />
      <rect className="b4-orange" x="514" y="24" width="18" height="18" rx="2" />

      {/* B (escuro) */}
      {/* Aproximação vetorial com curvas suaves */}
      <path
        className="b4-dark"
        d="M90 40 h40 c44 0 72 24 72 56 c0 20 -10 36 -28 46 c20 8 36 24 36 50 c0 36 -28 58 -76 58 h-44 z
           M130 82 v44 h10 c20 0 34 -12 34 -26 c0 -14 -14 -18 -34 -18 z
           M130 146 v50 h14 c26 0 40 -10 40 -26 c0 -18 -16 -24 -40 -24 z"
      />

      {/* 4 (claro) */}
      <path
        className="b4-light"
        d="M260 180 v-50 h-64 l84 -92 v62 h40 v30 h-40 v50 z"
      />

      {/* Quadradinhos laranja na cauda do 4 (diagonal) */}
      <rect className="b4-orange" x="370" y="152" width="18" height="18" rx="2" />
      <rect className="b4-orange" x="396" y="176" width="18" height="18" rx="2" />

      {/* Texto de apoio em duas linhas, alinhado à direita do B4 */}
      <text className="b4-text" x="310" y="78" fontSize="34" fontWeight="500" letterSpacing="0.4">Soluções</text>
      <text className="b4-text" x="310" y="118" fontSize="34" fontWeight="500" letterSpacing="0.4">financeiras</text>
    </svg>
  );
}

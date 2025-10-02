import React from 'react';

// Logo vetorial "B4 Soluções financeiras" (sem fundo, com paths)
// Cores oficiais: laranja #f6af39, cinza escuro #676767, cinza #a2a2a4, texto #a3a3a3
export default function LogoB4({ height = 90, className = '' }) {
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <svg
      role="img"
      aria-label="B4 Soluções financeiras"
      width="auto"
      height={h}
      viewBox="0 0 600 220"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>B4 Soluções financeiras</title>
      <defs>
        <style>{`
          .c-orange { fill: #f6af39; }
          .c-bdark { fill: #676767; }
          .c-4gray { fill: #a2a2a4; }
          .c-text { fill: #a3a3a3; }
        `}</style>
      </defs>

      {/* Quadrado laranja superior esquerdo */}
      <rect className="c-orange" x="18" y="10" width="18" height="18" rx="2" />
      {/* Quadrado laranja superior direito sobre o texto */}
      <rect className="c-orange" x="556" y="18" width="18" height="18" rx="2" />

      {/* Letra B em path (preenchido), com proporções próximas ao original */}
      <path
        className="c-bdark"
        d="M60 18 H128 C204 18 244 44 244 92 C244 118 228 138 204 148 C235 156 256 176 256 206 C256 244 220 262 154 262 H60 Z
           M100 58 V118 H146 C178 118 198 108 198 92 C198 74 182 58 142 58 Z
           M100 152 V222 H152 C190 222 208 210 208 194 C208 176 188 152 148 152 Z"
        transform="translate(0,-18)"
      />

      {/* Número 4 em path preenchido (geometria simplificada próxima ao original) */}
      <path
        className="c-4gray"
        d="M300 160 V112 H236 L360 10 V64 H400 V96 H360 V160 Z"
      />

      {/* Quadradinhos laranja na diagonal do 4 */}
      <rect className="c-orange" x="408" y="136" width="18" height="18" rx="2" />
      <rect className="c-orange" x="434" y="162" width="18" height="18" rx="2" />

      {/* Texto em duas linhas (será convertido para paths se desejar fidelidade absoluta) */}
      <g className="c-text" fontFamily="Arial, Helvetica, sans-serif" fontWeight="500">
        <text x="320" y="64" fontSize="30" letterSpacing="0.2">Soluções</text>
        <text x="320" y="104" fontSize="30" letterSpacing="0.2">financeiras</text>
      </g>
    </svg>
  );
}

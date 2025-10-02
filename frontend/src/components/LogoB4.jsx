import React from 'react';

// Logo vetorial "B4 Soluções financeiras" (sem fundo), multicolor
// Cores oficiais informadas:
//  - laranja: #f6af39
//  - cinza (4): #a2a2a4
//  - cinza escuro (B): #676767
//  - texto "Soluções financeiras": #a3a3a3
// Observação: uso tipográfico como base (Arial/Helvetica) para aproximar o original do PDF.
// Se desejar 100% de fidelidade milimétrica (curvas em path), preciso do arquivo de fonte
// exato ou autorização para converter o texto em contornos.
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
        <style>{`
          .b4-orange { fill: #f6af39; }
          .b4-dark { fill: #676767; }
          .b4-gray { fill: #a2a2a4; }
          .b4-text { fill: #a3a3a3; font-family: Arial, Helvetica, sans-serif; }
        `}</style>
      </defs>

      {/* Quadrado laranja superior esquerdo */}
      <rect className="b4-orange" x="14" y="18" width="20" height="20" rx="2" />
      {/* Quadrado laranja superior direito (sobre o texto) */}
      <rect className="b4-orange" x="520" y="22" width="20" height="20" rx="2" />

      {/* Letra B (cinza escuro) */}
      <text x="60" y="170" className="b4-dark" fontSize="170" fontWeight="800">B</text>

      {/* Número 4 (cinza) */}
      <text x="220" y="196" className="b4-gray" fontSize="170" fontWeight="700">4</text>

      {/* Quadradinhos laranja na diagonal do 4 */}
      <rect className="b4-orange" x="360" y="150" width="20" height="20" rx="2" />
      <rect className="b4-orange" x="386" y="176" width="20" height="20" rx="2" />

      {/* Texto "Soluções financeiras" em duas linhas */}
      <text x="260" y="78" className="b4-text" fontSize="36" fontWeight="500" letterSpacing="0.2">Soluções</text>
      <text x="260" y="120" className="b4-text" fontSize="36" fontWeight="500" letterSpacing="0.2">financeiras</text>
    </svg>
  );
}

import React from 'react';

// Logo B4 (multicolor) em SVG inline para máxima nitidez
// Observação: Usa a fonte Inter (já importada no App.css). Caso não carregue, cai para sans-serif.
export default function LogoB4({ height = 110, className = '' }) {
  const h = typeof height === 'number' ? `${height}px` : height;
  return (
    <svg
      role="img"
      aria-label="B4 grupo"
      width="auto"
      height={h}
      viewBox="0 0 520 180"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>B4 grupo</title>
      {/* marcadores laranja da identidade */}
      <rect x="170" y="22" width="12" height="12" rx="2" fill="#F97316" />
      <rect x="170" y="146" width="12" height="12" rx="2" fill="#F97316" />
      <rect x="450" y="22" width="12" height="12" rx="2" fill="#F97316" />

      {/* Texto principal */}
      <g fill="#0F172A" fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif">
        <text x="0" y="120" fontWeight="800" fontSize="120">B4</text>
        <text x="205" y="118" fontWeight="600" fontSize="64">grupo</text>
      </g>
    </svg>
  );
}

# Tipografia baseada no logo B4 – Implementação Única

**Escopo:** Modificações realizadas **somente** em `index.html` e `style.css` desta cópia do documento.  
**Preserve:** *Não alteramos os documentos além do solicitado.*

## O que foi feito
1. **Entrega de fontes (método remoto):** adicionamos preconnect e carregamento do Google Fonts no `<head>` usando:
   - Heading: **Poppins** (500/600/700) — geométrica sans, próxima ao logo.
   - Body: **Inter** (400/500/600/700) — alta legibilidade.
2. **Tokens CSS:** definimos `:root` com `--font-heading` e `--font-body`, escala de tamanhos e `letter-spacing`.
3. **Bindings:** headings usam Poppins; corpo, navegação, botões e formulários usam Inter.
4. **Acessibilidade:** `font-display=swap`, `line-height: 1.6`, medida de parágrafo (`70ch`).

## Como substituir/voltar (rollback)
- **Para aplicar** (já aplicado): basta usar os arquivos deste ZIP.
- **Para reverter:** remova o bloco de Google Fonts do `<head>` e apague os tokens adicionados no topo de `style.css`.

## Passo a passo manual (se quiser replicar):
1. No `index.html`, dentro de `<head>`, inclua:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet">
   ```
2. No início do `style.css`, adicione os *tokens* e bindings:
   ```css

:root {
  --font-heading: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', 'Helvetica Neue', Arial, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', 'Helvetica Neue', Arial, sans-serif;
  --font-size-base: 1rem; /* 16px */
  --line-height-base: 1.6;
  --letter-spacing-tight: -0.015em;
  --letter-spacing-normal: 0;
  --measure: 70ch; /* optimal text measure */
}
/* Bind base text */
html { font-size: 100%; }
body, p, li, input, button, textarea, select {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  letter-spacing: var(--letter-spacing-normal);
  max-width: none;
}
/* Headings adopt logo-inspired display */
h1, h2, h3, h4, h5, h6, .display-1, .display-2, .display-3 {
  font-family: var(--font-heading);
  letter-spacing: var(--letter-spacing-tight);
  font-weight: 600;
  line-height: 1.2;
}
/* Scale */
h1 { font-size: clamp(2rem, 4vw + 1rem, 3rem); }
h2 { font-size: clamp(1.5rem, 2.5vw + 1rem, 2.25rem); }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }
h5 { font-size: 1.125rem; }
h6 { font-size: 1rem; }
/* Navigation & buttons */
.navbar-brand { font-family: var(--font-heading); font-weight: 700; letter-spacing: -0.01em; }
.nav-link, .btn, .form-control { font-family: var(--font-body); }
/* Paragraph rhythm and measure */
main p { max-width: var(--measure); }

   ```
3. Garanta que `body` usa `var(--font-body)` e os `h1–h6` usam `var(--font-heading)`.
4. Verifique no DevTools → **Computed** que a família aplicada é a correta e que os arquivos WOFF2 carregam em **Network → Fonts**.

## Observações
- Evitamos estilos *faux* carregando os pesos exatos.
- Fallbacks genéricos incluídos nas pilhas de fontes.
- Não alteramos conteúdo/estrutura fora da tipografia.

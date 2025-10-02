import React from 'react';

const Article = ({ img, title, children }) => (
  <section className="bg-white rounded-2xl shadow-md overflow-hidden mb-8 grid md:grid-cols-[380px_1fr]">
    <img src={img} alt={title} className="w-full h-full object-cover" />
    <div className="p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-[#2c3f33] mb-2">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  </section>
);

export default function Insights() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <header className="bg-[#2c3f33] text-white text-center py-8">
        <h1 className="text-3xl font-bold">Insights Financeiros | B4 Soluções Financeiras</h1>
        <p className="opacity-90">Análises, tendências e soluções para o futuro financeiro do seu negócio</p>
      </header>
      <main className="container-custom py-10 max-w-5xl">
        <Article img="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" title="💡 Insights Financeiros">
          <p>Analises recentes sobre mercado e Selic nos principais portais como Bloomberg Línea e InfoMoney. Esse cenário afeta diretamente estratégias de crédito e investimento.</p>
          <p className="mt-2"><strong>Dica B4:</strong> Utilizamos dados e tendências para definir estratégias de captação, ajudando empresas a decidir com agilidade e eficiência.</p>
        </Article>
        <Article img="https://images.unsplash.com/photo-1554224155-6726b3ff858f" title="📊 Fatos Financeiros">
          <p>Balanços e aquisições publicados por fontes como Forbes Brasil e VEJA fornecem insights estratégicos.</p>
          <p className="mt-2"><strong>Na prática B4:</strong> Crédito empresarial, home equity e capital de giro para sustentar o crescimento.</p>
        </Article>
        <Article img="https://images.unsplash.com/photo-1507679799987-c73779587ccf" title="🔎 Financeiro em Foco">
          <p>Automação e análise preditiva ajudam a prever riscos e identificar oportunidades (ANBIMA, YouTube).</p>
          <p className="mt-2"><strong>Com B4:</strong> Consultoria da análise documental à liberação de recursos, com rapidez e segurança.</p>
        </Article>
        <Article img="https://images.unsplash.com/photo-1507679622673-989605832e3d" title="💰 Mundo das Finanças">
          <p>Diversificação e comportamento do investidor trazem tendências globais para empresas e pessoas.</p>
          <p className="mt-2"><strong>Diferencial B4:</strong> Atendemos desde pequenas empresas até grandes projetos com financiamentos via FINEP e BNDES.</p>
        </Article>
        <section className="text-center bg-[#c4cead] rounded-2xl py-10 px-6 mt-10">
          <h2 className="text-2xl font-semibold mb-2">Impulsione o desenvolvimento do seu negócio</h2>
          <p className="mb-6">Soluções em home equity, capital de giro, antecipação de recebíveis, FINEP, BNDES, consórcios e consultoria.</p>
          <a href="/contato" className="inline-block bg-[#2c3f33] text-white py-3 px-6 rounded-lg hover:opacity-90 transition">Fale agora com um especialista B4</a>
        </section>
      </main>
    </div>
  );
}

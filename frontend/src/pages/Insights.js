import React from 'react';

const Block = ({ img, title, href, children }) => (
  <article className="grid md:grid-cols-[300px_1fr] gap-0 border-b border-[#eee] pb-6 mb-6">
    <a href={href} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-md">
      <img src={img} alt={title} className="w-full h-[180px] md:h-[200px] object-cover hover:scale-[1.02] transition-transform" />
    </a>
    <div className="md:pl-6">
      <h2 className="text-[22px] font-semibold mb-2" style={{color:'#666'}}>
        <a href={href} target="_blank" rel="noreferrer" className="hover:underline">{title}</a>
      </h2>
      <div className="leading-relaxed" style={{color:'#666'}}>{children}</div>
    </div>
  </article>
);

export default function Insights() {
  return (
    <div className="bg-white min-h-screen">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold" style={{color:'#666'}}>Insights <span style={{color:'var(--b4-orange)'}}>Financeiros</span></h1>
        <p className="opacity-80" style={{color:'#666'}}>Análises, tendências e soluções para o futuro financeiro do seu negócio</p>
      </header>
      <main className="container-custom py-10 max-w-5xl">
        <Block img="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" title="💡 Insights Financeiros" href="https://www.bloomberglinea.com.br">
          <p>Análises recentes sobre o mercado e seus impactos no crédito, como a alta da Selic, têm sido destaque em portais como Bloomberg Línea e InfoMoney. Esse cenário influencia diretamente as estratégias de captação de empresas e investidores.</p>
          <p className="mt-2"><strong>Dica B4:</strong> Nossa equipe utiliza dados concretos e tendências atuais para estruturar estratégias inteligentes de crédito e financiamento, oferecendo suporte em decisões rápidas e assertivas.</p>
        </Block>
        <Block img="https://images.unsplash.com/photo-1554224155-6726b3ff858f" title="📊 Fatos Financeiros" href="https://forbes.com.br">
          <p>Balanços corporativos, aquisições e aprovações de tarifas aparecem em fontes como Forbes Brasil e VEJA, trazendo informações estratégicas para o mercado.</p>
          <p className="mt-2"><strong>Na prática B4:</strong> Oferecemos crédito empresarial com taxas competitivas, home equity e capital de giro, ajudando a fortalecer o caixa e garantir crescimento sustentável.</p>
        </Block>
        <Block img="https://images.unsplash.com/photo-1507679799987-c73779587ccf" title="🔎 Financeiro em Foco" href="https://www.anbima.com.br/">
          <p>Automação e análise preditiva vêm ganhando espaço em portais como ANBIMA e em canais de análise no YouTube. Essas tecnologias permitem antecipar riscos e identificar oportunidades.</p>
          <p className="mt-2"><strong>Com B4:</strong> Atuamos em toda a jornada, desde a análise documental até a liberação de recursos, com segurança, agilidade e acompanhamento próximo.</p>
        </Block>
        <Block img="https://images.unsplash.com/photo-1507679622673-989605832e3d" title="💰 Mundo das Finanças" href="https://www.funprespjud.com.br/confira-dez-canais-no-youtube-de-cursos-sobre-educacao-financeira/">
          <p>A diversificação de investimentos e o comportamento do investidor são constantemente discutidos em canais de educação financeira, como a FunprespJud. Essas tendências globais ampliam alternativas de gestão e inovação.</p>
          <p className="mt-2"><strong>Diferencial B4:</strong> Atuamos tanto em operações para pequenas empresas quanto em grandes projetos, com linhas de financiamento via FINEP e BNDES, sempre adaptadas às necessidades do cliente.</p>
        </Block>
        <Block img="https://images.unsplash.com/photo-1554224154-22dec7ec8818" title="📌 Notas Financeiras" href="https://www.infomoney.com.br">
          <p>O crescimento das operações de antecipação de recebíveis e a importância das notas explicativas têm ganhado destaque em portais como InfoMoney. Essas informações são fundamentais para auditorias e decisões de investidores.</p>
          <p className="mt-2"><strong>Serviço B4:</strong> Oferecemos securitização, consórcios sem juros e consultoria documental adaptada ao perfil de cada cliente, garantindo flexibilidade em prazos e condições.</p>
        </Block>
        <section className="text-center rounded-2xl py-10 px-6 mt-10" style={{background:'#fff3dd'}}>
          <h2 className="text-2xl font-semibold mb-2" style={{color:'#666'}}>Impulsione o desenvolvimento do seu negócio</h2>
          <p className="mb-6" style={{color:'#666'}}>Com produtos como home equity, capital de giro, antecipação de recebíveis, financiamentos para inovação (FINEP), linhas do BNDES, consórcios e consultoria em gestão financeira, a B4 garante condições atrativas, prazos flexíveis, processos ágeis e atendimento personalizado.</p>
          <a href="/contato" className="inline-block border-2 rounded-lg py-3 px-6 hover:opacity-90 transition" style={{borderColor:'var(--b4-orange)', color:'#333'}}>Fale agora com um especialista B4</a>
        </section>
      </main>
    </div>
  );
}

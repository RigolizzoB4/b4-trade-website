import React, { useEffect } from 'react';

export default function Insights() {
  useEffect(() => {
    // Inserir o CSS do site B4 diretamente
    const b4CSS = `
      @import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap);
      
      .b4-container {
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        margin: 0;
        padding: 0;
        color: #333;
      }
      
      .b4-container :root {
        --b4-orange: #f97316;
        --b4-orange-light: #fb923c;
        --b4-orange-dark: #ea580c;
        --b4-gray: #6b7280;
        --b4-dark: #1f2937;
        --b4-light: #f9fafb;
      }
      
      .b4-container .hero-section {
        background: linear-gradient(135deg, #1f2937 0%, #6b7280 100%);
        color: #fff;
        padding: 60px 20px;
        text-align: center;
      }
      
      .b4-container .btn-orange {
        background-color: #f97316;
        color: #fff;
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        text-decoration: none;
        display: inline-block;
        transition: all 0.3s ease;
      }
      
      .b4-container .btn-orange:hover {
        background-color: #ea580c;
        transform: translateY(-2px);
      }
      
      .b4-container .service-card {
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 24px;
        transition: all 0.3s ease;
        background: white;
        margin-bottom: 20px;
      }
      
      .b4-container .service-card:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        transform: translateY(-5px);
      }
      
      .b4-container .container-custom {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }
      
      .b4-container .section-padding {
        padding: 60px 0;
      }
      
      .b4-container .grid-services {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 24px;
        margin: 40px 0;
      }
      
      .b4-container .text-center { text-align: center; }
      .b4-container .mb-4 { margin-bottom: 1rem; }
      .b4-container .mb-6 { margin-bottom: 1.5rem; }
      .b4-container .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
      .b4-container .text-2xl { font-size: 1.5rem; line-height: 2rem; }
      .b4-container .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
      .b4-container .font-bold { font-weight: 700; }
      .b4-container .font-semibold { font-weight: 600; }
      .b4-container .opacity-90 { opacity: 0.9; }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = b4CSS;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="b4-container bg-white min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">
            B4 Soluções <span style={{color: '#f97316'}}>Financeiras</span>
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Transformando negócios através de soluções financeiras inteligentes e personalizadas
          </p>
          <a href="#servicos" className="btn-orange">
            Conheça nossos serviços
          </a>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold mb-4">Nossos <span style={{color: '#f97316'}}>Serviços</span></h2>
            <p className="text-xl opacity-90">
              Soluções completas para atender todas as necessidades financeiras do seu negócio
            </p>
          </div>

          <div className="grid-services">
            <div className="service-card">
              <h3 className="text-2xl font-semibold mb-4" style={{color: '#1f2937'}}>💰 Capital de Giro</h3>
              <p style={{color: '#6b7280'}}>
                Recursos para manter o fluxo de caixa da sua empresa sempre saudável, 
                com condições flexíveis e aprovação rápida.
              </p>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-semibold mb-4" style={{color: '#1f2937'}}>🏠 Home Equity</h3>
              <p style={{color: '#6b7280'}}>
                Utilize o valor do seu imóvel para obter crédito com as melhores 
                taxas do mercado e prazos estendidos.
              </p>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-semibold mb-4" style={{color: '#1f2937'}}>🔬 Financiamento FINEP</h3>
              <p style={{color: '#6b7280'}}>
                Acesso a recursos para inovação e desenvolvimento tecnológico 
                através de linhas especializadas da FINEP.
              </p>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-semibold mb-4" style={{color: '#1f2937'}}>🏛️ Linhas BNDES</h3>
              <p style={{color: '#6b7280'}}>
                Financiamentos de longo prazo para investimentos em expansão, 
                modernização e capital de giro associado.
              </p>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-semibold mb-4" style={{color: '#1f2937'}}>🚗 Consórcios</h3>
              <p style={{color: '#6b7280'}}>
                Realize seus sonhos através de consórcios para veículos, imóveis 
                e serviços, sem juros e com flexibilidade total.
              </p>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-semibold mb-4" style={{color: '#1f2937'}}>📊 Antecipação de Recebíveis</h3>
              <p style={{color: '#6b7280'}}>
                Transforme suas vendas futuras em dinheiro hoje mesmo, 
                com análise ágil e condições competitivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="section-padding" style={{backgroundColor: '#f9fafb'}}>
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold mb-4">
              Insights <span style={{color: '#f97316'}}>Financeiros</span>
            </h2>
            <p className="text-xl opacity-90">
              Análises, tendências e soluções para o futuro financeiro do seu negócio
            </p>
          </div>

          <div className="grid-services">
            <div className="service-card">
              <h3 className="text-2xl font-semibold mb-4" style={{color: '#1f2937'}}>💡 Cenário Econômico 2024</h3>
              <p style={{color: '#6b7280'}}>
                A alta da Selic e seus impactos no mercado de crédito. Como a B4 
                utiliza dados atuais para estruturar estratégias inteligentes de financiamento.
              </p>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-semibold mb-4" style={{color: '#1f2937'}}>📊 Tendências de Mercado</h3>
              <p style={{color: '#6b7280'}}>
                Automação e análise preditiva ganham espaço no setor financeiro. 
                Como antecipamos riscos e identificamos oportunidades para nossos clientes.
              </p>
            </div>

            <div className="service-card">
              <h3 className="text-2xl font-semibold mb-4" style={{color: '#1f2937'}}>🚀 Inovação Financeira</h3>
              <p style={{color: '#6b7280'}}>
                Fintech, blockchain e inteligência artificial transformam o mercado. 
                A B4 na vanguarda das soluções digitais para empresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-section">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl opacity-90 mb-6">
            Fale com nossos especialistas e descubra as melhores soluções financeiras 
            para impulsionar o crescimento da sua empresa.
          </p>
          <a href="/contato" className="btn-orange">
            Solicitar consultoria gratuita
          </a>
        </div>
      </section>
    </div>
  );
}

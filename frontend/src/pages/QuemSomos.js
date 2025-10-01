import React from 'react';
import { CheckCircle, Target, Award, Users, Heart, Handshake } from 'lucide-react';

const QuemSomos = () => {
  const valores = [
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-500" />,
      title: 'Integridade e Transparência',
      description: 'Atuamos com total honestidade e clareza em todos os nossos processos.'
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: 'Excelência e Qualidade nos Serviços',
      description: 'Buscamos sempre a perfeição em tudo o que fazemos para nossos clientes.'
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: 'Inovação Responsável',
      description: 'Utilizamos as melhores práticas e tecnologias de forma ética e sustentável.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Respeito e Valorização das Pessoas',
      description: 'Cada pessoa é única e merece tratamento digno e respeitoso.'
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      title: 'Responsabilidade Social',
      description: 'Contribuímos ativamente para o desenvolvimento da sociedade.'
    },
    {
      icon: <Handshake className="h-8 w-8 text-orange-500" />,
      title: 'Parcerias Estratégicas',
      description: 'Construímos relacionamentos sólidos e duradouros com nossos parceiros.'
    }
  ];

  const canais = [
    'NetWork de Mercado',
    'Mídias Sociais',
    'Google Ads',
    'E-mail Marketing',
    'WhatsApp Marketing',
    'Associações de Classe',
    'Influenciadores Financeiros'
  ];

  const segmentos = [
    {
      title: 'Small Business',
      faturamento: 'R$ 500 Mil – 5 Mi',
      setores: 'Sellers, Prestadores de Serviços, Varejo de Alimentos, Comércio Varejista'
    },
    {
      title: 'Middle Business',
      faturamento: 'R$ 5 Mi – 50 Mi',
      setores: 'Indústria, Construtoras, Sellers, Comércio Varejista, Supermercados'
    },
    {
      title: 'Smart Business',
      faturamento: 'R$ 50 Mi – 700 Mi',
      setores: 'Agro, Importadoras, Exportadoras, Grande Indústria'
    },
    {
      title: 'PF – Home Equity',
      faturamento: 'Pessoas Físicas',
      setores: 'Proprietários de imóveis quitados, Sócios de empresas'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section py-20 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.8), rgba(107, 114, 128, 0.8)), url('https://images.unsplash.com/photo-1574848296471-28f79a036f79?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzU5MzUwNDE5fDA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Quem <span className="text-orange-500">Somos</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            A B4 Soluções Financeiras conecta empresas e pessoas às melhores oportunidades 
            de captação de recursos, de forma ágil e estratégica, com ética e excelência 
            em todas as etapas, apoiando nossos clientes antes, durante e após a operação.
          </p>
        </div>
      </section>

      {/* Propósito, Visão e Missão */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Propósito */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nosso Propósito</h3>
              <p className="text-gray-600 leading-relaxed">
                Impulsionar o sucesso de pequenas e médias empresas através do acesso facilitado 
                ao crédito justo e ético é nosso propósito. Atuamos como parceiros estratégicos, 
                comprometidos com o desenvolvimento econômico e a responsabilidade social, 
                visando um futuro próspero para nossos clientes e a sociedade.
              </p>
            </div>

            {/* Visão */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser referência no Brasil para as PMEs, no assessoramento à captação de crédito 
                no mercado financeiro, sendo o mais lembrado neste segmento.
              </p>
            </div>

            {/* Código de Ética */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Código de Ética</h3>
              <p className="text-gray-600 leading-relaxed">
                Nossos princípios éticos norteiam cada decisão e ação. Priorizamos a 
                transparência, honestidade e responsabilidade em todos os relacionamentos, 
                construindo confiança duradoura com clientes e parceiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-orange-500">Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os valores que nos guiam em cada decisão e ação do nosso dia a dia.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {valor.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segmentos de Mercado */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Segmentos de <span className="text-orange-500">Mercado</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendemos diferentes perfis de empresas e pessoas físicas com soluções específicas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {segmentos.map((segmento, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {segmento.title}
                </h3>
                <div className="mb-4">
                  <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {segmento.faturamento}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Setores atendidos:</strong> {segmento.setores}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Canais */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Nossos <span className="text-orange-500">Canais</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Utilizamos diversos canais para conectar com nossos clientes e parceiros.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {canais.map((canal, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-colors">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-white">
                  {canal}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Bem-vindo ao mundo das soluções financeiras
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Estamos prontos para conectar você às melhores oportunidades de crédito do mercado.
          </p>
          <a 
            href="/contato" 
            className="inline-flex items-center bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;
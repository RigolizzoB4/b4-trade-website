import React from 'react';
import { CheckCircle, Home, DollarSign, Clock, TrendingUp, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeEquity = () => {
  const caracteristicas = [
    {
      icon: <DollarSign className="h-8 w-8 text-orange-500" />,
      title: 'Taxas de Juros Baixas',
      description: 'Menores que outras modalidades de crédito do mercado.'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: 'Prazos Flexíveis',
      description: 'De 5 a 20 anos para pagamento, conforme sua necessidade.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: 'Valores Elevados',
      description: 'Até 60% do valor do imóvel disponível para empréstimo.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-500" />,
      title: 'Liberdade de Uso',
      description: 'Utilize o dinheiro como quiser, sem restrições de finalidade.'
    }
  ];

  const vantagens = [
    'Menor Custo Efetivo Total (CET)',
    'Acesso a Grandes Quantias',
    'Melhoria do Fluxo de Caixa',
    'Sem comprometimento da renda atual',
    'Aprovação mais fácil que crédito tradicional',
    'Manutenção do uso do imóvel'
  ];

  const processoContratacao = [
    {
      numero: '01',
      titulo: 'Avaliação do Imóvel',
      descricao: 'Realizamos uma avaliação técnica completa do seu imóvel para determinar o valor de mercado.'
    },
    {
      numero: '02',
      titulo: 'Análise de Crédito',
      descricao: 'Verificamos seu histórico financeiro e capacidade de pagamento para definir as melhores condições.'
    },
    {
      numero: '03',
      titulo: 'Formalização do Contrato',
      descricao: 'Após aprovação, formalizamos o contrato com todas as condições acordadas.'
    },
    {
      numero: '04',
      titulo: 'Liberação dos Recursos',
      descricao: 'Os recursos são liberados rapidamente em sua conta após a assinatura do contrato.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section py-20 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.6), rgba(107, 114, 128, 0.6)), url('https://images.unsplash.com/photo-1505843513577-22bb7d21e455')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Home className="h-5 w-5 mr-2" />
              <span className="text-white/90 text-sm font-medium">Solução Financeira</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-orange-500">Home</span> Equity
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Use seu imóvel como garantia e obtenha crédito com taxas de juros baixas e prazos longos.
            </p>
            
            <Link 
              to="/contato" 
              className="btn-orange inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg"
            >
              Solicite uma Proposta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* O que é */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                O que é um <span className="text-orange-500">Home Equity</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Home Equity é um crédito onde você usa seu imóvel como garantia para obter 
                empréstimos com taxas de juros baixas e prazos longos. É uma solução inteligente 
                para quem precisa de recursos e possui um imóvel quitado ou com saldo devedor baixo.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <p className="text-orange-800 font-medium text-lg">
                  “Home Equity é a solução ideal para transformar o valor do seu imóvel 
                  em oportunidades reais.”
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227" 
                alt="Casa moderna" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">Até 60%</div>
                  <div className="text-sm text-gray-600">do valor do imóvel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Principais <span className="text-orange-500">Características</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as vantagens e benefícios do Home Equity da B4 Soluções Financeiras.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caracteristicas.map((caracteristica, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="mb-4 flex justify-center">
                  {caracteristica.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {caracteristica.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {caracteristica.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" 
                alt="Imóvel de luxo" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">Vantagens</span> do Home Equity
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Descubra por que o Home Equity é uma das modalidades de crédito mais vantajosas do mercado.
              </p>
              
              <div className="space-y-4">
                {vantagens.map((vantagem, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{vantagem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Contratação */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Processo de <span className="text-orange-500">Contratação</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo simples e transparente em 4 etapas para você obter seu crédito.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processoContratacao.map((etapa, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl flex items-center justify-center text-xl font-semibold mx-auto mb-6 shadow-lg border border-orange-300">
                  {etapa.numero}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {etapa.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {etapa.descricao}
                </p>
                {index < processoContratacao.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gray-300 transform translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Transforme seu imóvel em oportunidades
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Nos envie suas dúvidas – estamos prontos para lhe atender e encontrar 
                a melhor solução de Home Equity para você.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contato" 
                  className="inline-flex items-center bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Fale Conosco
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a 
                  href="tel:+5519997086955" 
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-500 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (19) 99708-6955
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <Home className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Crédito Aprovado</h3>
                <p className="text-white/90 mb-4">Até 60% do valor do imóvel</p>
                <div className="text-4xl font-bold">R$ 500 mil+</div>
                <div className="text-white/80 text-sm mt-2">Valores disponíveis</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeEquity;
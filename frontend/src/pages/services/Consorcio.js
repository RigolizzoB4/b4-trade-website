import React from 'react';
import { CheckCircle, Target, PiggyBank, Calendar, Users, ArrowRight, Phone, Home, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const Consorcio = () => {
  const caracteristicas = [
    {
      icon: <PiggyBank className="h-8 w-8 text-orange-500" />,
      title: 'Sem Juros',
      description: 'Diferente de financiamentos, o consórcio não possui juros, apenas taxa de administração.'
    },
    {
      icon: <Calendar className="h-8 w-8 text-orange-500" />,
      title: 'Planejamento Financeiro',
      description: 'Permite a aquisição de bens de forma planejada e sem comprometer o orçamento.'
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: 'Flexibilidade de Prazo',
      description: 'Diversos prazos e valores de parcelas, adaptando-se às suas necessidades.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Contemplação',
      description: 'Possibilidade de contemplação por sorteio mensal ou através de lances.'
    }
  ];

  const vantagens = [
    'Economia significativa sem juros',
    'Disciplina financeira e planejamento',
    'Acessibilidade para bens de alto valor',
    'Diversidade de bens disponíveis',
    'Contemplação por sorteio ou lance',
    'Parcelas fixas durante todo o período'
  ];

  const tiposConsorcio = [
    {
      tipo: 'Consórcio Imobiliário',
      icone: <Home className="h-12 w-12 text-orange-500" />,
      descricao: 'Para aquisição de imóveis residenciais e comerciais',
      itens: ['Apartamentos', 'Casas', 'Terrenos', 'Imóveis comerciais', 'Salas comerciais']
    },
    {
      tipo: 'Consórcio Automotivo',
      icone: <Car className="h-12 w-12 text-orange-500" />,
      descricao: 'Para aquisição de veículos novos e seminovos',
      itens: ['Carros de passeio', 'Motocicletas', 'Veículos zero km', 'Seminovos', 'Veículos especiais']
    },
    {
      tipo: 'Veículos Pesados',
      icone: <Target className="h-12 w-12 text-orange-500" />,
      descricao: 'Para aquisição de veículos comerciais e pesados',
      itens: ['Caminhões', 'Ônibus', 'Máquinas agrícolas', 'Equipamentos', 'Implementos']
    }
  ];

  const processoContratacao = [
    {
      numero: '01',
      titulo: 'Escolha do Plano',
      descricao: 'Seleção do plano de consórcio que melhor se adapta às suas necessidades e objetivos.'
    },
    {
      numero: '02',
      titulo: 'Adesão ao Grupo',
      descricao: 'Formalização da adesão ao grupo de consórcio com assinatura do contrato.'
    },
    {
      numero: '03',
      titulo: 'Pagamento das Parcelas',
      descricao: 'Pagamento mensal das parcelas conforme o plano escolhido e cronograma estabelecido.'
    },
    {
      numero: '04',
      titulo: 'Contemplação',
      descricao: 'Acompanhamento dos sorteios mensais e possibilidade de oferta de lances para contemplação.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section py-20 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.8), rgba(107, 114, 128, 0.8)), url('https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzU5MzUwNDE5fDA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Target className="h-5 w-5 mr-2" />
              <span className="text-white/90 text-sm font-medium">Compra Planejada</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-orange-500">Consórcio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Adquira bens de forma planejada e econômica, sem juros e com total flexibilidade.
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
                O que é um <span className="text-orange-500">Consórcio</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Consórcio é uma modalidade de compra planejada, onde um grupo de pessoas 
                se reúne para formar uma poupança comum, destinada à aquisição de bens ou 
                serviços, como imóveis, veículos, reformas, entre outros.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <p className="text-orange-800 font-medium text-lg">
                  “Excelente alternativa para quem deseja adquirir bens de forma 
                  planejada e econômica. Com flexibilidade, sem juros e diversas 
                  opções de contemplação.”
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541089404510-5c9a779841fc" 
              alt="Casal feliz planejando" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">0%</div>
                  <div className="text-sm text-gray-600">Juros</div>
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
              Conheça as vantagens do Consórcio da B4 Soluções Financeiras.
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

      {/* Tipos de Consórcio */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tipos de <span className="text-orange-500">Consórcio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos diversas modalidades de consórcio para atender suas necessidades.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tiposConsorcio.map((tipo, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  {tipo.icone}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {tipo.tipo}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {tipo.descricao}
                </p>
                <div className="space-y-3">
                  {tipo.itens.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1501901609772-df0848060b33" 
                alt="Casal planejando financeiramente" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">Vantagens</span> do Consórcio
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Descubra por que o consórcio é uma das formas mais inteligentes de adquirir bens.
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Processo de <span className="text-orange-500">Contratação</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo simples e transparente para você realizar seu sonho.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processoContratacao.map((etapa, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl flex items-center justify-center text-xl font-semibold mx-auto mb-6 shadow-lg border border-orange-300">
                  {etapa.numero}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {etapa.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {etapa.descricao}
                </p>
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
                Realize seus sonhos de forma planejada
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Nos envie suas dúvidas – estamos prontos para lhe atender e encontrar 
                o melhor plano de consórcio para você.
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
                <PiggyBank className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Consórcio Inteligente</h3>
                <p className="text-white/90 mb-4">Sem juros, com planejamento</p>
                <div className="text-4xl font-bold">Seu Sonho</div>
                <div className="text-white/80 text-sm mt-2">Realizado de forma planejada</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consorcio;
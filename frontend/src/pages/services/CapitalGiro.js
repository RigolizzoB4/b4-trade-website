import React from 'react';
import { CheckCircle, TrendingUp, Clock, DollarSign, Zap, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CapitalGiro = () => {
  const caracteristicas = [
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Flexibilidade de Uso',
      description: 'Pode ser utilizado para diversas finalidades operacionais da empresa.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-orange-500" />,
      title: 'Taxas Competitivas',
      description: 'Condições atrativas para facilitar a gestão financeira da empresa.'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: 'Prazos Variáveis',
      description: 'Prazos que se ajustam às necessidades específicas do seu negócio.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: 'Rapidez na Liberação',
      description: 'Processo ágil para que os recursos estejam disponíveis rapidamente.'
    }
  ];

  const vantagens = [
    'Melhoria do Fluxo de Caixa',
    'Flexibilidade Financeira',
    'Crescimento Sustentável',
    'Aproveitar oportunidades de mercado',
    'Negociar melhores condições com fornecedores',
    'Manter operações sem interrupções'
  ];

  const subprodutos = [
    {
      nome: 'Antecipação de Recebíveis',
      descricao: 'Antecipe o recebimento de vendas a prazo',
      prazo: '30 a 180 dias'
    },
    {
      nome: 'Desconto de Duplicatas',
      descricao: 'Transforme suas duplicatas em dinheiro imediato',
      prazo: '30 a 90 dias'
    },
    {
      nome: 'Crédito Rotativo Empresarial',
      descricao: 'Linha de crédito flexível para necessidades pontuais',
      prazo: 'Renovável mensalmente'
    },
    {
      nome: 'Cartão Corporativo',
      descricao: 'Facilite pagamentos e controle de despesas',
      prazo: 'Até 40 dias'
    }
  ];

  const finalidades = [
    'Pagamento de fornecedores e prestadores de serviços',
    'Compra de matéria-prima e insumos de produção',
    'Pagamento de salários e encargos trabalhistas',
    'Manutenção de equipamentos e infraestrutura',
    'Despesas operacionais e administrativas',
    'Aproveitamento de oportunidades comerciais',
    'Adequação de fluxo de caixa sazonal',
    'Investimentos de curto prazo para crescimento'
  ];

  const processoContratacao = [
    {
      numero: '01',
      titulo: 'Análise de Necessidades',
      descricao: 'Avaliamos as necessidades financeiras específicas da sua empresa e o valor necessário.'
    },
    {
      numero: '02',
      titulo: 'Análise de Crédito',
      descricao: 'Verificamos a capacidade de pagamento e histórico financeiro da empresa.'
    },
    {
      numero: '03',
      titulo: 'Formalização do Contrato',
      descricao: 'Definimos as condições do crédito e formalizamos o contrato.'
    },
    {
      numero: '04',
      titulo: 'Liberação dos Recursos',
      descricao: 'Disponibilização rápida do capital para uso imediato nas operações.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section py-20 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.8), rgba(107, 114, 128, 0.8)), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtb2Rlcm58ZW58MHx8fHwxNzU5MzUwNDMxfDA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span className="text-white/90 text-sm font-medium">Solução Empresarial</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-orange-500">Capital</span> de Giro
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Financie as operações diárias da sua empresa com flexibilidade e agilidade.
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
                O que é <span className="text-orange-500">Capital de Giro</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Capital de Giro é uma linha de crédito destinada a financiar as operações 
                diárias de uma empresa, garantindo a continuidade dos negócios e a manutenção 
                do fluxo de caixa. É essencial para manter a saúde financeira da sua empresa.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <p className="text-orange-800 font-medium text-lg">
                  “O Capital de Giro é essencial para a saúde financeira e o 
                  crescimento sustentável da sua empresa.”
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxvZmZpY2UlMjBtb2Rlcm58ZW58MHx8fHwxNzU5MzUwNDMxfDA&ixlib=rb-4.1.0&q=85" 
                alt="Executivo analisando gráficos" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">24h</div>
                  <div className="text-sm text-gray-600">Liberação Rápida</div>
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
              Conheça as vantagens do Capital de Giro da B4 Soluções Financeiras.
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

      {/* Subprodutos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Modalidades de <span className="text-orange-500">Capital de Giro</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diferentes soluções para atender as necessidades específicas do seu negócio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subprodutos.map((produto, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-gray-900 mb-3">
                  {produto.nome}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {produto.descricao}
                </p>
                <div className="bg-orange-50 p-2 rounded-lg text-center">
                  <span className="text-orange-700 font-medium text-xs">
                    {produto.prazo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens e Finalidades */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Vantagens */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <span className="text-orange-500">Vantagens</span> do Capital de Giro
              </h2>
              <div className="space-y-4">
                {vantagens.map((vantagem, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{vantagem}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Finalidades */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Principais <span className="text-orange-500">Finalidades</span>
              </h2>
              <div className="space-y-3">
                {finalidades.map((finalidade, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium text-sm">{finalidade}</span>
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
              Um processo simples e transparente para sua empresa obter o capital necessário.
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
                Impulsione o crescimento da sua empresa
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Nos envie suas dúvidas – estamos prontos para lhe atender e encontrar 
                a melhor solução de Capital de Giro para sua empresa.
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
                  href="tel:+5519988123070" 
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-500 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (19) 98812-3070
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <TrendingUp className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Capital Disponível</h3>
                <p className="text-white/90 mb-4">Para sua empresa crescer</p>
                <div className="text-4xl font-bold">R$ 1M+</div>
                <div className="text-white/80 text-sm mt-2">Recursos liberados rapidamente</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapitalGiro;
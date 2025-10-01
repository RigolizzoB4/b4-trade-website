import React from 'react';
import { CheckCircle, Building2, Users, Target, ArrowRight, Phone, Briefcase, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const CapitalInvestimento = () => {
  const tiposInvestimento = [
    {
      titulo: 'Seed Capital',
      descricao: 'Investimento em startups e empresas em estágio inicial com alto potencial de crescimento.',
      valor: 'R$ 100K - R$ 2M',
      prazo: '3-7 anos',
      foco: 'Validação de modelo de negócio'
    },
    {
      titulo: 'Growth Capital',
      descricao: 'Capital para empresas consolidadas que buscam acelerar o crescimento e expansão.',
      valor: 'R$ 2M - R$ 50M',
      prazo: '4-8 anos',
      foco: 'Expansão e crescimento acelerado'
    },
    {
      titulo: 'Private Equity',
      descricao: 'Investimentos em empresas maduras para reestruturação, otimização e crescimento.',
      valor: 'R$ 50M+',
      prazo: '5-10 anos',
      foco: 'Otimização e profissionalização'
    },
    {
      titulo: 'Bridge Capital',
      descricao: 'Capital ponte para empresas em transição ou preparação para grandes rodadas.',
      valor: 'R$ 500K - R$ 10M',
      prazo: '1-3 anos',
      foco: 'Transição e preparação'
    }
  ];

  const setoresFoco = [
    {
      setor: 'Tecnologia e Inovação',
      exemplos: 'Fintech, Healthtech, Edtech, SaaS'
    },
    {
      setor: 'Energia Renovável',
      exemplos: 'Solar, Eólica, Biomassa, Eficiência Energética'
    },
    {
      setor: 'Agronegócio',
      exemplos: 'Agtech, Processamento, Logística Rural'
    },
    {
      setor: 'Saúde e Biotecnologia',
      exemplos: 'Dispositivos médicos, Farmacêutica, Telemedicina'
    },
    {
      setor: 'Infraestrutura',
      exemplos: 'Logística, Transportes, Saneamento'
    },
    {
      setor: 'Varejo e E-commerce',
      exemplos: 'Marketplaces, Retail tech, Omnichannel'
    }
  ];

  const processoInvestimento = [
    {
      etapa: 'Prospecção',
      descricao: 'Identificação e análise inicial de oportunidades de investimento.',
      tempo: '2-4 semanas'
    },
    {
      etapa: 'Due Diligence',
      descricao: 'Análise aprofundada financeira, jurídica, comercial e operacional.',
      tempo: '6-12 semanas'
    },
    {
      etapa: 'Estruturação',
      descricao: 'Definição dos termos do investimento e estrutura societária.',
      tempo: '4-8 semanas'
    },
    {
      etapa: 'Fechamento',
      descricao: 'Formalização do investimento e transferência dos recursos.',
      tempo: '2-4 semanas'
    },
    {
      etapa: 'Acompanhamento',
      descricao: 'Monitoramento ativo e apoio estratégico à empresa investida.',
      tempo: 'Contínuo'
    }
  ];

  const vantagens = [
    'Acesso a capital de longo prazo sem necessidade de garantias tradicionais',
    'Apoio estratégico e mentoria especializada para crescimento',
    'Rede de contatos e parcerias para expansão de negócios',
    'Experiência comprovada em diversos setores da economia',
    'Processo transparente e ágil de análise e aprovação',
    'Foco em resultados sustentáveis e criação de valor',
    'Flexibilidade na estruturação de operações'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section py-20 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.6), rgba(107, 114, 128, 0.6)), url('https://images.unsplash.com/photo-1556761175-b413da4baf72')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Briefcase className="h-5 w-5 mr-2" />
              <span className="text-white/90 text-sm font-medium">Investimento Estratégico</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-orange-500">Capital</span> de Investimento
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Conectamos empresas com potencial de crescimento a investidores estratégicos e capital de risco.
            </p>
            
            <Link 
              to="/contato" 
              className="btn-orange inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg"
            >
              Solicite uma Análise
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tipos de Investimento */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Modalidades de <span className="text-orange-500">Investimento</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos diferentes tipos de capital de investimento para atender empresas em diversos estágios de desenvolvimento.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tiposInvestimento.map((tipo, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {tipo.titulo}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tipo.descricao}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-sm text-orange-700 font-medium">Valor</div>
                    <div className="text-orange-800 font-bold text-sm">{tipo.valor}</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-sm text-orange-700 font-medium">Prazo</div>
                    <div className="text-orange-800 font-bold text-sm">{tipo.prazo}</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-sm text-orange-700 font-medium">Foco</div>
                    <div className="text-orange-800 font-bold text-xs">{tipo.foco}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setores de Foco */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Setores de <span className="text-orange-500">Atuação</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso foco está em setores com alto potencial de crescimento e inovação.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {setoresFoco.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Building2 className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {item.setor}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.exemplos}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Investimento */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Processo de <span className="text-orange-500">Investimento</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo estruturado e transparente para garantir o sucesso da parceria.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processoInvestimento.map((etapa, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl flex items-center justify-center text-xl font-semibold mx-auto mb-6 shadow-lg border border-orange-300">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {etapa.etapa}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-2">
                  {etapa.descricao}
                </p>
                <div className="text-orange-600 font-medium text-xs">
                  {etapa.tempo}
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
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">Vantagens</span> do Capital de Investimento
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Muito mais que capital: uma parceria estratégica para o crescimento sustentável do seu negócio.
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
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d" 
                alt="Investimento estratégico" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">ROI Médio</div>
                  <div className="font-bold text-gray-900">25%+ a.a.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Transforme sua empresa com capital inteligente
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Nossa equipe está pronta para analisar o potencial da sua empresa e conectá-la 
                aos melhores investidores do mercado.
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
                <Briefcase className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Capital Inteligente</h3>
                <p className="text-white/90 mb-4">Para empresas inovadoras</p>
                <div className="text-4xl font-bold">R$ 50M+</div>
                <div className="text-white/80 text-sm mt-2">Disponível para investimento</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapitalInvestimento;
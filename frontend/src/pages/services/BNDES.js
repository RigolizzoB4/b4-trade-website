import React from 'react';
import { CheckCircle, Factory, Cog, TrendingUp, Clock, ArrowRight, Phone, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const BNDES = () => {
  const linhasCredito = [
    {
      titulo: 'FINAME',
      descricao: 'Financiamento para aquisição de máquinas e equipamentos nacionais.',
      icon: <Cog className="h-8 w-8 text-orange-500" />,
      caracteristicas: ['Taxas subsidiadas', 'Prazos de até 10 anos', 'Cobertura de até 90% do valor', 'Equipamentos nacionais credenciados']
    },
    {
      titulo: 'FGI PEAC',
      descricao: 'Fundo Garantidor para Investimentos com foco em pequenas e médias empresas.',
      icon: <Building className="h-8 w-8 text-orange-500" />,
      caracteristicas: ['Garantia complementar', 'Facilita aprovação', 'Reduz exigência de garantias', 'Foco em PMEs']
    },
    {
      titulo: 'BNDES Automático',
      descricao: 'Crédito para modernização, ampliação e diversificação de empresas.',
      icon: <Factory className="h-8 w-8 text-orange-500" />,
      caracteristicas: ['Operações até R$ 20 milhões', 'Processo mais ágil', 'Diversos setores', 'Investimentos produtivos']
    }
  ];

  const vantagens = [
    'Taxas de juros subsidiadas e competitivas - As menores do mercado para financiamento empresarial',
    'Prazos longos para pagamento - Até 120 meses para quitação, facilitando o planejamento financeiro',
    'Suporte ao desenvolvimento industrial - Programas específicos para modernização e expansão fabril',
    'Fomento à inovação e tecnologia - Incentivos especiais para projetos de pesquisa e desenvolvimento',
    'Fortalecimento da cadeia produtiva nacional - Priorizando fornecedores e insumos brasileiros',
    'Geração de empregos e renda - Compromisso social com a criação de postos de trabalho qualificados',
    'Assessoria técnica especializada - Acompanhamento durante todo o processo de implementação',
    'Flexibilidade de garantias - Diferentes modalidades de garantia para facilitar o acesso'
  ];

  const setoresAtendidos = [
    'Indústria de Transformação - Manufatura, metalurgia, química e farmacêutica',
    'Agroindústria - Processamento de alimentos, frigoríficos e cooperativas',
    'Infraestrutura - Construção civil, saneamento e obras públicas',
    'Logística e Transporte - Portos, aeroportos, ferrovias e rodovias',
    'Energia - Geração, transmissão e distribuição de energia elétrica',
    'Tecnologia da Informação - Software, hardware e telecomunicações',
    'Saúde - Hospitais, clínicas e indústria farmacêutica',
    'Educação - Instituições de ensino e centros de pesquisa',
    'Turismo - Hotelaria, parques temáticos e infraestrutura turística'
  ];

  const processoContratacao = [
    {
      numero: '01',
      titulo: 'Consulta Prévia',
      descricao: 'Avaliamos a viabilidade do projeto e definimos a melhor linha de crédito BNDES.'
    },
    {
      numero: '02',
      titulo: 'Elaboração do Projeto',
      descricao: 'Preparamos toda a documentação necessária e projeto técnico detalhado.'
    },
    {
      numero: '03',
      titulo: 'Análise Técnica',
      descricao: 'Análise completa pela instituição financeira credenciada e BNDES.'
    },
    {
      numero: '04',
      titulo: 'Aprovação e Contratação',
      descricao: 'Formalização do contrato após aprovação de todas as instâncias.'
    },
    {
      numero: '05',
      titulo: 'Liberação',
      descricao: 'Liberação dos recursos conforme cronograma físico-financeiro aprovado.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section py-20 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.8), rgba(107, 114, 128, 0.8)), url('https://images.unsplash.com/photo-1565866926760-213f0b57e8b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxpbmR1c3RyeSUyMGZhY3Rvcnl8ZW58MHx8fHwxNzU5MzUwNDQzfDA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Factory className="h-5 w-5 mr-2" />
              <span className="text-white/90 text-sm font-medium">Desenvolvimento Nacional</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-orange-500">BNDES</span>
              <span className="block text-3xl md:text-4xl mt-2">FINAME | FGI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Acesso às melhores linhas de crédito do BNDES para máquinas, equipamentos e projetos de desenvolvimento.
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
                Linhas de Crédito <span className="text-orange-500">BNDES</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                O BNDES (Banco Nacional de Desenvolvimento Econômico e Social) oferece 
                diversas linhas de financiamento para impulsionar o desenvolvimento 
                empresarial brasileiro. Através de programas como FINAME e FGI PEAC, 
                empresas podem acessar recursos com condições especiais.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <p className="text-orange-800 font-medium text-lg">
                  “Impulsione seu negócio com as melhores soluções de 
                  financiamento do mercado.”
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxvZmZpY2UlMjBtb2Rlcm58ZW58MHx8fHwxNzU5MzUwNDMxfDA&ixlib=rb-4.1.0&q=85" 
                alt="Complexo empresarial" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">R$ 20M</div>
                  <div className="text-sm text-gray-600">Limite por operação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linhas de Crédito */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Principais <span className="text-orange-500">Linhas</span> de Crédito
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as principais modalidades de financiamento BNDES disponíveis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {linhasCredito.map((linha, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6 flex justify-center">
                  {linha.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {linha.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {linha.descricao}
                </p>
                <div className="space-y-3">
                  {linha.caracteristicas.map((caracteristica, charIndex) => (
                    <div key={charIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens e Setores */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Vantagens */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <span className="text-orange-500">Vantagens</span> do BNDES
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
            
            {/* Setores Atendidos */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Setores <span className="text-orange-500">Atendidos</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {setoresAtendidos.map((setor, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium text-sm">{setor}</span>
                    </div>
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
              Um processo estruturado para garantir o sucesso na obtenção do financiamento BNDES.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processoContratacao.map((etapa, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl flex items-center justify-center text-xl font-semibold mx-auto mb-6 shadow-lg border border-orange-300">
                  {etapa.numero}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {etapa.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
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
                Desenvolva seu negócio com o BNDES
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Nos envie suas dúvidas – estamos prontos para lhe atender e encontrar 
                a melhor linha de crédito BNDES para seu projeto.
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
                <Factory className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Financiamento BNDES</h3>
                <p className="text-white/90 mb-4">Para o desenvolvimento do seu negócio</p>
                <div className="text-4xl font-bold">R$ 20M</div>
                <div className="text-white/80 text-sm mt-2">Limite por operação</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BNDES;
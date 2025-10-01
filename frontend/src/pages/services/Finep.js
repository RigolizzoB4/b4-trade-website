import React from 'react';
import { CheckCircle, Lightbulb, Zap, Clock, TrendingUp, ArrowRight, Phone, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';

const Finep = () => {
  const caracteristicas = [
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      title: 'Foco em Inovação',
      description: 'Destinado a projetos de pesquisa, desenvolvimento e inovação tecnológica.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: 'Taxas Competitivas',
      description: 'Condições atrativas para incentivar o desenvolvimento tecnológico.'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: 'Prazos Flexíveis',
      description: 'Até 60 meses para pagamento, ajustados ao ciclo de desenvolvimento do projeto.'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Apoio Técnico',
      description: 'Além do financiamento, oferece suporte técnico e acompanhamento dos projetos.'
    }
  ];

  const vantagens = [
    'Incentivo à Inovação',
    'Condições Atrativas com taxas subsidiadas',
    'Apoio ao Crescimento com suporte técnico',
    'Diversidade de Linhas de Crédito',
    'Facilita desenvolvimento de novos produtos',
    'Suporte para comercialização de inovações'
  ];

  const tiposProjetos = [
    {
      titulo: 'Pesquisa e Desenvolvimento',
      itens: ['Desenvolvimento de novos produtos', 'Melhoria de processos produtivos', 'Pesquisa aplicada', 'Desenvolvimento experimental']
    },
    {
      titulo: 'Inovação Tecnológica',
      itens: ['Implementação de tecnologias', 'Automação de processos', 'Digitalização empresarial', 'Industria 4.0']
    },
    {
      titulo: 'Sustentabilidade',
      itens: ['Tecnologias limpas', 'Economia circular', 'Energias renováveis', 'Eficiência energética']
    }
  ];

  const processoContratacao = [
    {
      numero: '01',
      titulo: 'Identificação do Projeto',
      descricao: 'Definição clara do projeto de inovação a ser financiado e seus objetivos.'
    },
    {
      numero: '02',
      titulo: 'Elaboração da Proposta',
      descricao: 'Preparação detalhada da proposta incluindo plano de negócios e cronograma.'
    },
    {
      numero: '03',
      titulo: 'Análise e Aprovação',
      descricao: 'Avaliação técnica e financeira completa do projeto pela FINEP.'
    },
    {
      numero: '04',
      titulo: 'Formalização',
      descricao: 'Assinatura do contrato de financiamento e início do projeto.'
    },
    {
      numero: '05',
      titulo: 'Liberação de Recursos',
      descricao: 'Disponibilização dos recursos conforme cronograma do projeto aprovado.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section py-20 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.8), rgba(107, 114, 128, 0.8)), url('https://images.unsplash.com/photo-1554260570-c7068c223285?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NTkzNTA0MjR8MA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Beaker className="h-5 w-5 mr-2" />
              <span className="text-white/90 text-sm font-medium">Financiamento à Inovação</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-orange-500">FINEP</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Financiamento para projetos de inovação, pesquisa e desenvolvimento da sua empresa.
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
                O que é a <span className="text-orange-500">FINEP</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A FINEP (Financiadora de Estudos e Projetos) é uma instituição pública brasileira 
                que oferece linhas de crédito e financiamento para projetos de inovação, pesquisa 
                e desenvolvimento em empresas de diversos setores.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                <p className="text-orange-800 font-medium text-lg">
                  “Financie sua inovação e transforme seu negócio em um case de sucesso.”
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg" 
                alt="Engenheira trabalhando com tecnologia" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">60 meses</div>
                  <div className="text-sm text-gray-600">Prazo máximo</div>
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
              Conheça as vantagens dos financiamentos FINEP através da B4 Soluções Financeiras.
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
                src="https://images.unsplash.com/photo-1700427296131-0cc4c4610fc6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxmaW5hbmNlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NTkzNTA0MjR8MA&ixlib=rb-4.1.0&q=85" 
                alt="Profissional de negócios" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">Vantagens</span> da FINEP
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Descubra os benefícios de financiar seus projetos inovadores com recursos da FINEP.
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

      {/* Tipos de Projetos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tipos de <span className="text-orange-500">Projetos</span> Financiados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as diferentes categorias de projetos que podem ser financiados pela FINEP.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tiposProjetos.map((categoria, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {categoria.titulo}
                </h3>
                <div className="space-y-3">
                  {categoria.itens.map((item, itemIndex) => (
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

      {/* Processo de Contratação */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Processo de <span className="text-orange-500">Contratação</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo estruturado para garantir o sucesso do seu projeto de inovação.
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
                Inove e transforme seu negócio
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Nos envie suas dúvidas – estamos prontos para lhe atender e encontrar 
                a melhor solução FINEP para seu projeto inovador.
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
                <Lightbulb className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Projetos Inovadores</h3>
                <p className="text-white/90 mb-4">Financiados pela FINEP</p>
                <div className="text-4xl font-bold">R$ 5M+</div>
                <div className="text-white/80 text-sm mt-2">Recursos disponíveis</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Finep;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, Award, TrendingUp } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Home Equity',
      description: 'Use seu imóvel como garantia e obtenha crédito com taxas baixas e prazos longos.',
      icon: (
        <div className="w-16 h-16 bg-white border border-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </div>
      ),
      path: '/servicos/home-equity'
    },
    {
      title: 'Capital de Giro',
      description: 'Financie as operações diárias da sua empresa com flexibilidade e agilidade.',
      icon: (
        <div className="w-16 h-16 bg-white border border-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H15m-1.5 0V9l-3-3m3 3h3.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-9.375A1.125 1.125 0 0 1 5.25 15.75V6.375z" />
          </svg>
        </div>
      ),
      path: '/servicos/capital-giro'
    },
    {
      title: 'FINEP',
      description: 'Financiamento para projetos de inovação, pesquisa e desenvolvimento.',
      icon: (
        <div className="w-16 h-16 bg-white border border-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
        </div>
      ),
      path: '/servicos/finep'
    },
    {
      title: 'BNDES',
      description: 'Acesso às linhas de crédito do BNDES para máquinas, equipamentos e projetos.',
      icon: (
        <div className="w-16 h-16 bg-white border border-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m8.25 4.5V16.5a1.5 1.5 0 0 1 3-1.5m-3 1.5H9.375a1.125 1.125 0 0 1-1.125-1.125v-2.25m8.25 0V9.375a1.125 1.125 0 0 1 1.125-1.125h2.25m-1.125 12.375c0 .621-.504 1.125-1.125 1.125h-9.75c0-.621.504-1.125 1.125-1.125h9.75Z" />
          </svg>
        </div>
      ),
      path: '/servicos/bndes'
    },
    {
      title: 'Consórcio',
      description: 'Adquira bens de forma planejada e econômica, sem juros.',
      icon: (
        <div className="w-16 h-16 bg-white border border-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        </div>
      ),
      path: '/servicos/consorcio'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clientes Atendidos' },
    { number: 'R$ 100M+', label: 'Em Recursos Captados' },
    { number: '15+', label: 'Anos de Experiência' },
    { number: '98%', label: 'Taxa de Aprovação' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.6), rgba(107, 114, 128, 0.6)), url('https://customer-assets.emergentagent.com/job_loanexperts/artifacts/fledzhqn_image.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              <span className="text-white/90 text-sm font-medium">Conheça a B4</span>
            </div>
            
            {/* Main Title */}
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <img 
                src="https://customer-assets.emergentagent.com/job_loanexperts/artifacts/fskgr5np_IMG-20251001-WA0003-removebg-preview.png" 
                alt="B4 Soluções Financeiras"
                className="h-24 md:h-32 lg:h-40 mx-auto mb-4"
              />
            </h1>
            
            {/* Subtitle */}
            <p className="hero-subtitle text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              <span className="block mb-2 text-orange-300 font-semibold">Grupo B4 - Conectando você ao futuro financeiro</span>
              Conectando empresas e pessoas às melhores oportunidades de captação de recursos.
              <span className="block mt-2 text-orange-300 font-medium">
                Soluções ágeis, estratégicas e éticas em todas as etapas.
              </span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to="/servicos/home-equity" 
                className="btn-orange inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg group"
              >
                Conheça nossas soluções
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/quem-somos" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Sobre a B4
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-orange-500">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções financeiras completas para empresas e pessoas físicas, 
              com foco na captação de recursos e assessoria especializada.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={service.path}
                className="service-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl group"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Por que escolher a <span className="text-orange-500">B4</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Somos especialistas em conectar você às melhores oportunidades do mercado financeiro, 
                com uma abordagem personalizada e foco em resultados.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Experiência Comprovada</h3>
                    <p className="text-gray-600">Mais de 15 anos conectando clientes às melhores oportunidades de crédito.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Atendimento Personalizado</h3>
                    <p className="text-gray-600">Cada cliente recebe atenção individual e soluções sob medida.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Foco em Resultados</h3>
                    <p className="text-gray-600">Trabalhamos incansavelmente para garantir a aprovação do seu crédito.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://customer-assets.emergentagent.com/job_loanexperts/artifacts/ap34uxty_image.png" 
                alt="Equipe B4" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <Award className="h-8 w-8 mb-2" />
                <p className="font-semibold">Certificação</p>
                <p className="text-sm opacity-90">ISO 9001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-custom text-center">
          <TrendingUp className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl font-bold mb-4">
            Pronto para impulsionar seu negócio?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Nos envie suas dúvidas – estamos prontos para lhe atender e encontrar 
            a melhor solução financeira para você.
          </p>
          <Link 
            to="/contato" 
            className="inline-flex items-center bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Fale Conosco Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
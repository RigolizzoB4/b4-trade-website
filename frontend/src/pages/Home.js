import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, Award, TrendingUp } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Home Equity',
      description: 'Use seu imóvel como garantia e obtenha crédito com taxas baixas e prazos longos.',
      icon: '🏠',
      path: '/servicos/home-equity'
    },
    {
      title: 'Capital de Giro',
      description: 'Financie as operações diárias da sua empresa com flexibilidade e agilidade.',
      icon: '💰',
      path: '/servicos/capital-giro'
    },
    {
      title: 'FINEP',
      description: 'Financiamento para projetos de inovação, pesquisa e desenvolvimento.',
      icon: '🔬',
      path: '/servicos/finep'
    },
    {
      title: 'BNDES',
      description: 'Acesso às linhas de crédito do BNDES para máquinas, equipamentos e projetos.',
      icon: '🏭',
      path: '/servicos/bndes'
    },
    {
      title: 'Consórcio',
      description: 'Adquira bens de forma planejada e econômica, sem juros.',
      icon: '🎯',
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
            backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.8), rgba(107, 114, 128, 0.8)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBmaW5hbmNlfGVufDB8fHx8MTc1OTM0OTI0OHww')`,
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
              B4 Soluções 
              <span className="text-orange-500">Financeiras</span>
            </h1>
            
            {/* Subtitle */}
            <p className="hero-subtitle text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
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
                <div className="text-4xl mb-4">{service.icon}</div>
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
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzU5MzQ5MjU5fDA" 
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
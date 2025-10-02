import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, Award, TrendingUp, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

// Componente de métrica com borda laranja, contador e label que aparece no hover
const StatCard = ({ number, label }) => {
  // Extrai número e sufixos para animar 1500+, 500M+, etc.
  const parseNumber = (raw) => {
    const match = String(raw).match(/([0-9.,]+)\s*([A-Za-z]*)\+?/);
    if (!match) return { base: 0, suffix: raw, plus: raw.includes('+') };
    const base = parseFloat(match[1].replace('.', '').replace(',', '.')) || 0;
    const suffix = match[2] || '';
    const plus = String(raw).includes('+');
    return { base, suffix, plus };
  };

  const { base, suffix, plus } = parseNumber(number);
  const [val, setVal] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    // animação de contagem com leve giro do número
    const duration = 1100;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.floor(base * p));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, base]);

  const formatted = () => {
    const n = val.toLocaleString('pt-BR');
    const pct = label?.toLowerCase().includes('taxa') ? '%' : '';
    return `${n}${pct}${suffix ? suffix : ''}${plus ? '+' : ''}`;
  };

  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-xl p-6 border-2 border-orange-500 transition-all shadow-sm hover:shadow-md min-h-[120px] grid place-items-center text-center"
    >
      {/* Camada do número (central absoluta) */}
      <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-150">
        <div className="text-2xl md:text-3xl font-extrabold text-orange-500 tabular-nums">
          <span className="spin-count" style={{animation: visible ? 'spinTiny 1.1s ease-out' : 'none'}}>{formatted()}</span>
        </div>
      </div>
      {/* Camada do texto (central absoluta) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        <div className="text-black text-[18px] font-semibold">
          {label}
        </div>
      </div>
      {/* moldura interna sutil (opcional) */}
      <div className="absolute inset-0 rounded-xl pointer-events-none border border-orange-300/50" />
    </div>
  );
};


const HeroCarousel = () => {
  const slides = useMemo(() => ([
    {
      // Cambuí Corporate - nova imagem enviada
      img: 'https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/np79oo4v_essa.jpg',
      alt: 'Cambuí Corporate - Campinas',
      phrase: {
        pre: 'Crédito com segurança e ',
        highlight: 'agilidade',
        post: ' para sua empresa',
      },
    },
    {
      // Interior Grupo B4 (ou similar)
      img: 'https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/a2u1hr44_image.png',
      alt: 'Recepção Grupo B4',
      phrase: {
        pre: 'Estruturação financeira que ',
        highlight: 'impulsiona',
        post: ' decisões',
      },
    },
    {
      // Cidade / fachada com tons quentes (fallback variado)
      img: 'https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=2000&q=85',
      alt: 'Reunião executiva formal em sala de conferência',
      phrase: {
        pre: 'Especialistas em viabilizar o seu ',
        highlight: 'próximo',
        post: ' passo',
      },
    },
  ]), []);

  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (hover) return;
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [index, hover, slides.length]);

  const go = (dir) => {
    setIndex((prev) => (prev + (dir === 'next' ? 1 : -1) + slides.length) % slides.length);
  };

  return (
    <section
      className="relative overflow-hidden h-[58vh] md:h-[62vh] lg:h-[64vh]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === index ? 'opacity-100' : 'opacity-0'}
            `}
            aria-hidden={i !== index}
          >
            <div className="w-full h-full relative">
              <img
                src={s.img}
                alt={s.alt}
                className={`w-full h-full object-cover ${i === index ? '' : ''}`}
                style={{ objectPosition: 'center' }}
              />
              {/* gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent hero-orange-overlay" />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="container-custom h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="hero-readable-shadow text-white text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              <span className="text-white">{slides[index].phrase.pre}</span>
              <span className="text-orange-500">{slides[index].phrase.highlight}</span>
              <span className="text-white">{slides[index].phrase.post}</span>
            </h1>
            <div className="flex gap-4">
              <Link to="/contato" className="b4-cta b4-cta--square group">
                <span className="b4-cta__text">Saiba mais</span>
                <span className="b4-cta__line" />
                <span className="b4-cta__square" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        aria-label="Anterior"
        onClick={() => go('prev')}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        aria-label="Próximo"
        onClick={() => go('next')}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0">
        <div className="container-custom">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={`dot-${i}`}
                onClick={() => setIndex(i)}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === index ? 'bg-white w-10' : 'bg-white/40 w-5 hover:bg-white/70'
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const services = [
    {
      title: 'Home Equity',
      description: 'Use seu imóvel como garantia e obtenha crédito com taxas baixas e prazos longos.',
      icon: (
        <div className="w-16 h-16 bg-white border-2 border-orange-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-600">
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
        <div className="w-16 h-16 bg-white border-2 border-orange-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-600">
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
        <div className="w-16 h-16 bg-white border-2 border-orange-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-600">
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
        <div className="w-16 h-16 bg-white border-2 border-orange-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-600">
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
        <div className="w-16 h-16 bg-white border-2 border-orange-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-600">
          <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        </div>
      ),
      path: '/servicos/consorcio'
    },
    {
      title: 'Câmbio',
      description: 'Operações cambiais e soluções para comércio exterior com taxas competitivas.',
      icon: (
        <div className="w-16 h-16 bg-white border-2 border-orange-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-600">
          <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </div>
      ),
      path: '/servicos/cambio'
    },
    {
      title: 'Capital de Investimento',
      description: 'Conectamos empresas inovadoras a investidores estratégicos e capital de risco.',
      icon: (
        <div className="w-16 h-16 bg-white border-2 border-orange-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-600">
          <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>
        </div>
      ),
      path: '/servicos/capital-investimento'
    }
  ];

  const stats = [
    { number: '1.500+', label: 'Empresas Atendidas' },
    { number: 'R$ 500M+', label: 'Em Recursos Captados' },
    { number: '15+', label: 'Anos de Experiência' },
    { number: '95%', label: 'Taxa de Aprovação' },
    { number: '150+', label: 'Soluções de Crédito' },
    { number: '50+', label: 'Instituições Parceiras' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Header-overlay hero (carousel) */}
      <HeroCarousel />

      {/* Quick Stats dinâmicas com hover para revelar texto + contador animado */}
      <section className="bg-white py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Grupo B4 */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Conheça o <span className="text-orange-500">Grupo B4</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A B4 Soluções Financeiras é parte do renomado Grupo B4, uma empresa consolidada no mercado 
                financeiro brasileiro. Nosso compromisso é conectar empresas e pessoas às melhores 
                oportunidades de captação de recursos, sempre com ética, agilidade e excelência.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">15+ Anos de Expertise</h3>
                    <p className="text-gray-600">Mais de uma década conectando clientes às melhores soluções financeiras do mercado.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">150+ Soluções de Crédito</h3>
                    <p className="text-gray-600">Amplo portfólio de produtos financeiros para atender todas as necessidades empresariais.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">50+ Instituições Parceiras</h3>
                    <p className="text-gray-600">Rede robusta de parcerias com os principais bancos e instituições financeiras.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://customer-assets.emergentagent.com/job_loanexperts/artifacts/zbmlmhkp_image.png" 
                alt="Escritório Grupo B4" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">R$ 500M+</div>
                  <div className="text-sm opacity-90">Recursos Captados</div>
                </div>
              </div>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                alt="Equipe B4" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
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

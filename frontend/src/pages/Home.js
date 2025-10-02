import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

// Componente de métrica removido conforme instrução (grid eliminado)

const HeroCarousel = () => {
  const slides = useMemo(() => ([
    {
      img: 'https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/zkqbmno5_Generated%20Image%20October%2002%2C%202025%20-%202_48AM.png',
      alt: 'Fachada com blur laranja',
      phrase: { pre: 'Crédito com segurança e ', highlight: 'agilidade', post: ' para sua empresa' },
    },
    {
      img: 'https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/6l04g3ky_Generated%20Image%20October%2002%2C%202025%20-%202_48AM.png',
      alt: 'Equipe com blur laranja',
      phrase: { pre: 'Estruturação financeira que ', highlight: 'impulsiona', post: ' decisões' },
    },
    {
      img: 'https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/54hj098q_Generated%20Image%20October%2002%2C%202025%20-%203_54AM%20%281%29.png',
      alt: 'Cambuí Corporate com filtro laranja',
      phrase: { pre: 'Especialistas em viabilizar o seu ', highlight: 'próximo', post: ' passo' },
    },
    {
      img: 'https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/d06ow8hl_Generated%20Image%20October%2002%2C%202025%20-%203_46AM%20%281%29.png',
      alt: 'Vista aérea Cambuí com overlay laranja',
      phrase: { pre: 'Capital inteligente para ', highlight: 'impulsionar', post: ' seus projetos' },
    },
  ]), []);

  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (hover) return;
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIndex((prev) => (prev + 1) % slides.length), 6000);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [index, hover, slides.length]);

  const go = (dir) => setIndex((prev) => (prev + (dir === 'next' ? 1 : -1) + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden h-[58vh] md:h-[62vh] lg:h-[64vh]" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`} aria-hidden={i !== index}>
            <div className="w-full h-full relative">
              <img src={s.img} alt={s.alt} className={`w-full h-full object-cover`} style={{ objectPosition: 'center' }} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/38 to-transparent hero-orange-overlay" />
            </div>
          </div>
        ))}
      </div>
      <div className="relative z-10 h-full">
        <div className="container-custom h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="hero-readable-shadow text-white text-3xl md:text-5xl font-extrabold leading-tight mb-3">
              <span className="text-white">{slides[index].phrase.pre}</span>
              <span className="text-[var(--b4-orange)]">{slides[index].phrase.highlight}</span>
              <span className="text-white">{slides[index].phrase.post}</span>
            </h1>
            <div className="flex gap-4">
              <Link to="/insights" className="cta-split">
                <span className="cta-left">Insights</span>
                <span className="cta-box">
                  <span className="cta-line" />
                  <span className="cta-square" />
                  <span className="cta-mais">Financeiros</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button aria-label="Anterior" onClick={() => go('prev')} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition"><ChevronLeft className="w-5 h-5" /></button>
      <button aria-label="Próximo" onClick={() => go('next')} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition"><ChevronRight className="w-5 h-5" /></button>
      <div className="absolute bottom-5 left-0 right-0">
        <div className="container-custom"><div className="flex items-center gap-2">{slides.map((_, i) => (<button key={`dot-${i}`} onClick={() => setIndex(i)} className={`h-[3px] rounded-full transition-all duration-300 ${i === index ? 'bg-white w-10' : 'bg-white/40 w-5 hover:bg-white/70'}`} aria-label={`Ir para slide ${i + 1}`} />))}</div></div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroCarousel />

      {/* Por que escolher a B4 Soluções Financeiras */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">B4 Soluções Financeiras</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="flex items-start"><CheckCircle className="h-6 w-6 text-[var(--b4-orange)] mt-1 mr-4 flex-shrink-0" /><p className="text-base">Experiência comprovada – Mais de 15 anos conectando clientes às melhores oportunidades de crédito.</p></div>
                <div className="flex items-start"><Users className="h-6 w-6 text-[var(--b4-orange)] mt-1 mr-4 flex-shrink-0" /><p className="text-base">Atendimento personalizado – Soluções sob medida e acompanhamento próximo.</p></div>
                <div className="flex items-start"><Target className="h-6 w-6 text-[var(--b4-orange)] mt-1 mr-4 flex-shrink-0" /><p className="text-base">Foco em resultados – Agilidade e eficiência para garantir a aprovação do crédito.</p></div>
              </div>
            </div>
            <div className="relative">
              <img src="https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/t3on1tap_freepik__expand__12081-1536x512.png.webp" alt="Equipe B4" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Conheça o Grupo B4 */}
      <section className="section-padding" style={{ backgroundColor: 'var(--b4-orange)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Conheça o Grupo B4</h2>
              <p className="text-white/95 mb-6">A B4 Soluções Financeiras é uma das principais empresas do Grupo B4, com atuação robusta em soluções de crédito e captação para empresas.</p>
              <ul className="text-white/95 space-y-2 list-disc pl-5">
                <li>Mais de uma década conectando clientes às melhores soluções financeiras do mercado.</li>
                <li>Amplo portfólio de produtos para atender diferentes perfis empresariais.</li>
                <li>Rede de parcerias com os principais bancos e instituições financeiras.</li>
                <li>Atuação em operações de crédito, fomento mercantil e fundos de investimento.</li>
                <li>Matriz em Campinas/SP – Av. Coronel Silva Teles, 1002.</li>
              </ul>
            </div>
            <div className="relative">
              <img src="https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/zbmlmhkp_image.png" alt="Grupo B4" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

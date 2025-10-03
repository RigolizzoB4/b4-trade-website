import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const slides = useMemo(() => ([
    { img: 'https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/zkqbmno5_Generated%20Image%20October%2002%2C%202025%20-%202_48AM.png', alt: 'Fachada com blur laranja', phrase: { pre: 'Crédito com segurança e ', highlight: 'agilidade', post: ' para sua empresa' }, pos: 'center' },
    { img: 'https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/6l04g3ky_Generated%20Image%20October%2002%2C%202025%20-%202_48AM.png', alt: 'Equipe com blur laranja', phrase: { pre: 'Estruturação financeira que ', highlight: 'impulsiona', post: ' decisões' }, pos: 'center top' },
    { img: 'https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/54hj098q_Generated%20Image%20October%2002%2C%202025%20-%203_54AM%20%281%29.png', alt: 'Cambuí Corporate com filtro laranja', phrase: { pre: 'Especialistas em viabilizar o seu ', highlight: 'próximo', post: ' passo' }, pos: 'center' },
    { img: 'https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/d06ow8hl_Generated%20Image%20October%2002%2C%202025%20-%203_46AM%20%281%29.png', alt: 'Vista aérea Cambuí com overlay laranja', phrase: { pre: 'Capital inteligente para ', highlight: 'impulsionar', post: ' seus projetos' }, pos: 'center' },
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

  return (
    <section className="relative overflow-hidden h-[calc(100vh-200px)]" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`} aria-hidden={i !== index}>
            <div className="w-full h-full relative">
              <img src={s.img} alt={s.alt} className={`w-full h-full object-cover`} style={{ objectPosition: s.pos }} />
              <div className="absolute inset-0 hero-orange-overlay" />
            </div>
          </div>
        ))}
      </div>
      <div className="relative z-10 h-full">
        <div className="container-custom h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="hero-readable-shadow text-white text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              <span className="text-white">{slides[index].phrase.pre}</span>
              <span className="text-[var(--b4-orange)]">{slides[index].phrase.highlight}</span>
              <span className="text-white">{slides[index].phrase.post}</span>
            </h1>
            {/* CTA todo branco, sem linha, mais comprido e fino */}
            <div className="flex gap-4">
              <a href="/insights" className="cta-split" onMouseEnter={(e)=>{const a=e.currentTarget;setTimeout(()=>{window.location.href='/insights'},1600);}}>
                <span className="cta-left">Insights</span>
                <span className="cta-box">
                  <span className="cta-square" />
                  <span className="cta-mais">Financeiros</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Removidos botões laterais do hero e também os dots */}
    </section>
  );
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroCarousel />

      {/* Por que escolher a B4 Soluções Financeiras */}
      <section className="section-padding section-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-[#333]">B4</span> <span className="text-[var(--b4-orange)]">Soluções Financeiras</span>
              </h2>
              <div className="space-y-6 text-[#444] leading-relaxed">
                <div className="flex items-start"><CheckCircle className="h-6 w-6 text-[var(--b4-orange)] mt-1 mr-4 flex-shrink-0" /><p className="text-base">Experiência comprovada – Mais de 15 anos conectando clientes às melhores oportunidades de crédito.</p></div>
                <div className="flex items-start"><Users className="h-6 w-6 text-[var(--b4-orange)] mt-1 mr-4 flex-shrink-0" /><p className="text-base">Atendimento personalizado – Soluções sob medida e acompanhamento próximo.</p></div>
                <div className="flex items-start"><Target className="h-6 w-6 text-[var(--b4-orange)] mt-1 mr-4 flex-shrink-0" /><p className="text-base">Foco em resultados – Agilidade e eficiência para garantir a aprovação do crédito.</p></div>
              </div>
            </div>
            <div className="relative h-full">
              <img src="https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/t3on1tap_freepik__expand__12081-1536x512.png.webp" alt="Equipe B4" className="rounded-2xl shadow-2xl w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Conheça o Grupo B4 */}
      <section className="section-padding section-orange">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-white">Conheça o Grupo</span> <span className="px-2 rounded-md bg-white/15 text-white">B4</span>
              </h2>
              <p className="text-white/95 mb-5 text-lg">A B4 Soluções Financeiras é uma das principais empresas do Grupo B4, com atuação robusta em soluções de crédito e captação para empresas.</p>
              <ul className="text-white/95 space-y-2 text-base">
                <li>• Mais de uma década conectando clientes às melhores soluções financeiras do mercado.</li>
                <li>• Amplo portfólio de produtos para atender diferentes perfis empresariais.</li>
                <li>• Rede de parcerias com os principais bancos e instituições financeiras.</li>
                <li>• Atuação em operações de crédito, fomento mercantil e fundos de investimento.</li>
                <li>• Matriz em Campinas/SP – Av. Coronel Silva Teles, 1002.</li>
              </ul>
            </div>
            <div className="relative h-full">
              <img src="https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/cfpnf5sv_frente%20vista%20de%20lado.png" alt="Grupo B4" className="rounded-2xl shadow-2xl w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

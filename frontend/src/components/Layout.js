import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Home Equity', path: '/servicos/home-equity' },
    { name: 'Capital de Giro', path: '/servicos/capital-giro' },
    { name: 'FINEP', path: '/servicos/finep' },
    { name: 'BNDES', path: '/servicos/bndes' },
    { name: 'Consórcio', path: '/servicos/consorcio' },
    { name: 'Câmbio', path: '/servicos/cambio' },
    { name: 'Capital de Investimento', path: '/servicos/capital-investimento' },
  ];

  const isActivePath = (path) => location.pathname === path;
  const isActiveService = () => services.some(service => location.pathname === service.path);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const headerSolid = true;
  const linkBase = 'text-gray-700 hover:text-[var(--b4-orange)]';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 bg-white shadow-md`}>
        <div className="container-custom relative">
          <div className="flex items-center justify-between h-[120px]">
            {/* Esquerda: Logo (sem fundo) em chip branco arredondado */}
            <div className="bg-white rounded-xl px-3 py-2">
              <Link to="/" className="flex items-center">
                <img
                  src="https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/rpuemvp7_logo%20sem%20fundo.png"
                  alt="B4 Soluções Financeiras"
                  className="h-[90px] w-auto"
                />
              </Link>
            </div>

            {/* Centro: Navegação (chip branco) */}
            <div className="hidden lg:flex flex-1 justify-center">
              <nav className="bg-white rounded-full px-6 py-3 flex items-center space-x-6 shadow-sm">
                <Link to="/" className={`${linkBase} text-[14px] font-semibold tracking-wide ${isActivePath('/') ? 'nav-link-active' : ''}`}>Início</Link>
                <Link to="/quem-somos" className={`${linkBase} text-[14px] font-semibold tracking-wide ${isActivePath('/quem-somos') ? 'nav-link-active' : ''}`}>Quem Somos</Link>
                <div className="relative"
                     onMouseEnter={() => { clearTimeout(closeTimerRef.current); setIsServicesOpen(true); }}
                     onMouseLeave={() => { closeTimerRef.current = setTimeout(() => setIsServicesOpen(false), 250); }}>
                  <button onClick={() => setIsServicesOpen((v) => !v)} className={`flex items-center ${linkBase} text-[14px] font-semibold tracking-wide ${isActiveService() ? 'nav-link-active' : ''}`}>
                    Serviços <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isServicesOpen && (
                    <div onMouseEnter={() => { clearTimeout(closeTimerRef.current); setIsServicesOpen(true); }}
                         onMouseLeave={() => { closeTimerRef.current = setTimeout(() => setIsServicesOpen(false), 250); }}
                         className="absolute top-full left-0 mt-2 w-64 dropdown-menu shadow-xl">
                      <div className="py-2">
                        {services.map((service) => (
                          <Link key={service.path} to={service.path} onClick={() => setIsServicesOpen(false)} className={`block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[var(--b4-orange)] ${isActivePath(service.path) ? 'bg-orange-50 text-[var(--b4-orange)]' : ''}`}>
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/contato" className={`${linkBase} text-[14px] font-semibold tracking-wide ${isActivePath('/contato') ? 'nav-link-active' : ''}`}>Contato</Link>
              </nav>
            </div>

            {/* Direita: Ícones sociais (4 ícones), cor da marca, animação sutil */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:grid grid-cols-2 gap-3 bg-white rounded-xl px-4 py-3 text-[var(--b4-orange)] shadow-sm">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-transform hover:-translate-y-0.5"><Instagram size={18} /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-transform hover:-translate-y-0.5"><Linkedin size={18} /></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter" className="transition-transform hover:-translate-y-0.5"><Twitter size={18} /></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-transform hover:-translate-y-0.5"><Facebook size={18} /></a>
              </div>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`lg:hidden p-2 rounded-md ${headerSolid ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-[120px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <img src="https://customer-assets.emergentagent.com/job_finance-solutions-1/artifacts/rpuemvp7_logo%20sem%20fundo.png" alt="B4 Soluções Financeiras" className="h-12 w-auto mb-4 filter brightness-0 invert" />
              <p className="text-gray-300 mb-4 max-w-md">A B4 Soluções Financeiras conecta empresas e pessoas às melhores oportunidades de captação de recursos, com ética e excelência em todas as etapas.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.path}><Link to={service.path} className="text-gray-300 hover:text-[var(--b4-orange)] transition-colors">{service.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center"><Mail className="h-5 w-5 text-[var(--b4-orange)] mr-3" /><p className="text-gray-300">financeiras@b4com.br</p></div>
                <div className="flex items-center"><Phone className="h-5 w-5 text-[var(--b4-orange)] mr-3" /><p className="text-gray-300">(19) 3751-4300</p></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 B4 Soluções Financeiras. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

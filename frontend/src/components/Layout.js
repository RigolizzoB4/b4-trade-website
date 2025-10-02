import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
  const isHome = location.pathname === '/';

  useEffect(() => {
    // Mantemos o listener para futura evolução, mas a decisão agora é header sempre sólido
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const headerSolid = true; // cabeçalho sempre sólido como no Loara
  const linkBase = 'text-gray-700 hover:text-orange-500';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-colors duration-300 ${headerSolid ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo com cartão retangular branco e borda laranja, multicolor sempre */}
            <Link to="/" className="relative flex items-center">
              {/* Espaço de reserva para não deslocar o menu */}
              <div className="h-16 w-[180px] md:w-[220px]" aria-hidden="true" />
              {/* Cartão/Logo sobreposto ao herói */}
              <div className="absolute -left-4 md:-left-6 -bottom-10 md:-bottom-12 bg-white border border-orange-500 rounded-2xl shadow-2xl px-3 py-2 md:px-4 md:py-3">
                <img 
                  src="https://customer-assets.emergentagent.com/job_loanexperts/artifacts/fskgr5np_IMG-20251001-WA0003-removebg-preview.png" 
                  alt="B4 Soluções Financeiras" 
                  className="logo-img h-[110px] md:h-[150px] w-auto"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`${linkBase} font-medium transition-colors ${
                  isActivePath('/') ? (headerSolid ? 'nav-link-active' : 'text-orange-300') : ''
                }`}
              >
                Início
              </Link>
              
              <Link 
                to="/quem-somos" 
                className={`${linkBase} font-medium transition-colors ${
                  isActivePath('/quem-somos') ? 'nav-link-active' : ''
                }`}
              >
                Quem Somos
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className={`flex items-center ${linkBase} font-medium transition-colors ${
                    isActiveService() ? (headerSolid ? 'nav-link-active' : 'text-orange-300') : ''
                  }`}
                >
                  Serviços <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isServicesOpen && (
                  <div 
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-1 w-56 dropdown-menu"
                  >
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className={`block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors ${
                            isActivePath(service.path) ? 'bg-orange-50 text-orange-500' : ''
                          }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                to="/contato" 
                className={`${linkBase} font-medium transition-colors ${
                  isActivePath('/contato') ? 'nav-link-active' : ''
                }`}
              >
                Contato
              </Link>

              {/* Header CTA removed per preference (clean header) */}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-md ${headerSolid ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`lg:hidden ${headerSolid ? 'bg-white' : 'bg-gray-900/80 backdrop-blur'} border-t` }>
              <div className="py-4 space-y-2">
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:text-orange-500"
                >
                  Início
                </Link>
                <Link 
                  to="/quem-somos" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:text-orange-500"
                >
                  Quem Somos
                </Link>
                
                <div className="px-4 py-2">
                  <div className="font-medium text-gray-900 mb-2">Serviços</div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block pl-4 py-1 text-gray-600 hover:text-orange-500"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                
                <Link 
                  to="/contato" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:text-orange-500"
                >
                  Contato
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <img 
                src="https://customer-assets.emergentagent.com/job_1d5e8eee-15ec-4b1f-8a8f-6bd463b708d6/artifacts/691cf10y_image.png" 
                alt="B4 Soluções Financeiras" 
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-300 mb-4 max-w-md">
                A B4 Soluções Financeiras conecta empresas e pessoas às melhores 
                oportunidades de captação de recursos, com ética e excelência em todas as etapas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-white font-bold">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-white font-bold">ig</span>
                </a>
              </div>
            </div>

            {/* Serviços */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link 
                      to={service.path} 
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-500 mr-3" />
                  <div>
                    <p className="text-gray-300">(19) 99708-6955</p>
                    <p className="text-gray-400 text-sm">Pilla</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-500 mr-3" />
                  <div>
                    <p className="text-gray-300">(19) 98812-3070</p>
                    <p className="text-gray-400 text-sm">Anselmo</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-500 mr-3" />
                  <p className="text-gray-300">contato@b4solucoes.com.br</p>
                </div>
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
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Home Equity', path: '/servicos/home-equity' },
    { name: 'Capital de Giro', path: '/servicos/capital-giro' },
    { name: 'FINEP', path: '/servicos/finep' },
    { name: 'BNDES', path: '/servicos/bndes' },
    { name: 'Consórcio', path: '/servicos/consorcio' },
  ];

  const isActivePath = (path) => location.pathname === path;
  const isActiveService = () => services.some(service => location.pathname === service.path);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_loanexperts/artifacts/fskgr5np_IMG-20251001-WA0003-removebg-preview.png" 
                alt="B4 Soluções Financeiras" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-gray-700 hover:text-orange-500 font-medium transition-colors ${
                  isActivePath('/') ? 'nav-link-active' : ''
                }`}
              >
                Início
              </Link>
              
              <Link 
                to="/quem-somos" 
                className={`text-gray-700 hover:text-orange-500 font-medium transition-colors ${
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
                  className={`flex items-center text-gray-700 hover:text-orange-500 font-medium transition-colors ${
                    isActiveService() ? 'nav-link-active' : ''
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
                className={`text-gray-700 hover:text-orange-500 font-medium transition-colors ${
                  isActivePath('/contato') ? 'nav-link-active' : ''
                }`}
              >
                Contato
              </Link>

              {/* CTA Button */}
              <Link 
                to="/contato" 
                className="btn-orange px-6 py-3 rounded-lg font-semibold"
              >
                Fale Conosco
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t">
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
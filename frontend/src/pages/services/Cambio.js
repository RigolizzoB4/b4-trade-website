import React from 'react';
import { CheckCircle, Globe, TrendingUp, Clock, Shield, ArrowRight, Phone, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cambio = () => {
  const tiposCambio = [
    {
      titulo: 'ACC - Antecipação de Contrato de Câmbio',
      descricao: 'Antecipação de recursos em reais sobre contratos de exportação.',
      prazo: 'Até 360 dias',
      finalidade: 'Exportação de bens e serviços'
    },
    {
      titulo: 'ACE - Antecipação de Cambiais Entregues',
      descricao: 'Financiamento sobre cambiais já entregues ao banco.',
      prazo: 'Até 180 dias',
      finalidade: 'Fluxo de caixa pós-exportação'
    },
    {
      titulo: 'PPE - Pagamento Parcelado de Exportação',
      descricao: 'Facilitação de pagamentos a prazo para exportadores.',
      prazo: 'Até 24 meses',
      finalidade: 'Vendas a prazo no exterior'
    },
    {
      titulo: 'FINIMIP - Financiamento às Importações',
      descricao: 'Linha para financiar importações de bens e equipamentos.',
      prazo: 'Até 36 meses',
      finalidade: 'Importação de máquinas e equipamentos'
    }
  ];

  const produtosHedge = [
    {
      nome: 'Hedge Cambial',
      descricao: 'Proteção contra variações cambiais desfavoráveis',
      vantagem: 'Previsibilidade de custos'
    },
    {
      nome: 'Trava de Câmbio',
      descricao: 'Fixação de taxa de câmbio para operações futuras',
      vantagem: 'Eliminação do risco cambial'
    },
    {
      nome: 'Swap Cambial',
      descricao: 'Troca de indexadores para adequação de fluxo',
      vantagem: 'Flexibilidade financeira'
    }
  ];

  const vantagens = [
    'Taxas competitivas para operações de câmbio',
    'Assessoria especializada em comércio exterior',
    'Processos ágeis e documentação simplificada',
    'Proteção contra riscos cambiais',
    'Melhoria do fluxo de caixa em moeda estrangeira',
    'Acesso a mercados internacionais',
    'Suporte completo em operações de exportação/importação'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section py-20 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.6), rgba(107, 114, 128, 0.6)), url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Globe className="h-5 w-5 mr-2" />
              <span className="text-white/90 text-sm font-medium">Operações Internacionais</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-orange-500">Câmbio</span> e Comércio Exterior
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Soluções completas para suas operações de câmbio, exportação e importação com segurança e competitividade.
            </p>
            
            <Link 
              to="/contato" 
              className="btn-orange inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg"
            >
              Consulte Nossas Taxas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tipos de Operações Cambiais */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Operações <span className="text-orange-500">Cambiais</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos as principais modalidades de financiamento em câmbio para apoiar suas operações de comércio exterior.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tiposCambio.map((tipo, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {tipo.titulo}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {tipo.descricao}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-orange-500 mr-2" />
                    <span className="font-medium">Prazo: {tipo.prazo}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-orange-500 mr-2" />
                    <span className="font-medium">Finalidade: {tipo.finalidade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos de Hedge */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proteção <span className="text-orange-500">Cambial</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Produtos de hedge para proteger sua empresa das oscilações do câmbio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {produtosHedge.map((produto, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {produto.nome}
                </h3>
                <p className="text-gray-600 mb-4">
                  {produto.descricao}
                </p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <span className="text-orange-700 font-medium text-sm">
                    {produto.vantagem}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">Vantagens</span> das Operações Cambiais
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Descubra por que a B4 é a melhor escolha para suas operações de câmbio e comércio exterior.
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
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3" 
                alt="Operações cambiais" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <DollarSign className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Taxas</div>
                  <div className="font-bold text-gray-900">Competitivas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Expanda seus negócios internacionalmente
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Entre em contato conosco e descubra como nossas soluções cambiais podem impulsionar 
                suas operações de comércio exterior.
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
                <Globe className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Câmbio Competitivo</h3>
                <p className="text-white/90 mb-4">Para todas suas operações</p>
                <div className="text-4xl font-bold">24h</div>
                <div className="text-white/80 text-sm mt-2">Suporte especializado</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cambio;
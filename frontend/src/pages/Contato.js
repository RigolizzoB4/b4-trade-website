import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/contato`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          mensagem: ''
        });
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente ou entre em contato pelos nossos telefones.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contatos = [
    {
      icon: <Phone className="h-8 w-8 text-orange-500" />,
      title: 'Telefone - Pilla',
      info: '(19) 99708-6955',
      action: 'tel:+5519997086955'
    },
    {
      icon: <Phone className="h-8 w-8 text-orange-500" />,
      title: 'Telefone - Anselmo', 
      info: '(19) 98812-3070',
      action: 'tel:+5519988123070'
    },
    {
      icon: <Mail className="h-8 w-8 text-orange-500" />,
      title: 'E-mail',
      info: 'contato@b4solucoes.com.br',
      action: 'mailto:contato@b4solucoes.com.br'
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-orange-500" />,
      title: 'WhatsApp',
      info: 'Fale conosco pelo WhatsApp',
      action: 'https://wa.me/5519997086955'
    }
  ];

  const horarioFuncionamento = [
    { dia: 'Segunda a Sexta', horario: '08:00 às 18:00' },
    { dia: 'Sábado', horario: '08:00 às 12:00' },
    { dia: 'Domingo', horario: 'Fechado' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section py-20 relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(31, 41, 55, 0.8), rgba(107, 114, 128, 0.8)), url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtb2Rlcm58ZW58MHx8fHwxNzU5MzUwNDMxfDA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Mail className="h-5 w-5 mr-2" />
              <span className="text-white/90 text-sm font-medium">Fale Conosco</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Entre em <span className="text-orange-500">Contato</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Nos envie suas dúvidas – estamos prontos para lhe atender.
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-orange-500">Contatos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entre em contato conosco através dos canais abaixo. Estamos sempre prontos para ajudar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contatos.map((contato, index) => (
              <a
                key={index}
                href={contato.action}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="mb-4 flex justify-center">
                  {contato.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {contato.title}
                </h3>
                <p className="text-gray-600">
                  {contato.info}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Formulário */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Envie sua <span className="text-orange-500">Mensagem</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={6}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder="Conte-nos como podemos ajudá-lo..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-orange px-8 py-4 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                  ) : (
                    <Send className="mr-3 h-6 w-6" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
            
            {/* Imagem e Informações Adicionais */}
            <div>
              <div className="relative mb-8">
                <img 
                  src="https://customer-assets.emergentagent.com/job_loanexperts/artifacts/upc0zjuv_image.png" 
                  alt="Atendimento B4" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center">
                    <CheckCircle className="h-8 w-8 text-orange-500 mr-3" />
                    <div>
                      <div className="font-bold text-gray-900">Resposta em 24h</div>
                      <div className="text-sm text-gray-600">Garantida</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Horário de Funcionamento */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Horário de Funcionamento</h3>
                </div>
                
                <div className="space-y-3">
                  {horarioFuncionamento.map((horario, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-gray-700">{horario.dia}</span>
                      <span className="text-gray-600">{horario.horario}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-custom text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl font-bold mb-4">
            Precisa de atendimento imediato?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Fale conosco pelo WhatsApp e receba atendimento personalizado agora mesmo.
          </p>
          <a 
            href="https://wa.me/5519997086955?text=Olá! Gostaria de saber mais sobre as soluções financeiras da B4."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Chamar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contato;
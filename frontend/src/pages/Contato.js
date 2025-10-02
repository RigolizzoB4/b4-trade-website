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
      icon: <Mail className="h-8 w-8 text-[var(--b4-orange)]" />,
      title: 'E-mail',
      info: 'solucoes.financeiras@b4.com.br',
      action: 'mailto:solucoes.financeiras@b4.com.br'
    },
    {
      icon: <Phone className="h-8 w-8 text-[var(--b4-orange)]" />,
      title: 'Telefone', 
      info: '(19) 3751-4300',
      action: 'tel:+551937514300'
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

      {/* Informações e Mapa (sem formulário) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Mapa Google (metade) */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Onde estamos</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  title="Mapa B4"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Av.%20Coronel%20Silva%20Teles%2C%201002%20-%20Cambu%C3%AD%2C%20Campinas%20-%20SP&output=embed"
                />
              </div>
            </div>

            {/* Informações */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Fale com a B4 Soluções Financeiras</h2>
              <div className="space-y-6">
                <div className="flex items-center"><Mail className="h-6 w-6 text-[var(--b4-orange)] mr-3" /><span className="text-gray-700">solucoes.financeiras@b4.com.br</span></div>
                <div className="flex items-center"><Phone className="h-6 w-6 text-[var(--b4-orange)] mr-3" /><span className="text-gray-700">(19) 3751-4300</span></div>
                <p className="text-gray-600">Av. Coronel Silva Teles, 1002 — Cambuí, Campinas/SP</p>
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
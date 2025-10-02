import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contato = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* Título simples */}
      <section className="py-14 bg-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold" style={{color:'#333'}}>Contato</h1>
          <p className="text-lg" style={{color:'#666'}}>Estamos à disposição para atender você.</p>
        </div>
      </section>

      {/* Informações e Mapa (sem formulário) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Mapa Google (metade) */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Onde estamos</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  title="Mapa B4"
                  width="100%"
                  height="420"
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Fale com a B4 Soluções Financeiras</h2>
              <div className="space-y-6">
                <div className="flex items-center"><Mail className="h-6 w-6 text-[var(--b4-orange)] mr-3" /><span className="text-gray-700">solucoes.financeiras@b4.com.br</span></div>
                <div className="flex items-center"><Phone className="h-6 w-6 text-[var(--b4-orange)] mr-3" /><span className="text-gray-700">(19) 3751-4300</span></div>
                <p className="text-gray-600">Av. Coronel Silva Teles, 1002 — Cambuí, Campinas/SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;

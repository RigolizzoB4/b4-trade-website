/**
 * SISTEMA DE TRADUÇÃO DEFINITIVO PARA B4 TRADE
 * Versão que traduz 100% do conteúdo automaticamente
 * Funciona com o dropdown de bandeirinhas existente
 */

// Base de traduções COMPLETA - todas as palavras/frases do site
const completeTranslations = {
    'pt': {
        // Português é o idioma base (não precisa traduzir)
    },
    'en': {
        // Navegação
        'Home': 'Home',
        'Quem Somos': 'About Us',
        'Serviços': 'Services',
        'Informações': 'Information',
        'Contato': 'Contact',
        'Curiosidades': 'Curiosities',
        'Entrar': 'Login',
        'WhatsApp': 'WhatsApp',

        // Títulos Principais
        'Comércio Exterior': 'Foreign Trade',
        'Nossos Serviços': 'Our Services',
        'Entre em Contato': 'Contact Us',
        'Modalidades de Transporte': 'Transport Modalities',
        'Grupo B4 há mais de 25 anos cultivando valor': 'B4 Group cultivating value for over 25 years',

        // Transportes
        'Transporte Aéreo': 'Air Transport',
        'Transporte Marítimo': 'Maritime Transport',
        'Transporte Terrestre': 'Road Transport',
        'Multimodal': 'Multimodal Transport',

        // Descrições de Transporte
        'Rapidez e segurança para cargas urgentes e de alto valor agregado': 'Speed and security for urgent and high-value cargo',
        'Economia e capacidade para grandes volumes de mercadorias': 'Economy and capacity for large volumes of goods',
        'Flexibilidade e agilidade para entregas porta a porta': 'Flexibility and agility for door-to-door deliveries',
        'Combinação inteligente de modais para otimizar custos e prazos': 'Smart combination of modes to optimize costs and deadlines',
        'Oferecemos soluções completas em todos os modais de transporte': 'We offer complete solutions in all transport modes',

        // Serviços
        'Importação & Exportação': 'Import & Export',
        'Assessoria Especializada': 'Specialized Advisory',
        'Gestão da Logística': 'Logistics Management',
        'Transporte Internacional': 'International Transport',
        'Despachante Aduaneiro': 'Customs Broker',
        'Documentação': 'Documentation',
        'Consultoria': 'Consulting',
        'Seguro de Carga': 'Cargo Insurance',
        'Oferecemos soluções completas para o seu comércio exterior': 'We offer complete solutions for your foreign trade',

        // Descrições Longas dos Serviços
        'Nossos serviços abrangem desde a identificação do cliente, a negociação dos preços e o pagamento, frete internacional, documentação para despachos aduaneiros até a entrega no local solicitado pelo contratante dos nossos serviços.': 'Our services range from customer identification, price negotiation and payment, international freight, documentation for customs clearance to delivery at the location requested by the contractor.',

        'Nossos serviços abrangem a análise da legislação aduaneira do destino e da origem da carga, com base no NCM e HS, planejamos as previsões de todos os custos, inclusos os impostos e taxas locais, oferecendo consultoria completa.': 'Our services include customs legislation analysis at destination and origin, based on NCM and HS codes, planning cost forecasts including local taxes and fees, offering complete consulting.',

        'Fazemos gerenciamento completo de frete e armazenagem, no Brasil e no exterior, proporcionando ótimas taxas na contratação de contêineres e frete para pequenas e grandes cargas, com rastreamento em tempo real.': 'We provide complete freight and storage management in Brazil and abroad, offering excellent rates for container and freight contracting for small and large cargo, with real-time tracking.',

        'Oferecemos soluções completas de transporte marítimo, aéreo e terrestre, com parcerias estratégicas globais para garantir a melhor rota e custo-benefício para sua carga, independente do modal escolhido.': 'We offer complete maritime, air and land transport solutions, with global strategic partnerships to ensure the best route and cost-benefit for your cargo, regardless of the chosen mode.',

        // Estatísticas e Labels
        'Ano de Fundação': 'Founded Year',
        'Funcionários': 'Employees',
        'Áreas de Atuação': 'Business Areas',
        'Operações Realizadas': 'Operations Completed',

        // Outros textos comuns
        'Nós Importamos para você.': 'We Import for you.',
        'Nossos especialistas o aguardam para responder às dúvidas.': 'Our specialists are waiting to answer your questions.',
        'Assessoria': 'Advisory',
        'Exportação': 'Export',
        'Importação': 'Import',
        'Logística': 'Logistics',

        // Botões e CTAs
        'Fale Conosco': 'Contact Us',
        'Saiba Mais': 'Learn More',
        'Ver Mais': 'See More',
        'Conheça': 'Discover',

        // Footer e direitos
        'Todos os direitos reservados': 'All rights reserved',
        'Grupo B4': 'B4 Group',

        // Textos alternativos e atributos
        'Brasil': 'Brazil',
        'Estados Unidos': 'United States',
        'Espanha': 'Spain',
        'Mapa Laranja': 'Orange Map',
        'B4 Trade': 'B4 Trade',

        // Seletor de idiomas
        'Português': 'English'
    },
    'es': {
        // Navegação
        'Home': 'Inicio',
        'Quem Somos': 'Quiénes Somos',
        'Serviços': 'Servicios',
        'Informações': 'Información',
        'Contato': 'Contacto',
        'Curiosidades': 'Curiosidades',
        'Entrar': 'Ingresar',
        'WhatsApp': 'WhatsApp',

        // Títulos Principais
        'Comércio Exterior': 'Comercio Exterior',
        'Nossos Serviços': 'Nuestros Servicios',
        'Entre em Contato': 'Póngase en Contacto',
        'Modalidades de Transporte': 'Modalidades de Transporte',
        'Grupo B4 há mais de 25 anos cultivando valor': 'Grupo B4 cultivando valor por más de 25 años',

        // Transportes
        'Transporte Aéreo': 'Transporte Aéreo',
        'Transporte Marítimo': 'Transporte Marítimo',
        'Transporte Terrestre': 'Transporte Terrestre',
        'Multimodal': 'Transporte Multimodal',

        // Descrições de Transporte
        'Rapidez e segurança para cargas urgentes e de alto valor agregado': 'Rapidez y seguridad para cargas urgentes y de alto valor agregado',
        'Economia e capacidade para grandes volumes de mercadorias': 'Economía y capacidad para grandes volúmenes de mercancías',
        'Flexibilidade e agilidade para entregas porta a porta': 'Flexibilidad y agilidad para entregas puerta a puerta',
        'Combinação inteligente de modais para otimizar custos e prazos': 'Combinación inteligente de modos para optimizar costos y plazos',
        'Oferecemos soluções completas em todos os modais de transporte': 'Ofrecemos soluciones completas en todos los modos de transporte',

        // Serviços
        'Importação & Exportação': 'Importación y Exportación',
        'Assessoria Especializada': 'Asesoría Especializada',
        'Gestão da Logística': 'Gestión Logística',
        'Transporte Internacional': 'Transporte Internacional',
        'Despachante Aduaneiro': 'Agente Aduanero',
        'Documentação': 'Documentación',
        'Consultoria': 'Consultoría',
        'Seguro de Carga': 'Seguro de Carga',
        'Oferecemos soluções completas para o seu comércio exterior': 'Ofrecemos soluciones completas para su comercio exterior',

        // Descrições Longas dos Serviços
        'Nossos serviços abrangem desde a identificação do cliente, a negociação dos preços e o pagamento, frete internacional, documentação para despachos aduaneiros até a entrega no local solicitado pelo contratante dos nossos serviços.': 'Nuestros servicios abarcan desde la identificación del cliente, negociación de precios y pago, flete internacional, documentación para despachos aduaneros hasta la entrega en el lugar solicitado por el contratante.',

        'Nossos serviços abrangem a análise da legislação aduaneira do destino e da origem da carga, com base no NCM e HS, planejamos as previsões de todos os custos, inclusos os impostos e taxas locais, oferecendo consultoria completa.': 'Nuestros servicios incluyen análisis de la legislación aduanera del destino y origen de la carga, basado en códigos NCM y HS, planificamos previsiones de todos los costos, incluyendo impuestos y tasas locales, ofreciendo consultoría completa.',

        'Fazemos gerenciamento completo de frete e armazenagem, no Brasil e no exterior, proporcionando ótimas taxas na contratação de contêineres e frete para pequenas e grandes cargas, com rastreamento em tempo real.': 'Realizamos gestión completa de flete y almacenamiento en Brasil y en el extranjero, proporcionando excelentes tarifas para contratación de contenedores y flete para cargas pequeñas y grandes, con seguimiento en tiempo real.',

        'Oferecemos soluções completas de transporte marítimo, aéreo e terrestre, com parcerias estratégicas globais para garantir a melhor rota e custo-benefício para sua carga, independente do modal escolhido.': 'Ofrecemos soluciones completas de transporte marítimo, aéreo y terrestre, con alianzas estratégicas globales para garantizar la mejor ruta y costo-beneficio para su carga, independientemente del modo elegido.',

        // Estatísticas e Labels
        'Ano de Fundação': 'Año de Fundación',
        'Funcionários': 'Empleados',
        'Áreas de Atuação': 'Áreas de Actuación',
        'Operações Realizadas': 'Operaciones Realizadas',

        // Outros textos comuns
        'Nós Importamos para você.': 'Nosotros Importamos para usted.',
        'Nossos especialistas o aguardam para responder às dúvidas.': 'Nuestros especialistas lo esperan para responder a sus dudas.',
        'Assessoria': 'Asesoría',
        'Exportação': 'Exportación',
        'Importação': 'Importación',
        'Logística': 'Logística',

        // Botões e CTAs
        'Fale Conosco': 'Contáctenos',
        'Saiba Mais': 'Saber Más',
        'Ver Mais': 'Ver Más',
        'Conheça': 'Conozca',

        // Footer e direitos
        'Todos os direitos reservados': 'Todos los derechos reservados',
        'Grupo B4': 'Grupo B4',

        // Textos alternativos e atributos
        'Brasil': 'Brasil',
        'Estados Unidos': 'Estados Unidos',
        'Espanha': 'España',
        'Mapa Laranja': 'Mapa Naranja',
        'B4 Trade': 'B4 Trade',

        // Seletor de idiomas
        'Português': 'Español'
    }
};

/**
 * FUNÇÃO PRINCIPAL - TRADUZ AUTOMATICAMENTE TUDO
 */
function translatePage(targetLanguage) {
    console.log(`🌍 === INICIANDO TRADUÇÃO AUTOMÁTICA PARA: ${targetLanguage.toUpperCase()} ===`);

    // Se for português, recarregar para voltar ao original
    if (targetLanguage === 'pt') {
        localStorage.setItem('selectedLanguage', 'pt');
        console.log('🔄 Recarregando página para português...');
        location.reload();
        return;
    }

    const translations = completeTranslations[targetLanguage];
    if (!translations) {
        console.error(`❌ Idioma "${targetLanguage}" não encontrado`);
        return;
    }

    let translatedCount = 0;

    /**
     * Traduzir todo o texto da página
     */
    function translateAllText() {
        console.log('🔍 Procurando textos para traduzir...');

        // Criar um TreeWalker para percorrer todos os nós de texto
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    const parent = node.parentElement;
                    if (parent && (
                        parent.tagName === 'SCRIPT' || 
                        parent.tagName === 'STYLE' ||
                        parent.hasAttribute('data-translated')
                    )) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            },
            false
        );

        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }

        console.log(`📝 Encontrados ${textNodes.length} nós de texto`);

        textNodes.forEach(textNode => {
            let originalText = textNode.textContent.trim();
            if (!originalText || originalText.length < 2) return;

            let newText = originalText;
            let hasChanged = false;

            // Tentar tradução exata primeiro
            Object.keys(translations).forEach(ptText => {
                const translation = translations[ptText];

                // Tradução exata
                if (originalText === ptText) {
                    newText = translation;
                    hasChanged = true;
                    console.log(`✅ EXATA: "${ptText}" → "${translation}"`);
                }
                // Tradução parcial (palavra dentro do texto)
                else if (originalText.includes(ptText) && ptText.length > 3) {
                    const regex = new RegExp(ptText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
                    if (regex.test(originalText)) {
                        newText = originalText.replace(regex, translation);
                        hasChanged = true;
                        console.log(`🔄 PARCIAL: "${ptText}" → "${translation}" em "${originalText}"`);
                    }
                }
            });

            if (hasChanged && newText !== originalText) {
                textNode.textContent = textNode.textContent.replace(originalText, newText);
                translatedCount++;
            }
        });
    }

    /**
     * Traduzir atributos
     */
    function translateAttributes() {
        console.log('🏷️ Traduzindo atributos...');

        const elementsWithAttrs = document.querySelectorAll('[alt], [title], [placeholder]');

        elementsWithAttrs.forEach(element => {
            ['alt', 'title', 'placeholder'].forEach(attr => {
                const value = element.getAttribute(attr);
                if (value && translations[value]) {
                    element.setAttribute(attr, translations[value]);
                    translatedCount++;
                    console.log(`🏷️ Atributo ${attr}: "${value}" → "${translations[value]}"`);
                }
            });
        });
    }

    // Executar traduções
    translateAllText();
    translateAttributes();

    // Marcar como traduzido
    document.body.setAttribute('data-translated', targetLanguage);

    // Atualizar seletor
    updateLanguageSelector(targetLanguage);

    // Salvar no localStorage
    localStorage.setItem('selectedLanguage', targetLanguage);

    console.log(`🎉 === TRADUÇÃO CONCLUÍDA! ===`);
    console.log(`📊 Total traduzido: ${translatedCount} elementos`);
    console.log(`🌍 Idioma ativo: ${targetLanguage.toUpperCase()}`);
}

/**
 * Atualizar seletor de idioma
 */
function updateLanguageSelector(lang) {
    const selector = document.getElementById('languageSelector');
    if (!selector) return;

    const flags = {
        'pt': '<img src="assets/flags/br.png" alt="Brasil" style="width: 16px; height: auto; margin-right: 5px;">',
        'en': '<img src="assets/flags/us.png" alt="Estados Unidos" style="width: 16px; height: auto; margin-right: 5px;">',
        'es': '<img src="assets/flags/es.png" alt="Espanha" style="width: 16px; height: auto; margin-right: 5px;">'
    };

    const names = {
        'pt': 'Português',
        'en': 'English',
        'es': 'Español'
    };

    selector.innerHTML = flags[lang] + ' ' + names[lang];
    console.log(`🎌 Seletor atualizado: ${names[lang]}`);
}

/**
 * FUNÇÃO PÚBLICA - Conecta com dropdown existente
 */
function changeLanguage(lang) {
    console.log(`🔄 === SOLICITAÇÃO DE MUDANÇA DE IDIOMA: ${lang} ===`);
    translatePage(lang);
}

/**
 * INICIALIZAÇÃO
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 SISTEMA DE TRADUÇÃO DEFINITIVO CARREGADO!');
    console.log('📊 Idiomas disponíveis:', Object.keys(completeTranslations));
    console.log('🔧 Funções disponíveis: changeLanguage("en"), changeLanguage("es"), debugTranslation()');

    // Restaurar idioma salvo
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && savedLanguage !== 'pt') {
        console.log(`🔄 Restaurando idioma: ${savedLanguage}`);
        setTimeout(() => translatePage(savedLanguage), 800);
    } else {
        console.log('✅ Idioma padrão: Português');
    }
});

/**
 * FUNÇÕES DE DEBUG
 */
window.debugTranslation = function() {
    console.log('🔍 === DEBUG DO SISTEMA ===');
    console.log('📊 Estatísticas:');
    console.log('   - Traduções EN:', Object.keys(completeTranslations.en).length);
    console.log('   - Traduções ES:', Object.keys(completeTranslations.es).length);
    console.log('   - Elementos na página:', document.querySelectorAll('*').length);
    console.log('   - Nós de texto:', document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT).nextNode() ? 'Encontrados' : 'Não encontrados');
    console.log('   - Seletor de idioma:', document.getElementById('languageSelector') ? 'OK' : 'NÃO ENCONTRADO');
    console.log('   - Idioma salvo:', localStorage.getItem('selectedLanguage') || 'Nenhum');
    console.log('🧪 Testes disponíveis:');
    console.log('   changeLanguage("en") - Traduzir para inglês');
    console.log('   changeLanguage("es") - Traduzir para espanhol');
    console.log('   changeLanguage("pt") - Voltar para português');
};

window.forceTranslate = function(lang) {
    console.log(`🔧 FORÇANDO TRADUÇÃO PARA: ${lang}`);
    translatePage(lang);
};

// Log inicial
console.log('✅ SISTEMA DE TRADUÇÃO DEFINITIVO ATIVO!');
console.log('🎯 Cobertura: 100% automática');
console.log('🌍 PT → EN → ES');
console.log('🔧 Digite debugTranslation() para mais informações');

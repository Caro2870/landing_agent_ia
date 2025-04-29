// Traducciones disponibles
const translations = {
    // Español (idioma predeterminado)
    es: {
        // Navegación
        'nav_about': 'Acerca de',
        'nav_templates': 'Plantillas',
        'nav_benefits': 'Beneficios',
        'nav_pricing': 'Precios',
        'nav_faq': 'Preguntas',
        'nav_contact': 'Contacto',
        'nav_create': 'Crear Agente Gratis',
        
        // Hero
        'hero_title': 'Asistentes IA que revolucionan la atención al cliente',
        'hero_description': 'Transforma la comunicación con tus clientes a través de NexusBot. Crea asistentes virtuales inteligentes que automatizan procesos, responden consultas y generan oportunidades de venta las 24 horas.',
        'hero_cta': 'Comienza gratis ahora',
        
        // Acerca de
        'about_title': 'Descubre NexusBot',
        'about_p1': 'NexusBot es la plataforma definitiva para empresas que buscan optimizar su comunicación con los clientes mediante inteligencia artificial avanzada. Con nuestra tecnología, puedes crear asistentes virtuales personalizados que se integran perfectamente con WhatsApp y otras plataformas.',
        'about_p2': 'Únete a las empresas que ya están transformando sus estrategias de atención al cliente con NexusBot.',
        'about_cta': 'Empieza tu revolución digital',
        
        // Plantillas
        'templates_title': 'Elige el asistente perfecto para tu negocio',
        'templates_all': 'Todos',
        'templates_business': 'Negocios',
        'templates_education': 'Educación',
        'templates_creativity': 'Creatividad',
        'templates_technology': 'Tecnología',
        'templates_custom': 'Personalizado',
        
        // Nombres de plantillas
        'template_customer': 'Asistente de Atención',
        'template_sales': 'Experto en Ventas',
        'template_education': 'Tutor Virtual',
        'template_creative': 'Creador de Contenido',
        'template_tech': 'Soporte Técnico',
        'template_custom': 'Asistente Personalizado',
        
        // Descripciones de plantillas
        'desc_customer': 'Resuelve dudas y gestiona casos con empatía y eficiencia para aumentar la satisfacción de tus clientes.',
        'desc_sales': 'Detecta oportunidades, presenta productos y cierra ventas con técnicas conversacionales avanzadas.',
        'desc_education': 'Crea experiencias educativas personalizadas con explicaciones adaptativas y evaluación continua.',
        'desc_creative': 'Genera textos, ideas y contenidos originales para múltiples plataformas y formatos.',
        'desc_tech': 'Soluciona problemas técnicos con diagnósticos precisos y guías paso a paso para tus usuarios.',
        'desc_custom': 'Diseña el comportamiento exacto de tu asistente según los requisitos específicos de tu negocio.',
        
        'templates_cta': 'Crea tu asistente ahora',
        
        // Crear agente
        'create_title': 'Diseña tu asistente virtual',
        'create_name_label': 'Nombre de tu asistente',
        'create_name_placeholder': 'Ej: Asistente de Ventas de TechStore',
        'create_desc_label': 'Describe cómo debe comportarse tu asistente...',
        'create_desc_placeholder': 'Ej: Quiero un asistente que ayude a los clientes a encontrar productos tecnológicos, responda preguntas sobre especificaciones y gestione el proceso de compra...',
        'create_button': 'Crear mi asistente gratis',
        
        // Beneficios
        'benefits_title': 'Ventajas de nuestros asistentes virtuales',
        'benefit_1_title': 'Disponibilidad 24/7',
        'benefit_1_desc': 'Tus asistentes nunca duermen, garantizando respuestas instantáneas en cualquier momento del día o de la noche.',
        'benefit_2_title': 'Implementación rápida',
        'benefit_2_desc': 'Configura y activa tu asistente en cuestión de minutos, sin necesidad de conocimientos técnicos.',
        'benefit_3_title': 'Plantillas especializadas',
        'benefit_3_desc': 'Selecciona entre múltiples plantillas prediseñadas para diferentes industrias y casos de uso.',
        'benefit_4_title': 'Máxima seguridad',
        'benefit_4_desc': 'Protección de datos con estándares de encriptación de nivel empresarial y cumplimiento de normativas.',
        'benefit_5_title': 'Analítica avanzada',
        'benefit_5_desc': 'Obtén insights detallados sobre las conversaciones para optimizar estrategias y mejorar la experiencia.',
        'benefit_6_title': 'Conexiones potentes',
        'benefit_6_desc': 'Integra tu asistente con tus sistemas existentes como CRM, e-commerce, calendarios y más.',
        
        // Testimonios
        'testimonials_title': 'Lo que dicen nuestros clientes',
        
        // Precios
        'pricing_title': 'Planes adaptados a tu crecimiento',
        'pricing_subtitle': 'NexusBot evoluciona contigo. Elige el plan que mejor se adapte a tus necesidades actuales.',
        
        'plan_basic_title': 'BÁSICO',
        'plan_basic_price': '$19',
        'plan_basic_description': 'Ideal para pequeños negocios que comienzan con la IA',
        'plan_basic_cta': 'Comenzar ahora',
        
        'plan_standard_title': 'PROFESIONAL',
        'plan_standard_price': '$29',
        'plan_standard_description': 'La solución perfecta para empresas en crecimiento',
        'plan_standard_cta': 'Probar ahora',
        
        'plan_premium_title': 'NEGOCIOS',
        'plan_premium_price': '$79',
        'plan_premium_description': 'Potencia máxima con WhatsApp Business API',
        'plan_premium_cta': 'Impulsa tu negocio',
        
        'plan_enterprise_title': 'EMPRESARIAL',
        'plan_enterprise_price': 'Personalizado',
        'plan_enterprise_description': 'Soluciones a medida para grandes organizaciones',
        'plan_enterprise_cta': 'Hablemos',
        
        // FAQ
        'faq_title': 'Preguntas frecuentes',
        'faq_subtitle': 'Todo lo que necesitas saber para empezar con NexusBot',
        
        'faq_q1': '¿Qué es NexusBot y cómo funciona?',
        'faq_a1': 'NexusBot es una plataforma de creación de asistentes virtuales con inteligencia artificial que te permite automatizar conversaciones con tus clientes a través de WhatsApp y otras plataformas. La plataforma utiliza modelos avanzados de procesamiento de lenguaje natural para entender y responder a los usuarios de forma natural, adaptándose a las necesidades específicas de tu negocio.',
        
        'faq_q2': '¿Qué diferencia a NexusBot de otras soluciones similares?',
        'faq_a2': 'NexusBot destaca por su facilidad de uso, personalización avanzada y capacidades de aprendizaje continuo. A diferencia de otros chatbots, nuestros asistentes virtuales pueden entender el contexto completo de una conversación, manejar preguntas complejas y ofrecer respuestas precisas. Además, nuestra plataforma ofrece integraciones nativas con sistemas empresariales y una rápida implementación sin necesidad de programación.',
        
        'faq_q3': '¿Cómo protege NexusBot la privacidad de los datos?',
        'faq_a3': 'La seguridad es nuestra prioridad. Todos los datos son cifrados en tránsito y en reposo utilizando estándares de nivel empresarial. Cumplimos con regulaciones internacionales como GDPR y LGPD. No utilizamos los datos de conversación para entrenar modelos públicos y ofrecemos controles granulares para la retención y eliminación de información sensible.',
        
        'faq_q4': '¿Qué tipos de empresas pueden beneficiarse de NexusBot?',
        'faq_a4': 'NexusBot es versátil y beneficia a empresas de todos los tamaños y sectores: desde startups hasta grandes corporaciones, comercios minoristas, servicios profesionales, educación, salud, hotelería, finanzas y más. Cualquier organización que busque optimizar la comunicación con sus clientes, reducir costos operativos y mejorar la experiencia del usuario encontrará valor en nuestra plataforma.',
        
        'faq_q5': '¿Cuánto cuesta implementar NexusBot?',
        'faq_a5': 'Ofrecemos diversos planes según las necesidades de tu empresa, comenzando desde $19 mensuales. Cada plan incluye diferentes límites de conversaciones, capacidades e integraciones. También disponemos de un plan Empresarial con características personalizadas para grandes organizaciones. Puedes encontrar todos los detalles en nuestra sección de precios.',
        
        'faq_q6': '¿Puedo probar NexusBot antes de pagar?',
        'faq_a6': 'Absolutamente. Ofrecemos una versión gratuita que te permite crear un asistente básico y experimentar con las principales funcionalidades de la plataforma. Esta versión gratuita es perfecta para que puedas evaluar si NexusBot se alinea con las necesidades de tu negocio antes de invertir en un plan de pago.',
        
        'faq_more': '¿Tienes más preguntas?',
        'faq_contact': 'Contáctanos',
        
        // Contacto
        'contact_title': '¿Necesitas más información?',
        'contact_subtitle': 'Nuestro equipo está listo para ayudarte a implementar la solución perfecta',
        
        'contact_text': 'La forma más rápida de comenzar es crear tu asistente usando nuestra plataforma. Sin embargo, si tienes necesidades específicas o preguntas adicionales, nuestro equipo de especialistas estará encantado de ayudarte a encontrar la solución ideal para tu empresa.',
        'contact_highlight': 'Completa el formulario y te responderemos en menos de 24 horas.',
        
        'contact_email': 'Correo electrónico',
        'contact_email_placeholder': 'tu@empresa.com',
        'contact_whatsapp': 'Número de WhatsApp',
        'contact_whatsapp_placeholder': '+51 999 999 999',
        'contact_country': 'País o región',
        'contact_country_placeholder': 'Ej: España',
        'contact_button': 'Enviar consulta',
        'contact_privacy': 'Al enviar este formulario, aceptas nuestra',
        'contact_privacy_link': 'Política de privacidad',
        
        // Footer
        'footer_about': 'NexusBot transforma la comunicación empresarial con asistentes virtuales impulsados por IA avanzada',
        'footer_address': 'Dirección: Av. Innovación 123, Lima, PE',
        'footer_phone': 'Teléfono: +51 923 456 789',
        'footer_email': 'Correo: contacto@nexusbot.com',
        
        'footer_privacy': 'Política de privacidad',
        'footer_terms': 'Términos de servicio',
        'footer_cookies': 'Cookies',
        'footer_copyright': '© 2025 NexusBot. Innovación en Inteligencia Artificial.',
        
        // Floating CTA
        'floating_cta': 'Crear asistente',
        
        // Cookies
        'cookies_notice': 'Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra',
        'cookies_link': 'política de cookies',
        'cookies_accept': 'Aceptar'
    },
    
    // English
    en: {
        // Navigation
        'nav_about': 'About',
        'nav_templates': 'Templates',
        'nav_benefits': 'Benefits',
        'nav_pricing': 'Pricing',
        'nav_faq': 'FAQ',
        'nav_contact': 'Contact',
        'nav_create': 'Create Free Agent',
        
        // Hero
        'hero_title': 'AI Assistants that revolutionize customer service',
        'hero_description': 'Transform your customer communication with NexusBot. Create intelligent virtual assistants that automate processes, answer inquiries, and generate sales opportunities 24/7.',
        'hero_cta': 'Start for free now',
        
        // About
        'about_title': 'Discover NexusBot',
        'about_p1': 'NexusBot is the ultimate platform for businesses looking to optimize customer communication through advanced artificial intelligence. With our technology, you can create customized virtual assistants that seamlessly integrate with WhatsApp and other platforms.',
        'about_p2': 'Join the companies that are already transforming their customer service strategies with NexusBot.',
        'about_cta': 'Start your digital revolution',
        
        // Templates
        'templates_title': 'Choose the perfect assistant for your business',
        'templates_all': 'All',
        'templates_business': 'Business',
        'templates_education': 'Education',
        'templates_creativity': 'Creativity',
        'templates_technology': 'Technology',
        'templates_custom': 'Custom',
        
        // Template names
        'template_customer': 'Customer Service',
        'template_sales': 'Sales Expert',
        'template_education': 'Virtual Tutor',
        'template_creative': 'Content Creator',
        'template_tech': 'Technical Support',
        'template_custom': 'Custom Assistant',
        
        // Template descriptions
        'desc_customer': 'Resolve inquiries and handle cases with empathy and efficiency to increase customer satisfaction.',
        'desc_sales': 'Detect opportunities, present products, and close sales with advanced conversational techniques.',
        'desc_education': 'Create personalized educational experiences with adaptive explanations and continuous assessment.',
        'desc_creative': 'Generate original texts, ideas, and content for multiple platforms and formats.',
        'desc_tech': 'Solve technical problems with accurate diagnostics and step-by-step guides for your users.',
        'desc_custom': 'Design the exact behavior of your assistant according to the specific requirements of your business.',
        
        'templates_cta': 'Create your assistant now',
        
        // Create agent
        'create_title': 'Design your virtual assistant',
        'create_name_label': 'Name of your assistant',
        'create_name_placeholder': 'E.g.: TechStore Sales Assistant',
        'create_desc_label': 'Describe how your assistant should behave...',
        'create_desc_placeholder': 'E.g.: I want an assistant that helps customers find tech products, answers questions about specifications, and manages the purchasing process...',
        'create_button': 'Create my assistant for free',
        
        // Benefits
        'benefits_title': 'Advantages of our virtual assistants',
        'benefit_1_title': '24/7 Availability',
        'benefit_1_desc': 'Your assistants never sleep, ensuring instant responses at any time of day or night.',
        'benefit_2_title': 'Quick Implementation',
        'benefit_2_desc': 'Set up and activate your assistant in a matter of minutes, no technical knowledge required.',
        'benefit_3_title': 'Specialized Templates',
        'benefit_3_desc': 'Choose from multiple pre-designed templates for different industries and use cases.',
        'benefit_4_title': 'Maximum Security',
        'benefit_4_desc': 'Data protection with enterprise-level encryption standards and regulatory compliance.',
        'benefit_5_title': 'Advanced Analytics',
        'benefit_5_desc': 'Get detailed insights about conversations to optimize strategies and improve experience.',
        'benefit_6_title': 'Powerful Connections',
        'benefit_6_desc': 'Integrate your assistant with existing systems such as CRM, e-commerce, calendars, and more.',
        
        // Testimonials
        'testimonials_title': 'What our clients say',
        
        // Pricing
        'pricing_title': 'Plans adapted to your growth',
        'pricing_subtitle': 'NexusBot evolves with you. Choose the plan that best fits your current needs.',
        
        'plan_basic_title': 'BASIC',
        'plan_basic_price': '$19',
        'plan_basic_description': 'Ideal for small businesses starting with AI',
        'plan_basic_cta': 'Start now',
        
        'plan_standard_title': 'PROFESSIONAL',
        'plan_standard_price': '$29',
        'plan_standard_description': 'The perfect solution for growing businesses',
        'plan_standard_cta': 'Try now',
        
        'plan_premium_title': 'BUSINESS',
        'plan_premium_price': '$79',
        'plan_premium_description': 'Maximum power with WhatsApp Business API',
        'plan_premium_cta': 'Boost your business',
        
        'plan_enterprise_title': 'ENTERPRISE',
        'plan_enterprise_price': 'Custom',
        'plan_enterprise_description': 'Tailored solutions for large organizations',
        'plan_enterprise_cta': 'Let\'s talk',
        
        // FAQ
        'faq_title': 'Frequently Asked Questions',
        'faq_subtitle': 'Everything you need to know to get started with NexusBot',
        
        'faq_q1': 'What is NexusBot and how does it work?',
        'faq_a1': 'NexusBot is a platform for creating artificial intelligence virtual assistants that allows you to automate conversations with your customers through WhatsApp and other platforms. The platform uses advanced natural language processing models to understand and respond to users naturally, adapting to the specific needs of your business.',
        
        'faq_q2': 'What sets NexusBot apart from similar solutions?',
        'faq_a2': 'NexusBot stands out for its ease of use, advanced customization, and continuous learning capabilities. Unlike other chatbots, our virtual assistants can understand the complete context of a conversation, handle complex questions, and provide accurate answers. Additionally, our platform offers native integrations with business systems and rapid implementation without the need for programming.',
        
        'faq_q3': 'How does NexusBot protect data privacy?',
        'faq_a3': 'Security is our priority. All data is encrypted in transit and at rest using enterprise-level standards. We comply with international regulations such as GDPR and LGPD. We do not use conversation data to train public models and offer granular controls for the retention and deletion of sensitive information.',
        
        'faq_q4': 'What types of businesses can benefit from NexusBot?',
        'faq_a4': 'NexusBot is versatile and benefits companies of all sizes and sectors: from startups to large corporations, retail businesses, professional services, education, healthcare, hospitality, finance, and more. Any organization looking to optimize communication with its customers, reduce operational costs, and improve the user experience will find value in our platform.',
        
        'faq_q5': 'How much does it cost to implement NexusBot?',
        'faq_a5': 'We offer various plans according to your company\'s needs, starting from $19 per month. Each plan includes different conversation limits, capabilities, and integrations. We also have an Enterprise plan with customized features for large organizations. You can find all the details in our pricing section.',
        
        'faq_q6': 'Can I try NexusBot before paying?',
        'faq_a6': 'Absolutely. We offer a free version that allows you to create a basic assistant and experiment with the main features of the platform. This free version is perfect for you to evaluate whether NexusBot aligns with your business needs before investing in a paid plan.',
        
        'faq_more': 'Do you have more questions?',
        'faq_contact': 'Contact us',
        
        // Contact
        'contact_title': 'Need more information?',
        'contact_subtitle': 'Our team is ready to help you implement the perfect solution',
        
        'contact_text': 'The fastest way to get started is to create your assistant using our platform. However, if you have specific needs or additional questions, our team of specialists will be happy to help you find the ideal solution for your company.',
        'contact_highlight': 'Complete the form and we will respond within 24 hours.',
        
        'contact_email': 'Email',
        'contact_email_placeholder': 'you@company.com',
        'contact_whatsapp': 'WhatsApp number',
        'contact_whatsapp_placeholder': '+1 234 567 8900',
        'contact_country': 'Country or region',
        'contact_country_placeholder': 'E.g.: United States',
        'contact_button': 'Send inquiry',
        'contact_privacy': 'By submitting this form, you accept our',
        'contact_privacy_link': 'Privacy Policy',
        
        // Footer
        'footer_about': 'NexusBot transforms business communication with virtual assistants powered by advanced AI',
        'footer_address': 'Address: Innovation Ave. 123, Lima, PE',
        'footer_phone': 'Phone: +51 923 456 789',
        'footer_email': 'Email: contact@nexusbot.com',
        
        'footer_privacy': 'Privacy Policy',
        'footer_terms': 'Terms of Service',
        'footer_cookies': 'Cookies',
        'footer_copyright': '© 2025 NexusBot. Innovation in Artificial Intelligence.',
        
        // Floating CTA
        'floating_cta': 'Create assistant',
        
        // Cookies
        'cookies_notice': 'We use cookies to improve your experience. By continuing to browse, you accept our',
        'cookies_link': 'cookie policy',
        'cookies_accept': 'Accept'
    },
    
    // Português
    pt: {
        // Navegação
        'nav_about': 'Sobre nós',
        'nav_templates': 'Modelos',
        'nav_benefits': 'Benefícios',
        'nav_pricing': 'Preços',
        'nav_faq': 'Perguntas',
        'nav_contact': 'Contato',
        'nav_create': 'Criar Agente Grátis',
        
        // Hero
        'hero_title': 'Assistentes de IA que revolucionam o atendimento ao cliente',
        'hero_description': 'Transforme a comunicação com seus clientes através do NexusBot. Crie assistentes virtuais inteligentes que automatizam processos, respondem consultas e geram oportunidades de vendas 24 horas por dia.',
        'hero_cta': 'Comece grátis agora',
        
        // Sobre
        'about_title': 'Descubra o NexusBot',
        'about_p1': 'NexusBot é a plataforma definitiva para empresas que buscam otimizar sua comunicação com clientes através de inteligência artificial avançada. Com nossa tecnologia, você pode criar assistentes virtuais personalizados que se integram perfeitamente com WhatsApp e outras plataformas.',
        'about_p2': 'Junte-se às empresas que já estão transformando suas estratégias de atendimento ao cliente com NexusBot.',
        'about_cta': 'Inicie sua revolução digital',
        
        // Templates
        'templates_title': 'Escolha o assistente perfeito para seu negócio',
        'templates_all': 'Todos',
        'templates_business': 'Negócios',
        'templates_education': 'Educação',
        'templates_creativity': 'Criatividade',
        'templates_technology': 'Tecnologia',
        'templates_custom': 'Personalizado',
        
        // Nomes de templates
        'template_customer': 'Atendimento ao Cliente',
        'template_sales': 'Especialista em Vendas',
        'template_education': 'Tutor Virtual',
        'template_creative': 'Criador de Conteúdo',
        'template_tech': 'Suporte Técnico',
        'template_custom': 'Assistente Personalizado',
        
        // Descrições de templates
        'desc_customer': 'Resolva dúvidas e gerencie casos com empatia e eficiência para aumentar a satisfação dos seus clientes.',
        'desc_sales': 'Detecte oportunidades, apresente produtos e feche vendas com técnicas conversacionais avançadas.',
        'desc_education': 'Crie experiências educacionais personalizadas com explicações adaptativas e avaliação contínua.',
        'desc_creative': 'Gere textos, ideias e conteúdos originais para múltiplas plataformas e formatos.',
        'desc_tech': 'Solucione problemas técnicos com diagnósticos precisos e guias passo a passo para seus usuários.',
        'desc_custom': 'Projete o comportamento exato do seu assistente de acordo com os requisitos específicos do seu negócio.',
        
        'templates_cta': 'Crie seu assistente agora',
        
        // Criar agente
        'create_title': 'Projete seu assistente virtual',
        'create_name_label': 'Nome do seu assistente',
        'create_name_placeholder': 'Ex: Assistente de Vendas da TechStore',
        'create_desc_label': 'Descreva como seu assistente deve se comportar...',
        'create_desc_placeholder': 'Ex: Quero um assistente que ajude os clientes a encontrar produtos tecnológicos, responda perguntas sobre especificações e gerencie o processo de compra...',
        'create_button': 'Criar meu assistente grátis',
        
        // Benefícios
        'benefits_title': 'Vantagens dos nossos assistentes virtuais',
        'benefit_1_title': 'Disponibilidade 24/7',
        'benefit_1_desc': 'Seus assistentes nunca dormem, garantindo respostas instantâneas a qualquer hora do dia ou da noite.',
        'benefit_2_title': 'Implementação rápida',
        'benefit_2_desc': 'Configure e ative seu assistente em questão de minutos, sem necessidade de conhecimentos técnicos.',
        'benefit_3_title': 'Modelos especializados',
        'benefit_3_desc': 'Escolha entre múltiplos modelos pré-desenhados para diferentes indústrias e casos de uso.',
        'benefit_4_title': 'Segurança máxima',
        'benefit_4_desc': 'Proteção de dados com padrões de criptografia de nível empresarial e conformidade regulatória.',
        'benefit_5_title': 'Análise avançada',
        'benefit_5_desc': 'Obtenha insights detalhados sobre as conversas para otimizar estratégias e melhorar a experiência.',
        'benefit_6_title': 'Conexões poderosas',
        'benefit_6_desc': 'Integre seu assistente com sistemas existentes como CRM, e-commerce, calendários e mais.',
        
        // Depoimentos
        'testimonials_title': 'O que dizem nossos clientes',
        
        // Preços
        'pricing_title': 'Planos adaptados ao seu crescimento',
        'pricing_subtitle': 'NexusBot evolui com você. Escolha o plano que melhor se adapta às suas necessidades atuais.',
        
        'plan_basic_title': 'BÁSICO',
        'plan_basic_price': 'R$99',
        'plan_basic_description': 'Ideal para pequenos negócios começando com IA',
        'plan_basic_cta': 'Começar agora',
        
        'plan_standard_title': 'PROFISSIONAL',
        'plan_standard_price': 'R$149',
        'plan_standard_description': 'A solução perfeita para empresas em crescimento',
        'plan_standard_cta': 'Experimentar agora',
        
        'plan_premium_title': 'NEGÓCIOS',
        'plan_premium_price': 'R$399',
        'plan_premium_description': 'Potência máxima com WhatsApp Business API',
        'plan_premium_cta': 'Impulsione seu negócio',
        
        'plan_enterprise_title': 'EMPRESARIAL',
        'plan_enterprise_price': 'Personalizado',
        'plan_enterprise_description': 'Soluções sob medida para grandes organizações',
        'plan_enterprise_cta': 'Vamos conversar',
        
        // FAQ
        'faq_title': 'Perguntas frequentes',
        'faq_subtitle': 'Tudo o que você precisa saber para começar com o NexusBot',
        
        'faq_q1': 'O que é NexusBot e como funciona?',
        'faq_a1': 'NexusBot é uma plataforma de criação de assistentes virtuais com inteligência artificial que permite automatizar conversas com seus clientes através do WhatsApp e outras plataformas. A plataforma utiliza modelos avançados de processamento de linguagem natural para entender e responder aos usuários de forma natural, adaptando-se às necessidades específicas do seu negócio.',
        
        'faq_q2': 'O que diferencia o NexusBot de outras soluções similares?',
        'faq_a2': 'NexusBot se destaca pela sua facilidade de uso, personalização avançada e capacidades de aprendizado contínuo. Diferentemente de outros chatbots, nossos assistentes virtuais podem entender o contexto completo de uma conversa, lidar com perguntas complexas e oferecer respostas precisas. Além disso, nossa plataforma oferece integrações nativas com sistemas empresariais e uma rápida implementação sem necessidade de programação.',
        
        'faq_q3': 'Como o NexusBot protege a privacidade dos dados?',
        'faq_a3': 'A segurança é nossa prioridade. Todos os dados são criptografados em trânsito e em repouso utilizando padrões de nível empresarial. Cumprimos com regulações internacionais como GDPR e LGPD. Não utilizamos os dados de conversação para treinar modelos públicos e oferecemos controles granulares para a retenção e eliminação de informações sensíveis.',
        
        'faq_q4': 'Que tipos de empresas podem se beneficiar do NexusBot?',
        'faq_a4': 'NexusBot é versátil e beneficia empresas de todos os tamanhos e setores: desde startups até grandes corporações, comércios varejistas, serviços profissionais, educação, saúde, hotelaria, finanças e mais. Qualquer organização que busque otimizar a comunicação com seus clientes, reduzir custos operacionais e melhorar a experiência do usuário encontrará valor em nossa plataforma.',
        
        'faq_q5': 'Quanto custa implementar o NexusBot?',
        'faq_a5': 'Oferecemos diversos planos de acordo com as necessidades da sua empresa, começando a partir de R$99 mensais. Cada plano inclui diferentes limites de conversações, capacidades e integrações. Também dispomos de um plano Empresarial com características personalizadas para grandes organizações. Você pode encontrar todos os detalhes em nossa seção de preços.',
        
        'faq_q6': 'Posso testar o NexusBot antes de pagar?',
        'faq_a6': 'Absolutamente. Oferecemos uma versão gratuita que permite criar um assistente básico e experimentar as principais funcionalidades da plataforma. Esta versão gratuita é perfeita para que você possa avaliar se o NexusBot se alinha com as necessidades do seu negócio antes de investir em um plano pago.',
        
        'faq_more': 'Você tem mais perguntas?',
        'faq_contact': 'Contate-nos',
        
        // Contato
        'contact_title': 'Precisa de mais informações?',
        'contact_subtitle': 'Nossa equipe está pronta para ajudar você a implementar a solução perfeita',
        
        'contact_text': 'A maneira mais rápida de começar é criar seu assistente usando nossa plataforma. No entanto, se você tem necessidades específicas ou perguntas adicionais, nossa equipe de especialistas terá prazer em ajudá-lo a encontrar a solução ideal para sua empresa.',
        'contact_highlight': 'Preencha o formulário e responderemos em menos de 24 horas.',
        
        'contact_email': 'E-mail',
        'contact_email_placeholder': 'voce@empresa.com',
        'contact_whatsapp': 'Número de WhatsApp',
        'contact_whatsapp_placeholder': '+55 11 99999-9999',
        'contact_country': 'País ou região',
        'contact_country_placeholder': 'Ex: Brasil',
        'contact_button': 'Enviar consulta',
        'contact_privacy': 'Ao enviar este formulário, você aceita nossa',
        'contact_privacy_link': 'Política de Privacidade',
        
        // Footer
        'footer_about': 'NexusBot transforma a comunicação empresarial com assistentes virtuais impulsionados por IA avançada',
        'footer_address': 'Endereço: Av. Inovação 123, Lima, PE',
        'footer_phone': 'Telefone: +51 923 456 789',
        'footer_email': 'E-mail: contato@nexusbot.com',
        
        'footer_privacy': 'Política de Privacidade',
        'footer_terms': 'Termos de Serviço',
        'footer_cookies': 'Cookies',
        'footer_copyright': '© 2025 NexusBot. Inovação em Inteligência Artificial.',
        
        // Floating CTA
        'floating_cta': 'Criar assistente',
        
        // Cookies
        'cookies_notice': 'Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você aceita nossa',
        'cookies_link': 'política de cookies',
        'cookies_accept': 'Aceitar'
    }
};

// Elementos que necesitan traducción
const translateElements = [
    // Navegación
    { selector: '.nav-links li:nth-child(1) a', key: 'nav_about' },
    { selector: '.nav-links li:nth-child(2) a', key: 'nav_templates' },
    { selector: '.nav-links li:nth-child(3) a', key: 'nav_benefits' },
    { selector: '.nav-links li:nth-child(4) a', key: 'nav_pricing' },
    { selector: '.nav-links li:nth-child(5) a', key: 'nav_faq' },
    { selector: '.nav-links li:nth-child(6) a', key: 'nav_contact' },
    { selector: '.nav-links li:nth-child(7) a', key: 'nav_create' },
    
    // Hero
    { selector: '.hero-content h1', key: 'hero_title' },
    { selector: '.hero-content p', key: 'hero_description' },
    { selector: '.hero-content .btn', key: 'hero_cta' },
    
    // Acerca de
    { selector: '.about .section-header h2', key: 'about_title' },
    { selector: '.about-text p:nth-child(1)', key: 'about_p1' },
    { selector: '.about-text p:nth-child(2)', key: 'about_p2' },
    { selector: '.about-text .btn', key: 'about_cta' },
    
    // Plantillas
    { selector: '.templates .section-header h2', key: 'templates_title' },
    { selector: '.filter-btn[data-filter="all"]', key: 'templates_all' },
    { selector: '.filter-btn[data-filter="business"]', key: 'templates_business' },
    { selector: '.filter-btn[data-filter="education"]', key: 'templates_education' },
    { selector: '.filter-btn[data-filter="creativity"]', key: 'templates_creativity' },
    { selector: '.filter-btn[data-filter="technology"]', key: 'templates_technology' },
    { selector: '.filter-btn[data-filter="custom"]', key: 'templates_custom' },
    
    // Cardas de plantillas
    { selector: '.template-card:nth-child(1) h3', key: 'template_customer' },
    { selector: '.template-card:nth-child(2) h3', key: 'template_sales' },
    { selector: '.template-card:nth-child(3) h3', key: 'template_education' },
    { selector: '.template-card:nth-child(4) h3', key: 'template_creative' },
    { selector: '.template-card:nth-child(5) h3', key: 'template_tech' },
    { selector: '.template-card:nth-child(6) h3', key: 'template_custom' },
    
    { selector: '.template-card:nth-child(1) p:not(.template-type)', key: 'desc_customer' },
    { selector: '.template-card:nth-child(2) p:not(.template-type)', key: 'desc_sales' },
    { selector: '.template-card:nth-child(3) p:not(.template-type)', key: 'desc_education' },
    { selector: '.template-card:nth-child(4) p:not(.template-type)', key: 'desc_creative' },
    { selector: '.template-card:nth-child(5) p:not(.template-type)', key: 'desc_tech' },
    { selector: '.template-card:nth-child(6) p:not(.template-type)', key: 'desc_custom' },
    
    { selector: '.template-cta .btn', key: 'templates_cta' },
    
    // Crear agente
    { selector: '.create-agent .section-header h2', key: 'create_title' },
    { selector: '.create-agent .form-field:nth-child(1) label', key: 'create_name_label' },
    { selector: '.create-agent input#agent-name', attr: 'placeholder', key: 'create_name_placeholder' },
    { selector: '.create-agent .form-field:nth-child(2) label', key: 'create_desc_label' },
    { selector: '.create-agent textarea#agent-description', attr: 'placeholder', key: 'create_desc_placeholder' },
    { selector: '.create-agent .btn-block', key: 'create_button' },
    
    // Beneficios
    { selector: '.benefits .section-header h2', key: 'benefits_title' },
    { selector: '.benefit-card:nth-child(1) h3', key: 'benefit_1_title' },
    { selector: '.benefit-card:nth-child(1) p', key: 'benefit_1_desc' },
    { selector: '.benefit-card:nth-child(2) h3', key: 'benefit_2_title' },
    { selector: '.benefit-card:nth-child(2) p', key: 'benefit_2_desc' },
    { selector: '.benefit-card:nth-child(3) h3', key: 'benefit_3_title' },
    { selector: '.benefit-card:nth-child(3) p', key: 'benefit_3_desc' },
    { selector: '.benefit-card:nth-child(4) h3', key: 'benefit_4_title' },
    { selector: '.benefit-card:nth-child(4) p', key: 'benefit_4_desc' },
    { selector: '.benefit-card:nth-child(5) h3', key: 'benefit_5_title' },
    { selector: '.benefit-card:nth-child(5) p', key: 'benefit_5_desc' },
    { selector: '.benefit-card:nth-child(6) h3', key: 'benefit_6_title' },
    { selector: '.benefit-card:nth-child(6) p', key: 'benefit_6_desc' },
    
    // Testimonios
    { selector: '.testimonials .section-header h2', key: 'testimonials_title' },
    
    // Precios
    { selector: '.pricing .section-header h2', key: 'pricing_title' },
    { selector: '.pricing .section-header p', key: 'pricing_subtitle' },
    
    { selector: '.pricing-card:nth-child(1) .pricing-header h3', key: 'plan_basic_title' },
    { selector: '.pricing-card:nth-child(1) .price', html: true, key: 'plan_basic_price' },
    { selector: '.pricing-card:nth-child(1) .pricing-header p', key: 'plan_basic_description' },
    { selector: '.pricing-card:nth-child(1) .pricing-cta a', key: 'plan_basic_cta' },
    
    { selector: '.pricing-card:nth-child(2) .pricing-header h3', key: 'plan_standard_title' },
    { selector: '.pricing-card:nth-child(2) .price', html: true, key: 'plan_standard_price' },
    { selector: '.pricing-card:nth-child(2) .pricing-header p', key: 'plan_standard_description' },
    { selector: '.pricing-card:nth-child(2) .pricing-cta a', key: 'plan_standard_cta' },
    
    { selector: '.pricing-card:nth-child(3) .pricing-header h3', key: 'plan_premium_title' },
    { selector: '.pricing-card:nth-child(3) .price', html: true, key: 'plan_premium_price' },
    { selector: '.pricing-card:nth-child(3) .pricing-header p', key: 'plan_premium_description' },
    { selector: '.pricing-card:nth-child(3) .pricing-cta a', key: 'plan_premium_cta' },
    
    { selector: '.pricing-card:nth-child(4) .pricing-header h3', key: 'plan_enterprise_title' },
    { selector: '.pricing-card:nth-child(4) .price', html: true, key: 'plan_enterprise_price' },
    { selector: '.pricing-card:nth-child(4) .pricing-header p', key: 'plan_enterprise_description' },
    { selector: '.pricing-card:nth-child(4) .pricing-cta a', key: 'plan_enterprise_cta' },
    
    // FAQ
    { selector: '.faq .section-header h2', key: 'faq_title' },
    { selector: '.faq .section-header p', key: 'faq_subtitle' },
    
    { selector: '.faq-item:nth-child(1) .faq-question h3', key: 'faq_q1' },
    { selector: '.faq-item:nth-child(1) .faq-answer p', key: 'faq_a1' },
    { selector: '.faq-item:nth-child(2) .faq-question h3', key: 'faq_q2' },
    { selector: '.faq-item:nth-child(2) .faq-answer p', key: 'faq_a2' },
    { selector: '.faq-item:nth-child(3) .faq-question h3', key: 'faq_q3' },
    { selector: '.faq-item:nth-child(3) .faq-answer p', key: 'faq_a3' },
    { selector: '.faq-item:nth-child(4) .faq-question h3', key: 'faq_q4' },
    { selector: '.faq-item:nth-child(4) .faq-answer p', key: 'faq_a4' },
    { selector: '.faq-item:nth-child(5) .faq-question h3', key: 'faq_q5' },
    { selector: '.faq-item:nth-child(5) .faq-answer p', key: 'faq_a5' },
    { selector: '.faq-item:nth-child(6) .faq-question h3', key: 'faq_q6' },
    { selector: '.faq-item:nth-child(6) .faq-answer p', key: 'faq_a6' },
    
    { selector: '.faq-more h3', html: true, key: 'faq_more' },
    
    // Contacto
    { selector: '.contact .section-header h2', key: 'contact_title' },
    { selector: '.contact .section-header p', key: 'contact_subtitle' },
    
    { selector: '.contact-text p:first-child', key: 'contact_text' },
    { selector: '.contact-text .highlight', key: 'contact_highlight' },
    
    { selector: '.contact-form .form-field:nth-child(1) label', key: 'contact_email' },
    { selector: '.contact-form #email', attr: 'placeholder', key: 'contact_email_placeholder' },
    { selector: '.contact-form .form-field:nth-child(2) label', key: 'contact_whatsapp' },
    { selector: '.contact-form #whatsapp', attr: 'placeholder', key: 'contact_whatsapp_placeholder' },
    { selector: '.contact-form .form-field:nth-child(3) label', key: 'contact_country' },
    { selector: '.contact-form #country', attr: 'placeholder', key: 'contact_country_placeholder' },
    { selector: '.contact-form .btn-block', key: 'contact_button' },
    
    // Footer
    { selector: '.footer-logo p', key: 'footer_about' },
    { selector: '.footer-info p:nth-child(1)', key: 'footer_address' },
    { selector: '.footer-info p:nth-child(2)', key: 'footer_phone' },
    { selector: '.footer-info p:nth-child(3)', key: 'footer_email' },
    
    { selector: '.footer-links a:nth-child(1)', key: 'footer_privacy' },
    { selector: '.footer-links a:nth-child(3)', key: 'footer_terms' },
    { selector: '.footer-links a:nth-child(5)', key: 'footer_cookies' },
    { selector: '.footer-copyright p', key: 'footer_copyright' },
    
    // CTA flotante
    { selector: '.floating-cta-btn span', key: 'floating_cta' },
    
    // Cookies
    { selector: '.cookies-notice p', html: true, key: 'cookies_notice' },
    { selector: '.cookies-notice .cookies-btn', key: 'cookies_accept' }
];

// Función para aplicar traducciones
function applyTranslation(lang) {
    if (!translations[lang]) return;
    
    // Cambiar el atributo lang del HTML
    document.documentElement.setAttribute('lang', lang);
    
    // Marcar el botón de idioma activo
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Actualizar textos
    translateElements.forEach(element => {
        const el = document.querySelector(element.selector);
        if (!el) return;
        
        const translation = translations[lang][element.key];
        if (!translation) return;
        
        if (element.attr) {
            el.setAttribute(element.attr, translation);
        } else if (element.html) {
            el.innerHTML = translation;
        } else {
            el.textContent = translation;
        }
    });
    
    // Guardar la preferencia
    localStorage.setItem('nexusbot_language', lang);
}

// Función para inicializar el sistema de traducciones
function initTranslations() {
    // Obtener botones de idioma
    const langButtons = document.querySelectorAll('.language-btn');
    
    // Añadir event listeners
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyTranslation(lang);
        });
    });
    
    // Detectar idioma preferido
    const savedLang = localStorage.getItem('nexusbot_language');
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = savedLang || (translations[browserLang] ? browserLang : 'es');
    
    // Aplicar traducción inicial
    applyTranslation(defaultLang);
}

// Iniciar sistema de traducciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initTranslations();
    
    // Inicializar el botón de tema
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Verificar si hay un tema guardado
    const savedTheme = localStorage.getItem('nexusbot_theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
    
    // Mostrar aviso de cookies
    setTimeout(() => {
        const cookiesNotice = document.getElementById('cookies-notice');
        if (cookiesNotice && !localStorage.getItem('cookies_accepted')) {
            cookiesNotice.classList.add('show');
        }
    }, 1000);
    
    // Botón de aceptar cookies
    const cookiesBtn = document.querySelector('.cookies-btn');
    if (cookiesBtn) {
        cookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookies_accepted', 'true');
            document.getElementById('cookies-notice').classList.remove('show');
        });
    }
    
    // Progress bar de desplazamiento
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / windowHeight) * 100;
        document.querySelector('.progress-bar').style.width = scrollPercentage + '%';
    });
    
    // Enlace del botón CTA flotante
    const floatingCta = document.querySelector('.floating-cta-btn');
    if (floatingCta) {
        floatingCta.addEventListener('click', () => {
            document.getElementById('create').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Función para cambiar entre modo claro y oscuro
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.getAttribute('data-theme') === 'dark';
    
    if (isDarkMode) {
        body.removeAttribute('data-theme');
        localStorage.setItem('nexusbot_theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('nexusbot_theme', 'dark');
    }
}
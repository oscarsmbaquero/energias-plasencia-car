import { Dict } from './es';

export const pt: Dict = {
  meta: {
    // Portugués de Portugal: cambia el formato de los precios (1.390 €, no € 1.390).
    htmlLang: 'pt-PT',
    locale: 'pt-PT',
    ogLocale: 'pt_PT',
    nombre: 'Português',
    nombreCorto: 'PT'
  },

  nav: {
    logoAlt: 'Energías Plasencia SL',
    inicio: 'Início',
    productos: 'Produtos',
    info: 'Info',
    presupuesto: 'Pedir orçamento',
    abrirMenu: 'Abrir menu',
    cerrarMenu: 'Fechar menu',
    idioma: 'Idioma'
  },

  footer: {
    descripcion: 'Mobilidade elétrica e instalação de pontos de carregamento em Plasencia (Cáceres, Espanha).',
    secciones: 'Secções',
    contacto: 'Contacto',
    ciudad: 'Plasencia, Cáceres',
    derechos: 'Todos os direitos reservados'
  },

  home: {
    altCargador: 'Carregador portátil para veículo elétrico',
    altCoche: 'Carro elétrico a carregar num ponto de carregamento',
    eyebrow: 'Plasencia · Cáceres',
    titulo1: 'O seu ponto de carregamento,',
    titulo2: 'pronto para o seu carro elétrico',
    lead: 'Faça scroll e veja como carrega.',
    eyebrowFinal: 'Carregue em casa ou na sua empresa',
    tituloFinal: 'Da tomada à estrada',
    verProductos: 'Ver produtos',
    ventajasEyebrow: 'Porque mudar para o elétrico',
    ventajasTitulo: 'Vantagens da mobilidade elétrica',
    ventajas: [
      { icono: '💶', titulo: 'Poupança real', texto: 'Até cinco vezes menos custo por quilómetro do que um carro a combustão.' },
      { icono: '🌿', titulo: 'Zero emissões', texto: 'Mobilidade limpa e etiqueta zero emissões.' },
      { icono: '🔧', titulo: 'Menos manutenção', texto: 'Sem óleo, embraiagem nem correia de distribuição.' },
      { icono: '🏠', titulo: 'Carregar em casa', texto: 'Instalamos o seu ponto de carregamento e legalizamos a instalação.' }
    ],
    bandaTitulo: 'Vamos falar da sua instalação?',
    bandaLead: 'Preparamos um orçamento sem compromisso.'
  },

  productos: {
    eyebrow: 'Catálogo',
    titulo: 'Produtos',
    desde: 'Desde',
    categorias: {
      todos: 'Todos',
      cargadores: 'Carregadores',
      solar: 'Energia solar'
    },
    items: {
      'wallbox-7': {
        nombre: 'Wallbox doméstico 7,4 kW',
        descripcion: 'Ponto de carregamento monofásico para garagem ou lugar em condomínio.',
        caracteristicas: ['Monofásico 32 A', 'Controlo por app', 'Carga completa em 6-8 h']
      },
      'wallbox-22': {
        nombre: 'Wallbox trifásico 22 kW',
        descripcion: 'Carregamento rápido para casa ou empresa com instalação trifásica.',
        caracteristicas: ['Trifásico 32 A', 'Gestão dinâmica de potência', 'Carga completa em 2-3 h']
      },
      'cargador-empresa': {
        nombre: 'Ponto de carregamento para empresas',
        descripcion: 'Solução com RFID e faturação por utilizador para frotas e negócios.',
        caracteristicas: ['Tomada dupla', 'Leitura RFID', 'Relatório de consumos']
      },
      'solar-hogar': {
        nombre: 'Painéis solares + carregamento',
        descripcion: 'Carregue o seu carro com a energia do seu próprio telhado.',
        caracteristicas: ['Autoconsumo', 'Excedentes compensados', 'Monitorização']
      },
      bateria: {
        nombre: 'Bateria de armazenamento',
        descripcion: 'Guarde a energia solar e use-a de noite para carregar.',
        caracteristicas: ['5-10 kWh', 'Apoio em caso de falhas', 'Ampliável']
      }
    }
  },

  info: {
    eyebrow: 'Guia',
    titulo: 'Tudo sobre veículos elétricos',
    lead: 'Respondemos às dúvidas mais frequentes antes de dar o salto para a mobilidade elétrica.',
    tiposTitulo: 'Tipos de carregamento',
    etiquetas: { potencia: 'Potência', tiempo: 'Tempo', uso: 'Uso' },
    tipos: [
      { nombre: 'Carregamento lento', potencia: '3,7 kW', tiempo: '10-14 h', uso: 'Tomada doméstica, emergências' },
      { nombre: 'Carregamento semirrápido', potencia: '7,4 - 22 kW', tiempo: '2-8 h', uso: 'Wallbox em casa ou na empresa' },
      { nombre: 'Carregamento rápido DC', potencia: '50 - 350 kW', tiempo: '20-40 min (80 %)', uso: 'Postos de carregamento em viagem' }
    ],
    faqTitulo: 'Perguntas frequentes',
    faq: [
      {
        p: 'Quanto custa carregar um carro elétrico em casa?',
        r: 'Com tarifa noturna o custo ronda os 2-4 € por 100 km, muito abaixo de um carro a gasolina ou gasóleo.'
      },
      {
        p: 'Preciso de autorização para instalar um ponto de carregamento?',
        r: 'Numa casa unifamiliar basta a instalação legalizada. Em condomínio só é necessário comunicá-lo à administração. Ajudamos com todos os trâmites.'
      },
      {
        p: 'Existem apoios disponíveis?',
        r: 'Há subsídios e benefícios fiscais para a compra de veículos e para a instalação de pontos de carregamento. Variam por região e por ano; informamos no orçamento.'
      },
      {
        p: 'Qual é a autonomia real de um elétrico?',
        r: 'Os modelos atuais oferecem entre 300 e 600 km, segundo a bateria, a velocidade e a temperatura.'
      },
      {
        p: 'Quanto dura a bateria?',
        r: 'Costumam ter garantia de 8 anos ou 160.000 km, com uma degradação muito baixa em uso normal.'
      }
    ],
    asideTitulo: 'Quer o nosso conselho?',
    asideTexto: 'Conte-nos o seu caso e recomendamos a melhor solução de carregamento.'
  },

  presupuesto: {
    eyebrow: 'Sem compromisso',
    titulo: 'Peça o seu orçamento',
    intro: 'Diga-nos o que precisa e respondemos em menos de 24 horas úteis.',
    puntos: [
      'Visita técnica gratuita em Plasencia e arredores',
      'Instalação e legalização incluídas',
      'Informação sobre apoios e subsídios'
    ],
    okTitulo: 'Pedido enviado!',
    okTexto: 'Obrigado, entraremos em contacto muito em breve.',
    okBoton: 'Enviar outro pedido',
    campos: {
      nombre: 'Nome',
      telefono: 'Telefone',
      email: 'Email',
      producto: 'Produto de interesse',
      mensaje: 'Mensagem',
      privacidad: 'Aceito a política de privacidade e o tratamento dos meus dados.'
    },
    errores: {
      nombre: 'Indique o seu nome.',
      telefono: 'Telefone inválido.',
      email: 'Email inválido.'
    },
    selectVacio: 'Selecione um produto (opcional)',
    placeholderMensaje: 'Tipo de habitação, veículo, potência contratada…',
    boton: 'Pedir orçamento'
  },

  seo: {
    sitio: 'Energías Plasencia car',
    home: {
      title: 'Pontos de carregamento para carro elétrico em Plasencia | Energías Plasencia car',
      description:
        'Instalação de pontos de carregamento para veículo elétrico em Plasencia e Cáceres. Wallbox doméstico, para empresas e energia solar. Orçamento sem compromisso.'
    },
    productos: {
      title: 'Carregadores e wallbox para carro elétrico | Energías Plasencia car',
      description:
        'Catálogo de pontos de carregamento: wallbox doméstico de 7,4 kW, trifásico de 22 kW, carregadores para empresas, painéis solares e baterias.'
    },
    info: {
      title: 'Guia do carro elétrico: tipos de carregamento e dúvidas | Energías Plasencia car',
      description:
        'Tipos de carregamento, tempos, custo por 100 km, apoios, autonomia real e vida da bateria. O que precisa de saber antes de mudar para o elétrico.'
    },
    presupuesto: {
      title: 'Pedir orçamento de ponto de carregamento | Energías Plasencia car',
      description:
        'Peça um orçamento sem compromisso para instalar o seu ponto de carregamento em Plasencia. Visita técnica gratuita, instalação e legalização incluídas.'
    }
  }
};

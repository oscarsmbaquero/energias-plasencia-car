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
    derechos: 'Todos os direitos reservados',
    legal: 'Legal',
    privacidad: 'Política de privacidade',
    cookies: 'Política de cookies',
    configurarCookies: 'Definições de cookies'
  },

  aviso: {
    titulo: 'Cookies e privacidade',
    texto:
      'Este site guarda no seu navegador apenas o indispensável para funcionar e para recordar esta escolha. Se aceitar, poderemos usar também cookies de medição para saber que páginas são visitadas.',
    aceptar: 'Aceitar',
    rechazar: 'Recusar',
    masInfo: 'Mais informação',
    etiqueta: 'Aviso de cookies'
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
      privacidadAntes: 'Aceito a ',
      privacidadEnlace: 'política de privacidade',
      privacidadDespues: ' e o tratamento dos meus dados.'
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

  legal: {
    actualizado: 'Última atualização: 16 de novembro de 2026',
    privacidad: {
      titulo: 'Política de privacidade',
      entradilla:
        'Quem trata os seus dados quando usa este site, para quê, durante quanto tempo e o que pode fazer quanto a isso.',
      secciones: [
        {
          h: 'Quem é o responsável',
          p: [
            'Energías Plasencia SL, com NIF [a completar] e sede em [morada a completar], Plasencia (Cáceres), Espanha.',
            'Pode escrever-nos para info@energiasplasencia.es sobre qualquer questão relacionada com os seus dados.'
          ]
        },
        {
          h: 'Que dados tratamos e para quê',
          p: [
            'Apenas os que nos dá no formulário de orçamento: nome, telefone, email, o produto que lhe interessa e a mensagem que escrever.',
            'Usamo-los para responder ao seu pedido, preparar o orçamento e manter o contacto necessário até o fechar. Não tomamos decisões automatizadas nem criamos perfis.'
          ]
        },
        {
          h: 'Porque podemos tratá-los',
          p: [
            'Pelo seu consentimento, dado ao marcar a caixa e enviar o formulário, e pela necessidade de tomar diligências pré-contratuais a seu pedido, que é o que um orçamento é.'
          ]
        },
        {
          h: 'Durante quanto tempo os guardamos',
          p: [
            'Enquanto tratamos o seu pedido e, depois, durante os prazos exigidos pelas obrigações contabilísticas e fiscais. Cumpridos esses prazos, são eliminados.',
            'Se nos pedir que os apaguemos antes, fazemo-lo, salvo se houver obrigação legal de os conservar.'
          ]
        },
        {
          h: 'Com quem os partilhamos',
          p: [
            'Não vendemos nem cedemos os seus dados. Só lhes acedem os fornecedores que nos prestam serviços (alojamento web e correio eletrónico), na qualidade de subcontratantes e com contrato.',
            'Fora disso, só os comunicaríamos se a lei o exigisse.'
          ]
        },
        {
          h: 'Que direitos tem',
          p: [
            'Pode aceder aos seus dados, retificá-los, pedir que sejam apagados, opor-se ao tratamento, pedir a sua limitação, solicitar a portabilidade e retirar o consentimento a qualquer momento.',
            'Para os exercer, escreva para info@energiasplasencia.es indicando que direito pretende exercer. Se considerar que não o atendemos bem, pode reclamar junto da Agência Espanhola de Proteção de Dados (www.aepd.es).'
          ]
        },
        {
          h: 'Segurança',
          p: [
            'O site é servido de forma cifrada (HTTPS) e aplicamos as medidas técnicas e organizativas razoáveis para que os seus dados não se percam nem fiquem expostos.'
          ]
        },
        {
          h: 'Alterações a esta política',
          p: [
            'Se mudarmos a forma de tratar os dados, atualizaremos esta página e a data indicada acima.'
          ]
        }
      ]
    },
    cookies: {
      titulo: 'Política de cookies',
      entradilla:
        'O que este site guarda no seu navegador, para que serve e como mudar a sua decisão quando quiser.',
      secciones: [
        {
          h: 'O que são',
          p: [
            'São pequenos ficheiros ou dados que um site guarda no seu navegador. Servem para que funcione (recordar que já viu um aviso, por exemplo) ou para medir como é usado. As regras são as mesmas para os cookies e para o armazenamento local do navegador, que é o que usamos aqui.'
          ]
        },
        {
          h: 'O que usamos neste momento',
          p: [
            'Apenas armazenamento técnico: um valor que regista se aceitou ou recusou este aviso, para não voltar a perguntar em cada visita. Sem ele, o aviso apareceria sempre.',
            'Não há cookies de análise nem de publicidade instalados. Se no futuro acrescentarmos medição (por exemplo, o Google Analytics), só carregará se a aceitar e ficará detalhada na tabela abaixo.'
          ]
        },
        {
          h: 'Serviços de terceiros',
          p: [
            'As tipografias do site são carregadas a partir do Google Fonts, o que implica que o seu navegador se liga a servidores da Google e que estes recebem o seu endereço IP. Não são instalados cookies por essa utilização.'
          ]
        },
        {
          h: 'Como mudar a sua decisão',
          p: [
            'Clique em «Definições de cookies» no rodapé para voltar a ver o aviso e escolher de novo.',
            'Também pode apagar os dados do site no seu navegador, ou bloqueá-los: no Chrome, Edge, Firefox e Safari faz-se nas definições de privacidade. Tenha em conta que bloquear o armazenamento técnico fará com que o aviso apareça em todas as visitas.'
          ]
        }
      ],
      tabla: {
        titulo: 'O que fica guardado',
        cabeceras: ['Nome', 'Tipo', 'Finalidade', 'Duração'],
        filas: [
          [
            'epc-consentimiento',
            'Técnico (armazenamento local)',
            'Recordar se aceitou ou recusou o aviso de cookies',
            '12 meses'
          ]
        ]
      }
    }
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
    },
    privacidad: {
      title: 'Política de privacidade | Energías Plasencia car',
      description:
        'Quem trata os seus dados quando usa este site, com que finalidade, durante quanto tempo são conservados e como exercer os seus direitos.'
    },
    cookies: {
      title: 'Política de cookies | Energías Plasencia car',
      description:
        'O que este site guarda no seu navegador, para que serve e como mudar a sua decisão sobre o aviso de cookies a qualquer momento.'
    }
  }
};

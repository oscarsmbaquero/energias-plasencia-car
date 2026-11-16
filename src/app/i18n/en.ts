import { Dict } from './es';

export const en: Dict = {
  meta: {
    htmlLang: 'en',
    locale: 'en',
    ogLocale: 'en_GB',
    nombre: 'English',
    nombreCorto: 'EN'
  },

  nav: {
    logoAlt: 'Energías Plasencia SL',
    inicio: 'Home',
    productos: 'Products',
    info: 'Info',
    presupuesto: 'Get a quote',
    abrirMenu: 'Open menu',
    cerrarMenu: 'Close menu',
    idioma: 'Language'
  },

  footer: {
    descripcion: 'Electric mobility and EV charger installation in Plasencia (Cáceres, Spain).',
    secciones: 'Sections',
    contacto: 'Contact',
    ciudad: 'Plasencia, Cáceres',
    derechos: 'All rights reserved',
    legal: 'Legal',
    privacidad: 'Privacy policy',
    cookies: 'Cookie policy',
    configurarCookies: 'Cookie settings'
  },

  aviso: {
    titulo: 'Cookies and privacy',
    texto:
      'This site only stores in your browser what it needs to work and to remember this choice. If you accept, we may also use measurement cookies to see which pages are visited.',
    aceptar: 'Accept',
    rechazar: 'Reject',
    masInfo: 'More information',
    etiqueta: 'Cookie notice'
  },

  home: {
    altCargador: 'Portable charger for an electric vehicle',
    altCoche: 'Electric car charging at a charging point',
    eyebrow: 'Plasencia · Cáceres',
    titulo1: 'Your charging point,',
    titulo2: 'ready for your electric car',
    lead: 'Scroll down and see it charge.',
    eyebrowFinal: 'Charge at home or at your business',
    tituloFinal: 'From the socket to the road',
    verProductos: 'See products',
    persianaEyebrow: 'Installation',
    persianaTitulo: 'Charge at home, on your own energy',
    persianaTexto:
      'We install the charging point in your garage or on the front wall. And if you add solar panels, the car charges on the energy your own roof produces.',
    altPersiana: 'Charging point installed at a home with solar panels on the roof',
    ventajasEyebrow: 'Why switch to electric',
    ventajasTitulo: 'The advantages of electric mobility',
    ventajas: [
      { icono: '💶', titulo: 'Real savings', texto: 'Up to five times lower cost per kilometre than a combustion car.' },
      { icono: '🌿', titulo: 'Zero emissions', texto: 'Clean mobility and the Spanish DGT zero-emissions label.' },
      { icono: '🔧', titulo: 'Less maintenance', texto: 'No oil, no clutch and no timing belt.' },
      { icono: '🏠', titulo: 'Charge at home', texto: 'We install your charging point and certify the installation.' }
    ],
    bandaTitulo: 'Shall we talk about your installation?',
    bandaLead: 'We will put together a quote, with no commitment.'
  },

  productos: {
    eyebrow: 'Catalogue',
    titulo: 'Products',
    desde: 'From',
    categorias: {
      todos: 'All',
      cargadores: 'Chargers',
      solar: 'Solar energy'
    },
    items: {
      'wallbox-7': {
        nombre: 'Home wallbox 7.4 kW',
        descripcion: 'Single-phase charging point for a garage or a shared parking space.',
        caracteristicas: ['Single-phase 32 A', 'App control', 'Full charge in 6-8 h']
      },
      'wallbox-22': {
        nombre: 'Three-phase wallbox 22 kW',
        descripcion: 'Fast charging for homes or businesses with a three-phase supply.',
        caracteristicas: ['Three-phase 32 A', 'Dynamic load management', 'Full charge in 2-3 h']
      },
      'cargador-empresa': {
        nombre: 'Charging point for businesses',
        descripcion: 'RFID access and per-user billing for fleets and companies.',
        caracteristicas: ['Dual socket', 'RFID reader', 'Consumption reports']
      },
      'solar-hogar': {
        nombre: 'Solar panels + charging',
        descripcion: 'Charge your car with the energy from your own roof.',
        caracteristicas: ['Self-consumption', 'Surplus compensated', 'Monitoring']
      },
      bateria: {
        nombre: 'Storage battery',
        descripcion: 'Store your solar energy and use it to charge overnight.',
        caracteristicas: ['5-10 kWh', 'Backup during outages', 'Expandable']
      }
    }
  },

  info: {
    eyebrow: 'Guide',
    titulo: 'Everything about electric vehicles',
    lead: 'The questions we are asked most often before making the switch to electric.',
    tiposTitulo: 'Types of charging',
    etiquetas: { potencia: 'Power', tiempo: 'Time', uso: 'Use' },
    tipos: [
      { nombre: 'Slow charging', potencia: '3.7 kW', tiempo: '10-14 h', uso: 'Domestic socket, emergencies' },
      { nombre: 'Semi-fast charging', potencia: '7.4 - 22 kW', tiempo: '2-8 h', uso: 'Wallbox at home or at work' },
      { nombre: 'DC fast charging', potencia: '50 - 350 kW', tiempo: '20-40 min (80%)', uso: 'Charging stations en route' }
    ],
    faqTitulo: 'Frequently asked questions',
    faq: [
      {
        p: 'How much does it cost to charge an electric car at home?',
        r: 'On an off-peak tariff it works out at around €2-4 per 100 km, far below a petrol or diesel car.'
      },
      {
        p: 'Do I need permission to install a charging point?',
        r: 'In a detached house a certified installation is enough. In a block of flats you only have to notify the residents association. We handle the paperwork with you.'
      },
      {
        p: 'Are there any grants available?',
        r: 'There are grants and tax deductions for buying a vehicle and for installing a charging point. They vary by region and by year; we include the details with your quote.'
      },
      {
        p: 'What is the real range of an electric car?',
        r: 'Current models offer between 300 and 600 km depending on the battery, speed and temperature.'
      },
      {
        p: 'How long does the battery last?',
        r: 'Batteries are usually warranted for 8 years or 160,000 km, and degrade very little in normal use.'
      }
    ],
    asideTitulo: 'Want our advice?',
    asideTexto: 'Tell us about your situation and we will recommend the best charging setup.'
  },

  presupuesto: {
    eyebrow: 'No commitment',
    titulo: 'Request your quote',
    intro: 'Tell us what you need and we will reply within 24 working hours.',
    puntos: [
      'Free technical visit in Plasencia and the surrounding area',
      'Installation and certification included',
      'Information about grants and subsidies'
    ],
    okTitulo: 'Request sent!',
    okTexto: 'Thank you, we will be in touch very soon.',
    okBoton: 'Send another request',
    campos: {
      nombre: 'Name',
      telefono: 'Phone',
      email: 'Email',
      producto: 'Product of interest',
      mensaje: 'Message',
      privacidadAntes: 'I accept the ',
      privacidadEnlace: 'privacy policy',
      privacidadDespues: ' and the processing of my data.'
    },
    errores: {
      nombre: 'Please enter your name.',
      telefono: 'Invalid phone number.',
      email: 'Invalid email address.'
    },
    selectVacio: 'Select a product (optional)',
    placeholderMensaje: 'Type of property, vehicle, contracted power…',
    boton: 'Request a quote'
  },

  legal: {
    actualizado: 'Last updated: 16 November 2026',
    privacidad: {
      titulo: 'Privacy policy',
      entradilla:
        'Who processes your data when you use this site, what for, how long it is kept and what you can do about it.',
      secciones: [
        {
          h: 'Who the controller is',
          p: [
            'Energías Plasencia SL, tax ID [to be completed], registered at [address to be completed], Plasencia (Cáceres), Spain.',
            'You can write to info@energiasplasencia.es about anything concerning your data.'
          ]
        },
        {
          h: 'What data we process and why',
          p: [
            'Only what you give us in the quote form: name, phone number, email address, the product you are interested in and whatever you write in the message.',
            'We use it to answer your request, prepare the quote and keep in touch until it is settled. We do not make automated decisions or build profiles.'
          ]
        },
        {
          h: 'Our legal basis',
          p: [
            'Your consent, given when you tick the box and send the form, and the need to take pre-contractual steps at your request, which is what a quote is.'
          ]
        },
        {
          h: 'How long we keep it',
          p: [
            'While we handle your request and, afterwards, for as long as accounting and tax law require. Once those periods are over, the data is deleted.',
            'If you ask us to delete it sooner, we will, unless we are legally required to keep it.'
          ]
        },
        {
          h: 'Who we share it with',
          p: [
            'We do not sell or hand over your data. It is only accessible to the providers who serve us (web hosting and email), as processors and under contract.',
            'Beyond that, we would only disclose it if the law required us to.'
          ]
        },
        {
          h: 'Your rights',
          p: [
            'You can access your data, correct it, have it erased, object to the processing, ask for it to be restricted, request portability and withdraw your consent at any time.',
            'To do so, write to info@energiasplasencia.es stating which right you wish to exercise. If you believe we have not handled it properly, you can complain to the Spanish Data Protection Agency (www.aepd.es).'
          ]
        },
        {
          h: 'Security',
          p: [
            'The site is served encrypted (HTTPS) and we apply reasonable technical and organisational measures so your data is not lost or exposed.'
          ]
        },
        {
          h: 'Changes to this policy',
          p: ['If the way we handle data changes, we will update this page and the date shown above.']
        }
      ]
    },
    cookies: {
      titulo: 'Cookie policy',
      entradilla:
        'What this site stores in your browser, what it is for and how to change your mind whenever you like.',
      secciones: [
        {
          h: 'What they are',
          p: [
            'Cookies are small files or pieces of data a site keeps in your browser. They make it work (remembering that you have already seen a notice, for example) or measure how it is used. The same rules cover cookies and browser local storage, which is what we use here.'
          ]
        },
        {
          h: 'What we use right now',
          p: [
            'Technical storage only: one value that records whether you accepted or rejected this notice, so we do not ask again on every visit. Without it, the notice would come back every time.',
            'There are no analytics or advertising cookies installed. If we add measurement in future (Google Analytics, for instance), it will load only if you accept it and we will list it in the table below.'
          ]
        },
        {
          h: 'Third-party services',
          p: [
            'The site loads its typefaces from Google Fonts, which means your browser connects to Google servers and they receive your IP address. No cookies are set by that.'
          ]
        },
        {
          h: 'How to change your mind',
          p: [
            'Use "Cookie settings" in the footer to bring the notice back and choose again.',
            'You can also clear this site\'s data from your browser, or block it outright: in Chrome, Edge, Firefox and Safari it is under the privacy settings. Note that blocking technical storage means the notice will appear on every visit.'
          ]
        }
      ],
      tabla: {
        titulo: 'What is stored',
        cabeceras: ['Name', 'Type', 'Purpose', 'Duration'],
        filas: [
          [
            'epc-consentimiento',
            'Technical (local storage)',
            'Remembers whether you accepted or rejected the cookie notice',
            '12 months'
          ]
        ]
      }
    }
  },

  seo: {
    sitio: 'Energías Plasencia car',
    home: {
      title: 'EV charging points in Plasencia, Spain | Energías Plasencia car',
      description:
        'EV charging point installation in Plasencia and Cáceres. Home wallbox, business chargers and solar energy. Request a quote with no commitment.'
    },
    productos: {
      title: 'EV chargers and wallboxes | Energías Plasencia car',
      description:
        'Charging point catalogue: 7.4 kW home wallbox, 22 kW three-phase wallbox, chargers for businesses, solar panels and storage batteries.'
    },
    info: {
      title: 'Electric car guide: charging types and FAQs | Energías Plasencia car',
      description:
        'Charging types, charging times, cost per 100 km, available grants, real range and battery life. What you need to know before switching to electric.'
    },
    presupuesto: {
      title: 'Request an EV charging point quote | Energías Plasencia car',
      description:
        'Request a no-commitment quote to install your EV charging point in Plasencia. Free technical visit, installation and certification included.'
    },
    privacidad: {
      title: 'Privacy policy | Energías Plasencia car',
      description:
        'Who processes your data when you use this site, what for, how long it is kept and how to exercise your rights.'
    },
    cookies: {
      title: 'Cookie policy | Energías Plasencia car',
      description:
        'What this site stores in your browser, what it is for and how to change your cookie choice at any time.'
    }
  }
};

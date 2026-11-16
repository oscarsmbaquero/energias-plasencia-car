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
    derechos: 'All rights reserved'
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
      privacidad: 'I accept the privacy policy and the processing of my data.'
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
    }
  }
};

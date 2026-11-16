/**
 * Diccionario de referencia. De aquí sale el tipo `Dict`, así que al añadir
 * un texto aquí TypeScript obliga a traducirlo en en.ts y pt.ts.
 */
export const es = {
  meta: {
    htmlLang: 'es',
    /** Locale para CurrencyPipe/DatePipe (hay que registrarlo en app.config.ts). */
    locale: 'es',
    ogLocale: 'es_ES',
    nombre: 'Español',
    nombreCorto: 'ES'
  },

  nav: {
    logoAlt: 'Energías Plasencia SL',
    inicio: 'Inicio',
    productos: 'Productos',
    info: 'Info',
    presupuesto: 'Pedir presupuesto',
    abrirMenu: 'Abrir menú',
    cerrarMenu: 'Cerrar menú',
    idioma: 'Idioma'
  },

  footer: {
    descripcion: 'Movilidad eléctrica e instalación de puntos de carga en Plasencia (Cáceres).',
    secciones: 'Secciones',
    contacto: 'Contacto',
    ciudad: 'Plasencia, Cáceres',
    derechos: 'Todos los derechos reservados'
  },

  home: {
    altCargador: 'Cargador portátil para vehículo eléctrico',
    altCoche: 'Coche eléctrico cargando en un punto de carga',
    eyebrow: 'Plasencia · Cáceres',
    titulo1: 'Tu punto de carga,',
    titulo2: 'listo para tu coche eléctrico',
    lead: 'Haz scroll y descubre cómo se carga.',
    eyebrowFinal: 'Carga en casa o en tu empresa',
    tituloFinal: 'Del enchufe a la carretera',
    verProductos: 'Ver productos',
    ventajasEyebrow: 'Por qué pasarte al eléctrico',
    ventajasTitulo: 'Ventajas de la movilidad eléctrica',
    ventajas: [
      { icono: '💶', titulo: 'Ahorro real', texto: 'Hasta 5 veces menos coste por kilómetro que un coche de combustión.' },
      { icono: '🌿', titulo: 'Cero emisiones', texto: 'Movilidad limpia y etiqueta 0 de la DGT.' },
      { icono: '🔧', titulo: 'Menos mantenimiento', texto: 'Sin aceite, embrague ni correa de distribución.' },
      { icono: '🏠', titulo: 'Carga en casa', texto: 'Instalamos tu punto de carga y legalizamos la instalación.' }
    ],
    bandaTitulo: '¿Hablamos de tu instalación?',
    bandaLead: 'Te preparamos un presupuesto sin compromiso.'
  },

  productos: {
    eyebrow: 'Catálogo',
    titulo: 'Productos',
    desde: 'Desde',
    categorias: {
      todos: 'Todos',
      cargadores: 'Cargadores',
      solar: 'Energía solar'
    },
    items: {
      'wallbox-7': {
        nombre: 'Wallbox doméstico 7,4 kW',
        descripcion: 'Punto de carga monofásico para garaje o plaza de comunidad.',
        caracteristicas: ['Monofásico 32 A', 'Control por app', 'Carga completa en 6-8 h']
      },
      'wallbox-22': {
        nombre: 'Wallbox trifásico 22 kW',
        descripcion: 'Carga rápida para vivienda o empresa con instalación trifásica.',
        caracteristicas: ['Trifásico 32 A', 'Gestión dinámica de potencia', 'Carga completa en 2-3 h']
      },
      'cargador-empresa': {
        nombre: 'Punto de carga para empresas',
        descripcion: 'Solución con RFID y facturación por usuario para flotas y negocios.',
        caracteristicas: ['Doble toma', 'Lectura RFID', 'Informe de consumos']
      },
      'solar-hogar': {
        nombre: 'Placas solares + carga',
        descripcion: 'Carga tu coche con la energía de tu propio tejado.',
        caracteristicas: ['Autoconsumo', 'Excedentes compensados', 'Monitorización']
      },
      bateria: {
        nombre: 'Batería de almacenamiento',
        descripcion: 'Guarda la energía solar y úsala por la noche para cargar.',
        caracteristicas: ['5-10 kWh', 'Respaldo ante cortes', 'Ampliable']
      }
    }
  },

  info: {
    eyebrow: 'Guía',
    titulo: 'Todo sobre vehículos eléctricos',
    lead: 'Resolvemos las dudas más habituales antes de dar el salto a la movilidad eléctrica.',
    tiposTitulo: 'Tipos de carga',
    etiquetas: { potencia: 'Potencia', tiempo: 'Tiempo', uso: 'Uso' },
    tipos: [
      { nombre: 'Carga lenta', potencia: '3,7 kW', tiempo: '10-14 h', uso: 'Enchufe doméstico, emergencias' },
      { nombre: 'Carga semirrápida', potencia: '7,4 - 22 kW', tiempo: '2-8 h', uso: 'Wallbox en casa o empresa' },
      { nombre: 'Carga rápida DC', potencia: '50 - 350 kW', tiempo: '20-40 min (80 %)', uso: 'Electrolineras en ruta' }
    ],
    faqTitulo: 'Preguntas frecuentes',
    faq: [
      {
        p: '¿Cuánto cuesta cargar un coche eléctrico en casa?',
        r: 'Con tarifa nocturna el coste ronda 2-4 € cada 100 km, muy por debajo de un coche de gasolina o diésel.'
      },
      {
        p: '¿Necesito permiso para instalar un punto de carga?',
        r: 'En vivienda unifamiliar basta con la instalación legalizada. En comunidad de vecinos solo hay que comunicarlo a la comunidad. Nosotros te ayudamos con los trámites.'
      },
      {
        p: '¿Hay ayudas disponibles?',
        r: 'Existen subvenciones y deducciones fiscales para la compra de vehículos y la instalación de puntos de carga. Varían según la comunidad y el año; te informamos en el presupuesto.'
      },
      {
        p: '¿Qué autonomía real tiene un eléctrico?',
        r: 'Los modelos actuales ofrecen entre 300 y 600 km según batería, velocidad y temperatura.'
      },
      {
        p: '¿Cuánto dura la batería?',
        r: 'Suelen tener garantía de 8 años o 160.000 km, con una degradación muy baja en uso normal.'
      }
    ],
    asideTitulo: '¿Te asesoramos?',
    asideTexto: 'Cuéntanos tu caso y te recomendamos la mejor solución de carga.'
  },

  presupuesto: {
    eyebrow: 'Sin compromiso',
    titulo: 'Pide tu presupuesto',
    intro: 'Cuéntanos qué necesitas y te responderemos en menos de 24 horas laborables.',
    puntos: [
      'Visita técnica gratuita en Plasencia y alrededores',
      'Instalación y legalización incluidas',
      'Información sobre ayudas y subvenciones'
    ],
    okTitulo: '¡Solicitud enviada!',
    okTexto: 'Gracias, nos pondremos en contacto contigo muy pronto.',
    okBoton: 'Enviar otra solicitud',
    campos: {
      nombre: 'Nombre',
      telefono: 'Teléfono',
      email: 'Email',
      producto: 'Producto de interés',
      mensaje: 'Mensaje',
      privacidad: 'Acepto la política de privacidad y el tratamiento de mis datos.'
    },
    errores: {
      nombre: 'Indica tu nombre.',
      telefono: 'Teléfono no válido.',
      email: 'Email no válido.'
    },
    selectVacio: 'Selecciona un producto (opcional)',
    placeholderMensaje: 'Tipo de vivienda, vehículo, potencia contratada…',
    boton: 'Solicitar presupuesto'
  },

  seo: {
    sitio: 'Energías Plasencia car',
    home: {
      title: 'Puntos de carga para coche eléctrico en Plasencia | Energías Plasencia car',
      description:
        'Instalación de puntos de carga para vehículo eléctrico en Plasencia y Cáceres. Wallbox doméstico, para empresas y energía solar. Presupuesto sin compromiso.'
    },
    productos: {
      title: 'Cargadores y wallbox para coche eléctrico | Energías Plasencia car',
      description:
        'Catálogo de puntos de carga: wallbox doméstico de 7,4 kW, trifásico de 22 kW, cargadores para empresas, placas solares y baterías de almacenamiento.'
    },
    info: {
      title: 'Guía del coche eléctrico: tipos de carga y dudas | Energías Plasencia car',
      description:
        'Tipos de carga, tiempos, coste por 100 km, ayudas disponibles, autonomía real y vida de la batería. Lo que necesitas saber antes de pasarte al eléctrico.'
    },
    presupuesto: {
      title: 'Pedir presupuesto de punto de carga | Energías Plasencia car',
      description:
        'Pide presupuesto sin compromiso para instalar tu punto de carga en Plasencia. Visita técnica gratuita, instalación y legalización incluidas.'
    }
  }
};

/** Forma del diccionario; la fija el español. */
export type Dict = typeof es;

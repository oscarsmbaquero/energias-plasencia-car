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
    derechos: 'Todos los derechos reservados',
    legal: 'Legal',
    privacidad: 'Política de privacidad',
    cookies: 'Política de cookies',
    configurarCookies: 'Configurar cookies'
  },

  /** Aviso de cookies que aparece al entrar. */
  aviso: {
    titulo: 'Cookies y privacidad',
    texto:
      'Esta web solo guarda en tu navegador lo imprescindible para funcionar y para recordar esta elección. Si aceptas, podremos usar además cookies de medición para saber qué páginas se visitan.',
    aceptar: 'Aceptar',
    rechazar: 'Rechazar',
    masInfo: 'Más información',
    etiqueta: 'Aviso de cookies'
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
      privacidadAntes: 'Acepto la ',
      privacidadEnlace: 'política de privacidad',
      privacidadDespues: ' y el tratamiento de mis datos.'
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

  /**
   * Textos legales. Son una plantilla: lo que aparece entre corchetes hay que
   * completarlo con los datos reales de la empresa y conviene que lo revise un
   * abogado antes de publicar.
   */
  legal: {
    actualizado: 'Última actualización: 16 de noviembre de 2026',
    privacidad: {
      titulo: 'Política de privacidad',
      entradilla:
        'Aquí explicamos quién trata tus datos cuando usas esta web, para qué, durante cuánto tiempo y qué puedes hacer al respecto.',
      secciones: [
        {
          h: 'Quién es el responsable',
          p: [
            'Energías Plasencia SL, con CIF [CIF por completar] y domicilio en [dirección por completar], Plasencia (Cáceres), España.',
            'Puedes escribirnos a info@energiasplasencia.es para cualquier cuestión relacionada con tus datos.'
          ]
        },
        {
          h: 'Qué datos tratamos y para qué',
          p: [
            'Solo los que nos facilitas en el formulario de presupuesto: nombre, teléfono, correo electrónico, el producto que te interesa y el mensaje que escribas.',
            'Los usamos para responder a tu solicitud, preparar el presupuesto y mantener el contacto necesario hasta cerrarlo. No tomamos decisiones automatizadas ni elaboramos perfiles.'
          ]
        },
        {
          h: 'Por qué podemos tratarlos',
          p: [
            'Por tu consentimiento, que nos das al marcar la casilla y enviar el formulario, y por la necesidad de aplicar medidas precontractuales a petición tuya, que es lo que es un presupuesto.'
          ]
        },
        {
          h: 'Cuánto tiempo los guardamos',
          p: [
            'Mientras gestionamos tu solicitud y, después, durante los plazos que exige la ley para las obligaciones contables y fiscales. Cumplidos esos plazos, se suprimen.',
            'Si nos pides que los borremos antes, lo hacemos salvo que tengamos obligación legal de conservarlos.'
          ]
        },
        {
          h: 'Con quién los compartimos',
          p: [
            'No vendemos ni cedemos tus datos. Solo acceden a ellos los proveedores que nos prestan servicios (alojamiento web y correo electrónico), como encargados del tratamiento y con contrato de por medio.',
            'Fuera de eso, únicamente los comunicaríamos si nos lo exigiera una obligación legal.'
          ]
        },
        {
          h: 'Qué derechos tienes',
          p: [
            'Puedes acceder a tus datos, rectificarlos, suprimirlos, oponerte al tratamiento, pedir que se limite, solicitar su portabilidad y retirar tu consentimiento en cualquier momento.',
            'Para ejercerlos, escribe a info@energiasplasencia.es indicando qué derecho quieres ejercer. Si crees que no te hemos atendido bien, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).'
          ]
        },
        {
          h: 'Seguridad',
          p: [
            'La web se sirve cifrada (HTTPS) y aplicamos las medidas técnicas y organizativas razonables para evitar que tus datos se pierdan o acaben en manos de quien no debe.'
          ]
        },
        {
          h: 'Cambios en esta política',
          p: [
            'Si cambiamos la forma de tratar los datos, actualizaremos esta página y la fecha que aparece arriba.'
          ]
        }
      ]
    },
    cookies: {
      titulo: 'Política de cookies',
      entradilla:
        'Qué guarda esta web en tu navegador, para qué sirve y cómo puedes cambiar tu decisión cuando quieras.',
      secciones: [
        {
          h: 'Qué son',
          p: [
            'Son pequeños archivos o datos que una web guarda en tu navegador. Sirven para que funcione (recordar que ya has visto un aviso, por ejemplo) o para medir cómo se usa. Las normas son las mismas para las cookies y para el almacenamiento local del navegador, que es lo que usamos aquí.'
          ]
        },
        {
          h: 'Qué usamos ahora mismo',
          p: [
            'Solo almacenamiento técnico: un dato que recuerda si aceptaste o rechazaste este aviso, para no volver a preguntártelo en cada visita. Sin él, el aviso aparecería una y otra vez.',
            'No hay cookies de analítica ni de publicidad instaladas. Si en el futuro añadimos medición (por ejemplo, Google Analytics), solo se cargará si la aceptas y lo detallaremos en esta tabla.'
          ]
        },
        {
          h: 'Servicios de terceros',
          p: [
            'Las tipografías de la web se cargan desde Google Fonts, lo que implica que tu navegador se conecta a servidores de Google y que estos reciben tu dirección IP. No instalan cookies por ese uso.'
          ]
        },
        {
          h: 'Cómo cambiar tu decisión',
          p: [
            'Pulsa «Configurar cookies» en el pie de la web para volver a ver el aviso y elegir de nuevo.',
            'También puedes borrar los datos del sitio desde tu navegador, o bloquearlos directamente: en Chrome, Edge, Firefox y Safari se hace desde los ajustes de privacidad. Ten en cuenta que bloquear el almacenamiento técnico hará que el aviso te aparezca en cada visita.'
          ]
        }
      ],
      tabla: {
        titulo: 'Lo que se guarda',
        cabeceras: ['Nombre', 'Tipo', 'Finalidad', 'Duración'],
        filas: [
          [
            'epc-consentimiento',
            'Técnica (almacenamiento local)',
            'Recordar si aceptaste o rechazaste el aviso de cookies',
            '12 meses'
          ]
        ]
      }
    }
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
    },
    privacidad: {
      title: 'Política de privacidad | Energías Plasencia car',
      description:
        'Quién trata tus datos cuando usas esta web, con qué finalidad, durante cuánto tiempo se conservan y cómo ejercer tus derechos.'
    },
    cookies: {
      title: 'Política de cookies | Energías Plasencia car',
      description:
        'Qué guarda esta web en tu navegador, para qué sirve y cómo cambiar tu decisión sobre el aviso de cookies en cualquier momento.'
    }
  }
};

/** Forma del diccionario; la fija el español. */
export type Dict = typeof es;

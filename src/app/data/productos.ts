export type Categoria = 'cargadores' | 'vehiculos' | 'solar';

export interface Producto {
  id: string;
  nombre: string;
  categoria: Categoria;
  descripcion: string;
  caracteristicas: string[];
  precioDesde: number;
  icono: string;
}

export const CATEGORIAS: { id: Categoria | 'todos'; etiqueta: string }[] = [
  { id: 'todos', etiqueta: 'Todos' },
  { id: 'cargadores', etiqueta: 'Cargadores' },
  { id: 'vehiculos', etiqueta: 'Vehículos' },
  { id: 'solar', etiqueta: 'Energía solar' }
];

// Datos de ejemplo: sustituir por los productos reales.
export const PRODUCTOS: Producto[] = [
  {
    id: 'wallbox-7',
    nombre: 'Wallbox doméstico 7,4 kW',
    categoria: 'cargadores',
    descripcion: 'Punto de carga monofásico para garaje o plaza de comunidad.',
    caracteristicas: ['Monofásico 32 A', 'Control por app', 'Carga completa en 6-8 h'],
    precioDesde: 890,
    icono: '🔌'
  },
  {
    id: 'wallbox-22',
    nombre: 'Wallbox trifásico 22 kW',
    categoria: 'cargadores',
    descripcion: 'Carga rápida para vivienda o empresa con instalación trifásica.',
    caracteristicas: ['Trifásico 32 A', 'Gestión dinámica de potencia', 'Carga completa en 2-3 h'],
    precioDesde: 1390,
    icono: '⚡'
  },
  {
    id: 'cargador-empresa',
    nombre: 'Punto de carga para empresas',
    categoria: 'cargadores',
    descripcion: 'Solución con RFID y facturación por usuario para flotas y negocios.',
    caracteristicas: ['Doble toma', 'Lectura RFID', 'Informe de consumos'],
    precioDesde: 2450,
    icono: '🏢'
  },
  {
    id: 'urbano',
    nombre: 'Eléctrico urbano',
    categoria: 'vehiculos',
    descripcion: 'Compacto, ágil y con coste por kilómetro mínimo para ciudad.',
    caracteristicas: ['Autonomía 300 km', 'Etiqueta ECO/0', 'Carga rápida DC'],
    precioDesde: 24900,
    icono: '🚗'
  },
  {
    id: 'suv',
    nombre: 'SUV eléctrico familiar',
    categoria: 'vehiculos',
    descripcion: 'Espacio y autonomía para viajar con toda la familia.',
    caracteristicas: ['Autonomía 500 km', '5 plazas', 'Maletero 500 L'],
    precioDesde: 39900,
    icono: '🚙'
  },
  {
    id: 'furgoneta',
    nombre: 'Furgoneta eléctrica',
    categoria: 'vehiculos',
    descripcion: 'Para autónomos y reparto, con ahorro en combustible y mantenimiento.',
    caracteristicas: ['Hasta 1.000 kg de carga', 'Autonomía 280 km', 'Acceso a zonas ZBE'],
    precioDesde: 32500,
    icono: '🚐'
  },
  {
    id: 'solar-hogar',
    nombre: 'Placas solares + carga',
    categoria: 'solar',
    descripcion: 'Carga tu coche con la energía de tu propio tejado.',
    caracteristicas: ['Autoconsumo', 'Excedentes compensados', 'Monitorización'],
    precioDesde: 4200,
    icono: '☀️'
  },
  {
    id: 'bateria',
    nombre: 'Batería de almacenamiento',
    categoria: 'solar',
    descripcion: 'Guarda la energía solar y úsala por la noche para cargar.',
    caracteristicas: ['5-10 kWh', 'Respaldo ante cortes', 'Ampliable'],
    precioDesde: 3600,
    icono: '🔋'
  }
];

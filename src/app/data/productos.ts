import { Dict } from '../i18n/es';

export type Categoria = 'cargadores' | 'solar';
export type Filtro = Categoria | 'todos';

/**
 * Los ids salen del diccionario: si se añade un producto aquí sin sus textos en
 * es.ts, en.ts y pt.ts, TypeScript lo detecta en el build.
 */
export type ProductoId = keyof Dict['productos']['items'];

export interface Producto {
  id: ProductoId;
  categoria: Categoria;
  precioDesde: number;
  icono: string;
  /**
   * Foto de la ficha, dentro de public/images/. Es opcional: el producto que no
   * la tenga se pinta con su icono sobre el fondo de marca, sin hueco raro.
   */
  foto?: string;
  /**
   * `contener` para las fotos de producto recortadas sobre fondo blanco: se
   * enseñan enteras sobre el fondo de marca en vez de recortarse. Por defecto la
   * foto llena la banda, que es lo que quieren las fotos de escena.
   */
  encaje?: 'contener';
}

export const FILTROS: Filtro[] = ['todos', 'cargadores', 'solar'];

/**
 * Nombres, descripciones y características están en src/app/i18n/*.ts.
 *
 * TODO: las fotos son las que había en la web, reaprovechadas por parecido, no
 * fotos de cada producto. Lo suyo son cinco fotos propias de instalaciones
 * reales, apaisadas y de 1200 px de ancho o más. A `bateria` no se le ha puesto
 * ninguna porque no hay nada que se le parezca.
 */
export const PRODUCTOS: Producto[] = [
  { id: 'wallbox-7', categoria: 'cargadores', precioDesde: 890, icono: '🔌', foto: 'cargador.webp', encaje: 'contener' },
  { id: 'wallbox-22', categoria: 'cargadores', precioDesde: 1390, icono: '⚡', foto: 'tesla-cargador.webp' },
  { id: 'cargador-empresa', categoria: 'cargadores', precioDesde: 2450, icono: '🏢', foto: 'coche-cargando2.jpg' },
  { id: 'solar-hogar', categoria: 'solar', precioDesde: 4200, icono: '☀️', foto: 'renualt-cargando.jpg' },
  { id: 'bateria', categoria: 'solar', precioDesde: 3600, icono: '🔋' }
];

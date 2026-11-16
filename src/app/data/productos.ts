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
}

export const FILTROS: Filtro[] = ['todos', 'cargadores', 'solar'];

/** Nombres, descripciones y características están en src/app/i18n/*.ts. */
export const PRODUCTOS: Producto[] = [
  { id: 'wallbox-7', categoria: 'cargadores', precioDesde: 890, icono: '🔌' },
  { id: 'wallbox-22', categoria: 'cargadores', precioDesde: 1390, icono: '⚡' },
  { id: 'cargador-empresa', categoria: 'cargadores', precioDesde: 2450, icono: '🏢' },
  { id: 'solar-hogar', categoria: 'solar', precioDesde: 4200, icono: '☀️' },
  { id: 'bateria', categoria: 'solar', precioDesde: 3600, icono: '🔋' }
];

import { PRIMARY_OUTLET, Params, Router } from '@angular/router';

/** Idiomas publicados. El primero es el de defecto y vive en la raíz (sin prefijo). */
export const IDIOMAS = ['es', 'en', 'pt'] as const;
export type Idioma = (typeof IDIOMAS)[number];
export const IDIOMA_DEFECTO: Idioma = 'es';

export type Pagina = 'home' | 'productos' | 'info' | 'presupuesto' | 'privacidad' | 'cookies';

/** Ruta (sin prefijo de idioma) → página, para los metadatos de SEO. */
const PAGINAS: Record<string, Pagina> = {
  '/': 'home',
  '/productos': 'productos',
  '/info': 'info',
  '/presupuesto': 'presupuesto',
  '/privacidad': 'privacidad',
  '/cookies': 'cookies'
};

export interface Ubicacion {
  idioma: Idioma;
  /** Ruta sin el prefijo de idioma, siempre con barra inicial: '/', '/productos'… */
  ruta: string;
  pagina: Pagina;
  query: Params;
}

function esIdioma(valor: string | undefined): valor is Idioma {
  return !!valor && (IDIOMAS as readonly string[]).includes(valor);
}

/**
 * Deduce idioma y ruta de una URL. Es una función pura a propósito: tanto el
 * servicio de idioma como el de SEO la usan por separado, así ninguno depende
 * del orden en que se suscriban a los eventos del router (importa en SSR,
 * donde la navegación inicial termina antes de crear el componente raíz).
 */
export function analizarUrl(router: Router, url: string): Ubicacion {
  const arbol = router.parseUrl(url);
  const segmentos = arbol.root.children[PRIMARY_OUTLET]?.segments.map(s => s.path) ?? [];
  const primero = segmentos[0];
  const conPrefijo = esIdioma(primero);
  const resto = conPrefijo ? segmentos.slice(1) : segmentos;
  const ruta = '/' + resto.join('/');

  return {
    idioma: conPrefijo ? primero : IDIOMA_DEFECTO,
    ruta,
    pagina: PAGINAS[ruta] ?? 'home',
    query: arbol.queryParams
  };
}

/** Prefijo de URL de un idioma: '' para el de defecto, '/en', '/pt'… */
export function prefijoDe(idioma: Idioma): string {
  return idioma === IDIOMA_DEFECTO ? '' : `/${idioma}`;
}

/** Une prefijo y ruta: ('/en', '/productos') → '/en/productos'; ('', '/') → '/'. */
export function rutaCon(idioma: Idioma, ruta: string): string {
  const prefijo = prefijoDe(idioma);
  if (ruta === '/') return prefijo || '/';
  return prefijo + ruta;
}

import { RenderMode, ServerRoute } from '@angular/ssr';

const RUTAS = ['', 'productos', 'info', 'presupuesto', 'privacidad', 'cookies'];
/** '' = español en la raíz. */
const PREFIJOS = ['', 'en', 'pt'];

/**
 * Las 18 páginas (6 × 3 idiomas) se generan como HTML estático en el build
 * (prerender): el buscador recibe el contenido ya renderizado y el visitante no
 * espera a que arranque JavaScript. Lo que no esté en la lista se renderiza en
 * el servidor al pedirlo.
 */
export const serverRoutes: ServerRoute[] = [
  ...PREFIJOS.flatMap(prefijo =>
    RUTAS.map(
      ruta =>
        ({
          path: [prefijo, ruta].filter(Boolean).join('/'),
          renderMode: RenderMode.Prerender
        }) as ServerRoute
    )
  ),
  { path: '**', renderMode: RenderMode.Server }
];

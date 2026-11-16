import { Routes } from '@angular/router';

/**
 * Las mismas páginas se montan tres veces: en la raíz (español) y bajo /en y /pt.
 * Cada idioma tiene así su propia URL, que es lo que necesitan los buscadores
 * para indexar las tres versiones y relacionarlas con hreflang.
 *
 * Es una función y no una constante para que cada idioma reciba objetos de ruta
 * nuevos y el router no comparta estado interno entre ramas.
 */
function paginas(): Routes {
  return [
    { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'productos', loadComponent: () => import('./pages/productos/productos').then(m => m.Productos) },
    { path: 'info', loadComponent: () => import('./pages/info/info').then(m => m.Info) },
    { path: 'presupuesto', loadComponent: () => import('./pages/presupuesto/presupuesto').then(m => m.Presupuesto) },
    // Cualquier otra cosa dentro del idioma vuelve a su portada.
    { path: '**', redirectTo: '' }
  ];
}

// Los idiomas con prefijo van primero: así '/en' no lo intenta captar la rama raíz.
export const routes: Routes = [
  { path: 'en', children: paginas() },
  { path: 'pt', children: paginas() },
  { path: '', children: paginas() }
];

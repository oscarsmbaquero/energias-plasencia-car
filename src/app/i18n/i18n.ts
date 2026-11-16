import { Injectable, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { Dict, es } from './es';
import { en } from './en';
import { pt } from './pt';
import { IDIOMAS, Idioma, Ubicacion, analizarUrl, rutaCon } from './idiomas';

export const DICCIONARIOS: Record<Idioma, Dict> = { es, en, pt };

/**
 * Idioma activo y textos. El idioma lo manda la URL ('/' español, '/en', '/pt'),
 * no una preferencia guardada: así cada idioma tiene su propia dirección y los
 * buscadores pueden indexar las tres versiones.
 */
@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly router = inject(Router);

  private readonly ubicacion = signal<Ubicacion>(analizarUrl(this.router, this.router.url));

  readonly idioma = computed(() => this.ubicacion().idioma);
  /** Ruta sin prefijo de idioma: '/', '/productos'… */
  readonly ruta = computed(() => this.ubicacion().ruta);
  readonly query = computed(() => this.ubicacion().query);
  /** Diccionario del idioma activo. */
  readonly d = computed(() => DICCIONARIOS[this.idioma()]);
  readonly idiomas = IDIOMAS;

  constructor() {
    // La navegación inicial puede haber terminado antes de crear el componente
    // raíz (ocurre en SSR), de ahí el valor inicial leído del router arriba.
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(e => this.ubicacion.set(analizarUrl(this.router, e.urlAfterRedirects)));
  }

  /** Ruta interna con el prefijo del idioma activo: l('/productos') → '/en/productos'. */
  l(ruta: string): string {
    return rutaCon(this.idioma(), ruta);
  }

  /** La página actual en otro idioma, para el selector del header. */
  urlDe(idioma: Idioma): string {
    return rutaCon(idioma, this.ruta());
  }

  nombreDe(idioma: Idioma): string {
    return DICCIONARIOS[idioma].meta.nombre;
  }

  siglaDe(idioma: Idioma): string {
    return DICCIONARIOS[idioma].meta.nombreCorto;
  }
}

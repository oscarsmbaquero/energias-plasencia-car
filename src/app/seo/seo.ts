import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { DICCIONARIOS } from '../i18n/i18n';
import { IDIOMAS, IDIOMA_DEFECTO, Idioma, Pagina, analizarUrl, rutaCon } from '../i18n/idiomas';
import { EMPRESA, IMAGEN_SOCIAL, SITIO_URL } from './sitio';

/**
 * Metadatos para buscadores y redes sociales en cada navegación: título,
 * descripción, canónica, hreflang de los tres idiomas, Open Graph, Twitter Card
 * y datos estructurados (JSON-LD).
 *
 * Se actualiza desde los eventos del router, no desde un `effect`, para que al
 * renderizar en el servidor las etiquetas estén ya en el HTML que recibe Google:
 * es justo lo que un rastreador lee antes de ejecutar JavaScript.
 */
@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly doc = inject(DOCUMENT);
  private readonly titulo = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);

  constructor() {
    this.aplicar(this.router.url);
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(e => this.aplicar(e.urlAfterRedirects));
  }

  private aplicar(url: string): void {
    const { idioma, ruta, pagina } = analizarUrl(this.router, url);
    const d = DICCIONARIOS[idioma];
    const ficha = d.seo[pagina];
    const canonica = this.absoluta(rutaCon(idioma, ruta));

    this.doc.documentElement.lang = d.meta.htmlLang;
    this.titulo.setTitle(ficha.title);

    this.meta.updateTag({ name: 'description', content: ficha.description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: d.seo.sitio });
    this.meta.updateTag({ property: 'og:title', content: ficha.title });
    this.meta.updateTag({ property: 'og:description', content: ficha.description });
    this.meta.updateTag({ property: 'og:url', content: canonica });
    this.meta.updateTag({ property: 'og:image', content: this.absoluta('/' + IMAGEN_SOCIAL) });
    this.meta.updateTag({ property: 'og:image:alt', content: d.home.altCoche });
    this.meta.updateTag({ property: 'og:locale', content: d.meta.ogLocale });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: ficha.title });
    this.meta.updateTag({ name: 'twitter:description', content: ficha.description });
    this.meta.updateTag({ name: 'twitter:image', content: this.absoluta('/' + IMAGEN_SOCIAL) });

    this.enlace('canonical', canonica);
    // hreflang: le dice a Google que las tres son la misma página en otro idioma.
    for (const otro of IDIOMAS) {
      this.enlace('alternate', this.absoluta(rutaCon(otro, ruta)), otro);
    }
    this.enlace('alternate', this.absoluta(rutaCon(IDIOMA_DEFECTO, ruta)), 'x-default');

    this.datosEstructurados(idioma, pagina, canonica);
  }

  private absoluta(ruta: string): string {
    return SITIO_URL + (ruta.startsWith('/') ? ruta : '/' + ruta);
  }

  private enlace(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]:not([hreflang])`;
    let el = this.doc.head.querySelector(selector) as HTMLLinkElement | null;

    if (!el) {
      el = this.doc.createElement('link');
      el.setAttribute('rel', rel);
      if (hreflang) el.setAttribute('hreflang', hreflang);
      this.doc.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }

  private datosEstructurados(idioma: Idioma, pagina: Pagina, canonica: string): void {
    const d = DICCIONARIOS[idioma];

    this.jsonLd('ld-negocio', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': SITIO_URL + '/#negocio',
      name: EMPRESA.seccion,
      legalName: EMPRESA.nombre,
      url: canonica,
      image: this.absoluta('/' + IMAGEN_SOCIAL),
      logo: this.absoluta('/images/logo.svg'),
      description: d.seo.home.description,
      email: EMPRESA.email,
      ...(EMPRESA.telefono ? { telephone: EMPRESA.telefono } : {}),
      address: {
        '@type': 'PostalAddress',
        ...(EMPRESA.calle ? { streetAddress: EMPRESA.calle } : {}),
        addressLocality: EMPRESA.ciudad,
        addressRegion: EMPRESA.provincia,
        ...(EMPRESA.codigoPostal ? { postalCode: EMPRESA.codigoPostal } : {}),
        addressCountry: EMPRESA.pais
      },
      areaServed: [
        { '@type': 'City', name: 'Plasencia' },
        { '@type': 'AdministrativeArea', name: 'Cáceres' },
        { '@type': 'AdministrativeArea', name: 'Extremadura' }
      ],
      knowsLanguage: IDIOMAS.map(i => DICCIONARIOS[i].meta.htmlLang),
      makesOffer: Object.entries(d.productos.items).map(([, item]) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: item.nombre, description: item.descripcion }
      }))
    });

    // Las preguntas frecuentes pueden salir desplegadas en los resultados de Google.
    this.jsonLd(
      'ld-faq',
      pagina === 'info'
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: d.meta.htmlLang,
            mainEntity: d.info.faq.map(f => ({
              '@type': 'Question',
              name: f.p,
              acceptedAnswer: { '@type': 'Answer', text: f.r }
            }))
          }
        : null
    );
  }

  private jsonLd(id: string, datos: unknown | null): void {
    let el = this.doc.getElementById(id) as HTMLScriptElement | null;

    if (!datos) {
      if (el?.parentNode) el.parentNode.removeChild(el);
      return;
    }
    if (!el) {
      el = this.doc.createElement('script');
      el.setAttribute('type', 'application/ld+json');
      el.id = id;
      this.doc.head.appendChild(el);
    }
    el.textContent = JSON.stringify(datos);
  }
}

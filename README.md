# Energías Plasencia · car

Web de **car**, la sección de movilidad eléctrica de **Energías Plasencia SL**: información sobre vehículos eléctricos y puntos de carga.

Hecha con **Angular 21** (standalone, signals, control flow `@if`/`@for`), **SCSS**, el **grid de Bootstrap 5** y **SSR con prerenderizado**. Tres idiomas: español, inglés y portugués.

## Arrancar

```bash
npm install
npm start          # http://localhost:4200 (con SSR)
npm run build      # dist/energia-plasencia-car
npm run serve:ssr:energia-plasencia-car   # sirve el build en http://localhost:4000
```

## Secciones

| Ruta | Contenido |
|---|---|
| `/` | Portada con efecto de scroll (cargador → coche cargando) y ventajas |
| `/productos` | Catálogo de puntos de carga y energía solar, filtrable por categoría |
| `/info` | Tipos de carga y preguntas frecuentes |
| `/presupuesto` | Formulario reactivo con validación |

Cada una existe en los tres idiomas: `/productos`, `/en/productos`, `/pt/productos`. Las rutas se cargan con `loadComponent` (lazy loading), así GSAP solo se descarga en la portada.

## Idiomas

El idioma lo manda **la URL**, no una preferencia guardada: el español vive en la raíz y los otros bajo `/en` y `/pt`. Así cada versión tiene su propia dirección indexable y se relacionan entre sí con `hreflang`.

- **Textos** — [src/app/i18n/es.ts](src/app/i18n/es.ts) es el diccionario de referencia; de él sale el tipo `Dict`, así que al añadir un texto el compilador obliga a traducirlo en [en.ts](src/app/i18n/en.ts) y [pt.ts](src/app/i18n/pt.ts). Ahí está todo: navegación, páginas, formulario, textos de los productos y los títulos y descripciones de SEO.
- **Servicio** — [i18n.ts](src/app/i18n/i18n.ts) expone `d()` (textos del idioma activo) y `l('/ruta')` (enlace interno con el prefijo correcto). En las plantillas: `{{ t().nav.productos }}` y `[routerLink]="i18n.l('/productos')"`.
- **Selector** — en el header, con enlaces reales a la misma página en el otro idioma (un `href` que Google puede seguir, no un botón de JavaScript).
- **Formato de números** — cada idioma trae su `locale` (`es`, `en`, `pt-PT`), registrado en [app.config.ts](src/app/app.config.ts). Los precios salen como `1.390 €`, `€1,390` y `1 390 €`.

**Para añadir un cuarto idioma:** añádelo a `IDIOMAS` en [idiomas.ts](src/app/i18n/idiomas.ts), crea su diccionario, regístralo en `DICCIONARIOS`, añade su rama en [app.routes.ts](src/app/app.routes.ts) y su prefijo en [app.routes.server.ts](src/app/app.routes.server.ts) y en `public/sitemap.xml`.

## SSR y prerenderizado

Las 12 páginas (4 × 3 idiomas) se generan como **HTML estático durante el build**: el buscador recibe el contenido ya renderizado y el visitante ve la página antes de que arranque JavaScript. Lo que no esté en esa lista se renderiza en el servidor al pedirlo ([app.routes.server.ts](src/app/app.routes.server.ts)).

> **Importante al desplegar:** el motor SSR valida la cabecera `Host`. Si el dominio no está en `allowedHosts` (en `architect.build.options.security` de [angular.json](angular.json)), **el servidor deja de renderizar y devuelve la versión vacía para el cliente**, que es justo lo que no quieres que vea Google. Pon ahí el dominio real, o pásalo al arrancar con `NG_ALLOWED_HOSTS=midominio.es`. Si el servidor está detrás de un proxy o CDN, configura además `trustProxyHeaders`.

Lo que no sea una ruta conocida redirige (302) a la portada de su idioma.

## SEO

[seo.ts](src/app/seo/seo.ts) actualiza en cada navegación, y ya dentro del HTML que sale del servidor:

- `<title>` y `<meta name="description">` propios de cada página y cada idioma.
- `<html lang>` correcto.
- `<link rel="canonical">` y `hreflang` para los tres idiomas más `x-default`.
- Open Graph y Twitter Card (para enlaces compartidos en redes y WhatsApp).
- **Datos estructurados** JSON-LD: ficha `LocalBusiness` con la zona de servicio y los productos como ofertas, y `FAQPage` en `/info`, que es lo que puede hacer que las preguntas salgan desplegadas en los resultados de Google.

Completan el conjunto [public/robots.txt](public/robots.txt) y [public/sitemap.xml](public/sitemap.xml), con las 12 URLs y sus alternativas de idioma.

El dominio está en un solo sitio del código, `SITIO_URL` de [src/app/seo/sitio.ts](src/app/seo/sitio.ts), **pero también en `robots.txt` y `sitemap.xml`**: si cambia, cámbialo en los tres.

## Efecto de scroll de la portada

En [home.ts](src/app/pages/home/home.ts) se usa GSAP + ScrollTrigger con `pin` y `scrub`: la sección queda fija mientras el scroll descubre la segunda capa con un `clip-path` de izquierda a derecha, y después aparece el texto.

El hero son **dos capas**, no dos imágenes sueltas, porque las fotos tienen encuadres distintos:

- `.capa-inicial` — `cargador.webp` es una foto de producto recortada sobre blanco, así que se muestra con `object-fit: contain` sobre un fondo claro de marca, y su texto va en oscuro.
- `.capa-final` — `coche-cargando.jpg` es una escena real: ocupa toda la pantalla con `cover` y un degradado oscuro encima, con el texto en blanco.

- `afterNextRender` garantiza que solo se ejecute en navegador (importante con SSR).
- `gsap.context()` + `ngOnDestroy` limpian los ScrollTriggers al cambiar de ruta.
- `gsap.matchMedia()` respeta `prefers-reduced-motion`: si está activado se muestra directamente la imagen final.

Para cambiar la duración del efecto, ajusta `end: '+=150%'`.

## Qué tienes que sustituir

1. **Dominio** — `SITIO_URL` en [src/app/seo/sitio.ts](src/app/seo/sitio.ts), `public/robots.txt`, `public/sitemap.xml` y `allowedHosts` en [angular.json](angular.json). Ahora mismo apuntan a `www.energiasplasencia.es`.
2. **Logo** — [public/images/logo.svg](public/images/logo.svg) es una reconstrucción aproximada. Copia el archivo original sobre él (si es PNG, guárdalo como `logo.png` y cambia la ruta en [app.html](src/app/app.html)).
3. **Foto del coche** — `public/images/coche-cargando.jpg` está a 460×288 px, poco para un hero a pantalla completa: se verá borrosa en pantallas grandes. Busca una versión de al menos 1920 px de ancho y guárdala en WebP. Sirve además de imagen para redes (`IMAGEN_SOCIAL`), donde lo ideal son 1200×630 px.
4. **Productos y precios** — ids, categorías y precios en [src/app/data/productos.ts](src/app/data/productos.ts); nombres y descripciones, en los tres diccionarios de [src/app/i18n/](src/app/i18n/).
5. **Datos de la empresa** — teléfono, calle y código postal en `EMPRESA` de [sitio.ts](src/app/seo/sitio.ts): aparecen en la ficha de Google. El email y la ciudad del pie están en [app.html](src/app/app.html).
6. **Envío del formulario** — [presupuesto.ts](src/app/pages/presupuesto/presupuesto.ts) hace `console.log`. Conéctalo a tu backend, a EmailJS o a Formspree donde está el `TODO`.

## Colores de marca

Definidos en [src/styles/_variables.scss](src/styles/_variables.scss): naranja `#ee7203`, verde `#76b82a` y negro `#111111`.

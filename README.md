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
| `/privacidad` | Política de privacidad |
| `/cookies` | Política de cookies |

Cada una existe en los tres idiomas: `/productos`, `/en/productos`, `/pt/productos`. Las rutas se cargan con `loadComponent` (lazy loading), así GSAP solo se descarga en la portada.

## Idiomas

El idioma lo manda **la URL**, no una preferencia guardada: el español vive en la raíz y los otros bajo `/en` y `/pt`. Así cada versión tiene su propia dirección indexable y se relacionan entre sí con `hreflang`.

- **Textos** — [src/app/i18n/es.ts](src/app/i18n/es.ts) es el diccionario de referencia; de él sale el tipo `Dict`, así que al añadir un texto el compilador obliga a traducirlo en [en.ts](src/app/i18n/en.ts) y [pt.ts](src/app/i18n/pt.ts). Ahí está todo: navegación, páginas, formulario, textos de los productos y los títulos y descripciones de SEO.
- **Servicio** — [i18n.ts](src/app/i18n/i18n.ts) expone `d()` (textos del idioma activo) y `l('/ruta')` (enlace interno con el prefijo correcto). En las plantillas: `{{ t().nav.productos }}` y `[routerLink]="i18n.l('/productos')"`.
- **Selector** — en el header, con enlaces reales a la misma página en el otro idioma (un `href` que Google puede seguir, no un botón de JavaScript).
- **Formato de números** — cada idioma trae su `locale` (`es`, `en`, `pt-PT`), registrado en [app.config.ts](src/app/app.config.ts). Los precios salen como `1.390 €`, `€1,390` y `1 390 €`.

**Para añadir un cuarto idioma:** añádelo a `IDIOMAS` en [idiomas.ts](src/app/i18n/idiomas.ts), crea su diccionario, regístralo en `DICCIONARIOS`, añade su rama en [app.routes.ts](src/app/app.routes.ts) y su prefijo en [app.routes.server.ts](src/app/app.routes.server.ts) y en `public/sitemap.xml`.

## SSR y prerenderizado

Las 18 páginas (6 × 3 idiomas) se generan como **HTML estático durante el build**: el buscador recibe el contenido ya renderizado y el visitante ve la página antes de que arranque JavaScript. Lo que no esté en esa lista se renderiza en el servidor al pedirlo ([app.routes.server.ts](src/app/app.routes.server.ts)).

> **Importante al desplegar:** el motor SSR valida la cabecera `Host`. Si el dominio no está en `allowedHosts` (en `architect.build.options.security` de [angular.json](angular.json)), **el servidor deja de renderizar y devuelve la versión vacía para el cliente**, que es justo lo que no quieres que vea Google. Pon ahí el dominio real, o pásalo al arrancar con `NG_ALLOWED_HOSTS=midominio.es`. Si el servidor está detrás de un proxy o CDN, configura además `trustProxyHeaders`.

Lo que no sea una ruta conocida redirige (302) a la portada de su idioma.

## SEO

[seo.ts](src/app/seo/seo.ts) actualiza en cada navegación, y ya dentro del HTML que sale del servidor:

- `<title>` y `<meta name="description">` propios de cada página y cada idioma.
- `<html lang>` correcto.
- `<link rel="canonical">` y `hreflang` para los tres idiomas más `x-default`.
- Open Graph y Twitter Card (para enlaces compartidos en redes y WhatsApp).
- **Datos estructurados** JSON-LD: ficha `LocalBusiness` con la zona de servicio y los productos como ofertas, y `FAQPage` en `/info`, que es lo que puede hacer que las preguntas salgan desplegadas en los resultados de Google.

Completan el conjunto [public/robots.txt](public/robots.txt) y [public/sitemap.xml](public/sitemap.xml), con las 18 URLs y sus alternativas de idioma.

El dominio está en un solo sitio del código, `SITIO_URL` de [src/app/seo/sitio.ts](src/app/seo/sitio.ts), **pero también en `robots.txt` y `sitemap.xml`**: si cambia, cámbialo en los tres.

## Cookies y textos legales

> ⚠️ Los textos de [privacidad](src/app/i18n/es.ts) y [cookies](src/app/i18n/es.ts) son **una plantilla**, no un documento jurídico validado. Lo que aparece entre corchetes (`[CIF por completar]`, `[dirección por completar]`) hay que rellenarlo, y conviene que un abogado lo revise antes de publicar: quien responde ante la AEPD es la empresa, no la plantilla.

El aviso aparece abajo al entrar y guarda la decisión **12 meses** en el almacenamiento local del navegador, bajo la clave `epc-consentimiento` ([cookies.ts](src/app/cookies/cookies.ts)). Pasado ese plazo vuelve a preguntar. Rechazar cuesta lo mismo que aceptar —un clic, al lado— porque la norma exige que sea igual de fácil.

Detalles que importan:

- **No se renderiza en el servidor.** El HTML prerenderizado es el mismo para todos, así que si el aviso saliera de ahí lo verían también quienes ya eligieron. Se decide tras hidratar, en el navegador.
- **Ahora mismo la web no instala ninguna cookie de medición**, y el texto lo dice. Si añades analítica, cárgala solo cuando `cookies.medicionPermitida()` sea cierto y añádela a la tabla de la política; si no, el texto deja de ser verdad.
- **«Configurar cookies»**, en el pie y al final de la política, vuelve a abrir el aviso.
- Las tipografías vienen de Google Fonts, es decir, que el navegador del visitante se conecta a servidores de Google. Está declarado en la política de cookies. Si prefieres evitarlo, descarga las fuentes y sírvelas desde `public/`.

## Efecto de scroll de la portada

En [home.ts](src/app/pages/home/home.ts) se usa GSAP + ScrollTrigger con `pin` y `scrub`: la sección queda fija mientras el scroll descubre la segunda capa con un `clip-path` de izquierda a derecha, y después aparece el texto.

El hero son **dos capas**, no dos imágenes sueltas, porque las fotos tienen encuadres distintos:

- `.capa-inicial` — `cargador.jpg` es una foto de producto con fondo blanco, así que va con `object-fit: contain` sobre el fondo claro de marca y `mix-blend-mode: multiply`, que funde ese blanco y evita que se vea la caja recortada. Su altura real es de 436 px y no se amplía (`max-height`), porque ampliarla la emborrona.
- `.capa-final` — `coche-cargando2.jpg` (1280×714) es una escena real, con un degradado oscuro encima y el texto en blanco.

**En escritorio** la cortinilla va de izquierda a derecha y el cargador se desvanece antes de que llegue a su zona: si no, se ven a la vez el cargador del producto y el wallbox de la foto, y parece una imagen duplicada.

**En pantalla estrecha** cambian dos cosas. La cortinilla baja de arriba abajo con borde duro —nada de fundidos: al superponer las dos fotos se ven las dos a la vez— y la escena no va a sangre, sino en una banda superior con el texto sobre un bloque oscuro. Una foto apaisada recortada a pantalla completa en vertical pierde tres cuartas partes de su ancho y el coche se queda fuera; con la banda se ve casi toda, y `object-position: 62%` centra el encuadre en el coche y el conector.

- `afterNextRender` garantiza que solo se ejecute en navegador (importante con SSR).
- `gsap.context()` + `ngOnDestroy` limpian los ScrollTriggers al cambiar de ruta.
- `gsap.matchMedia()` respeta `prefers-reduced-motion`: si está activado se muestra directamente la imagen final.

Para cambiar la duración del efecto, ajusta `end: '+=150%'`.

## Efectos de scroll del resto de páginas

Fuera de la portada no se usa GSAP, sino [ui/aparicion.ts](src/app/ui/aparicion.ts): un ayudante pequeño sobre `IntersectionObserver` que pone una clase a cada elemento cuando asoma por abajo, escalonando los que entran a la vez. Lo usan **productos** (las tarjetas entran en cascada, y al pulsar un filtro entran todas otra vez) e **info** (las cajas de tipos de carga entran y su medidor se llena como una batería, cada uno hasta su nivel).

Tres cosas que no son evidentes y conviene no deshacer:

- **No se usa `viewChild`.** Con hidratación devuelve una copia del marcado del servidor que ya no está en la página: se animaría una rejilla fantasma. Hay que partir del elemento del componente (`inject(ElementRef)`).
- **Un `MutationObserver` rehace la preparación.** La hidratación sustituye los nodos del servidor por los suyos un momento después de arrancar —incluso después de `whenStable()`—, así que las clases puestas antes se van con los nodos viejos.
- **La entrada es una animación, no una transición.** Un `transition` propio del elemento (el del hover de `.producto`, por ejemplo) tiene más especificidad que el global y deja la entrada sin fundido, apareciendo de golpe. La clase `.aos` está en [styles.scss](src/styles.scss) con `@keyframes`.

Al cargar solo se esconde lo que todavía no se ve: el HTML llega ya pintado desde el servidor y esconder lo que está a la vista daría un parpadeo. Las clases las pone siempre el navegador, así que en el HTML prerenderizado el contenido sale entero y visible.

## Qué tienes que sustituir

1. **Dominio** — `SITIO_URL` en [src/app/seo/sitio.ts](src/app/seo/sitio.ts), `public/robots.txt`, `public/sitemap.xml` y `allowedHosts` en [angular.json](angular.json). Ahora mismo apuntan a `www.energiasplasencia.es`.
2. **Logo** — [public/images/logo.png](public/images/logo.png) es el logotipo real (318×91 px). De él salen también los iconos `public/favicon-32.png` y `favicon-180.png`, recortando la marca de los rombos. Si algún día aparece en vectorial (SVG), sustitúyelo y regenera los iconos: ganarían nitidez en pantallas retina.
3. **Fotos del hero** — `coche-cargando2.jpg` (1280×714) está bien para portátil, justa para monitor grande: si consigues una de 1920 px en WebP, mejor. `cargador.jpg` mide 390×436 y por eso se muestra a tamaño real; si tienes una versión más grande, idealmente PNG con fondo transparente, ganaría nitidez y podría ocupar más. Los archivos antiguos `cargador.webp` y `coche-cargando.jpg` ya no se usan.
4. **Productos y precios** — ids, categorías y precios en [src/app/data/productos.ts](src/app/data/productos.ts); nombres y descripciones, en los tres diccionarios de [src/app/i18n/](src/app/i18n/).
5. **Datos de la empresa** — teléfono, calle y código postal en `EMPRESA` de [sitio.ts](src/app/seo/sitio.ts): aparecen en la ficha de Google. El email y la ciudad del pie están en [app.html](src/app/app.html).
6. **Textos legales** — CIF y domicilio en la política de privacidad de los tres diccionarios de [src/app/i18n/](src/app/i18n/), donde pone `[CIF por completar]` y `[dirección por completar]`. Y que los revise un abogado.
7. **Envío del formulario** — [presupuesto.ts](src/app/pages/presupuesto/presupuesto.ts) hace `console.log`. Conéctalo a tu backend, a EmailJS o a Formspree donde está el `TODO`.
8. **Redes sociales** — `REDES` en [sitio.ts](src/app/seo/sitio.ts) ya tiene Facebook, Instagram y X. Cada URL rellena pinta su icono en el pie, bajo Contacto, y se añade al `sameAs` de los datos estructurados, que es como Google relaciona esos perfiles con el negocio; lo que se deje en blanco no sale. Ojo: la cuenta de Facebook es la de **energiasolarplasencia**, la de la empresa entera, no una específica de movilidad.

## Colores de marca

Definidos en [src/styles/_variables.scss](src/styles/_variables.scss): naranja `#ee7203`, verde `#76b82a` y negro `#111111`.

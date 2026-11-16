# Energías Plasencia · car

Web de **car**, la sección de movilidad eléctrica de **Energías Plasencia SL**: información sobre vehículos eléctricos y puntos de carga.

Hecha con **Angular 21** (standalone, signals, control flow `@if`/`@for`), **SCSS** y el **grid de Bootstrap 5**.

## Arrancar

```bash
npm install
npm start          # http://localhost:4200
npm run build      # dist/energia-plasencia-car
```

## Secciones

| Ruta | Contenido |
|---|---|
| `/` | Portada con efecto de scroll (cargador → coche cargando) y ventajas |
| `/productos` | Catálogo filtrable por categoría |
| `/info` | Tipos de carga y preguntas frecuentes |
| `/presupuesto` | Formulario reactivo con validación |

Las rutas se cargan con `loadComponent` (lazy loading), así GSAP solo se descarga en la portada.

## Efecto de scroll de la portada

En [home.ts](src/app/pages/home/home.ts) se usa GSAP + ScrollTrigger con `pin` y `scrub`: la sección queda fija mientras el scroll descubre la segunda capa con un `clip-path` de izquierda a derecha, y después aparece el texto.

El hero son **dos capas**, no dos imágenes sueltas, porque las fotos tienen encuadres distintos:

- `.capa-inicial` — `cargador.webp` es una foto de producto recortada sobre blanco, así que se muestra con `object-fit: contain` sobre un fondo claro de marca, y su texto va en oscuro.
- `.capa-final` — `coche-cargando.jpg` es una escena real: ocupa toda la pantalla con `cover` y un degradado oscuro encima, con el texto en blanco.

- `afterNextRender` garantiza que solo se ejecute en navegador.
- `gsap.context()` + `ngOnDestroy` limpian los ScrollTriggers al cambiar de ruta.
- `gsap.matchMedia()` respeta `prefers-reduced-motion`: si está activado se muestra directamente la imagen final.

Para cambiar la duración del efecto, ajusta `end: '+=150%'`.

## Qué tienes que sustituir

1. **Logo** — [public/images/logo.svg](public/images/logo.svg) es una reconstrucción aproximada. Copia el archivo original sobre él (si es PNG, guárdalo como `logo.png` y cambia la ruta en [app.html](src/app/app.html)).
2. **Foto del coche** — `public/images/coche-cargando.jpg` está a 460×288 px, poco para un hero a pantalla completa: se verá borrosa en pantallas grandes. Busca una versión de al menos 1920 px de ancho y guárdala en WebP.

   Si algún día quieres que el efecto parezca que *la escena evoluciona* en vez de un barrido entre dos fotos distintas, necesitas las dos tomas **con el mismo encuadre**: el cargador en idéntica posición en ambas.
3. **Productos y precios** — [src/app/data/productos.ts](src/app/data/productos.ts) lleva datos de ejemplo.
4. **Contacto** — email y dirección en el pie de [app.html](src/app/app.html).
5. **Envío del formulario** — [presupuesto.ts](src/app/pages/presupuesto/presupuesto.ts) hace `console.log`. Conéctalo a tu backend, a EmailJS o a Formspree donde está el `TODO`.

## Colores de marca

Definidos en [src/styles/_variables.scss](src/styles/_variables.scss): naranja `#ee7203`, verde `#76b82a` y negro `#111111`.

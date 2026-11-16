# CLAUDE.md

Web de **Energías Plasencia car** (puntos de carga para coche eléctrico, Plasencia).
Angular 21 standalone, con señales, SSR y prerenderizado, en tres idiomas.

El [README.md](README.md) explica el proyecto a una persona. Este archivo recoge lo
que no se ve leyendo el código: las decisiones que tienen un porqué y las trampas
que ya se han pisado una vez.

## Comandos

```bash
npm start          # ng serve en :4200
npx ng build       # compila y prerenderiza las 18 páginas
npm run serve:ssr:energia-plasencia-car   # sirve el build con SSR real
npx tsc -p tsconfig.app.json --noEmit     # comprobar tipos sin compilar
```

Si `npm start` falla con **"Port 4200 is already in use"**, hay otro servidor
vivo sirviendo código antiguo. Esto ya ha costado una sesión entera depurando un
fallo que no existía: para antes el proceso viejo en vez de medir sobre él.

## Cómo se escribe aquí

- **Todo en español**: nombres de clases, métodos, variables, comentarios y textos.
  El código existente lo está; no mezcles.
- Los comentarios explican **por qué**, no qué hace la línea de al lado.
- No se añaden dependencias por comodidad. Lo único pesado es GSAP, y solo lo usa
  el hero de la portada.

## Dónde está cada cosa

| Carpeta | Qué hay |
| --- | --- |
| `src/app/i18n/` | Diccionarios `es` / `en` / `pt`, helpers de URL y el servicio `I18n` |
| `src/app/seo/` | `Seo` (metadatos y JSON-LD) y `sitio.ts` (dominio, empresa, redes) |
| `src/app/cookies/` | Servicio de consentimiento y banner |
| `src/app/ui/` | Piezas reutilizables sin plantilla, como `aparicion.ts` |
| `src/app/pages/` | Una carpeta por página |
| `src/styles.scss` | Bootstrap recortado, utilidades propias y la clase `.aos` |
| `public/` | Imágenes, iconos, `robots.txt` y `sitemap.xml` |

## Trampas ya pisadas

1. **`security.allowedHosts` en [angular.json](angular.json).** Si la petición llega
   con un `Host` que no está en la lista, el motor de SSR **no da error**: sirve la
   cáscara del cliente y escribe un `console.error` que nadie ve. Al cambiar de
   dominio hay que tocar esa lista (o `NG_ALLOWED_HOSTS`).

2. **`es.ts` define el tipo.** `export type Dict = typeof es`, y `en.ts` y `pt.ts`
   se declaran `: Dict`. Añadir un texto en español **rompe la compilación** hasta
   traducirlo en los otros dos. Es a propósito.

3. **`Seo` se mueve con los eventos del router, no con un `effect`.** Tiene que
   escribir las etiquetas durante el renderizado en servidor, que es lo que lee un
   rastreador antes de ejecutar JavaScript. No lo conviertas en `effect`.

4. **Nada de `viewChild` para animar.** Con hidratación devuelve una copia del
   marcado del servidor que ya no está en el documento (`isConnected === false`):
   se anima una rejilla fantasma y en pantalla no pasa nada. Parte del elemento del
   componente, `inject(ElementRef)`.

5. **La hidratación sustituye los nodos después de arrancar**, incluso después de
   `whenStable()`. Por eso [ui/aparicion.ts](src/app/ui/aparicion.ts) rehace su
   trabajo con un `MutationObserver` en vez de prepararlo una sola vez.

6. **Las entradas son `@keyframes`, no `transition`.** Un `transition` propio del
   elemento (el del hover de `.producto`) tiene más especificidad que el global y
   deja la animación sin efecto: aparece de golpe, sin fundido. El síntoma es
   engañoso, porque la opacidad sí cambia de 0 a 1.

7. **`.container` y `.row` nunca en el mismo elemento.** Los márgenes negativos de
   `.row` anulan el `margin: auto` de `.container` y el bloque se pega a la
   izquierda dejando un hueco a la derecha. Pasó en el pie.

8. **Al cargar solo se esconde lo que no se ve.** El HTML llega pintado del
   servidor; esconder lo que ya está a la vista para animarlo da un parpadeo. Y las
   clases de animación las pone siempre el navegador, nunca el servidor, para que
   un buscador o alguien sin JavaScript lo vea todo.

## Al añadir...

- **Una página**: ruta en `app.routes.ts` (se monta tres veces, una por idioma),
  entrada en `app.routes.server.ts`, textos y ficha `seo` en los tres diccionarios,
  y las tres URLs en `public/sitemap.xml`. El build debe seguir diciendo
  *"Prerendered 18 static routes"*, con el número que toque.
- **Un texto**: primero en `es.ts`, y el compilador te obliga al resto.
- **Una animación de scroll**: reutiliza `Aparicion`; no escribas otro
  `IntersectionObserver` sin los resguardos de los puntos 4, 5 y 6.

## Comprobar de verdad

El proyecto se ha depurado midiendo en un navegador real (Edge sin ventana por el
protocolo de DevTools): posiciones, opacidades fotograma a fotograma y capturas.
Para cualquier cosa visual, mide; varias veces en esta sesión el síntoma que se
veía no era el fallo que había.

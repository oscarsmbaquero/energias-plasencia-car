import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Idioma } from '../i18n/idiomas';

/**
 * Bandera del idioma, dibujada a mano en SVG.
 *
 * No se usan los emoji 🇪🇸 🇬🇧 🇵🇹 porque Windows no los pinta: se ven como dos
 * letras dentro de una caja, que es peor que no poner nada.
 *
 * Las tres van en el mismo marco de 3:2 para que se vean iguales de grandes; la
 * del Reino Unido es 2:1 de verdad, así que queda un pelo más alta de la cuenta,
 * como en casi todos los juegos de iconos. La esfera armilar de Portugal y las
 * diagonales de la bandera británica van simplificadas: a 20 px no se distingue
 * el detalle y sí se nota el ruido.
 *
 * Son decorativas: quien use lector de pantalla oye el nombre del idioma, que
 * está al lado en texto de verdad.
 */
@Component({
  selector: 'app-bandera',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @switch (idioma()) {
      @case ('es') {
        <svg viewBox="0 0 24 16" aria-hidden="true" focusable="false">
          <rect width="24" height="16" fill="#aa151b" />
          <rect y="4" width="24" height="8" fill="#f1bf00" />
        </svg>
      }
      @case ('en') {
        <svg viewBox="0 0 24 16" aria-hidden="true" focusable="false">
          <rect width="24" height="16" fill="#012169" />
          <path d="M0 0 24 16M24 0 0 16" stroke="#fff" stroke-width="3.2" />
          <path d="M0 0 24 16M24 0 0 16" stroke="#c8102e" stroke-width="1.5" />
          <path d="M12 0v16M0 8h24" stroke="#fff" stroke-width="5.2" />
          <path d="M12 0v16M0 8h24" stroke="#c8102e" stroke-width="3.1" />
        </svg>
      }
      @case ('pt') {
        <svg viewBox="0 0 24 16" aria-hidden="true" focusable="false">
          <rect width="24" height="16" fill="#da291c" />
          <rect width="9.6" height="16" fill="#046a38" />
          <circle cx="9.6" cy="8" r="3.1" fill="none" stroke="#ffe800" stroke-width="1.1" />
          <rect
            x="8.4" y="6.2" width="2.4" height="3.6" rx=".5"
            fill="#fff" stroke="#da291c" stroke-width=".7" />
        </svg>
      }
    }
  `,
  styles: `
    :host {
      display: block;
      width: 1.35rem;
      height: .9rem;
      border-radius: .15rem;
      overflow: hidden;
      // Las banderas claras necesitan un borde para no fundirse con el fondo.
      box-shadow: 0 0 0 1px rgba(0, 0, 0, .14);
      flex: 0 0 auto;
    }

    svg { display: block; width: 100%; height: 100%; }
  `
})
export class Bandera {
  readonly idioma = input.required<Idioma>();
}

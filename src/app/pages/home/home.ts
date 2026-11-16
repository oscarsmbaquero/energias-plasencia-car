import { Component, ElementRef, OnDestroy, afterNextRender, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { I18n } from '../../i18n/i18n';
import { Aparicion } from '../../ui/aparicion';

gsap.registerPlugin(ScrollTrigger);

/** Número de tiras de la persiana. Tiene que coincidir con `--franjas` en home.scss. */
const FRANJAS = 8;

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnDestroy {
  private ctx?: gsap.Context;
  /** El hero sobre el que se montó GSAP, para saber si sigue vivo. */
  private heroMontado?: HTMLElement;
  private vigilante?: MutationObserver;
  private pendiente = false;

  protected readonly i18n = inject(I18n);
  protected readonly t = this.i18n.d;

  /** [0, 1, 2 ... ] para pintar las tiras. */
  protected readonly franjas = Array.from({ length: FRANJAS }, (_, i) => i);

  // El elemento del propio componente: `viewChild` no vale para animar porque
  // con hidratación devuelve marcado que ya no está en la página (CLAUDE.md).
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private persiana?: Aparicion;

  /**
   * Qué trozo de la foto le toca a cada tira. Con `background-size` de
   * 8 × 100 %, el 0 % alinea el borde izquierdo y el 100 % el derecho, así que
   * el reparto se hace entre n − 1 y no entre n.
   */
  protected corte(i: number): string {
    return `${(i * 100) / (FRANJAS - 1)}%`;
  }

  constructor() {
    afterNextRender(() => {
      // La persiana gira al asomar la sección; `Aparicion` ya resuelve que la
      // hidratación sustituya los nodos un momento después de arrancar.
      // `repetir` deshace el giro al salir de pantalla: al volver a subir se ve
      // otra vez la primera foto y la persiana gira de nuevo al bajar.
      this.persiana = new Aparicion(this.host.nativeElement, '.panel', {
        margen: '-120px',
        repetir: true
      });
      this.persiana.arrancar();
      this.montarHero();

      /* La hidratación sustituye los nodos del componente poco después de
         arrancar. Si eso pasa con el hero ya montado, el `pin` de GSAP deja
         atrás su `pin-spacer` —un hueco vacío de dos mil píxeles por encima del
         hero— y la animación se queda pegada a nodos muertos: el hero parecía
         duplicado y no se movía con el scroll.

         Solo se rehace cuando el hero que se montó ha dejado de estar en la
         página. Esa condición es además la que evita el bucle infinito: el
         propio `pin` mete y saca nodos, y sin ella cada montaje dispararía el
         siguiente. */
      this.vigilante = new MutationObserver(() => {
        if (this.heroMontado?.isConnected) return;
        if (this.pendiente) return;
        this.pendiente = true;
        requestAnimationFrame(() => {
          this.pendiente = false;
          this.montarHero();
        });
      });
      this.vigilante.observe(this.host.nativeElement, { childList: true, subtree: true });
    });
  }

  private montarHero(): void {
    // Deshace el montaje anterior; esto es lo que retira el `pin-spacer` viejo.
    this.ctx?.revert();

    const el = this.host.nativeElement.querySelector<HTMLElement>('.hero');
    if (!el) return;
    this.heroMontado = el;
    const mm = gsap.matchMedia();

    this.ctx = gsap.context(() => {
        // Con "reducir movimiento" se muestra directamente la escena final.
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.capa-final', { clipPath: 'inset(0 0% 0 0)' });
        gsap.set('.texto-inicial', { opacity: 0 });
        gsap.set('.texto-final', { opacity: 1 });
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.timeline({
          scrollTrigger: { trigger: el, start: 'top top+=72', end: '+=150%', scrub: true, pin: true, anticipatePin: 1 }
        })
          // El cargador se aleja un poco y su texto se va
          .to('.producto', { scale: .92, ease: 'none', duration: 1 }, 0)
          .to('.texto-inicial', { opacity: 0, y: -40, ease: 'none', duration: .3 }, 0)
          // La escena del coche entra como cortinilla de izquierda a derecha
          .fromTo('.capa-final',
            { clipPath: 'inset(0 100% 0 0)' },
            { clipPath: 'inset(0 0% 0 0)', ease: 'none', duration: 1 }, 0)
          .fromTo('.escena',
            { scale: 1.12 },
            { scale: 1, ease: 'none', duration: 1 }, 0)
          // Y aparece el texto final
          .fromTo('.texto-final', { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: 'none', duration: .4 }, .6);
      });
    }, el);
  }

  ngOnDestroy() {
    this.ctx?.revert();
    this.vigilante?.disconnect();
    this.persiana?.parar();
  }
}

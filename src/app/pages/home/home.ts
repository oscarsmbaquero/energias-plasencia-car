import { Component, ElementRef, OnDestroy, afterNextRender, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnDestroy {
  private readonly hero = viewChild.required<ElementRef<HTMLElement>>('hero');
  private ctx?: gsap.Context;

  protected readonly ventajas = [
    { icono: '💶', titulo: 'Ahorro real', texto: 'Hasta 5 veces menos coste por kilómetro que un coche de combustión.' },
    { icono: '🌿', titulo: 'Cero emisiones', texto: 'Movilidad limpia y etiqueta 0 de la DGT.' },
    { icono: '🔧', titulo: 'Menos mantenimiento', texto: 'Sin aceite, embrague ni correa de distribución.' },
    { icono: '🏠', titulo: 'Carga en casa', texto: 'Instalamos tu punto de carga y legalizamos la instalación.' }
  ];

  constructor() {
    afterNextRender(() => {
      const el = this.hero().nativeElement;
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
    });
  }

  ngOnDestroy() {
    this.ctx?.revert();
  }
}

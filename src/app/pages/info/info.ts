import { Component, ElementRef, OnDestroy, afterNextRender, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18n } from '../../i18n/i18n';
import { Aparicion } from '../../ui/aparicion';

@Component({
  selector: 'app-info',
  imports: [RouterLink],
  templateUrl: './info.html',
  styleUrl: './info.scss'
})
export class Info implements OnDestroy {
  protected readonly i18n = inject(I18n);
  protected readonly t = this.i18n.d;
  protected readonly abierta = signal<number | null>(0);

  // El elemento del propio componente: con hidratación, `viewChild` devuelve una
  // copia del marcado del servidor que ya no está en la página.
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private entrada?: Aparicion;

  constructor() {
    // `afterNextRender` no se ejecuta al renderizar en el servidor. La misma
    // clase `visible` dispara dos cosas: la entrada de la caja y el llenado del
    // medidor (ver info.scss).
    afterNextRender(() => {
      this.entrada = new Aparicion(this.host.nativeElement, '.tipo', {
        claseOculta: 'aos',
        desfase: 0.14
      });
      this.entrada.arrancar();
    });
  }

  ngOnDestroy() {
    this.entrada?.parar();
  }

  protected toggle(i: number) {
    this.abierta.update(v => (v === i ? null : i));
  }
}

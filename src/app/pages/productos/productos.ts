import {
  Component,
  ElementRef,
  OnDestroy,
  afterNextRender,
  computed,
  inject,
  signal
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { FILTROS, Filtro, PRODUCTOS, ProductoId } from '../../data/productos';
import { I18n } from '../../i18n/i18n';
import { Aparicion } from '../../ui/aparicion';

@Component({
  selector: 'app-productos',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class Productos implements OnDestroy {
  protected readonly i18n = inject(I18n);
  protected readonly t = this.i18n.d;

  protected readonly filtros = FILTROS;
  protected readonly filtro = signal<Filtro>('todos');

  protected readonly lista = computed(() =>
    this.filtro() === 'todos' ? PRODUCTOS : PRODUCTOS.filter(p => p.categoria === this.filtro())
  );

  // El elemento del propio componente. No se usa `viewChild`: con hidratación
  // devuelve una copia del marcado del servidor que ya no está en la página, y
  // se acabaría animando una rejilla fantasma.
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private entrada?: Aparicion;

  constructor() {
    // `afterNextRender` no se ejecuta al renderizar en el servidor.
    afterNextRender(() => {
      this.entrada = new Aparicion(this.host.nativeElement, '.producto', { claseOculta: 'aos' });
      this.entrada.arrancar();
    });
  }

  ngOnDestroy() {
    this.entrada?.parar();
  }

  /** Textos del producto en el idioma activo. */
  protected texto(id: ProductoId) {
    return this.t().productos.items[id];
  }

  protected elegir(f: Filtro): void {
    // Las tarjetas que salgan del filtro son nuevas: entran todas en cascada.
    this.entrada?.entranTodos();
    this.filtro.set(f);
  }
}

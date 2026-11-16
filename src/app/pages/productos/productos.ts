import { Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { FILTROS, Filtro, PRODUCTOS, ProductoId } from '../../data/productos';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-productos',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class Productos {
  protected readonly i18n = inject(I18n);
  protected readonly t = this.i18n.d;

  protected readonly filtros = FILTROS;
  protected readonly filtro = signal<Filtro>('todos');

  protected readonly lista = computed(() =>
    this.filtro() === 'todos' ? PRODUCTOS : PRODUCTOS.filter(p => p.categoria === this.filtro())
  );

  /** Textos del producto en el idioma activo. */
  protected texto(id: ProductoId) {
    return this.t().productos.items[id];
  }
}

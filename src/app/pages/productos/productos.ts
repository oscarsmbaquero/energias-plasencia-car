import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CATEGORIAS, Categoria, PRODUCTOS } from '../../data/productos';

@Component({
  selector: 'app-productos',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class Productos {
  protected readonly categorias = CATEGORIAS;
  protected readonly filtro = signal<Categoria | 'todos'>('todos');
  protected readonly lista = computed(() =>
    this.filtro() === 'todos' ? PRODUCTOS : PRODUCTOS.filter(p => p.categoria === this.filtro())
  );
}

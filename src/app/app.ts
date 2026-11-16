import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly menuAbierto = signal(false);
  protected readonly anio = new Date().getFullYear();
  protected toggle() { this.menuAbierto.update(v => !v); }
  protected cerrar() { this.menuAbierto.set(false); }
}

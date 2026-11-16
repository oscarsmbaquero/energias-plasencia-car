import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AvisoCookies } from './cookies/aviso';
import { Cookies } from './cookies/cookies';
import { I18n } from './i18n/i18n';
import { Idioma } from './i18n/idiomas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AvisoCookies],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly i18n = inject(I18n);
  /** Textos del idioma activo. */
  protected readonly t = this.i18n.d;
  protected readonly cookies = inject(Cookies);
  protected readonly idiomas = this.i18n.idiomas;
  protected readonly anio = new Date().getFullYear();

  protected readonly menuAbierto = signal(false);
  protected readonly idiomasAbierto = signal(false);

  protected toggle() {
    this.menuAbierto.update(v => !v);
    this.idiomasAbierto.set(false);
  }

  protected cerrar() {
    this.menuAbierto.set(false);
    this.idiomasAbierto.set(false);
  }

  protected toggleIdiomas() {
    this.idiomasAbierto.update(v => !v);
  }

  protected enlaceIdioma(idioma: Idioma) {
    return this.i18n.urlDe(idioma);
  }
}

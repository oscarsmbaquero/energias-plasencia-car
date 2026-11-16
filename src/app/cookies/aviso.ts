import { Component, afterNextRender, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Cookies } from './cookies';
import { I18n } from '../i18n/i18n';

@Component({
  selector: 'app-aviso-cookies',
  imports: [RouterLink],
  templateUrl: './aviso.html',
  styleUrl: './aviso.scss'
})
export class AvisoCookies {
  protected readonly i18n = inject(I18n);
  protected readonly t = this.i18n.d;
  protected readonly cookies = inject(Cookies);

  constructor() {
    // Solo en el navegador: en el servidor no hay localStorage que consultar.
    afterNextRender(() => this.cookies.comprobar());
  }
}

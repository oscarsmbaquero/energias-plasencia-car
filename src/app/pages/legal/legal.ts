import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Cookies } from '../../cookies/cookies';
import { I18n } from '../../i18n/i18n';

export type DocLegal = 'privacidad' | 'cookies';

/** Misma plantilla para los dos textos legales; cuál se muestra lo dice la ruta. */
@Component({
  selector: 'app-legal',
  imports: [RouterLink],
  templateUrl: './legal.html',
  styleUrl: './legal.scss'
})
export class Legal {
  protected readonly i18n = inject(I18n);
  protected readonly t = this.i18n.d;
  protected readonly cookies = inject(Cookies);

  /** Llega de `data: { doc }` en la ruta, gracias a withComponentInputBinding. */
  readonly doc = input<DocLegal>('privacidad');

  protected readonly contenido = computed(() => this.t().legal[this.doc()]);
  protected readonly esCookies = computed(() => this.doc() === 'cookies');
  protected readonly tabla = computed(() => (this.esCookies() ? this.t().legal.cookies.tabla : null));
}

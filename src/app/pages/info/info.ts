import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-info',
  imports: [RouterLink],
  templateUrl: './info.html',
  styleUrl: './info.scss'
})
export class Info {
  protected readonly i18n = inject(I18n);
  protected readonly t = this.i18n.d;
  protected readonly abierta = signal<number | null>(0);

  protected toggle(i: number) {
    this.abierta.update(v => (v === i ? null : i));
  }
}

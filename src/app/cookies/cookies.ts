import { PLATFORM_ID, Injectable, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Decision = 'aceptado' | 'rechazado';

const CLAVE = 'epc-consentimiento';
/** 12 meses, como dice la política de cookies. */
const CADUCIDAD = 365 * 24 * 60 * 60 * 1000;

/**
 * Recuerda si el visitante aceptó o rechazó el aviso.
 *
 * La decisión se lee y se escribe **solo en el navegador**: el HTML que genera
 * el servidor es el mismo para todo el mundo, así que si el aviso se pintara
 * ahí lo verían también quienes ya han elegido. Por eso `visible` arranca en
 * falso y solo se activa tras `comprobar()`, ya hidratada la página.
 */
@Injectable({ providedIn: 'root' })
export class Cookies {
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  /** null = todavía no ha elegido. */
  readonly decision = signal<Decision | null>(null);
  readonly visible = signal(false);

  /** ¿Se pueden cargar cookies de medición? Úsalo antes de añadir analítica. */
  readonly medicionPermitida = signal(false);

  comprobar(): void {
    if (!this.esNavegador) return;

    const guardada = this.leer();
    this.decision.set(guardada);
    this.medicionPermitida.set(guardada === 'aceptado');
    this.visible.set(guardada === null);
  }

  decidir(valor: Decision): void {
    this.decision.set(valor);
    this.medicionPermitida.set(valor === 'aceptado');
    this.visible.set(false);
    this.guardar(valor);
  }

  /** Vuelve a mostrar el aviso (enlace «Configurar cookies» del pie). */
  reabrir(): void {
    this.visible.set(true);
  }

  private leer(): Decision | null {
    try {
      const crudo = localStorage.getItem(CLAVE);
      if (!crudo) return null;

      const { valor, fecha } = JSON.parse(crudo) as { valor: Decision; fecha: number };
      if (valor !== 'aceptado' && valor !== 'rechazado') return null;
      // Pasado el plazo, se vuelve a preguntar.
      if (!fecha || Date.now() - fecha > CADUCIDAD) return null;

      return valor;
    } catch {
      // Modo privado, almacenamiento bloqueado o dato corrupto: como si no hubiera nada.
      return null;
    }
  }

  private guardar(valor: Decision): void {
    try {
      localStorage.setItem(CLAVE, JSON.stringify({ valor, fecha: Date.now() }));
    } catch {
      // Si el navegador no deja guardar, el aviso volverá a aparecer. Nada que hacer.
    }
  }
}

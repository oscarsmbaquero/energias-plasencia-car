import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info',
  imports: [RouterLink],
  templateUrl: './info.html',
  styleUrl: './info.scss'
})
export class Info {
  protected readonly abierta = signal<number | null>(0);

  protected readonly tiposCarga = [
    { nombre: 'Carga lenta', potencia: '3,7 kW', tiempo: '10-14 h', uso: 'Enchufe doméstico, emergencias' },
    { nombre: 'Carga semirrápida', potencia: '7,4 - 22 kW', tiempo: '2-8 h', uso: 'Wallbox en casa o empresa' },
    { nombre: 'Carga rápida DC', potencia: '50 - 350 kW', tiempo: '20-40 min (80 %)', uso: 'Electrolineras en ruta' }
  ];

  protected readonly faq = [
    { p: '¿Cuánto cuesta cargar un coche eléctrico en casa?', r: 'Con tarifa nocturna el coste ronda 2-4 € cada 100 km, muy por debajo de un coche de gasolina o diésel.' },
    { p: '¿Necesito permiso para instalar un punto de carga?', r: 'En vivienda unifamiliar basta con la instalación legalizada. En comunidad de vecinos solo hay que comunicarlo a la comunidad. Nosotros te ayudamos con los trámites.' },
    { p: '¿Hay ayudas disponibles?', r: 'Existen subvenciones y deducciones fiscales para la compra de vehículos y la instalación de puntos de carga. Varían según la comunidad y el año; te informamos en el presupuesto.' },
    { p: '¿Qué autonomía real tiene un eléctrico?', r: 'Los modelos actuales ofrecen entre 300 y 600 km según batería, velocidad y temperatura.' },
    { p: '¿Cuánto dura la batería?', r: 'Suelen tener garantía de 8 años o 160.000 km, con una degradación muy baja en uso normal.' }
  ];

  protected toggle(i: number) { this.abierta.update(v => (v === i ? null : i)); }
}

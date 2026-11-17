/**
 * Fotos de las tarjetas de ventajas de la portada, dentro de public/images/.
 *
 * No están en los diccionarios porque una foto no se traduce: ponerla allí
 * obligaría a repetir el mismo nombre de archivo en es.ts, en.ts y pt.ts.
 *
 * IMPORTANTE: el orden tiene que ser el mismo que el de `home.ventajas` en los
 * diccionarios, porque se emparejan por posición. Hoy son, por ese orden:
 * ahorro, emisiones, mantenimiento y carga en casa. Una posición vacía ('')
 * deja la tarjeta con su icono sobre el fondo de marca, sin foto.
 */
export const FOTOS_VENTAJAS: string[] = [
  'ahorro_real.jpg',
  '0_emisiones.webp',
  'menos_mantenimiento.jpg',
  'carga_en_casa.jpg'
];

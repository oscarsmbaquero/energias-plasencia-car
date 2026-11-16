/**
 * Datos del sitio usados en los metadatos y en los datos estructurados.
 *
 * IMPORTANTE: `SITIO_URL` tiene que ser el dominio real y definitivo, sin barra
 * final. Las URLs canónicas y las hreflang se construyen a partir de él, y si no
 * coincide con el dominio publicado los buscadores indexarán direcciones que no
 * existen. El mismo dominio aparece en public/sitemap.xml y public/robots.txt.
 */
export const SITIO_URL = 'https://www.energiasplasencia.es';

export const EMPRESA = {
  nombre: 'Energías Plasencia SL',
  seccion: 'Energías Plasencia car',
  email: 'info@energiasplasencia.es',
  // TODO: completar con los datos reales (aparecen en Google como ficha de negocio).
  telefono: '927 42 51 09 - 629 08 12 85',
  calle: 'Ctra. de Trujillo, 1',
  ciudad: 'Plasencia',
  provincia: 'Cáceres',
  codigoPostal: '10600',
  pais: 'ES'
};

/** Imagen para compartir en redes (Open Graph). Conviene una de 1200×630 px. */
export const IMAGEN_SOCIAL = 'images/coche-cargando2.jpg';

/**
 * Perfiles de la empresa en redes sociales, con la URL completa.
 *
 * Lo que se deje en blanco no se pinta en el pie, así que no hace falta tocar
 * la plantilla para quitar una red. Además de los iconos, estas direcciones van
 * al `sameAs` de los datos estructurados: es lo que usa Google para saber que
 * esos perfiles son del mismo negocio que la web.
 */
export const REDES: Record<'facebook' | 'instagram' | 'x', string> = {
  facebook: 'https://www.facebook.com/energiasolarplasencia/',
  // Sin el `?hl=es` del enlace original: ese parámetro solo fuerza el idioma de
  // la página a quien la abra, y para `sameAs` conviene la dirección limpia.
  instagram: 'https://www.instagram.com/energias.plasencia/',
  x: 'https://x.com/energplasencia'
};

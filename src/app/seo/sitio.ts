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
  telefono: '',
  calle: '',
  ciudad: 'Plasencia',
  provincia: 'Cáceres',
  codigoPostal: '',
  pais: 'ES'
};

/** Imagen para compartir en redes (Open Graph). Conviene una de 1200×630 px. */
export const IMAGEN_SOCIAL = 'images/coche-cargando.jpg';

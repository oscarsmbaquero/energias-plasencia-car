/** Desfase por defecto entre elementos que asoman a la vez, en segundos. */
const DESFASE = 0.1;

export interface OpcionesAparicion {
  /** Clase que se pone al asomar. Por defecto, `visible`. */
  clase?: string;
  /**
   * Clase de partida, la que deja el elemento escondido. Solo se pone a lo que
   * todavía no se ve. Si se omite, no se esconde nada y la clase de arriba sirve
   * únicamente como aviso de "ya has llegado aquí".
   */
  claseOculta?: string;
  /** Segundos entre un elemento y el siguiente de los que asoman a la vez. */
  desfase?: number;
  /** Cuánto tiene que asomar por abajo antes de dispararse. */
  margen?: string;
}

/**
 * Hace aparecer elementos según asoman por la parte de abajo de la pantalla,
 * escalonando los que entran a la vez. Pone una variable CSS `--retraso` en cada
 * elemento, que su hoja de estilos usa como `transition-delay`.
 *
 * Resuelve de paso dos cosas propias de una web renderizada en el servidor:
 *
 * - El HTML llega ya pintado, así que esconder lo que ya se está viendo daría un
 *   parpadeo feo. Al arrancar solo se esconde lo que queda por debajo.
 * - La hidratación sustituye los nodos que vienen del servidor por los suyos un
 *   momento después de arrancar, de modo que no basta con prepararlo una vez:
 *   las clases se quedarían en unos nodos que ya no están en la página. Un
 *   `MutationObserver` lo rehace cada vez que la lista cambia (por la
 *   hidratación, por un filtro o por un cambio de idioma).
 *
 * Todas las clases las pone el navegador, nunca el servidor: si falla el
 * JavaScript, o para un buscador, el contenido se ve tal cual.
 */
export class Aparicion {
  private observador?: IntersectionObserver;
  private vigilante?: MutationObserver;
  private pendiente = false;
  private todos = false;
  /** Para descartar una preparación que ha quedado atrás. */
  private generacion = 0;

  constructor(
    private readonly host: HTMLElement,
    private readonly selector: string,
    private readonly opciones: OpcionesAparicion = {}
  ) {}

  /** Llamar una sola vez, ya en el navegador. */
  arrancar(): void {
    this.preparar();
    this.vigilante = new MutationObserver(() => this.replanificar());
    this.vigilante.observe(this.host, { childList: true, subtree: true });
  }

  /**
   * Para antes de un cambio que repinta la lista entera, como pulsar un filtro:
   * los elementos son nuevos y aún no se han pintado, así que entran todos
   * aunque estén a la vista.
   */
  entranTodos(): void {
    this.todos = true;
  }

  parar(): void {
    this.observador?.disconnect();
    this.vigilante?.disconnect();
  }

  /** Junta varias mutaciones seguidas en una sola preparación. */
  private replanificar(): void {
    if (this.pendiente) return;
    this.pendiente = true;
    requestAnimationFrame(() => {
      this.pendiente = false;
      this.preparar();
    });
  }

  private preparar(): void {
    this.observador?.disconnect();
    const generacion = ++this.generacion;

    const elementos = Array.from(this.host.querySelectorAll<HTMLElement>(this.selector));
    const todos = this.todos;
    this.todos = false;

    if (!elementos.length) return;
    // Con "reducir movimiento" activado no se esconde ni se anima nada.
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const { clase = 'visible', claseOculta } = this.opciones;

    for (const el of elementos) {
      el.classList.remove(clase);
      if (claseOculta) el.classList.remove(claseOculta);
      el.style.removeProperty('--retraso');
    }

    if (claseOculta) {
      const limite = window.innerHeight * 0.9;
      const aEsconder = todos
        ? elementos
        : elementos.filter(el => el.getBoundingClientRect().top > limite);
      for (const el of aEsconder) el.classList.add(claseOculta);
    }

    // Dos fotogramas de margen antes de vigilar: el navegador tiene que llegar
    // a pintar el estado escondido, porque si las dos clases caen en el mismo
    // fotograma la animación no arranca y los elementos salen de golpe.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (generacion !== this.generacion) return;
        this.vigilar(elementos);
      })
    );
  }

  private vigilar(elementos: HTMLElement[]): void {
    const { clase = 'visible', desfase = DESFASE, margen = '-80px' } = this.opciones;

    this.observador = new IntersectionObserver(
      (entradas, obs) => {
        // Los de una misma fila cruzan el borde a la vez: se ordenan por su
        // sitio en la página y se les da un retraso creciente. Eso es la cascada.
        const entrando = entradas
          .filter(e => e.isIntersecting)
          .map(e => e.target as HTMLElement)
          .sort((a, b) => elementos.indexOf(a) - elementos.indexOf(b));

        entrando.forEach((el, i) => {
          el.style.setProperty('--retraso', `${i * desfase}s`);
          el.classList.add(clase);
          obs.unobserve(el);
        });
      },
      { rootMargin: `0px 0px ${margen} 0px`, threshold: 0.01 }
    );

    for (const el of elementos) this.observador.observe(el);
  }
}

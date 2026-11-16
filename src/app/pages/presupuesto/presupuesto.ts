import { Component, effect, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PRODUCTOS } from '../../data/productos';

@Component({
  selector: 'app-presupuesto',
  imports: [ReactiveFormsModule],
  templateUrl: './presupuesto.html',
  styleUrl: './presupuesto.scss'
})
export class Presupuesto {
  private readonly fb = inject(FormBuilder);

  /** Llega de ?producto=<id> gracias a withComponentInputBinding */
  readonly producto = input<string>();

  protected readonly productos = PRODUCTOS;
  protected readonly enviado = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^[0-9 +]{9,15}$/)]],
    producto: [''],
    mensaje: [''],
    privacidad: [false, Validators.requiredTrue]
  });

  constructor() {
    effect(() => {
      const id = this.producto();
      if (id && PRODUCTOS.some(p => p.id === id)) this.form.patchValue({ producto: id });
    });
  }

  protected invalido(campo: 'nombre' | 'email' | 'telefono' | 'privacidad') {
    const c = this.form.controls[campo];
    return c.invalid && (c.dirty || c.touched);
  }

  protected enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: conectar con backend / servicio de email (EmailJS, Formspree, API propia…).
    console.log('Solicitud de presupuesto', this.form.getRawValue());
    this.enviado.set(true);
    this.form.reset();
  }
}

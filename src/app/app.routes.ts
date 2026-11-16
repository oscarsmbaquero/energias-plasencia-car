import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'Energías Plasencia car · Vehículo eléctrico', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'productos', title: 'Productos · Energías Plasencia car', loadComponent: () => import('./pages/productos/productos').then(m => m.Productos) },
  { path: 'info', title: 'Info · Energías Plasencia car', loadComponent: () => import('./pages/info/info').then(m => m.Info) },
  { path: 'presupuesto', title: 'Pedir presupuesto · Energías Plasencia car', loadComponent: () => import('./pages/presupuesto/presupuesto').then(m => m.Presupuesto) },
  { path: '**', redirectTo: '' }
];

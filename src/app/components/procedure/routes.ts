// components/sugerencias/routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./procedure.component').then(m => m.ProcedureComponent),
  },
  {
    path: 'agregar',
    loadComponent: () =>
      import('../procedure-add/procedure-add.component').then(m => m.ProcedureAddComponent),
  },
  {
    path: 'editar/:id',
    loadComponent: () =>
      import('../procedure-edit/procedure-edit.component').then(m => m.ProcedureEditComponent),
  },
  {
    path: 'detalle/:id',
    loadComponent: () =>
      import('../procedure-detail/procedure-detail.component').then(m => m.ProcedureDetailComponent),
  },
];
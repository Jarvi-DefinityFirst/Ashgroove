// components/sugerencias/routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./staff-managment.component').then(m => m.StaffManagmentComponent),
  },
  {
    path: 'agregar',
    loadComponent: () =>
      import('./add-user/add-user.component').then(m => m.AddUserComponent),
  },
  {
    path: 'editar/:id',
    loadComponent: () =>
      import('./edit-user/edit-user.component').then(m => m.EditUserComponent),
  },
];
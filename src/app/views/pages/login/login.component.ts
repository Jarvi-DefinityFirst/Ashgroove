import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { Router } from '@angular/router';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardGroupComponent,
  TextColorDirective,
  CardComponent,
  CardBodyComponent,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardGroupComponent,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    IconDirective,
    FormControlDirective,
    ButtonDirective,
    NgStyle,
    FormsModule,
    CommonModule
  ]
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  // Simulación de usuarios
  users = [
    { email: 'ashgrove@gmail.com', password: 'ash123' },
    { email: 'ayrton@gmail.com', password: 'ayrton123' }
  ];

  constructor(private router: Router) {}

  login(): void {
    const validUser = this.users.find(
      u => u.email === this.email && u.password === this.password
    );

    if (validUser) {
      this.error = '';
      this.router.navigate(['/procedure']); // Cambia por la ruta que desees
    } else {
      this.error = 'Email or password incorrect';
    }
  }
}
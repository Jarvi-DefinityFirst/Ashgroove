import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CardBodyComponent, CardComponent, CardHeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  user = {
    id: 0,
    name: '',
    position: '',
    role: '',
    email: '',
    password: '',
    avatar: ''
  };

  avatarPreview: string | null = null;

  constructor(private router: Router) {}

  guardar(form: NgForm) {
    if (form.invalid) return;

    const stored = localStorage.getItem('demo_staff');
    const lista = stored ? JSON.parse(stored) : [];

    this.user.id = Date.now(); // ID único
    lista.push(this.user);
    localStorage.setItem('demo_staff', JSON.stringify(lista));

    this.router.navigate(['/staff']);
  }

  onAvatarSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarPreview = reader.result as string;
        this.user.avatar = this.avatarPreview;
      };
      reader.readAsDataURL(file);
    }
  }
}

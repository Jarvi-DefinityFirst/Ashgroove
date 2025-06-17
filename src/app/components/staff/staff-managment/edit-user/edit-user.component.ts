import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardBodyComponent, CardComponent, CardHeaderComponent } from '@coreui/angular';
import { StaffService } from '../../../../services/staff.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit {
  user: any = {
    id: 0,
    name: '',
    position: '',
    role: '',
    email: '',
    password: '',
    avatar: ''
  };

  imagePreview: string | null = null;

  constructor(private router: Router, private staffService: StaffService) {}

  ngOnInit(): void {
    this.staffService.getStaff().subscribe(u => {
      if (u) {
        this.user = { ...u };
        this.imagePreview = this.user.avatar;
      } else {
        this.router.navigate(['/staff']);
      }
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.user.avatar = this.imagePreview;
      };
      reader.readAsDataURL(file);
    }
  }

  guardar(form: NgForm): void {
    if (form.invalid) return;

    const stored = localStorage.getItem('demo_staff');
    const staff = stored ? JSON.parse(stored) : [];
    const index = staff.findIndex((u: any) => u.id === this.user.id);
    if (index !== -1) {
      staff[index] = this.user;
      localStorage.setItem('demo_staff', JSON.stringify(staff));
    }

    console.log('Usuario actualizado:', this.user);
    this.router.navigate(['/staff']);
  }
}

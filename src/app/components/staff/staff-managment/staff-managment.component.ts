import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardBodyComponent, CardComponent, CardHeaderComponent } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { StaffService } from '../../../services/staff.service';

@Component({
  selector: 'app-staff-managment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    IconDirective
  ],
  templateUrl: './staff-managment.component.html',
  styleUrl: './staff-managment.component.scss'
})
export class StaffManagmentComponent implements OnInit {

  constructor(private router: Router , private staffService: StaffService) {}

  staff: any[] = [];
  filteredStaff: any[] = [];
  nameFilter = '';

  ngOnInit(): void {
    const stored = localStorage.getItem('demo_staff');
    if (stored) {
      this.staff = JSON.parse(stored);
    } else {
      this.staff = [
        { id: 1, name: 'María López', position: 'Manager', role: 'Admin', email: 'maria@example.com', password: '********', avatar: './assets/images/avatars/1.jpg'},
        { id: 2, name: 'Juan Pérez', position: 'Operator', role: 'User', email: 'juan@example.com', password: '********', avatar: './assets/images/avatars/2.jpg' }
      ];
      localStorage.setItem('demo_staff', JSON.stringify(this.staff));
    }
    this.filteredStaff = this.staff;
    console.log(this.filteredStaff);
    
  }

  filter(): void {
    try {
      const regex = new RegExp(this.nameFilter, 'i');
      this.filteredStaff = this.staff.filter(s => regex.test(s.name));
    } catch {
      this.filteredStaff = this.staff;
    }
  }

  addStaff(): void {
    this.router.navigate(['/staff/agregar']);
  }

  editStaff(user: any): void {
    this.staffService.setStaff(user);
    this.router.navigate(['/staff/editar', user.id]);
  }


  deleteStaff(user: any): void {
    const confirmed = confirm(`¿Estás seguro de eliminar a ${user.name}?`);
    if (!confirmed) return;
    this.staff = this.staff.filter(u => u.id !== user.id);
    this.filteredStaff = this.staff;
    this.nameFilter = '';
    localStorage.setItem('demo_staff', JSON.stringify(this.staff));
  }
}

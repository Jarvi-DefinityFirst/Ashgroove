import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressComponent, AvatarComponent } from '@coreui/angular';

@Component({
  selector: 'app-staff-training',
  standalone: true,
  imports: [CommonModule, FormsModule, ProgressComponent, AvatarComponent],
  templateUrl: './staff-training.component.html',
  styleUrl: './staff-training.component.scss'
})
export class StaffTrainingComponent {
  selectedStaff: any = null;

  staffList = [
    {
      name: 'Maria Lopez',
      avatar: 'assets/images/avatars/1.jpg',
      courses: [
        {
          category: 'Operational Safety',
          items: [
            { name: 'Proper PPE Usage', done: true },
            { name: 'Forklift Maneuvers', done: false },
            { name: 'Machine Lockout', done: false }
          ]
        },
        {
          category: 'Occupational Health',
          items: [
            { name: 'First Aid', done: true },
            { name: 'Fatigue Control', done: false },
            { name: 'Stress Management', done: false }
          ]
        }
      ]
    },
    {
      name: 'John Perez',
      avatar: 'assets/images/avatars/2.jpg',
      courses: [
        {
          category: 'Operational Safety',
          items: [
            { name: 'Proper PPE Usage', done: true },
            { name: 'Forklift Maneuvers', done: true },
            { name: 'Machine Lockout', done: true }
          ]
        },
        {
          category: 'Occupational Health',
          items: [
            { name: 'First Aid', done: false },
            { name: 'Fatigue Control', done: false },
            { name: 'Stress Management', done: false }
          ]
        }
      ]
    }
  ];

  constructor() {
    this.selectedStaff = this.staffList[0];
  }

  resetView(): void {
    // placeholder for future logic
  }

  getOverallProgress(): number {
    if (!this.selectedStaff) return 0;
    const allCourses = this.selectedStaff.courses.flatMap((cat: any) => cat.items);
    const completed = allCourses.filter((c: any) => c.done).length;
    return Math.round((completed / allCourses.length) * 100);
  }

  getCategoryProgress(category: any): number {
    const total = category.items.length;
    const completed = category.items.filter((c: any) => c.done).length;
    return Math.round((completed / total) * 100);
  }

  saveProgress(): void {
    console.log('Progress saved:', this.selectedStaff);
  }

  getProgressColor(): string {
    return this.getOverallProgress() < 50 ? 'danger' : 'success';
  }
}

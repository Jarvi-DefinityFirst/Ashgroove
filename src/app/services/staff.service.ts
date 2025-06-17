import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StaffService {
  private staffSubject = new BehaviorSubject<any | null>(null);

  setStaff(user: any): void {
    this.staffSubject.next(user);
  }

  getStaff(): Observable<any | null> {
    return this.staffSubject.asObservable();
  }

  getStaffValue(): any | null {
    return this.staffSubject.value;
  }
}

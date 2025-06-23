import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DepartamentoInfo {
  name: string;
  color: string;
  icon: string;
}

@Injectable({ providedIn: 'root' })
export class ProcedureService {
  private procedimientoSubject = new BehaviorSubject<any | null>(null);

  private departamentos: DepartamentoInfo[] = [
    { name: 'Management', color: 'primary', icon: 'cil-settings' },
    { name: 'Labor', color: 'info', icon: 'cil-laptop' },
    { name: 'Safety', color: 'success', icon: 'cil-moon' },
    { name: 'Production', color: 'danger', icon: 'cil-bell' },
    { name: 'Maintenance', color: 'warning', icon: 'cil-user' },
  ];

  
  setProcedimiento(p: any): void {
    this.procedimientoSubject.next(p);
  }

  getProcedimiento(): Observable<any | null> {
    return this.procedimientoSubject.asObservable();
  }

  getProcedimientoValue(): any | null {
    return this.procedimientoSubject.value;
  }

  getDepartamentos(): DepartamentoInfo[] {
    return this.departamentos;
  }
}

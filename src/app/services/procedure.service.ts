import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProcedureService {
  private procedimientoSubject = new BehaviorSubject<any | null>(null);

  setProcedimiento(p: any): void {
    this.procedimientoSubject.next(p);
  }

  getProcedimiento(): Observable<any | null> {
    return this.procedimientoSubject.asObservable();
  }

  // útil si prefieres obtener el valor actual sin suscribirte
  getProcedimientoValue(): any | null {
    return this.procedimientoSubject.value;
  }
}
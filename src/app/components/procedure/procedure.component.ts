import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardBodyComponent, CardComponent, CardHeaderComponent } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { ProcedureService } from '../../services/procedure.service';

@Component({
  selector: 'app-procedure',
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CommonModule,
    FormsModule,
    IconDirective
  ],
  templateUrl: './procedure.component.html',
  styleUrl: './procedure.component.scss'
})
export class ProcedureComponent implements OnInit {

  constructor(private router: Router, private procedureService: ProcedureService) {}


  procedimientos: any[] = [];
  procedimientosFiltrados: any[] = [];
  nameFilter = '';

  ngOnInit(): void {
    const stored = localStorage.getItem('demo_procedimientos');
    if (stored) {
      this.procedimientos = JSON.parse(stored);
    } else {
      this.procedimientos = [
        { id: 1, name: 'Spotter Safety', category: 'Operation', user: 'Ayrton Ruiz', modificationDate: '16/6/2025', content: '' },
        { id: 2, name: 'Lightning', category: 'Illumination', user: 'Ayrton Ruiz', modificationDate: '16/6/2025', content: '' },
        { id: 3, name: 'Machine Lockout/Tagout', category: 'Maintenance', user: 'Ayrton Ruiz', modificationDate: '16/6/2025', content: '' },
        { id: 4, name: 'Cement Silo Cleaning Protocol', category: 'Safety', user: 'Ayrton Ruiz', modificationDate: '16/6/2025', content: '' },
        { id: 5, name: 'Forklift Operation Guidelines', category: 'Logistics', user: 'Ayrton Ruiz', modificationDate: '16/6/2025', content: '' },
        { id: 6, name: 'Dust Suppression Procedure', category: 'Environmental', user: 'Ayrton Ruiz', modificationDate: '16/6/2025', content: '' }
      ];
      localStorage.setItem('demo_procedimientos', JSON.stringify(this.procedimientos));
    }
    this.procedimientosFiltrados = this.procedimientos
  }

  filtrar(): void {
    try {
      const regex = new RegExp(this.nameFilter, 'i');
      this.procedimientosFiltrados = this.procedimientos.filter(p => regex.test(p.name));
    } catch (err) {
      this.procedimientosFiltrados = this.procedimientos;
    }
  }

  agregarProcedimiento() {
    this.router.navigate(['/procedure/agregar']); 
  }

  editarProcedimiento(p: any) {
    this.procedureService.setProcedimiento(p);
    this.router.navigate(['/procedure/editar', p.id]);
  }

  eliminarProcedimiento(p: any) {
    const confirmed = confirm(`¿Estás seguro de eliminar el procedimiento "${p.name}"?`);
    if (!confirmed) return;

    this.procedimientos = this.procedimientos.filter(proc => proc.id !== p.id);
    this.procedimientosFiltrados = this.procedimientos;
    this.nameFilter = '';
    localStorage.setItem('demo_procedimientos', JSON.stringify(this.procedimientos));
    console.log('Procedimiento eliminado:', p);
  }

  descargarPDF(p: any): void {
    console.log(p);
    
    if (!p.content || p.content.trim() === '') {
      alert('No PDF available for this procedure.');
      return;
    }
  
    const link = document.createElement('a');
    link.href = p.content; // base64 PDF
    link.download = `${p.name.replace(/\s+/g, '_')}.pdf`;
    link.click();
  }

  verDetalle(p: any) {
    this.procedureService.setProcedimiento(p);
    this.router.navigate(['/procedure/detalle', p.id]);
  }
}

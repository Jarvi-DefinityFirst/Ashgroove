import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { DepartamentoInfo, ProcedureService } from '../../services/procedure.service';
import { procedimientosDemo } from './demo';
import { ICON_PROVIDERS } from '../../icon.provider';

@Component({
  selector: 'app-procedure',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CommonModule,
    FormsModule,
    IconDirective
  ],
  providers: [...ICON_PROVIDERS],
  templateUrl: './procedure.component.html',
  styleUrl: './procedure.component.scss'
})
export class ProcedureComponent implements OnInit {
  procedimientos: any[] = [];
  procedimientosFiltrados: any[] = [];
  nameFilter = '';
  departments: Array<DepartamentoInfo> = [];
  ultimoDepartamentoSeleccionado: string | null = null;

  filters = {
    plantArea: '',
    department: '',
    id: '',
    name: '',
    modificationDate: null as number | null,
    status: ''
  };

  // Paginación
  currentPage = 1;
  pageSize = 5;

  get totalPages(): number {
    return Math.ceil(this.procedimientosFiltrados.length / this.pageSize);
  }

  get paginatedProcedimientos(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.procedimientosFiltrados.slice(start, start + this.pageSize);
  }

  widgetColors = ['primary', 'info', 'warning', 'danger', 'success', 'dark'];
  widgetIcons = ['cil-settings', 'cil-laptop', 'cil-moon', 'cil-bell', 'cil-user', 'cil-speedometer'];

  constructor(private router: Router, private procedureService: ProcedureService) {}

  ngOnInit(): void {
    const stored = localStorage.getItem('demo_procedimientos');
    if (stored) {
      this.procedimientos = JSON.parse(stored);
    } else {
      this.procedimientos = procedimientosDemo;
      localStorage.setItem('demo_procedimientos', JSON.stringify(this.procedimientos));
    }

    this.procedimientosFiltrados = this.procedimientos;
    this.departments = this.procedureService.getDepartamentos();
  }

  getIconName(index: number): string {
    return this.widgetIcons[index % this.widgetIcons.length];
  }

  aplicarFiltros(): void {
    const regexNombre = new RegExp(this.filters.name || '', 'i');
    const regexDepartamento = new RegExp(this.filters.department || '', 'i');
    const regexPlantArea = new RegExp(this.filters.plantArea || '', 'i');
    const regexId = new RegExp(this.filters.id?.toString() || '', 'i');
    const regexAnio = new RegExp(this.filters.modificationDate?.toString() || '', 'i');
    const filtroStatus = this.filters.status || '';

    this.procedimientosFiltrados = this.procedimientos.filter(p => {
      const coincideDepartamentoCard = !this.ultimoDepartamentoSeleccionado || p.department === this.ultimoDepartamentoSeleccionado;

      return (
        coincideDepartamentoCard &&
        (!this.filters.name || regexNombre.test(p.name)) &&
        (!this.filters.department || regexDepartamento.test(p.department)) &&
        (!this.filters.plantArea || regexPlantArea.test(p.plantArea)) &&
        (!this.filters.id || regexId.test(p.id.toString())) &&
        (!this.filters.modificationDate || regexAnio.test(p.modificationDate.toString())) &&
        (!filtroStatus || p.status === filtroStatus)
      );
    });

    this.currentPage = 1;
  }

  limpiarFiltros(): void {
    this.filters = {
      plantArea: '',
      department: '',
      id: '',
      name: '',
      modificationDate: null,
      status: ''
    };
    this.nameFilter = '';
    this.ultimoDepartamentoSeleccionado = null;
    this.procedimientosFiltrados = [...this.procedimientos];
    this.currentPage = 1;
  }

  filtrar(): void {
    try {
      const regex = new RegExp(this.nameFilter, 'i');

      this.procedimientosFiltrados = this.procedimientos.filter(p => {
        const coincideNombre = regex.test(p.name);
        const coincideDepartamento = !this.ultimoDepartamentoSeleccionado || p.department === this.ultimoDepartamentoSeleccionado;
        return coincideNombre && coincideDepartamento;
      });
    } catch {
      this.procedimientosFiltrados = this.procedimientos.filter(p =>
        !this.ultimoDepartamentoSeleccionado || p.department === this.ultimoDepartamentoSeleccionado
      );
    }

    this.currentPage = 1;
  }

  contarPorDepartamento(dep: string): number {
    return this.procedimientos.filter(p => p.department === dep).length;
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
    this.currentPage = 1;
  }

  descargarPDF(p: any): void {
    if (!p.content || p.content.trim() === '') {
      alert('No PDF available for this procedure.');
      return;
    }

    const link = document.createElement('a');
    link.href = p.content;
    link.download = `${p.name.replace(/\s+/g, '_')}.pdf`;
    link.click();
  }

  filtrarPorDepartamento(dep: string): void {
    this.filters = {
      plantArea: '',
      department: '',
      id: '',
      name: '',
      modificationDate: null,
      status: ''
    };
    this.nameFilter = '';
    this.ultimoDepartamentoSeleccionado = dep === 'all' ? null : dep;
    this.filtrar();
    this.currentPage = 1;
  }

  verDetalle(p: any) {
    this.procedureService.setProcedimiento(p);
    this.router.navigate(['/procedure/detalle', p.id]);
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent
} from '@coreui/angular';
import { QuillModule } from 'ngx-quill';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ProcedureService } from '../../services/procedure.service';
import { DepartamentoInfo } from '../../services/procedure.service';

@Component({
  selector: 'app-procedure-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    QuillModule,
    PdfViewerModule
  ],
  templateUrl: './procedure-edit.component.html',
  styleUrl: './procedure-edit.component.scss'
})
export class ProcedureEditComponent implements OnInit {
  procedimiento: any = null;
  pdfSrc: string | null = null;
  departamentos: DepartamentoInfo[] = [];
  nuevaJob: string = '';

  constructor(
    private router: Router,
    private procedureService: ProcedureService
  ) {}

  ngOnInit(): void {
    this.departamentos = this.procedureService.getDepartamentos();

    this.procedureService.getProcedimiento().subscribe(p => {
      this.procedimiento = { ...p };
      if (this.procedimiento.content?.startsWith('data:application/pdf')) {
        this.pdfSrc = this.procedimiento.content;
      } else {
        this.pdfSrc = null;
      }
    });
  }

  guardar(form: NgForm) {
    if (form.invalid) return;

     if(this.pdfSrc){
      this.procedimiento.content = this.pdfSrc;
    }

    const stored = localStorage.getItem('demo_procedimientos');
    const lista = stored ? JSON.parse(stored) : [];
    const index = lista.findIndex((p: any) => p.id === this.procedimiento.id);
    if (index !== -1) {
      lista[index] = { ...this.procedimiento };
      localStorage.setItem('demo_procedimientos', JSON.stringify(lista));
    }

    console.log('Procedimiento actualizado:', this.procedimiento);
    this.router.navigate(['/procedure']);
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        this.pdfSrc = base64;
        this.procedimiento.content = base64;
      };
      reader.readAsDataURL(file);
    }
  }

  agregarJob(): void {
  const trimmed = this.nuevaJob.trim();

  if (!this.procedimiento.jobPosition) {
    this.procedimiento.jobPosition = []; 
  }

  if (trimmed && !this.procedimiento.jobPosition.includes(trimmed)) {
    this.procedimiento.jobPosition.push(trimmed);
    this.nuevaJob = '';
  }
}

  quitarJob(index: number): void {
    this.procedimiento.jobPosition.splice(index, 1);
  }
}

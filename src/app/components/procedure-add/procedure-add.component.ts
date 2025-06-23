import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CardBodyComponent, CardComponent, CardHeaderComponent } from '@coreui/angular';
import { QuillModule } from 'ngx-quill';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DepartamentoInfo, ProcedureService } from 'src/app/services/procedure.service';

@Component({
  selector: 'app-procedure-add',
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    QuillModule,
    PdfViewerModule
  ],
  templateUrl: './procedure-add.component.html',
  styleUrl: './procedure-add.component.scss'
})
export class ProcedureAddComponent implements OnInit {
  procedimiento = {
  id: 0,
  name: '',
  plantArea: '',
  department: '',
  status: 'Not updated',
  user: 'Noah Pounds',
  modificationDate: '',
  content: '',
  jobPosition: [] as string[]
};

nuevaJob: string = '';
 
departamentos: DepartamentoInfo[] = [];

pdfSrc: string | null = null; 
  
  constructor(private router: Router, private procedureService: ProcedureService) {}

  ngOnInit(): void {
    this.departamentos = this.procedureService.getDepartamentos();
  }
  guardar(form: NgForm) {
    if (form.invalid) return;
    
    if(this.pdfSrc){
      this.procedimiento.content = this.pdfSrc;
    }

    const stored = localStorage.getItem('demo_procedimientos');
    const lista = stored ? JSON.parse(stored) : [];
    lista.push({ ...this.procedimiento });
    localStorage.setItem('demo_procedimientos', JSON.stringify(lista));

    console.log('Procedimiento guardado:', this.procedimiento);
    this.router.navigate(['/procedure']);
  }



  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        this.pdfSrc = base64;
      };
      reader.readAsDataURL(file);
    }
  }

  agregarJob(): void {
    console.log(this.nuevaJob);
    
  if (this.nuevaJob.trim()) {
    this.procedimiento.jobPosition.push(this.nuevaJob.trim());
    this.nuevaJob = '';
  }
}

quitarJob(index: number): void {
  this.procedimiento.jobPosition.splice(index, 1);
}
}

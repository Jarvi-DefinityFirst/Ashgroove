import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CardBodyComponent, CardComponent, CardHeaderComponent } from '@coreui/angular';
import { QuillModule } from 'ngx-quill';
import { PdfViewerModule } from 'ng2-pdf-viewer';

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
export class ProcedureAddComponent {
  procedimiento = {
    id: 0,
    name: '',
    category: '',
    user: 'Ayrton Ruiz',
    modificationDate: new Date().toLocaleDateString('es-MX'),
    content: ''
  };

  pdfSrc: string | null = null; 
  
  constructor(private router: Router) {}

  guardar(form: NgForm) {
    if (form.invalid || !this.pdfSrc) return;

    this.procedimiento.content = this.pdfSrc;

    const stored = localStorage.getItem('demo_procedimientos');
    const lista = stored ? JSON.parse(stored) : [];
    this.procedimiento.id = lista.length > 0 ? Math.max(...lista.map((p: any) => p.id)) + 1 : 1;
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
}

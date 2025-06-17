import { Component, OnInit } from '@angular/core';
import { ProcedureService } from '../../services/procedure.service';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-procedure-detail',
  standalone: true,
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './procedure-detail.component.html',
  styleUrl: './procedure-detail.component.scss'
})
export class ProcedureDetailComponent implements OnInit {
  procedimiento: any;

  constructor(private procedureService: ProcedureService) {}

  ngOnInit(): void {
    this.procedureService.getProcedimiento().subscribe(p => {
      this.procedimiento = p;
    });
  }
}

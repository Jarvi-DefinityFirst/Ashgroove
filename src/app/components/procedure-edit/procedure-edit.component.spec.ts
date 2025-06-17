import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureEditComponent } from './procedure-edit.component';

describe('ProcedureEditComponent', () => {
  let component: ProcedureEditComponent;
  let fixture: ComponentFixture<ProcedureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcedureEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

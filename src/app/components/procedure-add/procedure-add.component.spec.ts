import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureAddComponent } from './procedure-add.component';

describe('ProcedureAddComponent', () => {
  let component: ProcedureAddComponent;
  let fixture: ComponentFixture<ProcedureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcedureAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

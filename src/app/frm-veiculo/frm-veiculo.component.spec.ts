import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmVeiculoComponent } from './frm-veiculo.component';

describe('FrmVeiculoComponent', () => {
  let component: FrmVeiculoComponent;
  let fixture: ComponentFixture<FrmVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

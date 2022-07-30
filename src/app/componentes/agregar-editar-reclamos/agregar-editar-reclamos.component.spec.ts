import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarReclamosComponent } from './agregar-editar-reclamos.component';

describe('AgregarEditarReclamosComponent', () => {
  let component: AgregarEditarReclamosComponent;
  let fixture: ComponentFixture<AgregarEditarReclamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarReclamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

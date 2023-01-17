import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListaClientesComponent } from './container-lista-clientes.component';

describe('ContainerListaClientesComponent', () => {
  let component: ContainerListaClientesComponent;
  let fixture: ComponentFixture<ContainerListaClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerListaClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerListaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

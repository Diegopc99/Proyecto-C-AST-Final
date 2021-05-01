import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteConsultarArticulosComponent } from './cliente-consultar-articulos.component';

describe('ClienteConsultarArticulosComponent', () => {
  let component: ClienteConsultarArticulosComponent;
  let fixture: ComponentFixture<ClienteConsultarArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteConsultarArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteConsultarArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

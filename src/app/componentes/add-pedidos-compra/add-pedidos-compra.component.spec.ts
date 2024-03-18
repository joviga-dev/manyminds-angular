import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPedidosCompraComponent } from './add-pedidos-compra.component';

describe('AddPedidosCompraComponent', () => {
  let component: AddPedidosCompraComponent;
  let fixture: ComponentFixture<AddPedidosCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPedidosCompraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPedidosCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

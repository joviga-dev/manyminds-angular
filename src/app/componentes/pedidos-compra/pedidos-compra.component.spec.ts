import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosCompraComponent } from './pedidos-compra.component';

describe('PedidosCompraComponent', () => {
  let component: PedidosCompraComponent;
  let fixture: ComponentFixture<PedidosCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosCompraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedidosCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

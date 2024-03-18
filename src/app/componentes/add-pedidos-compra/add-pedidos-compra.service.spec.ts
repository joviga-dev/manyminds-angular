import { TestBed } from '@angular/core/testing';

import { AddPedidosCompraService } from './add-pedidos-compra.service';

describe('AddPedidosCompraService', () => {
  let service: AddPedidosCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPedidosCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

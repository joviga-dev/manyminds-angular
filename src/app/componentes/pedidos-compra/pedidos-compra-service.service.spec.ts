import { TestBed } from '@angular/core/testing';

import { PedidosCompraService } from './pedidos-compra-service.';

describe('PedidosCompraServiceService', () => {
  let service: PedidosCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

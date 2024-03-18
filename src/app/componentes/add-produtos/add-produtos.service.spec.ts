import { TestBed } from '@angular/core/testing';

import { AddProdutosService } from './add-produtos.service';

describe('AddProdutosService', () => {
  let service: AddProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

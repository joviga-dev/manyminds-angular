import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddPedidosCompraService {
  private readonly API = 'http://localhost:5000/api/PedidoCompra';

  constructor(private http: HttpClient) {}
  buscarFornecedores(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/api/Fornecedor/');
  }

  gerarFornecedores(): Observable<any> {
    return this.http.post<any>('http://localhost:5000/api/Fornecedor/', null);
  }

  addPedido(pedido: any): Observable<any> {
    return this.http.post<any>(this.API, pedido);
  }
}

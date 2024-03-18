import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidosCompraService {
  private readonly API = 'http://localhost:5000/api/PedidoCompra/todos';

  constructor(private http: HttpClient) {}
  buscar(): Observable<any> {
    return this.http.get<any>(this.API);
  }
  buscarProximos(pagina: number): Observable<any> {
    return this.http.get<any>(this.API + '?skip='+(pagina - 1)*5 +'&take=5');
  }

  atualizar(id: number, pedido: any): Observable<any> {
    return this.http.put<any>('http://localhost:5000/api/PedidoCompra/' + id, pedido);
  }
  remover(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:5000/api/PedidoCompra/' + id + '/remover');
  }

  finalizar(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:5000/api/PedidoCompra/' + id + '/finalizar');
  }
}

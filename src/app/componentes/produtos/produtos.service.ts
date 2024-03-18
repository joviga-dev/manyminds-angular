import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private readonly API = 'http://localhost:5000/api/produto/todos';

  constructor(private http: HttpClient) {}
  buscar(): Observable<any> {
    return this.http.get<any>(this.API);
  }
  buscarProximos(pagina: number): Observable<any> {
    return this.http.get<any>(this.API + '?skip='+(pagina - 1)*5 +'&take=5');
  }

  atualizar(id: number, product: any): Observable<any> {
    return this.http.put<any>('http://localhost:5000/api/Produto/' + id, product);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:5000/api/Produto/' + id);
  }

  reativar(id: number): Observable<any> {
    return this.http.patch<any>('http://localhost:5000/api/Produto/' + id + '/reativar', null);
  }
}

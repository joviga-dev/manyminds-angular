import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddProdutosService {

  constructor(private http: HttpClient) {}

  public addProduto(produto: any): Observable<any> {
    return this.http
      .post<any>(`http://localhost:5000/api/Produto`, produto)
      .pipe(catchError((error) => error));
  }
}

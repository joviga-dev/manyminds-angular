import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriarContaService {
  private readonly API = 'http://localhost:5000/api/Usuario/criar';
  constructor(private http: HttpClient, private router: Router) {}

  criarConta(Login: string, Senha: string): Observable<any> {
    const body = { Login, Senha };
    return this.http
      .post<any>(this.API, body)
      .pipe(catchError((error) => error));
  }
}

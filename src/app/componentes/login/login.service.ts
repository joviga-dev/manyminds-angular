
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, take } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class LoginService {
  public logado: boolean = false;

  private readonly API = 'http://localhost:5000/api/Usuario/login';

  constructor(private http: HttpClient, private router: Router) {}


  confirmarCredenciais(Login: string, Senha: string): Observable<any> {
    const body = { Login, Senha };
    return this.http
      .post<any>(this.API, body)
      .pipe(catchError((error) => error));
  }

  logar(login: string, senha: string) {
    this.confirmarCredenciais(login, senha).subscribe({
      next: response => {
        this.router.navigate(['/menuProdutos']);
        this.logado = true;
      },
      error: error => {
        console.error('Error logging in:', error);
      }
    });
  }
  deslogar() {
    this.logado = false;
  }

  isLogado(){
    return this.logado
  }
}

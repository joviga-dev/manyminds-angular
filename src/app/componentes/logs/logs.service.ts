import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private readonly API = 'http://localhost:5000/api/SystemLog/todos';

  constructor(private http: HttpClient) {}

  getLogs(pagina: any): Observable<any[]> {
    return this.http.get<any[]>(this.API + '?skip='+(pagina - 1)*10 +'&take=10');
  }
}

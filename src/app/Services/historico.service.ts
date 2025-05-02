import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private apiUrl = 'http://localhost:3000/transacoes'; 

  constructor(private http: HttpClient) {}

  getTransacoes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Mensagem {
  id?: number; 
  nome: string;
  email: string;
  mensagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  private apiUrl = 'http://localhost:3000/mensagens';

  constructor(private http: HttpClient) {}

  // CREATE
  criar(mensagem: Mensagem): Observable<Mensagem> {
    return this.http.post<Mensagem>(this.apiUrl, mensagem);
  }

  // READ (listar todas)
  listar(): Observable<Mensagem[]> {
    return this.http.get<Mensagem[]>(this.apiUrl);
  }

  // DELETE
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // UPDATE
  atualizar(id: number, mensagem: Mensagem): Observable<Mensagem> {
    return this.http.put<Mensagem>(`${this.apiUrl}/${id}`, mensagem);
  }

  // READ 
  buscarPorId(id: number): Observable<Mensagem> {
    return this.http.get<Mensagem>(`${this.apiUrl}/${id}`);
  }
}

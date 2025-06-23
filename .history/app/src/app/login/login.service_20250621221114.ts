import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Usuario {
  id: number;
  email: string;
  senha: string;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<Usuario | null> {
    return this.http.get<Usuario[]>(`${this.apiUrl}?email=${email}&senha=${senha}`)
      .pipe(
        map(usuarios => usuarios.length ? usuarios[0] : null)
      );
  }
}

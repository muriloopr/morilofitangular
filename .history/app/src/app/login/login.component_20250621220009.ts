import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.errorMessage = '';

    this.http.get<User[]>(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
      .subscribe(users => {
        if (users.length > 0) {
          // Usuário encontrado, salvar info no localStorage
          localStorage.setItem('user', JSON.stringify(users[0]));
          // Redirecionar para a home (ou dashboard)
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Email ou senha incorretos.';
        }
      }, () => {
        this.errorMessage = 'Erro ao conectar ao servidor.';
      });
  }
}

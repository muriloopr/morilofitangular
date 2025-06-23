import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService, Usuario } from './auth.service'; // ajuste o caminho

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  senha = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.errorMessage = '';

    if (!this.email || !this.senha) {
      this.errorMessage = 'Preencha email e senha.';
      return;
    }

    this.authService.login(this.email, this.senha).subscribe({
      next: (usuario) => {
        if (usuario) {
          localStorage.setItem('user', JSON.stringify(usuario));
          this.router.navigate(['/']); // rota após login
        } else {
          this.errorMessage = 'Email ou senha incorretos.';
          this.senha = '';
        }
      },
      error: () => {
        this.errorMessage = 'Erro ao conectar ao servidor.';
      }
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  senha = '';
  errorMessage = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    this.errorMessage = '';

    if (!this.email || !this.senha) {
      this.errorMessage = 'Preencha email e senha.';
      return;
    }

    this.loginService.login(this.email, this.senha).subscribe(usuario => {
      if (usuario) {
        localStorage.setItem('user', JSON.stringify(usuario));
        this.router.navigate(['/']);
      } else {
        this.errorMessage = 'Email ou senha incorretos.';
        this.senha = '';
      }
    }, () => {
      this.errorMessage = 'Erro ao conectar ao servidor.';
    });
  }
}

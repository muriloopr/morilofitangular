import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  darkMode = false;

  usuario = {
    id: 0,
    nome: '',
    email: '',
    senha: ''
  };

  novaSenha = '';
  confirmarSenha = '';

  errorMessage = '';
  successMessage = '';

  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('darkMode');
    this.darkMode = savedTheme === 'true';
    this.toggleDarkMode(this.darkMode);

    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.usuario = {
        id: user.id,
        nome: user.name,
        email: user.email,
        senha: user.password
      };
    }
  }

  toggleDarkMode(enabled: boolean) {
    this.darkMode = enabled;
    if (enabled) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
    localStorage.setItem('darkMode', String(enabled));
  }

  atualizarDados(form: NgForm) {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.novaSenha && this.novaSenha !== this.confirmarSenha) {
      this.errorMessage = 'As senhas não coincidem.';
      return;
    }

    const dadosAtualizados = {
      name: this.usuario.nome,
      email: this.usuario.email,
      password: this.novaSenha || this.usuario.senha
    };

    this.http.put(`${this.apiUrl}/${this.usuario.id}`, dadosAtualizados)
      .subscribe({
        next: () => {
          const novoUser = {
            id: this.usuario.id,
            ...dadosAtualizados
          };
          localStorage.setItem('user', JSON.stringify(novoUser));
          this.successMessage = 'Dados atualizados com sucesso!';
          this.usuario.senha = dadosAtualizados.password;
          this.novaSenha = '';
          this.confirmarSenha = '';
        },
        error: () => {
          this.errorMessage = 'Erro ao atualizar os dados no servidor.';
        }
      });
  }
}

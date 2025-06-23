import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  darkMode = false;
  usuario = {
    id: 0,
    nome: '',
    email: '',
    password: ''
  };
  novaSenha = '';
  confirmarSenha = '';
  errorMessage = '';
  successMessage = '';

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngOnInit() {
  const savedTheme = localStorage.getItem('darkMode');
  this.darkMode = savedTheme === 'true';
  this.toggleDarkMode(this.darkMode);

  const user = localStorage.getItem('user');
  if (user) {
    this.usuario = JSON.parse(user);
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

  if (!this.usuario?.id) {
    this.errorMessage = 'ID do usuário não encontrado.';
    return;
  }

  if (this.novaSenha !== this.confirmarSenha) {
    this.errorMessage = 'As senhas não coincidem.';
    return;
  }

  const dadosAtualizados = {
    ...this.usuario,
    password: this.novaSenha || this.usuario.password
  };

  this.http.put(`http://localhost:3000/usuarios/${this.usuario.id}`, dadosAtualizados)
    .subscribe({
      next: () => {
        this.successMessage = 'Dados atualizados com sucesso!';
        localStorage.setItem('user', JSON.stringify(dadosAtualizados));
      },
      error: () => {
        this.errorMessage = 'Erro ao atualizar dados.';
      }
    });
}


import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

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
    nome: '',
    email: '',
    senha: ''
  };

  novaSenha = '';
  confirmarSenha = '';

  errorMessage = '';
  successMessage = '';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('darkMode');
    this.darkMode = savedTheme === 'true';
    this.toggleDarkMode(this.darkMode);

    // Recuperar dados do usuário logado do localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.usuario.nome = user.name;
      this.usuario.email = user.email;
      this.usuario.senha = user.password; // se necessário
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

    if (this.novaSenha !== this.confirmarSenha) {
      this.errorMessage = 'As senhas não coincidem.';
      return;
    }

    // Atualizar os dados no localStorage
    const usuarioAtualizado = {
      ...this.usuario,
      password: this.novaSenha || this.usuario.senha,
      name: this.usuario.nome
    };

    localStorage.setItem('user', JSON.stringify(usuarioAtualizado));
    this.successMessage = 'Dados atualizados com sucesso!';
    this.novaSenha = '';
    this.confirmarSenha = '';
  }
}

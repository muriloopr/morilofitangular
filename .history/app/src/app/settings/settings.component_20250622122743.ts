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
    // Dark mode
    const savedTheme = localStorage.getItem('darkMode');
    this.darkMode = savedTheme === 'true';
    this.toggleDarkMode(this.darkMode);

    // Carrega usuário logado
    const user = localStorage.getItem('user');
  if (user) {
  const u = JSON.parse(user);
  this.usuario = {
    id: u.id,
    nome: u.nome || u.name,
    email: u.email,
    password: u.password || u.senha
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

    if (this.novaSenha !== this.confirmarSenha) {
      this.errorMessage = 'As senhas não coincidem.';
      return;
    }

    const dadosAtualizados: any = {
      name: this.usuario.nome,
      email: this.usuario.email
    };

    if (this.novaSenha) {
      dadosAtualizados.password = this.novaSenha;
    }

    this.http.put(`http://localhost:3000/usuarios/${this.usuario.id}`, dadosAtualizados)
      .subscribe(() => {
        this.successMessage = 'Dados atualizados com sucesso!';
        // Atualiza localStorage
        const usuarioAtualizado = {
          ...this.usuario,
          ...dadosAtualizados
        };
        localStorage.setItem('user', JSON.stringify(usuarioAtualizado));
      }, () => {
        this.errorMessage = 'Erro ao atualizar os dados.';
      });
  }
}

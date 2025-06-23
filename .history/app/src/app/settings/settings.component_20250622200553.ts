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
  if (form.invalid) {
    this.errorMessage = 'Preencha todos os campos obrigatórios.';
    return;
  }

  if (this.novaSenha !== this.confirmarSenha) {
    this.errorMessage = 'As senhas não coincidem.';
    return;
  }

  this.errorMessage = '';
  this.successMessage = '';

  this.http.get<Usuario[]>(`http://localhost:3000/usuarios?email=${this.usuario.email}`)
    .subscribe(usuarios => {
      if (usuarios.length === 0) {
        this.errorMessage = 'Usuário não encontrado.';
        return;
      }

      const userEncontrado = usuarios[0];

      const dadosAtualizados = {
        ...userEncontrado,
        nome: this.usuario.nome,
        email: this.usuario.email,
        senha: this.novaSenha || userEncontrado.senha
      };

      this.http.put(`http://localhost:3000/usuarios/${userEncontrado.id}`, dadosAtualizados)
        .subscribe(() => {
          this.successMessage = 'Dados atualizados com sucesso.';
          localStorage.setItem('user', JSON.stringify(dadosAtualizados));
        }, () => {
          this.errorMessage = 'Erro ao atualizar os dados.';
        });

    }, () => {
      this.errorMessage = 'Erro ao buscar o usuário.';
    });
}


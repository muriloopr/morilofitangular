import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MensagemService, Mensagem } from './mensagem.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCard, MatIcon, MatFormFieldModule, MatInputModule, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  mensagens: Mensagem[] = [];

  constructor(private mensagemService: MensagemService) {}

  ngOnInit() {
    this.listarMensagens();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const novaMensagem: Mensagem = form.value;

      this.mensagemService.criar(novaMensagem).subscribe(() => {
        alert('Mensagem enviada com sucesso!');
        form.reset();
        this.listarMensagens(); 
      });
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }

  listarMensagens() {
    this.mensagemService.listar().subscribe((mensagens) => {
      this.mensagens = mensagens;
    });
  }

  deletarMensagem(id?: number) {
  if (id == null) return;

  this.mensagemService.deletar(id).subscribe(() => {
    alert('Mensagem deletada com sucesso!');
    this.listarMensagens();
  });
}

}

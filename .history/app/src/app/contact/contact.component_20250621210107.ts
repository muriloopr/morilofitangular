import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MensagemService, Mensagem } from './mensagem.service'; // ajuste o caminho conforme seu projeto

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatCard,MatIcon,MatFormFieldModule,MatInputModule,FormsModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private mensagemService: MensagemService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const novaMensagem: Mensagem = form.value;

      this.mensagemService.criar(novaMensagem).subscribe(() => {
        alert('Mensagem enviada com sucesso!');
        form.reset();
      });
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }
}

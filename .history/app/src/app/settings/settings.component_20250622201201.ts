import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  darkMode = false;
  animacoesAtivas = true;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('darkMode');
    const savedAnim = localStorage.getItem('animacoesAtivas');

    this.darkMode = savedTheme === 'true';
    this.animacoesAtivas = savedAnim !== 'false'; // por padrão true

    this.toggleDarkMode(this.darkMode);
    this.toggleAnimacoes(this.animacoesAtivas);
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

  toggleAnimacoes(ativo: boolean) {
    this.animacoesAtivas = ativo;
    if (ativo) {
      this.renderer.removeClass(document.body, 'sem-animacoes');
    } else {
      this.renderer.addClass(document.body, 'sem-animacoes');
    }
    localStorage.setItem('animacoesAtivas', String(ativo));
  }
}

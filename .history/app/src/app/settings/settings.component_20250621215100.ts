import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MatSlideToggleModule, CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
      this.isDarkMode = true;
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }

  toggleDarkMode(ativado: boolean) {
    this.isDarkMode = ativado;
    if (ativado) {
      this.renderer.addClass(document.body, 'dark-theme');
      localStorage.setItem('tema', 'escuro');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      localStorage.setItem('tema', 'claro');
    }
  }
}

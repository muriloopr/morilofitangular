import { Component, Renderer2 } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  darkMode = false;

  constructor(private renderer: Renderer2) {
    // Verifica o tema salvo ou prefere o claro por padrão
    const savedTheme = localStorage.getItem('darkMode');
    this.darkMode = savedTheme === 'true';
    this.applyTheme(this.darkMode);
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    this.applyTheme(this.darkMode);
    localStorage.setItem('darkMode', String(this.darkMode));
  }

  private applyTheme(isDark: boolean) {
    if (isDark) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
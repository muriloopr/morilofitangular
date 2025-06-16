import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, MatToolbarModule, MatButtonModule,MatIconModule, HomeComponent, LoginComponent, AboutComponent, SettingsComponent]
    //CommonModule,
    //RouterModule, // Importa o RouterModule para usar routerLink
    //RouterOutlet, // Necessário para o <router-outlet>
    //MatToolbarModule, // Angular Material
    //MatButtonModule,
    //MatIconModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

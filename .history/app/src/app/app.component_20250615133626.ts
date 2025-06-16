import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: []
    CommonModule,
    RouterModule, // Importa o RouterModule para usar routerLink
    RouterOutlet, // Necessário para o <router-outlet>
    MatToolbarModule, // Angular Material
    MatButtonModule,
    MatIconModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

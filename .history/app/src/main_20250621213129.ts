import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importa o HttpClient
import { routes } from './app/app.routes'; // Importe suas rotas
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Configura o roteador
    provideHttpClient(withFetch()) // Adiciona o HttpClient
  ]
}).catch(err => console.error(err));

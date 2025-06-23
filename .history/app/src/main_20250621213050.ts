import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Importe suas rotas
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Configura o roteador
    // Outros providers necessários (como Angular Material)
  ]
}).catch(err => console.error(err));

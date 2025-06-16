import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routing } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [routing]
});

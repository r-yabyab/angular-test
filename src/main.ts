import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { homeComponent } from './home/home.component';

// bootstrapApplication(AppComponent, appConfig)
// bootstrapApplication(AppComponent)
bootstrapApplication(homeComponent)
  .catch((err) => console.error(err));

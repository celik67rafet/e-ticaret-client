import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// eğer app.module.ts ve app'nin standalone çalışmaması isteniyorsa ve diğer alt componentlerin module'ü olacaksa main.ts içeriği böyle olmalı

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

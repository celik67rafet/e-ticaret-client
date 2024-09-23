import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Bileşeni import et
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
        AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UiModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
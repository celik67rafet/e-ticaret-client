import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Bileşeni import et
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule } from 'ngx-toastr'

@NgModule({
  declarations: [
        AppComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // alt komponentler arası geçişte sayfada komponent görünmezse bil ki bunu unutmuşsun
    AppRoutingModule,
    AdminModule,
    UiModule,
    ToastrModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
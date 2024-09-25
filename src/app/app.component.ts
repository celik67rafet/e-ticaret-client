import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EticaretClient';
}

$(document).ready(() => { // ready içinde function(){} yerine () => {} biçimi de kullanılabilir.
  console.log("Hello World");
})
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false, // üst module 'e eklenecekse false olmalı, buna ait importlar üst module'de çağırılır.
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

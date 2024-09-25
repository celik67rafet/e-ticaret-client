import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, NotPosition } from '../../services/admin/alertify.service';
// declare var $: any; // jquery kullanmak istersen tanımlaman gerek
@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  
  constructor( private alertify: AlertifyService ) {}

  ngOnInit(): void {
    
  }

}


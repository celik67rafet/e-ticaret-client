import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent extends BaseComponent implements OnInit , AfterViewInit {
  
  constructor( spinner : NgxSpinnerService ) {
  
    super( spinner );
    
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }

  

}

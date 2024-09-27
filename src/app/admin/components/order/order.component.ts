import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent extends BaseComponent implements OnInit,AfterViewInit {
 
 constructor( spinner: NgxSpinnerService ) { super( spinner ) }
 
 
 ngAfterViewInit(): void {

    setTimeout(() => {
      this.hideSpinner(SpinnerType.ballSpin);
    },1500);

}
  
 ngOnInit(): void {

    // this.spinner.show("s1");

    // setTimeout(() => {
    //   this.spinner.hide("s1");
    // },3000);

    this.showSpinner( SpinnerType.ballSpin );

  }

}

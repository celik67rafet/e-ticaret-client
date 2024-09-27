import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit,AfterViewInit {
  
  
  ngAfterViewInit(): void {
  
    setTimeout( () => {

      this.hideSpinner( SpinnerType.ballSpin );

    },1500 );

  }
  ngOnInit(): void {

    this.showSpinner( SpinnerType.ballSpin );

  }



}

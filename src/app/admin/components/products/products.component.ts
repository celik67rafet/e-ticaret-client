import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit, AfterViewInit {
  
  /**
   *
   */
  constructor( spinner: NgxSpinnerService ) {
    super( spinner );
    
  }
  
  ngAfterViewInit(): void {

    setTimeout(() => {
      this.hideSpinner( SpinnerType.ballSpin );
    }, 1500);

  }
  ngOnInit(): void {

    this.showSpinner( SpinnerType.ballSpin );

  }

}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseComponent implements OnInit, AfterViewInit {

  /**
   *
   */
  constructor( spinner: NgxSpinnerService ) {
    super( spinner );
    
  }
  ngAfterViewInit(): void {

    setTimeout(() => {
      this.hideSpinner( SpinnerType.ballSpin );
    },1500);

  }
  ngOnInit(): void {

    this.showSpinner( SpinnerType.ballSpin )

  }

}

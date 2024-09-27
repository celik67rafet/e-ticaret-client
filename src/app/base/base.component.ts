import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()

export class BaseComponent {

  constructor( private spinner: NgxSpinnerService ) {}

  showSpinner( spinnerType: SpinnerType )
  {
    this.spinner.show( spinnerType );
  }

  hideSpinner( spinnerType: SpinnerType )
  {
    this.spinner.hide( spinnerType );
  }

}

export enum SpinnerType{
  ballRunningDots = "s1",
  ballSpin = "s2",
  ballClipRotate = "s3"

}

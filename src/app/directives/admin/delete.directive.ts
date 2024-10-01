import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { ProductService } from '../../services/common/models/product.service';
import { BaseComponent, SpinnerType } from '../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $:any; //jquery kullanmak için

@Directive({
  selector: '[appDelete]',
  standalone: false
})

export class DeleteDirective {

  constructor( 
    private spinner: NgxSpinnerService,
    private element: ElementRef,
    private _renderer: Renderer2,
    private productService: ProductService
  ) {

    const img = _renderer.createElement('img');
    img.setAttribute("src","assets/delete.png");
    img.setAttribute("style","cursor:pointer;");
    img.width = 25;
    _renderer.appendChild(element.nativeElement,img);
    
  }

  @Input() id:string;

  @Output() callback : EventEmitter<any> = new EventEmitter();

  @HostListener("click")
  async onclick(){

    this.spinner.show(SpinnerType.ballSpin);

    const td : HTMLTableCellElement = this.element.nativeElement;
    console.log( td.parentElement );

    await this.productService.delete( this.id );
    
    $( td.parentElement ).fadeOut( 450, () => { this.callback.emit(); this.spinner.hide( SpinnerType.ballSpin ); } );

  }

}

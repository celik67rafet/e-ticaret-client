import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/common/models/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, NotPosition } from '../../../../services/admin/alertify.service';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent extends BaseComponent implements OnInit,AfterViewInit {
 
  constructor( 
    private productService: ProductService,
    spinner: NgxSpinnerService,
    private alertify: AlertifyService
  ) {
    super( spinner );
  }
  
  ngAfterViewInit(): void {
  }


  ngOnInit(): void {
  }

  create( name : HTMLInputElement, stock : HTMLInputElement, price : HTMLInputElement )
  {
    this.showSpinner( SpinnerType.ballSpin );

    const create_product: Create_Product = new Create_Product();

    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat( price.value );

    this.productService.create( create_product, () => { 
      this.hideSpinner( SpinnerType.ballSpin ); 
      this.alertify.message( "Ürün Ekleme Başarılı!", {

        messageType: MessageType.Success,
        position: NotPosition.Top,
        dismissOthers: true

      } );

      name.value = "";
      stock.value = '0';
      price.value = '0';

    } );
  }

}

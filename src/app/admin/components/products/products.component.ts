import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { 
  BaseComponent, 
  // SpinnerType // spinner kullanmak için gerekli
 } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { Create_Product } from '../../../contracts/create_product';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit, AfterViewInit {
  
  @ViewChild( ListComponent ) listComponents : ListComponent;

  constructor( spinner: NgxSpinnerService) {
    super( spinner );
    
  }
  
  ngAfterViewInit(): void {

    // setTimeout(() => {
    //   this.hideSpinner( SpinnerType.ballSpin );
    // }, 1500);

  }

  async createdProduct( createdProduct: Create_Product ){
    
    await this.listComponents.getProducts();

  }

  ngOnInit(): void {

    // this.showSpinner( SpinnerType.ballSpin );

    // this.httpClientService.get<Product[]>({

    //   controller: "products" // kendi endpoint'imize controller belirtip diğerlerini null göndersek de gidiyor.
    //   // fullEndPoint: "https://httpbin.org/get" // istersek fullendpoint belirterek başka yere de istek atarız
    // }).subscribe( data => {

    //   data.forEach(element => {
    //     console.log( element.name + " | " + element.price + " | " + element.stock )
    //   });

    // });

  //   this.httpClientService.post({
  //     controller: "products"
  //   },
  //   {
  //     name: "tahta silgisi",
  //     stock: 3,
  //     price: 45
  //   }
  // ).subscribe( data => console.log( data ) );

  // this.httpClientService.put({

  //   controller: "products",

  // },{
  //   id: "68f96590-a090-4e1f-ae77-b725fb711823",
  //   name: "karton",
  //   stock: 15,
  //   price: 40
  // }).subscribe( data => console.log( data ) );

  // this.httpClientService.delete<Product>({

  //   controller: "products",


  // },"2ca2fec3-5629-46f1-b176-e607f93cb971")
  // .subscribe( data => console.log( data ) );

  };

}

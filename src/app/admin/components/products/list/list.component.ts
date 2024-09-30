import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import { ProductService } from '../../../../services/common/models/product.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, NotPosition } from '../../../../services/admin/alertify.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent extends BaseComponent implements OnInit,AfterViewInit{

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['Id', 'Name', 'Stock', 'Price', 'CreatedDate', 'UpdatedDate'];
  dataSource : MatTableDataSource<List_Product> = null;

  constructor( private productService: ProductService, spinner: NgxSpinnerService, private alertify: AlertifyService ) { super( spinner ) }
  
  ngAfterViewInit(): void {
  }

  async pageChanged()
  {
    await this.getProducts();
  }
  
  async getProducts(){

    this.showSpinner( SpinnerType.ballSpin );

    const allProducts: { totalCount:number, products: List_Product[] } = await this.productService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 10, () => {

      this.hideSpinner( SpinnerType.ballSpin );

    }, errorMessage => {

      this.alertify.message( errorMessage, {

        messageType: MessageType.Error,
        dismissOthers: true,
        position: NotPosition.TopRight
  
      });
      
      this.hideSpinner( SpinnerType.ballSpin );
      
    } );

    this.dataSource = new MatTableDataSource<List_Product>( allProducts.products );
    this.paginator.length = allProducts.totalCount;

  }
  
  async ngOnInit() {

    await this.getProducts();
    
  }

}

// p.Id,
// p.Name,
// p.Stock,
// p.Price,
// p.UpdatedDate,
// p.CreatedDate

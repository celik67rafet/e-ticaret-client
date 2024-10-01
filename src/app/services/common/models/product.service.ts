import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from '../../../contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Product } from '../../../contracts/list_product';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpClientService : HttpClientService ) { }

  create( product: Create_Product , successCallback?: () => void, errorCallback?: ( errorMessage:string ) => void )
  {
    this.httpClientService.post<Create_Product>({

      controller: "products"
      
    },product ).
    subscribe({
      next: (result) => {
        successCallback();

        console.log( "başarılı", result );
      },
      error: ( errorResponse: HttpErrorResponse ) => {

        const error: Array<{ key: string, value: Array<string> }> = errorResponse.error;

        let message = "";

        error.forEach( data => {

          data.value.forEach( ( errorMessage ) => {

            message += `${ errorMessage } <br>`;

          } );

        } );

        errorCallback( message );

      }
    })
  }

  async read( page:number = 0, size:number = 10, successCallback?: () => void, errorCallback?: ( errorMessage:string ) => void ) : Promise<{ totalCount: number, products: List_Product[] }> { // dönüş türü burada gerekli olmasa da tür kontrolü açısında eklemek faydalı

      const promiseData : Promise<{ totalCount: number; products: List_Product[] }> = firstValueFrom( this.httpClientService.get<{ totalCount: number; products: List_Product[] }>({

        controller: "products",
        queryString: `page=${page}&size=${size}`
  
      }) );

      promiseData.then( d => successCallback() )
        .catch( ( errorResponse: HttpErrorResponse ) => errorCallback( errorResponse.message ) )

      return await promiseData;

  }

  async delete( id: string )
  {
    const deleteObservable : Observable<any> = this.httpClientService.delete<any>({
      controller:"products"
    },id);

     await firstValueFrom( deleteObservable );

  }
}

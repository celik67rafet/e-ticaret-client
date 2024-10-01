import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, Output, Renderer2 } from '@angular/core';
import { ProductService } from '../../services/common/models/product.service';
import { SpinnerType } from '../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { HttpClientService } from '../../services/common/http-client.service';
import { AlertifyService, MessageType, NotPosition } from '../../services/admin/alertify.service';
import { HttpErrorResponse } from '@angular/common/http';

declare var $:any; //jquery kullanmak için

@Directive({
  selector: '[appDelete]',
  standalone: false
})

export class DeleteDirective {
  readonly dialog = inject(MatDialog);
  // readonly spinner = inject(NgxSpinnerService); // ctor'da di yapılıyordu bu da alternatif

  constructor( 
    private spinner: NgxSpinnerService,
    private element: ElementRef,
    private _renderer: Renderer2,
    private alertify: AlertifyService,
    private httpClientService: HttpClientService
  ) {

    const img = _renderer.createElement('img');
    img.setAttribute("src","assets/delete.png");
    img.setAttribute("style","cursor:pointer;");
    img.width = 25;
    _renderer.appendChild(element.nativeElement,img);
    
  }

  openDialog( afterClosed: any ): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, 
      {
        width: '10vw',
        data: DeleteState.Yes
      }
  );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result == DeleteState.Yes) {

        afterClosed();

      }
    });
  }

  @Input() id:string;
  @Input() controller: string;

  @Output() callback : EventEmitter<any> = new EventEmitter();

  @HostListener("click")
  async onclick(){

    this.openDialog( async () => {

      this.spinner.show(SpinnerType.ballSpin);

    const td : HTMLTableCellElement = this.element.nativeElement;
    console.log( td.parentElement );

    await this.httpClientService.delete( {

      controller: this.controller

    } ,this.id ).subscribe(data => {
      
      $( td.parentElement ).fadeOut( 450, () => { this.callback.emit(); this.spinner.hide( SpinnerType.ballSpin ); this.alertify.message("Silme Başarılı",{

        messageType: MessageType.Success,
        delay: 3,
        position: NotPosition.Top,
        dismissOthers:false

      }) } );

    },(errorRespons:HttpErrorResponse) => {

      this.spinner.hide( SpinnerType.ballSpin );
      console.log( errorRespons );
      this.alertify.message(`Sorun Oluştu: Status - ${errorRespons.status}`,{ messageType: MessageType.Error, delay:3,position:NotPosition.Top });

    });
    

    } )

  }

}


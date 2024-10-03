import { Injectable } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { ComponentType } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DialogService{

  constructor(
    private dialog: MatDialog
  ) { }

  openDialog( dialogParameters: Partial<DialogParameters> ): void
  {
    const dialogRef = this.dialog.open(dialogParameters.componentType ,{
      data: dialogParameters.data,
      width: dialogParameters.dialogOptions?.width,
      height: dialogParameters.dialogOptions?.height,
      position: dialogParameters.dialogOptions?.position
    } );

    dialogRef.afterClosed().subscribe( result => {
      
      console.log( "dialogdan gelen: " + result );
        if( result == dialogParameters.data )
          {
            console.log("afterClosed çalışıyor...");
            dialogParameters.afterClosed();
          }else if( result == 1 ){
            console.log( result );
            console.log("afterClosed2 çalışıyor...");
            dialogParameters.afterClosed2(); // upload component altında clear için eklendi.
          }

    } )
  }
}

export class DialogParameters{
  componentType: ComponentType<any>;
  data: any;
  afterClosed: () => void;
  afterClosed2?: () => void;
  dialogOptions?: Partial<DialogOptions> = new DialogOptions(); 
}

export class DialogOptions {
  width?: string;
  height?: string;
  position?: DialogPosition;
}

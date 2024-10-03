import { Component, Inject, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseDialog } from '../base-dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent extends BaseDialog<DeleteDialogComponent> {
  
  constructor( 
    @Inject(MAT_DIALOG_DATA) public data: DeleteState.Yes,
    dialogRef: MatDialogRef<DeleteDialogComponent>
  ) 
  {
    super( dialogRef );
  }

  override close(): void {
    super.close();
  }

}

export enum DeleteState{
  Yes,
  No
}

import { Component, Inject, inject, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {

  readonly dialogRef = inject(MatDialogRef<DeleteDialogComponent>);
  // readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  // readonly animal = model(this.data.animal);
  
  constructor( @Inject(MAT_DIALOG_DATA) public data: DeleteState.Yes ) {}

  close(): void {
    this.dialogRef.close();
  }

}

export enum DeleteState{
  Yes,
  No
}

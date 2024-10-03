import { Component, Inject } from '@angular/core';
import { BaseDialog } from '../base-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload-dialog',
  standalone: false,
  templateUrl: './file-upload-dialog.component.html',
  styleUrl: './file-upload-dialog.component.scss'
})
export class FileUploadDialogComponent extends BaseDialog<FileUploadDialogComponent> {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UploadState.Yes,
    dialogRef: MatDialogRef<FileUploadDialogComponent>
  ) {
    super(dialogRef);
    
  }

  override close(): void {
    console.log("no değeri gidiyor...");
    super.close(UploadState.No);
  }

}

export enum UploadState{
  Yes,
  No
}

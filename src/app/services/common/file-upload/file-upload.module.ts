import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import {MatButtonModule} from '@angular/material/button';
import { DialogsModule } from '../../../dialogs/dialogs.module';

@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    NgxFileDropModule,
    MatButtonModule,
    DialogsModule
  ],
  exports:[
    FileUploadComponent
  ]
})
export class FileUploadModule { }

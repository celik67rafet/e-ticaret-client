import { Component, Input } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertifyService, MessageType, NotPosition } from '../../admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPositions } from '../../ui/custom-toastr.service';
import { FileUploadDialogComponent, UploadState } from '../../../dialogs/file-upload-dialog/file-upload-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-file-upload',
  standalone: false,
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  choosenFiles: boolean = true;

  constructor( 
    private httpClientService: HttpClientService,
    private alertifyService: AlertifyService,
    private customToastrService: CustomToastrService,
    private dialogService: DialogService
  ) {}

  public files: NgxFileDropEntry[];

  @Input() options: Partial<FileUploadOptions>;

  public onFileDrop(files: NgxFileDropEntry[]) {
    this.files = files; // Dosyaları kaydet
    this.choosenFiles = true;
  }
  
  clear(){

    this.files = [];
    this.choosenFiles = false;

  }

  public selectedFiles(files: NgxFileDropEntry[]) {
 
    const fileData: FormData = new FormData();

    for( const file of files )
    {
      (file.fileEntry as FileSystemFileEntry).file(( _file: File ) => {

        fileData.append( _file.name, _file, file.relativePath );

      })
    }

    if( files.length > 0 ){
      this.dialogService.openDialog( {
        componentType: FileUploadDialogComponent,
        data: UploadState.Yes,
        afterClosed2: this.clear.bind(this),
        afterClosed: () => 
          {
            console.log("yükleme onayına geldi");
            if( files.length > 0 ){
              this.httpClientService.post<FormData> ({
                controller: this.options.controller,
                action: this.options.action,
                queryString: this.options.queryString,
                headers : new HttpHeaders({"responseType":"blob"})
                
              }, fileData).subscribe( {
                next: (data) => {
          
                  if( this.options.isAdminPage ){
          
                    this.alertifyService.message("Dosyalar başarıyla yüklendi",{
                      dismissOthers: true,
                      messageType: MessageType.Success,
                      position: NotPosition.TopRight
                    })
          
                  }else{
                    this.customToastrService.messsage("Dosyalar Başarıyla Yüklendi","Başarılı",{ 
                      messageType: ToastrMessageType.Success, 
                      position: ToastrPositions.TopRight,
                      time: 3,
                      
                    })
                  }
          
                  console.log( data );
                  this.clear();
            
                }, error: ( errorResponse: HttpErrorResponse ) => {
          
                  if( this.options.isAdminPage ){
          
                    this.alertifyService.message( "Hata - Status: " + errorResponse.status.toString(), {
          
                      messageType: MessageType.Error,
                      delay: 3,
                      position: NotPosition.TopRight,
                      dismissOthers: true
          
                    } )
          
                  }else{
          
                    this.customToastrService.messsage( errorResponse.statusText, "Sorun Oluştu", {
          
                      messageType: ToastrMessageType.Error,
                      position: ToastrPositions.TopRight,
                      time: 3
          
                    } )
          
                  }
          
                  console.log( errorResponse.message );
                }
              } )
            }else{
              if( this.options.isAdminPage ){
                this.alertifyService.message( "Lütfen Önce Resim Seçiniz!" , {
                  messageType: MessageType.Notify,
                  delay: 3,
                  position: NotPosition.TopRight,
                  dismissOthers: true
                } )
              }else{
                this.customToastrService.messsage("Lütfen Önce Resim Seçiniz!", "Uyarı",{
                  messageType: ToastrMessageType.Info,
                  position: ToastrPositions.TopRight,
                  time: 3
                })
              }
            }
          } 
      } );
    }
    
  }
  
//   openDialog( afterClosed: any ): void
//   {
//     const dialogRef = this.dialog.open( FileUploadDialogComponent,{
//       data: UploadState.Yes
//     } );

//     dialogRef.afterClosed().subscribe( result => {
      
//         if( result == UploadState.Yes )
//         {
//           afterClosed();
//         }else if( result == UploadState.No ){

//           this.clear();
//         }

//     } )
//   }

}

export class FileUploadOptions
{
  controller?: string;
  action?: string;
  queryString?: string;
  explanation?: string;
  accept?: string; // bu binding olarak ngx-file-drop'da kabul edilen dosya türlerini string olarak belirtmeye yarar.
  isAdminPage?: boolean;
}


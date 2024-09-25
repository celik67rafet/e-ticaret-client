import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor( private toastr: ToastrService ) { }

  messsage( message: string, title:string, options: Partial<ToastrOptions> = {}){
    
    const defaultOptions: ToastrOptions = {
      messageType: ToastrMessageType.Info,
      position: ToastrPositions.BottomRight,
      time: 3000
    }

    const finalOptions: ToastrOptions = {

      messageType: options.messageType ? options.messageType : defaultOptions.messageType,
      position: options.position ? options.position : defaultOptions.position,
      time: options.time ? options.time : defaultOptions.time

    }
    
    this.toastr[ finalOptions.messageType ]( message, title, {
      messageClass: finalOptions.messageType,
      timeOut: finalOptions.time,
      positionClass: finalOptions.position
    } );
  }

}
export enum ToastrMessageType{
 
  Success = "success",
  Info = "info",
  Error = "error",
  Warning = "warning"

}

export enum ToastrPositions{
  Top = "toast-top-center",
  Bottom = "toast-bottom-center",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopRight = "toast-top-right",
  TopLeft = "toast-top-left",
  TopFull = "toast-top-full-width",
  BottomFull = "toast-bottom-full-width",
}

export class ToastrOptions {

  messageType:ToastrMessageType;
  position:ToastrPositions;
  time:number;
}

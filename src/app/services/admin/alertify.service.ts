import { Injectable } from '@angular/core';

declare var alertify:any;

@Injectable({
  providedIn: 'root' // bu sayede dependency injection ile componentlerden çağırılıyor olacak
})
export class AlertifyService {

  constructor() {
   }

  // sırasıyla bildirim mesajı, tipi, pozisyonu, bekleme süresi, bir bildirim gelince diğerlerinin silinmesi özellikleri

  // message( message:string, messageType: MessageType, position: NotPosition, delayTime:Number, dismissOthers: boolean = false )
  message( message:string, options: Partial<AlertifyOptions>) // partial olarak verirsek çağırdığımız yerde
  // boş bir nesne olarak tanımlayıp gönderebiliriz, böylelikle gelen değeri aleryOptions olarak alır.
  {

      // alertify.defaults.theme.ok = "btn btn-primary"; // OK butonu bootstrap stilinde
      // alertify.defaults.theme.cancel = "btn btn-secondary"; // İptal butonu bootstrap stilinde
      // alertify.defaults.theme.input = "form-control"; // Input alanı bootstrap stilinde

      // NOT: semantic kullanmak için projeyi komple semantic ile yönetmek gerekebilir..

      // alertify.defaults.theme.ok = "ui positive button"; // Semantic UI stilinde OK butonu
      // alertify.defaults.theme.cancel = "ui negative button"; // Semantic UI stilinde İptal butonu
      // alertify.defaults.theme.input = "ui input"; // Semantic UI stilinde Input
      alertify.set('notifier','position',options.position);
      var notification = alertify[options.messageType](message).delay(options.delay); // alertify class'ı içerisinde ilgili metod messageType isminde var ise
      // bu biçimde çağırılabilir. paranter içinde de gerekli parametreler verilebilir. biz notify kullanacağımız için
      // enum içerisinde belirttiğimiz gibi veririz ve o da ilgili metodu çağırır.

      if( options.dismissOthers ){

        notification.dismissOthers();

      }

      return notification;
  }

  dismiss(){
    alertify.dismissAll(); // tetiklenince tüm bildirimler kapanır
  }
}

// bildirim tipleri enum
export enum MessageType {

  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"

}

// bildirim pozisyonları enum
export enum NotPosition {

  Top = "top-center",
  Bottom = "bottom-center",
  TopLeft = "top-left",
  TopRight = "top-right",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",

}

export class AlertifyOptions{
  messageType: MessageType = MessageType.Message;
  position: NotPosition = NotPosition.BottomLeft;
  delay: number = 3;
  dismissOthers: boolean = false;
}

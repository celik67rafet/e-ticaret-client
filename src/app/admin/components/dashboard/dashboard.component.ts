import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, NotPosition } from '../../../services/admin/alertify.service';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends BaseComponent implements OnInit,AfterViewInit {

  private notifications: any[] = []; // Bildirimleri saklamak için bir dizi

  constructor(private alertify: AlertifyService, spinner: NgxSpinnerService) 
  {
    super( spinner );
  }
  ngAfterViewInit(): void {

    setTimeout(() => {
      this.hideSpinner( SpinnerType.ballSpin );
    },1500);    

  }

  ngOnInit(): void 
  {
    this.showSpinner( SpinnerType.ballSpin );
  }


  // NOTIFICATION SERVİCE TEST START ========================

  // click() {
  //   // Yeni bildirimi oluştur ve diziye ekle
  //   const newNotification = this.alertify.message('test', { 
  //     delay: 5,
  //     messageType: MessageType.Notify,
  //     position: NotPosition.BottomRight,
  //     dismissOthers: false, 
  //   } );
  //   this.notifications.push(newNotification); // Yeni bildirimi ekle
  // }

  // close() {
  //   // En son bildirimi kapat
  //   const lastNotification = this.notifications[0]; // Son bildirimi al ve diziden çıkar
  //   if (lastNotification) {
  //     lastNotification.dismiss(); // Bildirimi kapat
  //     this.notifications.shift();
  //   }
  // }

  // closeAll(){
  //   this.alertify.dismiss();
  // }

  // NOTIFICATION SERVİCE TEST END ========================

}


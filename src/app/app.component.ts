import { Component, OnInit } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrOptions, ToastrPositions } from './services/ui/custom-toastr.service';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'EticaretClient';

  constructor( private toastrService : CustomToastrService ) {}
  ngOnInit(): void {

    // setTimeout(() => {
    //   this.toastrService.messsage( "Kara Göründü", "Ordular", { messageType: ToastrMessageType.Error } );
    // },1000);

  }

}

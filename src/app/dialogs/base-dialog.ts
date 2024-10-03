import { MatDialogRef } from "@angular/material/dialog";

export class BaseDialog<DialogComponent> {

    constructor(

        public dialogRef : MatDialogRef<DialogComponent>

    ) {
    }

    close(parameter?:any){

        this.dialogRef.close(parameter);

    }

}

import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({providedIn:'root'})
export  class SnackBarService{
    open(arg0: string) {
      throw new Error('Method not implemented.');
    }
    constructor(private _snackBar:MatSnackBar){}

    openSnackbar(msg:string){
        this._snackBar.open(msg,'close',{
            duration:3000,
            horizontalPosition:'center',
            verticalPosition:'bottom'

        })
    }
}
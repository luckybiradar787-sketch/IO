import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
    imports:[MatButtonModule,MatSnackBarModule,MatIconModule,MatDialogModule],
    exports:[MatButtonModule,MatSnackBarModule,MatIconModule,MatDialogModule]
})

export class MaterialModule{

}
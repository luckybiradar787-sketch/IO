import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {
getmsg!:string
  constructor(private matdailog:MatDialogRef<GetConfirmComponent>,
    @Inject(MAT_DIALOG_DATA)msg:string
  ) { 
    this.getmsg=msg
  }

  ngOnInit(): void {
  }
onClick(flag:boolean){
  this.matdailog.close(flag)
}
}

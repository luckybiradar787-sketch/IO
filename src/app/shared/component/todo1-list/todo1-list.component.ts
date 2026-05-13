import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodos } from '../../models/todos1';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from 'src/app/get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo1-list',
  templateUrl: './todo1-list.component.html',
  styleUrls: ['./todo1-list.component.scss']
})
export class Todo1ListComponent implements OnInit {
@Input() getTodos !:Array<Itodos>
@Output() emitRemoveId:EventEmitter<string>=new EventEmitter<string>()
@Output() emitEditTodo:EventEmitter<Itodos>=new EventEmitter<Itodos>()

constructor(
    private matDailog:MatDialog
  ) {}

  ngOnInit(): void {}

// onRemove >> the todo item removes succ....

  onTodoRemove(id:string){
    // let getConfirm=confirm(`Are You Sure`)
    // if(getConfirm){
    //   this.emitRemoveId.emit(id)
    // }
    let matconfig=new MatDialogConfig()
      matconfig.width='400px'
//     matconfig.position = {
//        top: '20px',
//        right: '20px'
//     };
    matconfig.panelClass = 'custom-dialog';
    matconfig.disableClose=true
    matconfig.data=`Are You Sure ?`
    let config=this.matDailog.open(GetConfirmComponent,matconfig)
    config.afterClosed()
    .subscribe(isConfirm=>{
      if(isConfirm){
         this.emitRemoveId.emit(id)
      }
    })

    // console.log(id);
    // this.emitRemoveId.emit(id)
  }

  onEdit(editTodo:Itodos){
    console.log(editTodo)
    this.emitEditTodo.emit(editTodo)
  }
}

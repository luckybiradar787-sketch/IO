import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodos } from '../../models/todos1';
import { SnackBarService } from '../../service/snackBar.service';

@Component({
  selector: 'app-todo1-form',
  templateUrl: './todo1-form.component.html',
  styleUrls: ['./todo1-form.component.scss']
})
export class Todo1FormComponent implements OnInit,OnChanges {

  @ViewChild('todoItem') todoItem!:ElementRef
  @ViewChild('isCompleted') isCompleted!:ElementRef

  @Input() getEditObj !:Itodos
  @Output() emitNewTodo:EventEmitter<Itodos>=new EventEmitter<Itodos>()
  @Output() emitUpdatedTodo : EventEmitter<Itodos> =new EventEmitter<Itodos>()
  
  isinEditmode:boolean=false
  todosArr: any;
  
  constructor(
    // private _uuidService:UuidService
    private _snackBar:SnackBarService
    ) { }
     
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(!!changes['getEditObj'].currentValue){
      this.isinEditmode=true
      this.todoItem.nativeElement.value=this.getEditObj.todoItem
      this.isCompleted.nativeElement.value=this.getEditObj.isCompleted
    }
  }

  ngOnInit(): void {
    console.log(this.getEditObj);
  }

onTodoAdd(){
    if(this.todoItem.nativeElement.value.trim() !== ''){
  let NEW_TODO:Itodos={
    todoItem:this.todoItem.nativeElement.value,
    isCompleted:this.isCompleted.nativeElement.value,
    todoId:Date.now().toString()
  }
  

  this.emitNewTodo.emit(NEW_TODO)
  //  this.todosArr.push(NEW_TODO)
  this.todoItem.nativeElement.value='',
  this.isCompleted.nativeElement.value=''
  

}else{
    // alert('Please enter todo item')
   this._snackBar.openSnackbar(`Please Enter Todo Item First!!!`)
  }
  
}
onUpdateTodo(){
  //UPDATED_OBJ
  let UPDATED_OBJ:Itodos={
    todoItem:this.todoItem.nativeElement.value,
    isCompleted:this.isCompleted.nativeElement.value,
    todoId:this.getEditObj.todoId
  }
  this.emitUpdatedTodo.emit(UPDATED_OBJ)
  this.todoItem.nativeElement.value=''
  this.isCompleted.nativeElement.value=true
  this.isinEditmode=false
}
}

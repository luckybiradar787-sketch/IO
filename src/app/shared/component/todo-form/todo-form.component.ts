import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Itodo } from '../../models/todos';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
@ViewChild('todoItem') todoItem !:ElementRef
@ViewChild('isCompleted') isCompleted !:ElementRef
@Output() emitNewTodo:EventEmitter<Itodo>=new EventEmitter<Itodo>()
  constructor(
    private _todoService: TodoService
  ) { }

  ngOnInit(): void {}

  onTodoAdd(){
    let todo:Itodo={
      todoItem:this.todoItem.nativeElement.value,
      isCompleted:this.isCompleted.nativeElement.value === "true"? true:false,
      todoId:this._todoService.uuid()
    }
    this.todoItem.nativeElement.value=''
    this.isCompleted.nativeElement.value=true
    this.emitNewTodo.emit(todo)
  }

}

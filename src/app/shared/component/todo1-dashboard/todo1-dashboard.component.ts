import { Component, OnInit } from '@angular/core';
import { Itodos } from '../../models/todos1';
import { SnackBarService } from '../../service/snackBar.service';

@Component({
  selector: 'app-todo1-dashboard',
  templateUrl: './todo1-dashboard.component.html',
  styleUrls: ['./todo1-dashboard.component.scss']
})
export class Todo1DashboardComponent implements OnInit {

 todosArr:Array<Itodos>=[
  {
    todoItem:'Angular',
    todoId:'87582575',
    isCompleted:true
 },
  {
    todoItem:'Node',
    todoId:'48753755',
     isCompleted:false
 },
  {
    todoItem:'Express',
    todoId:'98098684',
     isCompleted:true
 }
]

editTodoObj!:Itodos

  constructor(
    private _snackBar:SnackBarService
  ) { }

  ngOnInit(): void {}

  getNewTodo(todo:Itodos){
    this.todosArr.push(todo)
    //The new todo item Added
    this._snackBar.openSnackbar(`The todo Item ${todo.todoItem} Added Successfully!!!`)
  }

  getRemoveId(id:string){
    let GET_INDEX=this.todosArr.findIndex(t=>t.todoId===id)
    let removeItems=this.todosArr.splice(GET_INDEX,1)
    this._snackBar.openSnackbar(`The todo item ${removeItems[0].todoItem} removed successfully !!!`)
  }

  getEditTodo(editTodo:Itodos){
    console.log(editTodo)
    this.editTodoObj=editTodo;
  }

  getUpdatedTodo(updatedTodo:Itodos){
    // Get Index
     let GET_INDEX=this.todosArr.findIndex(t=>t.todoId===updatedTodo.todoId)
    //Update in Arr
    this.todosArr[GET_INDEX]=updatedTodo
  }

}

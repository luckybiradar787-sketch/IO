import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todos';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  // API call to fetch TODOS from DB
todoArr:Array<Itodo> = [
  {
    todoItem:'JS',
    todoId:'123',
    isCompleted:true
  },
   {
    todoItem:'Angular',
    todoId:'145',
    isCompleted:false
  },
   {
    todoItem:'React',
    todoId:'153',
    isCompleted:true
  }
]
  constructor() { }

  ngOnInit(): void { 
  }

  getNewTodo(todo:Itodo){
    this.todoArr.push(todo)
  }

}

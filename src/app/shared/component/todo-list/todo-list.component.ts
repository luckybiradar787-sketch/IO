import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from '../../models/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Input() getTodos !: Array<Itodo>

  constructor() { }

  ngOnInit(): void {
  }

}

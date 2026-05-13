import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneComponent } from './shared/component/one/one.component';
import { PostCardComponent } from './shared/component/post-card/post-card.component';

import {MatCardModule} from '@angular/material/card';
import { PostsDashboardComponent } from './shared/component/posts-dashboard/posts-dashboard.component';
import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { MaterialModule } from './shared/component/Material/material.module';
import { Todo1DashboardComponent } from './shared/component/todo1-dashboard/todo1-dashboard.component';
import { Todo1FormComponent } from './shared/component/todo1-form/todo1-form.component';
import { Todo1ListComponent } from './shared/component/todo1-list/todo1-list.component';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';
import { StdDashBoardComponent } from './shared/component/std-dash-board/std-dash-board.component';
import { StdFormComponent } from './shared/component/std-form/std-form.component';
import { StdListComponent } from './shared/component/std-list/std-list.component';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    PostCardComponent,
    PostsDashboardComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    Todo1DashboardComponent,
    Todo1FormComponent,
    Todo1ListComponent,
    GetConfirmComponent,
    StdDashBoardComponent,
    StdFormComponent,
    StdListComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

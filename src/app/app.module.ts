import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneComponent } from './shared/component/one/one.component';
import { PostCardComponent } from './shared/component/post-card/post-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PostsDashboardComponent } from './shared/component/posts-dashboard/posts-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    PostCardComponent,
    PostsDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Iperson } from './shared/models/person';
import { Ipost } from './shared/models/post';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I Love Angular';

  person:Iperson={
    fname:'lucky',
    lname:'biradar',
    email:'luckybiradr@gmail.com'
  }

  postObj:Ipost= {
    "userId": 1,
    "id": 1,
    "title": "Angular",
    "body": "Angular is a TypeScript-based, open-source web application framework developed and maintained by Google. It is used for building high-performance, scalable single-page applications (SPAs).",
    
  }
  
}

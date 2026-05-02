import { Component, Input, OnInit } from '@angular/core';
import { IpostObj } from '../../models/post-card';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
@Input() postCard!:IpostObj



  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';
import { postsData } from '../../consts/posts';

@Component({
  selector: 'app-posts-dashboard',
  templateUrl: './posts-dashboard.component.html',
  styleUrls: ['./posts-dashboard.component.scss']
})
export class PostsDashboardComponent implements OnInit {
postArr:Array<Ipost>=[]
  constructor() { }

  ngOnInit(): void {
    // APT call for POST-DATA
    this.postArr=postsData
  }

}

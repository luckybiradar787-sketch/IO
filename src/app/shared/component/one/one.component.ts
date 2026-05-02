import { Component, Input, OnInit } from '@angular/core';
import { Iperson } from '../../models/person';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
@Input() getPerson !:Iperson
  constructor() { }

  ngOnInit(): void {
  }

}

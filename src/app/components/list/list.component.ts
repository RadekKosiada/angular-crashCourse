import { Component, OnInit } from '@angular/core';
import { Items } from '../../models/items';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  someItems: Items[];

  constructor() { }

  ngOnInit() {
    this.someItems = [
      {
        id: 1,
        title: 'Some Title',
        completed: false
      },
      {
        id: 2,
        title: 'Some Other Title',
        completed: true
      }
    ]
  }

}

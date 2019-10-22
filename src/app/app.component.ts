import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //defining type
  title: string = 'Crash course';
  // adding constructor method;
  // runs before the content is rendered so it will display title from the constructor;
  constructor() {
    console.log(123)
    this.title = "Some other title";
  }
}

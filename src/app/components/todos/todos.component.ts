import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // creating an array of todos as a TypeScript model 'Todo' 
  todos: Todo[];
  // initialize service;
  // todoService can be named whatever;
  constructor(private todoService:TodoService) { }

  ngOnInit() {
     this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    console.log("delete me", todo.id)
  }
}

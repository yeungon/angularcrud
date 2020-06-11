import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/Todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  //passing todoService into Constructor and then it is available everywhere
  constructor(private todoService:TodoService) {

   }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo){
    //Deleting on the UI
    this.todos = this.todos.filter(t => t.id !== todo.id)
    this.todoService.deleteTodo(todo).subscribe();
    console.log("Delete me")
  }

  addTodo(todo: Todo){

    console.log("Đã catched");

    this.todoService.addTodo(todo).subscribe(todo =>{

      console.log("Đã subscribe" + todo);

      this.todos.unshift(todo);
    });
  }

}

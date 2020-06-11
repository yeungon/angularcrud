import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from "../../services/todo.service"

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Input() age: number;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService ) { }

  ngOnInit(): void {
  }

  // set Dynamic Classes
  setClasses(){
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    }

    return classes;
  }

  onToggle(todo){
    //Toggle in UI
    todo.completed = !todo.completed;

    //Toggle in Server 
    this.todoService.toggleCompleted(todo).subscribe(todo =>
      console.log(todo))
  }

  onDelete(todo){
    this.deleteTodo.emit(todo)
   //console.log("delete")
  }

}

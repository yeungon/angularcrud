import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      title: this.title,
      completed: false
    }

    console.table("onSubmit: "  + this.title);

    this.addTodo.emit(todo)
  }   
    
}

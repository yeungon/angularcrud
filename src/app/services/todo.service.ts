import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import {Todo} from "../models/Todo";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}


@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todoURL: string = "https://jsonplaceholder.typicode.com/todos?_limit=10";

  constructor(private http:HttpClient) {

  }

  // Get Todos  
  getTodos(): Observable<Todo[]>{
     return this.http.get<Todo[]>(this.todoURL);
    }
  //Toggle Completed

  toggleCompleted(todo: Todo):Observable<any>{
    const url = `${this.todoURL}/${todo.id}`

    console.log(url)

    return this.http.put(url, todo, httpOptions)
  }

  deleteTodo(todo:Todo):Observable<Todo>{
    const url = `${this.todoURL}/${todo.id}`

    return this.http.delete<Todo>(url, httpOptions);
  } 

  //Add todo

  addTodo(todo: Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todoURL, todo, httpOptions)
  }
   
}

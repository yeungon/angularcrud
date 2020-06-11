import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Vuong Angular Simple Application - Todolist';
  name: string = "Vượng";
  age = 30;
  birthday = "1998, 10, 5";
  time: object = new Date();

  constructor(){
    this.changeName("Vuong Nguyen")
  }

  changeName(name: string): any{
    this.name = name + " Từ Hàm ChangeName"
  }

  getAge(){
  	return this.age
  }

  handleClick(e){
  	console.log(e)
  }

  ngOnInit() {
    console.log("đây là component did mounted")// ...
  
  }
  
}

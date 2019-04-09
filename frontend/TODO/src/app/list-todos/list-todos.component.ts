import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTHENTICATED_USER } from '../service/basic-authentication.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public complete: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[ ]
  message:string
  userName:string

  constructor(
    private todoService: TodoDataService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.userName)
    this.refreshTodos()
  }
  

refreshTodos(){
  this.userName = sessionStorage.getItem(AUTHENTICATED_USER);
  this.todoService.retrieveAllTodos(this.userName).subscribe(
    response => { console.log(response)
    this.todos = response;

    }
)
}

deleteTodo(id){
  console.log(`delete todo ${id}`);

  this.todoService.deleteTodo(this.userName, id).subscribe(
    response => {
      console.log(response)
      this.message=`Delete of Todo ${id} Successfull!`
      this.refreshTodos()
    }

  )
}

updateTodo(id){
  console.log(`Update ${id}`)
  this.route.navigate(['todos',id])
}

addTodo(){
  this.route.navigate(['todos', -1])
}
}

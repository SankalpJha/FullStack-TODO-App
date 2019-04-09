import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTHENTICATED_USER } from '../service/basic-authentication.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  username:string
  todo:Todo

  constructor(
    private todoService: TodoDataService,
    private router: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.params['id'];
    this.username = sessionStorage.getItem(AUTHENTICATED_USER)
    this.todo = new Todo(this.id,'',false,new Date())
    if(this.id!=-1){
      this.todoService.retrieveTodo(this.username,this.id).subscribe(
      data => this.todo = data
    )
      }
  }

  saveTodo(){
    if(this.id == -1 ){
      // Create Todo
      this.todoService.createTodo(this.username, this.todo).subscribe(
        data => {
          console.log(data)
          this.route.navigate(['todos'])
        }
      )
    }else {
      this.todoService.updateTodo(this.username, this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.route.navigate(['todos'])
        }
      )

    }
    
  }

}

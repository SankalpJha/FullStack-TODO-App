import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }


  retrieveAllTodos(username){
    //console.log('Hello World Bean Service')
    return this.http.get<Todo[]>(`${API_URL}/user/${username}/todos`)
  }

  retrieveTodo(userName, id){
    return this.http.get<Todo>(`${API_URL}/user/${userName}/todos/${id}`)
  }

  deleteTodo(userName, id){
    return this.http.delete(`${API_URL}/user/${userName}/todos/${id}`)
  }

  updateTodo(userName, id, todo){
    return this.http.put(`${API_URL}/user/${userName}/todos/${id}`, todo)
  }

  createTodo(userName,  todo){
    return this.http.post(`${API_URL}/user/${userName}/todos`, todo)
  }
}

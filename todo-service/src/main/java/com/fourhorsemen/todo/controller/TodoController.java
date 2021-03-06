package com.fourhorsemen.todo.controller;



import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fourhorsemen.todo.service.*;
import com.fourhorsemen.todo.model.*;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoController {

	@Autowired
	private TodoServiceProvider serviceProvider;
	
	@GetMapping("/user/{userName}/todos")
	public List<Todo> getAllTodo(@PathVariable String userName){
		return serviceProvider.findAllTodoList(userName);
	}
	
	@GetMapping("/user/{userName}/todos/{id}")
	public Todo getTodo(@PathVariable String userName, @PathVariable long id){
		return serviceProvider.findbyId(id);
	}
	
	@DeleteMapping("/user/{userName}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String userName, @PathVariable long id){
		Todo todo = serviceProvider.deleteById(id);
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
	}
	
	
	@PutMapping("/user/{userName}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String userName, @PathVariable long id, @RequestBody Todo todo){
		Todo todoUpdated = serviceProvider.save(todo);
		return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
	}
	
	@PostMapping("/user/{userName}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String userName, @RequestBody Todo todo) {
		 todo.setUserName(userName);
		 Todo createdTodo = serviceProvider.save(todo);
		 
		 URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		 return ResponseEntity.created(uri).build();
		 
	}
}

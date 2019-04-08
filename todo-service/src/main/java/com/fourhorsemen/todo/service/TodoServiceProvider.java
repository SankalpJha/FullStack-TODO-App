package com.fourhorsemen.todo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fourhorsemen.todo.model.Todo;
import com.fourhorsemen.todo.repository.TodoRepository;

@Service
public class TodoServiceProvider {
	
	
	@Autowired
	private TodoRepository todoRepo;
	
	public List<Todo> findAllTodoList(String userName){
		return todoRepo.findByUserName(userName);
		
	}
	
	public Todo deleteById(long id) {
		Todo todo = findbyId(id);
		if(todo==null) return null;
		
		todoRepo.deleteById(id);
		
		return todo;
	}

	public Todo findbyId(long id) {
		Optional<Todo> todo = todoRepo.findById(id);
		if(!todo.isPresent()) {
			return null;
		}
		return todo.get();
	}
	
	public Todo save(Todo todo) {
		
		if(todo.getId()==-1 || todo.getId()==0) {
			todoRepo.save(todo);
		}else {
			todoRepo.deleteById(todo.getId());
			todoRepo.save(todo);
		}
		return todo;
	}

}

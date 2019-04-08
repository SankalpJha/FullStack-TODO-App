package com.fourhorsemen.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.fourhorsemen.todo.model.Todo;


@Component
public interface TodoRepository extends JpaRepository<Todo, Long> {
	List<Todo >findByUserName(String userName);

}

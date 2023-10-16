package com.expectopatronum.tamil.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expectopatronum.tamil.model.User;

public interface UserRepository extends JpaRepository<User, String> {


  Optional<User> existsByName(String name);
	
	

}

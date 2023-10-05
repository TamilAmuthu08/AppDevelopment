package com.expectopatronum.tamil.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expectopatronum.tamil.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);

}

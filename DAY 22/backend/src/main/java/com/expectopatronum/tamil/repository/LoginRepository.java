package com.expectopatronum.tamil.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expectopatronum.tamil.model.Login;

public interface LoginRepository extends JpaRepository<Login, Long> {
	
	public Login findByEmail(String email);

}

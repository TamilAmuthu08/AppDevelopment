package com.expectopatronum.tamil.service;

import com.expectopatronum.tamil.exception.UserException;
import com.expectopatronum.tamil.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

}
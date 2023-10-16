package com.expectopatronum.tamil.service;

import com.expectopatronum.tamil.exception.LoginException;
import com.expectopatronum.tamil.model.Login;

public interface LoginService {
	
	public Login findUserById(Long userId) throws LoginException;
	
	public Login findUserProfileByJwt(String jwt) throws LoginException;

}
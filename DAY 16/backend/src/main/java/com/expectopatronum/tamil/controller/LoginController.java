package com.expectopatronum.tamil.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expectopatronum.tamil.exception.LoginException;
import com.expectopatronum.tamil.model.Login;
import com.expectopatronum.tamil.service.LoginService;

@RestController
@RequestMapping("/api/users")
public class LoginController {
	
	private LoginService loginService;
	
	public LoginController(LoginService loginService) {
		this.loginService=loginService;
	}
	
	@GetMapping("/profile")
	public ResponseEntity<Login> getUserProfileHandler(@RequestHeader("Authorization") String jwt) throws LoginException{

		System.out.println("/api/users/profile");
		Login login=loginService.findUserProfileByJwt(jwt);
		return new ResponseEntity<Login>(login,HttpStatus.ACCEPTED);
	}

}

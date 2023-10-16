package com.expectopatronum.tamil.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.expectopatronum.tamil.config.JwtTokenProvider;
import com.expectopatronum.tamil.exception.LoginException;
import com.expectopatronum.tamil.model.Login;
import com.expectopatronum.tamil.repository.LoginRepository;

@Service
public class LoginServiceImplementation implements LoginService {
	
	private LoginRepository loginRepository;
	private JwtTokenProvider jwtTokenProvider;
	
	public LoginServiceImplementation(LoginRepository loginRepository,JwtTokenProvider jwtTokenProvider) {
		
		this.loginRepository=loginRepository;
		this.jwtTokenProvider=jwtTokenProvider;
		
	}

	@Override
	public Login findUserById(Long userId) throws LoginException {
		Optional<Login> login=loginRepository.findById(userId);
		
		if(login.isPresent()){
			return login.get();
		}
		throw new LoginException("user not found with id "+userId);
	}

	@Override
	public Login findUserProfileByJwt(String jwt) throws LoginException {
		System.out.println("user service");
		String email=jwtTokenProvider.getEmailFromJwtToken(jwt);
		
		System.out.println("email"+email);
		
		Login login=loginRepository.findByEmail(email);
		
		
		
		if(login==null) {
			throw new LoginException("user not exist with email "+email);
		}
		System.out.println("email user"+login.getEmail());
		return login;
	}

}
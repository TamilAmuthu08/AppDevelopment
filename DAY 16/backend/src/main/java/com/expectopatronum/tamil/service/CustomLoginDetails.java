package com.expectopatronum.tamil.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.expectopatronum.tamil.model.Login;
import com.expectopatronum.tamil.repository.LoginRepository;

@Service
public class CustomLoginDetails implements UserDetailsService {
	
	private LoginRepository loginRepository;
	
	public CustomLoginDetails(LoginRepository loginRepository) {
		this.loginRepository=loginRepository;
		
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Login login = loginRepository.findByEmail(username);
		
		if(login == null) {
			throw new UsernameNotFoundException("user not found with email "+username);
		}
		
		List<GrantedAuthority> authorities = new ArrayList<>();
		
		return new org.springframework.security.core.userdetails.User(login.getEmail(),login.getPassword(),authorities);
	}

}

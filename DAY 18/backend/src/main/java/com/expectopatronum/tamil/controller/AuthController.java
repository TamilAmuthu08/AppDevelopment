package com.expectopatronum.tamil.controller;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expectopatronum.tamil.config.JwtTokenProvider;
import com.expectopatronum.tamil.exception.LoginException;
import com.expectopatronum.tamil.model.Login;
import com.expectopatronum.tamil.repository.LoginRepository;
import com.expectopatronum.tamil.dto.request.LoginRequest;
import com.expectopatronum.tamil.dto.response.AuthResponse;
import com.expectopatronum.tamil.service.CustomLoginDetails;

import jakarta.validation.Valid;

@RestController	
@RequestMapping("/api/auth")
public class AuthController {

	private LoginRepository loginRepository;
	private PasswordEncoder passwordEncoder;
	private JwtTokenProvider jwtTokenProvider;
	private CustomLoginDetails customLoginDetails;
	
	public AuthController(LoginRepository loginRepository,PasswordEncoder passwordEncoder,JwtTokenProvider jwtTokenProvider,CustomLoginDetails customLoginDetails) {
		this.loginRepository=loginRepository;
		this.passwordEncoder=passwordEncoder;
		this.jwtTokenProvider=jwtTokenProvider;
		this.customLoginDetails=customLoginDetails;
	}
	
	@PostMapping("/signup")
	public ResponseEntity<AuthResponse> createUserHandler(@Valid @RequestBody Login login) throws LoginException{
		
		  	String email = login.getEmail();
	        String password = login.getPassword();
	        String firstName=login.getFirstName();
	        String lastName=login.getLastName();
	        String mobile = login.getMobile();
	        
	        Login isEmailExist=loginRepository.findByEmail(email);

	        // Check if user with the given email already exists
	        if (isEmailExist!=null) {
	        // System.out.println("--------- exist "+isEmailExist).getEmail());
	        	
	            throw new LoginException("Email Is Already Used With Another Account");
	        }

	        // Create new user
			Login createdUser= new Login();
			createdUser.setEmail(email);
			createdUser.setFirstName(firstName);
			createdUser.setLastName(lastName);
	        createdUser.setPassword(passwordEncoder.encode(password));
	        createdUser.setMobile(mobile); 
	        createdUser.setCreatedAt(LocalDateTime.now());
	        
	        
	        Login savedUser= loginRepository.save(createdUser);
	        
	        //cartService.createCart(savedUser);

	        Authentication authentication = new UsernamePasswordAuthenticationToken(email, password);
	        SecurityContextHolder.getContext().setAuthentication(authentication);
	        
	        String token = jwtTokenProvider.generateToken(authentication);

	        AuthResponse authResponse= new AuthResponse(token,true);
			
	        return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.OK);
		
	}
	
	@PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword();
        
//        System.out.println(username +" ----- "+password);
        
        Authentication authentication = authenticate(username, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        
        String token = jwtTokenProvider.generateToken(authentication);
        AuthResponse authResponse= new AuthResponse();
		
		authResponse.setStatus(true);
		authResponse.setJwt(token);
		
        return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.OK);
    }
	
	private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customLoginDetails.loadUserByUsername(username);
        
        System.out.println("sign in userDetails - "+userDetails);
        
        if (userDetails == null) {
        	System.out.println("sign in userDetails - null " + userDetails);
            throw new BadCredentialsException("Invalid username or password");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
        	System.out.println("sign in userDetails - password not match " + userDetails);
            throw new BadCredentialsException("Invalid username or password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}

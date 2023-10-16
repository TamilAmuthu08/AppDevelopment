package com.expectopatronum.tamil.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expectopatronum.tamil.dto.request.UserRequestDto;
import com.expectopatronum.tamil.dto.response.UserResponseDto;
import com.expectopatronum.tamil.service.UserService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
	
	private  final UserService userService;
	
	@PostMapping("/save")
	public ResponseEntity<String> saveUser(@RequestBody UserRequestDto userRequest){
		boolean isDataSaved=userService.saveUser(userRequest);
		return isDataSaved ? ResponseEntity.status(200).body("Product added successfully"):
			ResponseEntity.status(403).body("Something went wrong");
	}

	@GetMapping("/all")
	public ResponseEntity<List<UserResponseDto>> getAllUser() {
	 		List<UserResponseDto> userList=userService.getAllUser();
		 	return userList.size()>0? ResponseEntity.status(200).body(userList):
		 		ResponseEntity.status(404).body(userList);
		}
		 @PutMapping("/update/{userId}")
    public ResponseEntity<String> updateUser(@PathVariable String userId, @RequestBody UserRequestDto updatedUserRequest) {
        boolean isUserUpdated = userService.updateUser(userId, updatedUserRequest);
        return isUserUpdated
                ? ResponseEntity.status(200).body("Product updated successfully")
                : ResponseEntity.status(404).body("Product not found or unable to update");
    }

    // New HTTP DELETE endpoint
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable String userId) {
        boolean isUserDeleted = userService.deleteUser(userId);
        return isUserDeleted
                ? ResponseEntity.status(200).body("Product deleted successfully")
                : ResponseEntity.status(404).body("Product not found or unable to delete");
    }

	

}
package com.expectopatronum.tamil.service;




import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.expectopatronum.tamil.dto.request.UserRequestDto;
import com.expectopatronum.tamil.dto.response.UserResponseDto;
import com.expectopatronum.tamil.model.User;
import com.expectopatronum.tamil.repository.UserRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;



@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImp implements UserService{
	private  final UserRepository userRepository;


	@Override
	public boolean saveUser(UserRequestDto userRequest) {
		Optional<User> isUserOptional=userRepository.existsByName(userRequest.getName());
		if(isUserOptional.isPresent()){
			var user=User.builder()
					.name(userRequest.getName())
					.price(userRequest.getPrice())
					.feature(userRequest.getFeature())
					.build();
			userRepository.save(user);
			return true;
		}
		else{
			return false;
		}
	}
	@Override
	public List<UserResponseDto> getAllUser() {
		List<User> userList = userRepository.findAll();
		List<UserResponseDto> userResponseList = new ArrayList<>();
	
		for (User user : userList) {
			UserResponseDto userResponse = new UserResponseDto(); 
			userResponse.setId(user.getId());
			userResponse.setName(user.getName());
			userResponse.setPrice(user.getPrice());
			userResponse.setFeature(user.getFeature());
	
			userResponseList.add(userResponse);
		}
	
		return userResponseList;
	}
	@Override
public boolean updateUser(String userId, UserRequestDto updatedUserRequest) {
    // Find the user by userId
    Optional<User> userOptional = userRepository.findById(userId);

    if (userOptional.isPresent()) {
        User existingUser = userOptional.get();

        // Update the user's information
        existingUser.setName(updatedUserRequest.getName());
        existingUser.setPrice(updatedUserRequest.getPrice());
        existingUser.setFeature(updatedUserRequest.getFeature());

        // Save the updated user to the database
        userRepository.save(existingUser);

        return true; // User updated successfully
    } else {
        return false; // User not found
    }
}
	@Override
	public boolean deleteUser(String userId) {
		Optional<User> userOptional = userRepository.findById(userId);

    if (userOptional.isPresent()) {
        userRepository.deleteById(userId);;

        return true; // User updated successfully
    } else {
        return false; // User not found
    }

	}
	
	
	
	
		
}
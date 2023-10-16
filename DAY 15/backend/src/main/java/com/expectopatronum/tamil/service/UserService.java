package com.expectopatronum.tamil.service;

import java.util.List;

import com.expectopatronum.tamil.dto.request.UserRequestDto;
import com.expectopatronum.tamil.dto.response.UserResponseDto;

public interface UserService {
	List<UserResponseDto> getAllUser();

	boolean saveUser(UserRequestDto userRequest);

	boolean updateUser(String userId, UserRequestDto updatedUserRequest);

  boolean deleteUser(String userId);

}

package com.expectopatronum.tamil.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {
	private String id;
	private String name;
	private int price;
	private String feature;
}

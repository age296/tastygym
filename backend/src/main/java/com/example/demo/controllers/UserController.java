package com.example.demo.controllers;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.example.demo.dto.Exercises;
import com.example.demo.dto.User;
import com.example.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import net.minidev.json.JSONObject;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/auth")
public class UserController {

	@Autowired
	UserRepository userRepository;

	@PostMapping("user")
	@CrossOrigin(origins = "*")
	public JSONObject login(@RequestParam("user") String username, @RequestParam("password") String pwd) {
		JSONObject entity = new JSONObject();
		User user = userRepository.findUserByUserName(username);
		if(user  == null) {
			entity.put("token", "");
			return entity;
		}
		String token = getJWTToken(username);
		user.setToken(token);
		userRepository.save(user);
		
		entity.put("token", token);
		return entity;
	}

	@PostMapping("exercises")
	public List<Exercises> exercies(@RequestHeader("Authorization") String token){
		return userRepository.findUserByToken(token).getExercises();
	}

	@PostMapping("register")
	@CrossOrigin(origins = "*")
	public ResponseEntity<?> register(@RequestParam("user") String username, @RequestParam("password") String pwd) {

	
        
        JSONObject entity = new JSONObject();
        
         
		// add check for username exists in a DB
		if (userRepository.existsByUserName(username)) {
			entity.put("status", false);
			return new ResponseEntity<>(entity, HttpStatus.BAD_REQUEST);
		}

		// create user object
		User user = new User(username, pwd, getJWTToken(username));
		userRepository.save(user);
		entity.put("status", true);
		return new ResponseEntity<>(entity, HttpStatus.OK);

	}

	private String getJWTToken(String username) {
		String secretKey = "mySecretKey";
		List<GrantedAuthority> grantedAuthorities = AuthorityUtils
				.commaSeparatedStringToAuthorityList("ROLE_USER");

		String token = Jwts
				.builder()
				.setId("softtekJWT")
				.setSubject(username)
				.claim("authorities",
						grantedAuthorities.stream()
								.map(GrantedAuthority::getAuthority)
								.collect(Collectors.toList()))
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 600000))
				.signWith(SignatureAlgorithm.HS512,
						secretKey.getBytes())
				.compact();

		return "Bearer " + token;
	}
}

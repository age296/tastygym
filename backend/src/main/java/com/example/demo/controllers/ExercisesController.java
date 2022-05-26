package com.example.demo.controllers;

import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/exercises")
public class ExercisesController {
    @Autowired
	UserRepository userRepository;
   
    @PostMapping("add")
	public void add(@RequestHeader("Authorization") String token, @RequestParam("exerciseID") Integer id ){
        User user =  userRepository.findUserByToken(token);
        if (user == null) return;

        List<Exercises> exercises = user.getExercises();
        if(exercises == null) exercises = new ArrayList<Exercises>();

        Integer position = exercises.indexOf(new Exercises(id));
        if(position == -1) {
            exercises.add(new Exercises(true, id));

        }else{
            exercises.get(position).setLike(exercises.get(position).isLike() ? false : true);
        }
        userRepository.save(user);
	}

    @PostMapping("exercises")
	public List<Exercises> exercies(@RequestHeader("Authorization") String token){
		return userRepository.findUserByToken(token).getExercises();
	}
}

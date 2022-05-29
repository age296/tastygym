package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.dto.Exercises;
import com.example.demo.dto.User;
import com.example.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;




@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/exercises")
public class ExercisesController {
    
    @Autowired
	UserRepository userRepository;
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("add")
	public void add(@RequestHeader("Authorization") String token, @RequestParam("exerciseID") int id ){
        User user =  userRepository.findUserByToken(token);
        if (user == null) return;

        List<Exercises> exercises = user.getExercises();
        if(exercises == null) exercises = new ArrayList<Exercises>();

        
        System.out.println(exercises.contains(new Exercises(id)));
        System.out.println(exercises);
        if(!exercises.contains(new Exercises(id))) 
            exercises.add(new Exercises(id));

        userRepository.save(user);
	}
    @PostMapping("remove")
    @CrossOrigin(origins = "http://localhost:4200")
	public void remove(@RequestHeader("Authorization") String token, @RequestParam("exerciseID") int id ){
        User user =  userRepository.findUserByToken(token);
        if (user == null) return;

        List<Exercises> exercises = user.getExercises();
        if(exercises == null) return;

        int position = exercises.indexOf(new Exercises(id));
        if(position == -1) return;
        exercises.remove(position);
        
        userRepository.save(user);
	}

    @GetMapping("exercises")
    @CrossOrigin(origins = "http://localhost:4200")
	public List<Exercises> exercies(@RequestHeader("Authorization") String token){
		return userRepository.findUserByToken(token).getExercises();
	}
}

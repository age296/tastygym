package com.example.demo.repository;

import java.util.List;

import com.example.demo.dto.Exercises;
import com.example.demo.dto.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UserRepository extends CrudRepository<User, Long> { 
    boolean existsByUserName(String userName);
    User findUserByUserName(String userName);
    User findUserByToken(String token);
}
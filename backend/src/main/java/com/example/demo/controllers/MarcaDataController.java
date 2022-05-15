package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.MarcaDataDto;
import com.example.demo.services.MarcaDataService;


@RestController 
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/marca")   
public class MarcaDataController {

    @Autowired
    private MarcaDataService marcaDataService;  

    @GetMapping("data") 
    public ResponseEntity<List<MarcaDataDto>> getMarcaData() {
        return new ResponseEntity<List<MarcaDataDto>>(marcaDataService.retrieveMarcaData(),
                HttpStatus.OK); 
    }
}

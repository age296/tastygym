package com.example.demo.dto;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "exercises")
public class Exercises implements Comparable<Exercises> {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    int idExercise;

    public int getIdExercise() {
        return idExercise;
    }

    public void setIdExercise(int idExercise) {
        this.idExercise = idExercise;
    }

    public Exercises(int idExercise) {
        this.idExercise = idExercise;
    }
    public Exercises(){

    }

    @Override
    public int compareTo(Exercises o) {
        return ((Integer)o.idExercise).compareTo(this.idExercise);
    }
    @Override
    public boolean equals(Object o){
        return ((Integer)this.idExercise).equals(((Exercises)o).idExercise);
    }
    public boolean equals(Exercises o){
        return this.compareTo(o) == 0;
    }
    
    
}

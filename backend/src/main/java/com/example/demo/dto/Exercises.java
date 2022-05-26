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

    @NotBlank(message = "Like is mandatory")
    boolean like;

    @NotBlank(message = "ID is mandatory")
    Integer idExercise;

    public Integer getIdExercise() {
        return idExercise;
    }

    public void setIdExercise(Integer idExercise) {
        this.idExercise = idExercise;
    }

    public Exercises(Integer idExercise) {
        this.idExercise = idExercise;
    }
    public Exercises(){

    }

    public Exercises(@NotBlank(message = "Like is mandatory") boolean like) {
        this.like = like;
    }

    public Exercises(long id, @NotBlank(message = "Like is mandatory") boolean like,
            @NotBlank(message = "ID is mandatory") int idExercise) {
        this.id = id;
        this.like = like;
        this.idExercise = idExercise;
    }



    public boolean isLike() {
        return like;
    }

    public void setLike(boolean like) {
        this.like = like;
    }

    @Override
    public int compareTo(Exercises o) {
        return o.idExercise.compareTo(this.idExercise);
    }

    public Exercises(@NotBlank(message = "Like is mandatory") boolean like,
            @NotBlank(message = "ID is mandatory") Integer idExercise) {
        this.like = like;
        this.idExercise = idExercise;
    }
    
    
}

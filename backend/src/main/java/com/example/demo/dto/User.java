package com.example.demo.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "xdddddd")
public class User {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	@NotBlank(message = "User is mandatory")
	private String userName;
	@NotBlank(message = "Pwd is mandatory")
	private String pwd;
	@NotBlank(message = "Token is mandatory")
	private String token;

	public  User(){
    }
    public User(String userName, String pwd, String token) {
        this.userName = userName;
        this.pwd = pwd;
		this.token = token;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}

    

}

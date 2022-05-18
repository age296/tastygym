import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
    private route : Router) { }

  
  url = "http://localhost:8080/auth/register"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*'
    })
  };

 
  register(username: string, pwd: string){
    let body = `user=${username}&password=${pwd}`;
    return this.http.post<any>(this.url, body, this.httpOptions);
  }


}

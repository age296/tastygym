import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  url = "http://localhost:8080/exercises"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.login.token ? this.login.token : ""
    })
  };

  constructor(private http: HttpClient,
    private login: LoginServiceService
  ) { }

  addExercise(idExercise : number) {
    let body = `exerciseID=${idExercise}`;
    console.log(idExercise)
    console.log(this.httpOptions)
    return this.http.post<any>(this.url + "/add", body, this.httpOptions);
  }
  removeExercise(idExercise: number) {
    let body = `exerciseID=${idExercise}`;
    return this.http.post<any>(this.url + "/remove", body,  this.httpOptions);
  }
  getExercises() {
    return this.http.get<any>(this.url + "/exercises", this.httpOptions);
  }
}

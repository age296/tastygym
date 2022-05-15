import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService implements CanActivate {
  constructor(private http: HttpClient) { }
  url = "http://localhost:8080/auth/user"
  token: string | undefined;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*'
    })
  };

  canActivate() {
    //this.router.navigate(['test']);
    return this.token ? true : false;
  }

  login(username: string, pwd: string){
    let body = `user=${username}&password=${pwd}`;


    this.http.post<any>(this.url, body, this.httpOptions)
      .subscribe(data  => this.token = data["token"])
  }

}

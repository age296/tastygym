import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LoginServiceService implements CanLoad, CanActivate {
  constructor(
    private http: HttpClient,
    private route : Router) { }
  
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return false;
  }
  
  url = "http://localhost:8080/auth/user"
  token: string | undefined;
  username: string = "";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*'
    })
  };

 

  canLoad(_route: Route): boolean {
    return this.token == undefined && this.token != "" ? false : true;
  }
  canActivate() {
    return this.token == undefined && this.token != "" ? false : true;
  }

  login(username: string, pwd: string){
    let body = `user=${username}&password=${pwd}`;
    return this.http.post<any>(this.url, body, this.httpOptions);
  }

}

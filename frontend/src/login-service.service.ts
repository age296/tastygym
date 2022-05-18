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
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*'
    })
  };

 

  canLoad(_route: Route): boolean {
    
    //determine whether you want to load the module
    //return true or false
    console.log("xdd")
    return true; 
  }
  canActivate() {
    //this.router.navigate(['test']);
    //this.route.navigate(['error']);
    return this.token == undefined ? false : true;
  }

  login(username: string, pwd: string){
    let body = `user=${username}&password=${pwd}`;
    return this.http.post<any>(this.url, body, this.httpOptions);
  }

}

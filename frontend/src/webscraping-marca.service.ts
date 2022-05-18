import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from './app/login/login.component';
import { LoginServiceService } from './login-service.service';
import { Marca } from './marca';

@Injectable({
  providedIn: 'root'
})
export class WebscrapingMarcaService {

  constructor(private http: HttpClient,
    private login: LoginServiceService) { }
  apiWebScrappingEndPoint = "http://localhost:8080/marca/data"
  language = 2;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.login.token ? this.login.token : "",

    })
  };

  getApiResults(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.apiWebScrappingEndPoint, this.httpOptions);
  }
  
}

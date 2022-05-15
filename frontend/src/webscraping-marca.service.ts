import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from './marca';

@Injectable({
  providedIn: 'root'
})
export class WebscrapingMarcaService {

  constructor(private http: HttpClient) { }
  apiWebScrappingEndPoint = "http://localhost:8080/marca/data"
  language = 2;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*'
    })
  };

  getApiResults(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.apiWebScrappingEndPoint, this.httpOptions);
  }
  
}

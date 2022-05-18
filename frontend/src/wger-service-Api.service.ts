import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { ApiExercises, ApiExercisesCategory, ApiExercisesDetails, ExerciseCategory } from './exercise';

@Injectable({
  providedIn: 'root'
})
export class WgerServiceApiService {

  constructor(private http: HttpClient
    ) { }
  wgerurl = "https://wger.de/api/v2/"
  language = 2;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*',
    })
  };

  searchExercise(muscles: ExerciseCategory[] = [], limit: number = 20): Observable<ApiExercises> {
    let endpoint = this.wgerurl + "exercise/" + `?limit=${limit}&language=2`;
    if(muscles.length!=0){
      endpoint+="&muscles=";
      for(let i = 0; i<muscles.length; i++){
        endpoint+= muscles[i].id;
        if(i<muscles.length-1){
          endpoint+=","
        }
      }
    }
    return this.http.get<ApiExercises>(endpoint, this.httpOptions)
  }

  moreInfoExercise(id: number): Observable<ApiExercisesDetails> {
    let endpoint = this.wgerurl + "/exerciseinfo/" + id;
    return this.http.get<ApiExercisesDetails>(endpoint, this.httpOptions)
  }

  exercisesCategory(): Observable<ApiExercisesCategory> {
    let endpoint = this.wgerurl + "/exercisecategory/";
    return this.http.get<ApiExercisesCategory>(endpoint, this.httpOptions)
  }
}
